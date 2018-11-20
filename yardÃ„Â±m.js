const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** z!eğlence = Eğlence komutları\n**•** z!kişisel = Kişisel komutlar\n**•** z!yetkili = Yetkili komutları\n**•** z!oyun = Oyun komutları\n**•** z!müzik = Müzik komutları\n**•** z!destek = Destek komutları')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=512589906233524264&scope=bot&permissions=805314622)` + "**\n**"+`[Botun Sitesi](https://kralbotdiscord.wordpress.com/)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/dfpzYdu)`, false)
      .setFooter('Örnek kullanım: z!eğlence')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','yardim'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
