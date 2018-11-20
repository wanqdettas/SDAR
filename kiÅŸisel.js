const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("KULLANICI KOMUTLARI:",`
z!afk:         ^Afk moduna geçersiniz.^
z!bilgi:       ^Bot hakkında bilgiler alırsınız.^
z!davet:       ^Botun davet linkini gönderir.^
z!destek:      ^Botun destek sunucusunu yollar.^
z!geldim:      ^Afk modundan çıkmanızı sağlar.^
z!istatistik:  ^Botun istatistiklerini atar.^
z!ping:        ^Botun pingini gösterir.^
z!sunucu:      ^Sunucu hakkında bilgiler verir.^
z!hatabildir:  ^Botta bulunan bir hatayı göndermenizi sağlar.^
z!yardım:      ^Yardım komutlarını gösterir.^

* örn: z!afk <sebep>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kişisel',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kişisel'
};
