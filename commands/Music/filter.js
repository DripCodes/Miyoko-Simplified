const { MessageEmbed } = require("discord.js");


exports.run = async (client, message, args) => {

if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);

if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing !`);

if (!args[0]) return message.channel.send(`Please specify a valid filter to enable or disable !`);

let filterz = ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding',];

const filterToUpdate = filterz.find((x) => x.toLowerCase() === args[0].toLowerCase());

if (!filterToUpdate){
    const embed = new MessageEmbed()
    .setTitle(`Invalid Arguments`)
    .setDescription('Please specify a `argument` for filter \n**Arguments**\n`8D`\n`gate`\n`haas`\n`phaser`\n`treble`\n`tremolo`\n`vibrato`\n`reverse`\n`karaoke`\n`flanger`\n`mcompand`\n`pulsator`\n`subboost`\n`bassboost`\n`vaporwave`\n`nightcore`\n`normalizer`\n`surrounding`')
    return message.channel.send(embed)
} 

const filtersUpdated = {};

filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

client.player.setFilters(message, filtersUpdated);

if (filtersUpdated[filterToUpdate]) message.channel.send({
    embed: {
        color: 'BLUE',
        footer: { text: 'Miyoko Music' },
        description: `Applying Filter`,
    },
});
else message.channel.send({
    embed: {
        color: 'BLUE',
        footer: { text: 'Miyoko Music' },
        description: `Disabling Filter`,
    },
});

}

exports.help = {
    name: "filter",
    description: "Loops the set argument",
    usage: "!loop <song/queue/none>",
    example: "!loop song\n !loop queue\n !loop none"
  };
  
  exports.conf = {
    aliases: [],
    cooldown: 5
  }