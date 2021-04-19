exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`:x: - You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`:x: - No music currently playing !`);

    if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`:X: - There is only one song, use stop or dc instead`);

    client.player.clearQueue(message);

    message.channel.send(` Cleared queue`);
}
exports.help = {
  name: "queue clear",
  description: "Clear the current music queue",
  usage: "!qc",
  example: "!qc"
};

exports.conf = {
  aliases: ["qc"],
  cooldown: 5
}