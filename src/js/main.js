import React from 'react';
import Mark from 'mark.js';
// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {

    // If message is injectApp
    if(request.highlightHazardousWords) {

        highlightHazardousWords();
        response({
            startedExtension: true,
        });
    }
});

function highlightHazardousWords() {

    function getHazardousWordsFromConfig() {
        // TODO: Load from a dynamic location
        return ['alcohol', 'hazard']
    }

    let context = document.querySelector("body");
    let instance = new Mark(context);

    //mark.js to mark the words
    instance.mark(getHazardousWordsFromConfig());
}