const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Pyzorex**")
        .setImage("https://yt3.ggpht.com/a-/AN66SAyiNMeXOWDr1S7LOt4NU_GD_qjSIjAbr-OC2A=s900-mo-c-c0xffffffff-rj-k-no")
        .setThumbnail("https://yt3.ggpht.com/a-/AN66SAyiNMeXOWDr1S7LOt4NU_GD_qjSIjAbr-OC2A=s900-mo-c-c0xffffffff-rj-k-no")
        .setColor(0x00AE86)
        .addField("Lakabı", "Pyzorex", true)
        .addField("Sunucu Adı", `
        *4 Peders Legend
   *Sunucusu
   `, true)
   .addField("Arada", `CSGO'yu    Sever`, true)
   .addField("Selam", "Naber")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'kurucubilgi', 
  description: 'Botun Kurucusu Hakkında Bilgi Verir',
  usage: '//kullanıcıbilgi'
};
