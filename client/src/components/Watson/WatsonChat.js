import React, { useEffect } from 'react';

const WatsonChat = () => {
    useEffect(() => {
        window.watsonAssistantChatOptions = {
            integrationID: "5a7e7285-94ea-450d-b78f-678dc7c73825",
            region: "jp-tok",
            serviceInstanceID: "a43f7dc4-4e95-4bc5-9e42-0d5924b21929",
            onLoad: async (instance) => { await instance.render(); }
        };

        setTimeout(() => {
            const script = document.createElement('script');
            script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
                (window.watsonAssistantChatOptions.clientVersion || 'latest') +
                "/WatsonAssistantChatEntry.js";
            document.head.appendChild(script);
        }, 0);
    }, []);

    return null;
};

export default WatsonChat;