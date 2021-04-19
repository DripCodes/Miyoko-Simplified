exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing!`);

    if (!client.player.getQueue(message).paused) return message.channel.send(`The music is already playing !`);

    client.player.resume(message);
    client.player.pause(message);
    client.player.resume(message);

     message.react('▶️')
}
exports.help = {
  name: "resume",
  description: "Continues the queue",
  usage: "!resume",
  example: "!resume"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}