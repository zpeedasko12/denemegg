const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 
    let yardım = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Sevgili Rp Sistemi »')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('CodEming Rp Sisteminin mülk bölümüne geldin.Aşağıdaki fiyatlara göre istediğin bina,mülk alabilirsin.')
  .addBlankField()
  .addField(':house: | Gecekondu', '**Açıklama:** Normal durumu pek iyi olmayan kullanıcıların kullandığı evler. \n **Ücret:** 5000 \n **Satın Alma Kodu:** gecekondu\n**---------------------**')
  
    .addField('<a:hyper:632905422407335948> | Villa', '**Açıklama:** Durumu iyi olan zengin kullanıcılar için bir seçenek. \n **Ücret:** 20.000 \n **Satın Alma Kodu:** villa\n**---------------------**')
  
    .addField('<a:yildiz:633977788981968896> | Konak', '**Açıklama:** Gerçekten büyük,bahçeli inanılmaz bir yapı..Kullanıcıların çoğu bu seviyeye ulaşamaz. \n **Ücret:** 98.000 \n **Satın Alma Kodu:** konak\n**---------------------**')  
   
    .addField('<a:pandarun:641318474798596136> | Rezidans', '**Açıklama:** Rezidans sahibi kullanıcılar istediği kadar kullanıcıyı içeri kiraya verip,günlük 500.000 e kadar para kazanabilirler. \n **Ücret:** 1.000.000 \n **Satın Alma Kodu:** rezidans\n**---------------------**')  
    .addBlankField()
  .addField('<a:nitro:641278523289501712> | Kira Fiyatları', 'Aldığın mülk ü birini kiraya mı almak istiyorsun?\nMülk tiplerine göre alınan kira paraları değişir,ev sahipleri günlük kiracılarından kira alır.')
   .addField('**---------------------**', '**»** Gecekondu: günlük `"200"` \n **»** Villa: günlük `"1300"` \n **»** Konak: günlük `"6000"` \n**»** Rezidans: günlük `"10000"`') 
    .setFooter('CodEming iyi kullanmalar diler..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/3vMKch')
  .setColor('RANDOM')
  message.channel.send(yardım)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['mülkler'], 
  permLevel: 0
};

exports.help = {
  name: 'konutlar',
  description: 'taslak', 
  usage: 'konutlar'
};
