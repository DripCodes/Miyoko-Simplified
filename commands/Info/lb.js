const { MessageEmbed } = require("discord.js");
const Levels = require('discord-xp')
exports.run = async (client, message, args) => {
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.
    let target = message.author;
    const user = await Levels.fetch(target.id, message.guild.id, true);
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

     const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.


     const lbembed = new MessageEmbed()
     .setTitle(`${message.guild.name} XP Leaderboard`)
     .setThumbnail(message.guild.iconURL({size: 4096, dynamic: true}))
     .setColor('WHITE')

     const lb = leaderboard.map(e => {
       const test = e.level * e.level * 100
       const neededXp = Levels.xpFor(parseInt(e.level) + 1);
     lbembed.addField(`${e.position}. ${e.username}#${e.discriminator}`, `**Level:** ${e.level}\n**XP:** ${e.xp - test}/${neededXp - test}\n**Total XP:** ${e.xp.toLocaleString()}\n‎‎　`)// We map the outputs.
     });

     lbembed.setFooter(`Your rank: #${user.position}`)
    message.channel.send(lbembed);
    }
exports.help = {
    name: "leaderboard",
    description: "View the top 10 users on the server (level)",
    usage: "",
    example: ""
  };
  
  exports.conf = {
    aliases: ["lb"],
    cooldown: 5 // This number is a seconds, not a milliseconds.
    // 1 = 1 seconds.
  }
