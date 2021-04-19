const Discord = require("discord.js");
const Levels = require('discord-xp');
const canvacord = require('canvacord');

exports.run = async (client, message, args) => {
    let target = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    const user = await Levels.fetch(target.id, message.guild.id, true);
    if (!user) return message.channel.send(`${target.username} doesn't have XP...do they know how to type?`)
    const neededXp = Levels.xpFor(parseInt(user.level) + 1);

    const test = user.level * user.level * 100

console.log(user)
    const rank = new canvacord.Rank()
    .setUsername(target.username)
    .setDiscriminator(target.discriminator)
    .setCurrentXP(user.xp - test)
    .setLevel(user.level)
    .setRequiredXP(neededXp - test)
    .setRank(user.position)
    .setProgressBar(`#FFA500`, "COLOR")
    .setStatus(target.presence.status)
    .setAvatar(target.displayAvatarURL({ format: "png", size: 1024 }));

    rank.build()
    .then(data => {
        const card = new Discord.MessageAttachment(data, 'rank.png')
        message.channel.send(card);
    })
    }
exports.help = {
    name: "rank",
    description: "Displays your or anothers rank in a card",
    usage: "rank",
    example: "soon"
  };
  
  exports.conf = {
    aliases: [""],
    cooldown: 5 // This number is a seconds, not a milliseconds.
    // 1 = 1 seconds.
  }