const Discord = require("discord.js");

module.exports = (client, message, queue, track) => {
    const dfd = new Discord.MessageEmbed()
    .setTitle('Queue')
    .setDescription(`Added [${track.title}](${track.url}) to the queue`)
    message.channel.send(dfd);
};