const Discord = require("discord.js");

exports.run = async (client, message, args) => {

        let member = message.mentions.users.first() || message.author

     let avatar = member.displayAvatarURL({dynamic: true, size: 1024})



    const embed = new Discord.MessageEmbed()
    .setAuthor(member.username)
    .setDescription('Avatar')
    .setImage(avatar)
    .setColor("RANDOM")

    message.channel.send(embed);
}
exports.help = {
    name: "avatar",
    description: "Displays a user avatar",
    usage: "av [user]",
    example: "!help av"
  }
  
  exports.conf = {
    aliases: ["av"],
    cooldown: 1
  }
