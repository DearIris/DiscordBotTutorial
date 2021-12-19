module.exports = {
  name: "ping",
  description: "The latency of bot.",
  category: "Utility",
  async execute(client, message, args, ds) {
    const ping = `${Math.round(client.ws.ping)}`
    let embed = new ds.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setDescription(`WS Ping: ${ping}`)
    .setColor("#ed4e4e")
    message.reply({embeds: [embed]})
      }
};