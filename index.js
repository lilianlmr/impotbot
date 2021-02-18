const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`ready!`);
});

client.on('message', msg => {
  if (msg.content === ':impot1') {
    msg.reply('a payer son impôt du jours de 10k :white_check_mark:'); 
  }
});

client.on('message', msg => {
  if (msg.content === ':impot2') {
    msg.reply('a payer son impôt du jours de 20k :white_check_mark:'); 
  }
});

client.on('message', msg => {
  if (msg.content === ':impot3') {
    msg.reply('a payer son impôt du jours de 30k :white_check_mark:'); 
  }
});

client.on('message', msg => {
  if (msg.content === ':impot4') {
    msg.reply('a payer son impôt du jours de 40k :white_check_mark:'); 
  }
});

client.on('message', msg => {
  if (msg.content === ':impot5') {
    msg.reply('a payer son impôt du jours de 50k :white_check_mark:'); 
  }
});

client.on('message', msg => {
  if (msg.content === ':impot6') {
    msg.reply('a payer son impôt du jours de 60k :white_check_mark:'); 
  }
});

client.on('message', msg => {
  if (msg.content === ':impot7') {
    msg.reply('a payer son impôt du jours de 70k :white_check_mark:'); 
  }
});

client.on('message', message => {
  if (message.content.includes(':impot1') || message.content.includes(':impot2') || message.content.includes(':impot3') || message.content.includes(':impot4') || message.content.includes(':impot5') || message.content.includes(':impot6') || message.content.includes(':impot7')) {
    message.delete()
  }
});

client.login(process.env.TOKEN);