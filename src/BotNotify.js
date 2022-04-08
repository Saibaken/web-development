const telegramBotKey = "5239457129:AAG8iyEqzrBHjirmgNigjXwbJ2l63NFZKS8";
const messages_receiver = "469575028";

const createBeautifulMessage = (sender, text) => {
  return `Sender: *${sender}*%0AMessage: _${text}_`;
};

export const sendMessageNotification = async (sender, text) => {
  const url =
    `https://api.telegram.org/bot${telegramBotKey}/sendMessage` +
    `?chat_id=${messages_receiver}&text=${createBeautifulMessage(
      sender,
      text
    )}&parse_mode=MarkdownV2`;
  let api = new XMLHttpRequest();
  api.open("POST", url, true);
  api.send();
};
