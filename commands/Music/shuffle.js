const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing !`);

    const success = client.player.shuffle(message);

    if (success) message.react('🔀');

}

exports.help = {
  name: "shuffle",
  description: "search a song name on YouTube",
  usage: "!search <song>",
  example: "!search The Duck Song"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}
