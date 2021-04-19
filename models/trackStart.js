module.exports = (client, message, queue, track) => {
    const { MessageEmbed } = require("discord.js")
    const embed = new MessageEmbed()
    .setTitle('Now Playing')
    .setDescription(`:musical_note: - [${track.title}](${track.url})[${track.requestedBy}]`)
    message.channel.send(embed);

};