const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} uptime`)
    .setDescription(`I have been online for ${uptime}`)
    .setColor("WHITE")

    message.channel.send(embed);
}
exports.help = {
    name: "uptime",
    description: "Displays the client uptime",
    usage: "uptime",
    example: "uptime"
  }
  
  exports.conf = {
    aliases: ["up"],
    cooldown: 1
  }
