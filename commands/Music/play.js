const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel.`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel as Miyoko!`);

    if (!args[0]) {
      const embed = new MessageEmbed()
      .setTitle('Incorrect Usage')
      .addField('Play', 'Play a song via link or name (spotify, youtube, soundloud etc)')
      .addField('Usage', "!Play <song or link>")
      .addField('Examples', '!play Lady Gaga\n!play https://www.youtube.com/watch?v=dQw4w9WgXcQ\n!play https://open.spotify.com/track/2bGEPdcL80FFHQ3VxcYBJQ?si=aJwv3V8UQfmdRSsrlgjPtA')
      return message.channel.send(embed);
    }

    client.player.play(message, args.join(" "), { firstResult: true });
}

exports.help = {
  name: "play",
  description: "Play a song via link or name (spotify, youtube, soundloud etc)",
  usage: "!play <song or link>",
  example: "!play Lady Gaga\n!play https://www.youtube.com/watch?v=dQw4w9WgXcQ\n!play https://open.spotify.com/track/2bGEPdcL80FFHQ3VxcYBJQ?si=aJwv3V8UQfmdRSsrlgjPtA"
};

exports.conf = {
  aliases: ["p"],
  cooldown: 5
}
