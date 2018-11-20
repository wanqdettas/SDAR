const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("MÜZİK KOMUTLARI:",`
z!çal:         ^Yazdığınız şarkıyı çalar.^
z!sıra:      ^Şarkı kuyruğunu gösterir.^
z!devam:       ^Duraklatılan şarkıya devam eder.^
z!geç:         ^Çalan şarkıyı geçer.^
z!dur:         ^Çalınan şarkıyı duraklatır.^
z!çalan:       ^Mesajı yazdığınız anda hangi şarkının çaldığını gösterir.^
z!duraklat:    ^Oynatılan şarkıyı duraklatır.^
z!ses:         ^Oynatılan şarkının ses seviyesini ayarlar.^


* örn: z!play <şarkıismi>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['müzik','music'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'müzik'
};
