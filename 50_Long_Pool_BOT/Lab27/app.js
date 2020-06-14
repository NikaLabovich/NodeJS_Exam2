const TeleBot = require('node-telegram-bot-api');
const TOKEN = '1104070251:AAHeolViahiRMH60UsSinX71BdW-ce2X8CA';

const bot = new TeleBot(TOKEN, {
    polling: true
});
// http://t.me/NodejsFitBot

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg);
    if(msg.text){
        bot.sendMessage(chatId, `echo: ${msg.text}`);
    }
    else{
        bot.sendMessage(chatId, `Send a text message`);
    }
});
