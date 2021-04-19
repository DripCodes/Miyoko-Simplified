  
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const m = await message.channel.send("Pinging...")
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(" :white_sun_rain_cloud: PINGING... :white_sun_rain_cloud:")
    .setDescription(`
  ** 🏓 PING:** ${m.createdTimestamp - message.createdTimestamp}ms\n
  ** 🏓 API LATENCY:** ${Math.round(client.ws.ping)}ms`)
    m.edit(embed)
}

exports.help = {
  name: "ping",
  description: "Calculates ping and API latency",
  usage: "!ping",
  example: "!ping"
};

exports.conf = {
  aliases: ["beep"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
