window.onload = () => {
    const $highlightHazardousWordsButton = document.querySelector('.highlight-hazardous-words');

    $highlightHazardousWordsButton.onclick = () => {
        // Get active tab
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, (tabs) => {
            // Send message to script file
            chrome.tabs.sendMessage(
            tabs[0].id,
            { highlightHazardousWords: true },
            response => window.close()
    );
    });
    };
};
