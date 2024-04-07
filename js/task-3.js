function checkForSpam(message) {
    const messageLow = message.toLowerCase();
    if (messageLow.includes("spam") || messageLow.includes("sale")) {
        return true;
    } else {
        return false;
    }
}