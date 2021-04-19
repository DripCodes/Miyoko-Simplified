const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`:x: - You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`:x: - You are not in the same voice channel as me!`);

    if (!args[0]) return message.channel.send(`:x: - Please indicate the title of a song !`);

    client.player.play(message, args.join(" "));    

}

exports.help = {
  name: "search",
  description: "search a song name on YouTube",
  usage: "!search <song>",
  example: "!search The Duck Song"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}
