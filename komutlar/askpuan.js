const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
 
  let iki = await db.fetch(`sevgilisi_${message.author.id}`)
  let sevgili = await db.fetch(`sevgili_${message.author.id}`)
  let puan = await db.fetch(`puanask_${message.author.id}`)
  let mülk = await db.fetch(`mülk_${message.author.id}`)
  let birpuan = await db.fetch(`puanask_${sevgili}`)
  let işletmesi = await db.fetch(`isletme_${message.author.id}`)  
  let amacı = await db.fetch(`isletmeamac_${message.author.id}`)
  let level = await db.fetch(`isletmelevel_${message.author.id}`)
  let msjy = message.member.user.username
  
  let mülks;
  if (mülk == null) mülks = 'Bulunmuyor'
else mülks = mülk
 
 let sahip;
   if (mülk == null) sahip = 'Mülk Bulunamadı!'
else sahip =  message.member.user.username+' - '+iki
  
  let kazanç;
  if(level == 1) kazanç = '1000'
  if(level == 2) kazanç = '3500'
  if(level == 3) kazanç = '6500'
  if(level == 4) kazanç = '15000'
  
  let kira;
  if(mülk == 'gecekondu') kira = '200'
  if(mülk == 'villa') kira = '1000'
  if(mülk == 'konak') kira = '6000'
  if(mülk == 'rezidans') kira = '10000'
if(!mülk) kira = 'Kiraya verilecek ev bulunamadı!'

let birinci;
  if (puan == null) birinci = 0
else birinci = puan

let s;
  if (birpuan == null) s = 0
else s = birpuan
  
  let z;
  z = ':heavy_check_mark:  | Çalışan'
  if(birinci > 1000) z = ':heavy_check_mark:  | Çalışan'
  if(birinci > 10000) z = ':chart_with_upwards_trend: | Tüccar'
  if(birinci > 100000) z = ':gem: | İş Adamı'
  if(birinci > 1000000) z = ':yin_yang: | İlahi'
  
 let x;
  x = ':heavy_check_mark:  | Çalışan'
  if(s > 1000) x = ':heavy_check_mark:  | Çalışan'
  if(s > 10000) x = ':chart_with_upwards_trend: | Tüccar'
  if(s > 100000) x = ':gem: | İş Adamı'
  if(s > 1000000) x = ':yin_yang: | İlahi'  
  
  let embed = new Discord.RichEmbed()
  .setTitle('<a:pandarun:641318474798596136> | Üzgünüm Ama..')
  .setDescription('Sevgilisi olmayan biri bu hizmetten yararlanamaz...')
  .setColor('RED')

  if(!iki) return message.channel.send(embed).then(x => x.delete(5500))
  
  
  if(işletmesi) {

  let puanlist = new Discord.RichEmbed()
  .setTitle('Puan Kontrol')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Aşağıda **'+msjy + ' <a:sonsuz:641278479970729999> '+iki+'** Çiftinin puan durumu gözükmekte..')
  .addBlankField()
  .addField('<a:buyuktur:641328397187809311> | '+msjy+'', 'Puan Durumu » **'+birinci+'** \n\n Zenginlik Rütbesi » **'+z+'**')
  .addBlankField()
  .addField('<a:buyuktur:641328397187809311> | '+iki+'', 'Puan Durumu » **'+s+'** \n\n Zenginlik Rütbesi » **'+x+'**')
   .addBlankField()
   .addField('<a:isikli:642696382414585856> | Mülk Bilgisi: ', 'Mülk **»** '+mülks+'\n\n Mülk Sahipleri **»** '+sahip+'\n\n Mülk günlük alınan kira **»** '+kira+'')
  .addBlankField()
  .addField('<a:cekic:644054892670877716> | İşletme', 'İşletme İsmi **»** '+işletmesi+' \n\n İşletme Seviyesi **»** '+level+' \n\n Günlük Kazanç **»** '+kazanç+'')
  .setColor('E52EC6')
  .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/pexels-photo-556667.jpeg')
  message.channel.send(puanlist)
  }
 
  
  if(!işletmesi) {
    let puanlist = new Discord.RichEmbed()
  .setTitle('Puan Kontrol')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Aşağıda **'+msjy + ' <a:sonsuz:641278479970729999> '+iki+'** Çiftinin puan durumu gözükmekte..')
  .addBlankField()
  .addField('<a:buyuktur:641328397187809311> | '+msjy+'', 'Puan Durumu » **'+birinci+'** \n\n Zenginlik Rütbesi » **'+z+'**')
  .addBlankField()
  .addField('<a:buyuktur:641328397187809311> | '+iki+'', 'Puan Durumu » **'+s+'** \n\n Zenginlik Rütbesi » **'+x+'**')
   .addBlankField()
   .addField('<a:isikli:642696382414585856> | Mülk Bilgisi: ', 'Mülk **»** '+mülks+'\n\n Mülk Sahipleri **»** '+sahip+'\n\n Mülk günlük alınan kira **»** '+kira+'')
  .addBlankField()
  .addField('<a:cekic:644054892670877716> | İşletme', 'Üstünüze ait bir işletme bulamadım. `!işletme-kur` ile bedavaya bir işletme kurabilirsiniz.')
  .setColor('E52EC6')
  .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/pexels-photo-556667.jpeg')
  message.channel.send(puanlist) 
 } 




};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'puan',
  description: 'taslak', 
  usage: 'puan'
};
