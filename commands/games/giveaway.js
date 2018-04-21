const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const answers = require('../../assets/json/8ball');

module.exports = class GiveAwayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'giveaway',
            group: 'games',
            memberName: '8-ball',
            description: 'Starts a giveaway',
            args: [
                {
                    key: 'question',
                    prompt: 'What would you like to giveaway?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, args) {
        const { question } = args;
        const answer = answers[Math.floor(Math.random() * answers.length)];
        
        msg.channel.send("Giveaway has been started :smile:")
      
        const embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
        .setThumbnail(msg.guild.iconURL)
        .setTitle(`Giveaway Started`)
        .setColor(0x00FF00)
        .addField("GiveAway Item", question)
        return msg.guild.channels.get("432435528466694146").send(embed)
    }
};