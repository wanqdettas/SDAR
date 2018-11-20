const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("YETKİLİ KOMUTLARI:",`
z!ban:         ^Belirlediğiniz bir kullanıcıyı sunucudan kalıcı olarak atarsınız.^
z!kur:         ^Bot için gerekli odaları kurar.^
z!oylama:      ^Standart bir oylama yapmanızı sağlar.^
z!reboot:      ^Botu yeniden yapmanızı sağlar.^
z!sunucular:   ^Botun bulunduğu sunucuları gösterir.^
z!tavsiye:     ^Bot'a tavsiye yollamanızı sağlar.^
z!yaz:         ^Bot üzerinden yazı yazmanızı sağlar.^
z!kilit:       ^Kanalı belirli bir süre kilitlemenizi sağlar.^

* örn: z!ban <sebep>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili','onwer'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};
