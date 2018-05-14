const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });

const Music = require('discord.js-musicbot-addon');
const music = new Music(client, {
    prefix: ".", 
    youtubeKey: 'AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4',
  
  });
client.login("NDM4OTM1MzA0NTY5ODgwNTgx.Ddovaw.BvyhsStFTdjHN5pQnK1yur8uOQ4");// توكن بوتك
