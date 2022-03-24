const telegramBotKey = "5239457129:AAG8iyEqzrBHjirmgNigjXwbJ2l63NFZKS8";
const chat_id = "469575028";

const createBeautifulMessage = (sender, text) => {
    return `Sender: *${sender}*%0AMessage: _${text}_`;
}

export const sendNotification = async (sender, text) => {
    const url = `https://api.telegram.org/bot${telegramBotKey}/sendMessage`
        + `?chat_id=${chat_id}&text=${createBeautifulMessage(sender, text)}&parse_mode=MarkdownV2`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
}
