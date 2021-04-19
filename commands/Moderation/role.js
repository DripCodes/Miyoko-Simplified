const { Discord, MessageEmbed } = require("discord.js");


    exports.run = async (client, message, args) => {
              const { guild, member } = message;
              if (!member.hasPermission("MANAGE_ROLES")) {
                message.reply(`You are missing the permission \`MANAGE_ROLES\``);
                return;
              }
              if (!guild.me.hasPermission("MANAGE_ROLES")) {
                message.reply(`I am missing the permission: \`MANAGE_ROLES\``);
                return;
              }
              let user = message.mentions.members.first();
              if (!user) {
                message.reply(`\`user\` is a required argument which is missing.`);
                return;
              }
              let rolename = args.splice(1).join(" ");
const role = message.guild.roles.cache.find((role) => (role.id === rolename) || (role.name.toLowerCase() === rolename.toLowerCase()));
              if (!role) {
                message.reply(`\`role\` is a required argument which is missing.`);
                return;
              }
              try {
                if (user.roles.cache.has(role.id)) {
                  user.roles.remove(role);
                  const idk = [
                    "tripped on a rock and lost",
                    "was watching porn and forgot about",
                    "was watching cat videos and lost",
                    'no longer has',
                    'was sucking so much dick they forgot about'
                    ];
                    const word = idk[Math.floor(Math.random() * idk.length)];
                  let embed = new MessageEmbed()
                  .setColor('WHITE')
                  .setTitle('Role Remove')
                  .setDescription(`Yikes, ${user.user.username} ${word} **${role.name}** `)
                  message.channel.send(embed);
                } else {
                  user.roles.add(role);
                  let embed = new MessageEmbed()
                  .setColor('WHITE')
                  .setDescription(`${user.user.username} now has **${role.name}**! <:HappyPepe:698257209406128128>`)
                  .setAuthor('Role Add')
                  message.channel.send(embed);
                }
              } catch (err) {
                console.error(err);
                message.reply(`Something's wrong... Check my role and position.`);
                return;
              }
            }
            exports.help = {
              name: "role",
              description: "Adds or Removes a user role",
              usage: "!role <id | mention> <role>",
              example: "!help role"
            };
            
            exports.conf = {
              aliases: [""],
              cooldown: 3
            }
