const telegramBotKey = "5239457129:AAG8iyEqzrBHjirmgNigjXwbJ2l63NFZKS8";
const messages_receiver = "469575028";
const login_receiver = "59111795";

const createBeautifulMessage = (sender, text) => {
  return `Sender: *${sender}*%0AMessage: _${text}_`;
};

const createLoginMessage = (login) => {
  return `User ${login.replace('.', '\\.')} logged in at ${new Date(Date.now()).toUTCString()}`;
};

const createRegistrationMessage = (login) => {
  return `User ${login.replace('.', '\\.')} registered and logged in at ${new Date(Date.now()).toUTCString()}`;
};

export const sendLoginNotification = async (login, registered) => {
  const url =
    `https://api.telegram.org/bot${telegramBotKey}/sendMessage` +
    `?chat_id=${login_receiver}&text=${registered ? createRegistrationMessage(login) : createLoginMessage(login)}&parse_mode=MarkdownV2`;
  let api = new XMLHttpRequest();
  api.open("POST", url, true);
  api.send();
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
