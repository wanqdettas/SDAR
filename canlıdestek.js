const Discord = require('discord.js');

exports.run = async(client, message, args) => {
const emoji = message.client.emojis.get('ğŸ“');
      let isEnabled;
      message.reply("`Birazdan Yetkili Ekibimiz Sizinle ilgilenicektir.`");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "504790796931825670";
      const embed = new Discord.RichEmbed()
        .addField('Dikkat', `CanlÄ± Destek Talebi`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("00ff00")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek Ä°steyen**: ${message.author.tag} (${message.author.id}) \n**Destek MesajÄ±**: ${mesaj}`)
        .setFooter("Â© Bee | CanlÄ± Destek")
        client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('** Destek Ã‡aÄŸrÄ±sÄ±na BaÄŸlanmak Ä°Ã§in** `baÄŸlan` **YazÄ±nÄ±z. Ä°ptal Etmek Ä°Ã§in** `iptal` **YazÄ±nÄ±z.**')
    collector.on('message', (message) => {
      if (message.content === 'iptal') collector.stop('aborted')
      if (message.content === 'baÄŸlan') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('``CanlÄ± Destek Zaman AÅŸÄ±mÄ±na UÄŸradÄ±.``')
      if (reason === 'aborted') {
        message.reply('``CanlÄ± Destek Talebi Reddedildi.``')
        client.channels.get(destekKanal).send('``CanlÄ± Destek BaÅŸarÄ±yla Reddedildi.``')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('``CanlÄ± Destek Talebi AlÄ±ndÄ±.``')
        client.channels.get(destekKanal).send('**CanlÄ± Destek Talebini Ä°ptal Etmke Ä°Ã§in ``iptal`` YazÄ±nÄ±z.**')
        chan.send(`${message.author}`)
        chan.send('``Destek Talebiniz Yetkili TarafÄ±ndan Kabul Edildi``')
        chan.send('**Destek Talebini Ä°ptal Etmek Ä°Ã§in `iptal` YazÄ±nÄ±z.**')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('iptal')) {
              message.channel.send('``CanlÄ± Destek Ä°ptal Edildi``')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('``CanlÄ± Destek KarÅŸÄ± Tarafdan Ä°ptal Edildi``')
              if (message.channel.id === destekKanal) chan.send('``CanlÄ± Destek KarÅŸÄ± Tarafdan Ä°ptal Edildi``')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`**Talepte Bulunan KiÅŸi :** ${message.author.tag} : ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`**Yetkili :** ${message.author.tag} : ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'CanlÄ± Destek Tablebi OluÅŸturur.',
  usage: 'canlıdestek'
};
