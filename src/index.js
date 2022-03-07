wp.blocks.registerBlockType("ourplugin/text-lottie", {
    title: "Text + Lottie",
    icon: "text",
    category: "common",
    attributes: {
        headline: {type: "string"},
        content: {type: "string"},
        url: {type: "string"},
        left: {type: "bool"},
        right: {type: "bool"}
    },
    edit: function(props) {
        function updateHeadline(event) {
            props.setAttributes({headline: event.target.value})
        }

        function updateContent(event) {
            props.setAttributes({content: event.target.value})
        }

        function updateURL(event) {
            props.setAttributes({url: event.target.value})
        }

        function updateLeft(event) {
            props.setAttributes({left: event.target.value})
        }

        function updateRight(event) {
            props.setAttributes({right: event.target.value})
        }

        return (
            <div>
                <h3>Text + Lottie Block</h3>
                {/* Überschrift */}
                <h6>Überschrift</h6>
                <input type="text" placeholder="Headline" value={props.attributes.headline} onChange={updateHeadline}/>
                {/* Content */}
                <h6>Text</h6>
                <textarea placeholder="Content" rows="10" cols="100" value={props.attributes.content} onChange={updateContent}></textarea>
                {/* URL Lottie */}
                <h6>LottieFile URL</h6>
                <input type="url" placeholder="Hier Lottie URL platzieren" size="50" value={props.attributes.url} onChange={updateURL}/>
                <a href="https://lottiefiles.com/" target="_blank">
                    <button class="components-button editor-post-publish-panel__toggle editor-post-publish-button__button is-primary">lottiefiles.com durchsuchen</button>
                </a>
                {/* Lottie links oder rechts */}
                <h6>Wollen Sie das Lottie links oder rechts haben?</h6>
                <div class="radio">
                    <input id="radio-1" name="radio" type="radio" onChange={updateRight} value={props.attributes.right} checked />
                    <label for="radio-1" class="radio-label">Right</label>
                </div>

                <div class="radio">
                    <input id="radio-2" name="radio" type="radio" onChange={updateLeft} value={props.attributes.left} />
                    <label  for="radio-2" class="radio-label">Left</label>
                </div>
            </div>
        )
    },
    save: function(props) {
        return null
    }
})
