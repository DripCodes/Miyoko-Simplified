module.exports = async (client, member, message) => {
    const discord = require("discord.js");
    const Welcome = require('../models/welcome')
    const mongoose = require('mongoose')

    const x = '<:left:795890954757341234>'
    const idk = [
        `${x} | who pissed in **${member.user.username}s** cereal? They're no longer here :frowning:`,
        `${x} | Hope you had a gre~~ oh... **${member.user.username}** already left.`,
        `${x} | 'Leave Server' a day keeps **${member.user.username}** away!`,
        `${x} | Murder have cought **${member.user.username}**. Guess not seeing them here for long.`,
        `${x} | Sadly **${member.user.username}** betrayed us.`,
        `${x} | Mystery still hides all the traces of **${member.user.username}** disappearing.`,
        `${x} | **${member.user.username}** dipped through the backyard!`,
        `${x} | click click and **${member.user.username}** is outta here.`,
        `${x} | **${member.user.username}** lost faith in ${member.guild.name} and took the leave.`,
        `${x} | **${member.user.username}** chose death...`,
        `${x} | Pffff, we didn't need **${member.user.username}** anyways`,
        `${x}> | **${member.user.username}** went to get milk from the grocery store... we'll be waiting your arival!`,
        `${x} | Looks like **${member.user.username}** is off to bigger things.`,
        `${x} | **${member.user.username}** went to take out the trash.`
        
        ];

    const word = idk[Math.floor(Math.random() * idk.length)];

    Welcome.findOne({ Guild: member.guild.id }, async(err, data) => {
    if(data) {    
               try {
                 member.guild.channels.cache.get(data.channel).send(`${word}`)
             } catch (e) {
              
             }   
    }
    })

}