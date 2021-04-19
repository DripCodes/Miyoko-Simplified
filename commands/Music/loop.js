const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(`:x: - You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`:x: - You are not in the same voice channel as me!`);

    if (!client.player.getQueue(message)) return message.channel.send(`:x: - No music currently playing !`);

    if (client.player.getQueue(message).tracks.length <= 1) {
        client.player.setRepeatMode(message, true);
        return message.channel.send({embed: {
            color: 3447003,
            description: "Set loop to **song**!"
          }});        
    }

    let time = args[0]
    if(!time){
        const embed = new MessageEmbed()
        .setTitle('Missing Arguments')
        .setDescription('Please specify a `arguments` for loop \n**Arguments**\n`queue`\n`song`\n`none`')   
        .setColor('White')
        return message.channel.send(embed)
    }

    if (time === 'queue') { 
            client.player.setRepeatMode(message, false);
            client.player.setLoopMode(message, true);
            return message.channel.send({embed: {
                color: 3447003,
                description: "Set loop to **queue**!"
              }});
        };
     if (time === 'song') {
            client.player.setRepeatMode(message, true);
            client.player.setLoopMode(message, false);
            return message.channel.send({embed: {
                color: 3447003,
                description: "Set loop to **song**!"
              }});
        };
    if (time === 'none'){
        client.player.setRepeatMode(message, false);  
        client.player.setLoopMode(message, false);
        return message.channel.send({embed: {
            color: 3447003,
            description: "Set loop to **none**!"
          }});

    }
}   

exports.help = {
  name: "loop",
  description: "Loops the set argument",
  usage: "!loop <song/queue/none>",
  example: "!loop song\n !loop queue\n !loop none"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}