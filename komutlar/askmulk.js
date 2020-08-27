const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 


   
  
  let iki = await db.fetch(`sevgilisi_${message.author.id}`)
  let sevgili = await db.fetch(`sevgili_${message.author.id}`)
  let puan = await db.fetch(`puanask_${message.author.id}`)
  let birpuan = await db.fetch(`puanask_${sevgili}`)
  let msjy = message.member.user.username
  let mülk = await db.fetch(`mülk_${message.author.id}`)
  let embed = new Discord.RichEmbed()
  .setTitle('<a:pandarun:641318474798596136> | Üzgünüm Ama..')
  .setDescription('Sevgilisi olmayan biri bu hizmetten yararlanamaz...')
  .setColor('RED')

  if(!iki) return message.channel.send(embed).then(x => x.delete(5500))
  
  
  let alınacak = args[0]
  
  if(!alınacak) {
   let işlem = new Discord.RichEmbed()
    .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:iptal:626445972620443648> | Geçersiz İşlem!')
  .setDescription('Satın almak istediğin konutu belirtmen gerekiyor :) Konutlara `!konutlar` yoluyla bakabilirsin.!')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')   
 message.channel.send(işlem)
   }
  
  if(alınacak == 'gecekondu') {
  
  let gerekli = 5000 - puan  
    let yetersiz = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:iptal:626445972620443648> | İşlem Reddedildi!')
  .setDescription('`Gecekondu` mülkünü almak için yeteri kadar puanınız bulunmuyor.')
  .addBlankField()
  .addField('Gerekli Puan', '**'+gerekli+'**')
  .setColor('RED')
  .setURL('https://discord.gg/928PgW')
  .setColor('E52EC6')
 if(puan < 5000) { 
   message.channel.send(yetersiz).then(a => a.delete(8000))
    message.delete()
return
 }
 let alındı = new Discord.RichEmbed()
.setAuthor(message.member.user.username, message.author.avatarURL)
 .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı!')
 .setDescription('Satın almak istediğiniz `Gecekondu` başarı ile satın alındı.')
 .addBlankField()
 .addField('<a:sonsuz:641278479970729999> | Mülk Sahipleri', '**»** '+msjy+' \n **»** '+iki+'')
 .addBlankField()
 .addField(':information_source: | Konut Bilgileri', 'Yapımcı Şirket **»** CodEming TR \n Kiraya Verilirse Alınacak Gelir **»** 200')
 .setFooter('CodEming  Rp sistemi')
 .setColor('RED')
 message.channel.send(alındı)
  db.add(`puanask_${message.author.id}`, -5000)
  db.set(`mülk_${message.author.id}`, 'gecekondu')
  db.set(`mülk_${sevgili}`, 'gecekondu')  
    
 }
 
    if(alınacak == 'villa') {
  
  let gerekli = 20000 - puan  
    let yetersiz = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:iptal:626445972620443648> | İşlem Reddedildi!')
  .setDescription('`villa` mülkünü almak için yeteri kadar puanınız bulunmuyor.')
  .addBlankField()
  .addField('Gerekli Puan', '**'+gerekli+'**')
  .setColor('RED')
  .setURL('https://discord.gg/928PgW')
  .setColor('E52EC6')
 if(puan < 5000) { 
   message.channel.send(yetersiz).then(a => a.delete(8000))
    message.delete()
return
 }
 let alındı = new Discord.RichEmbed()
.setAuthor(message.member.user.username, message.author.avatarURL)
 .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı!')
 .setDescription('Satın almak istediğiniz `Villa` başarı ile satın alındı.')
 .addBlankField()
 .addField('<a:sonsuz:641278479970729999> | Mülk Sahipleri', '**»** '+msjy+' \n **»** '+iki+'')
 .addBlankField()
 .addField(':information_source: | Konut Bilgileri', 'Yapımcı Şirket **»** CodEming TR \n Kiraya Verilirse Alınacak Gelir **»** 1000')
 .setFooter('CodEming  Rp sistemi')
 .setColor('RED')
 message.channel.send(alındı)
  db.add(`puanask_${message.author.id}`, -20000)
  db.set(`mülk_${message.author.id}`, 'villa')
  db.set(`mülk_${sevgili}`, 'villa')  
    
 }
  
     if(alınacak == 'konak') {
  
  let gerekli = 98000 - puan  
    let yetersiz = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:iptal:626445972620443648> | İşlem Reddedildi!')
  .setDescription('`konak` mülkünü almak için yeteri kadar puanınız bulunmuyor.')
  .addBlankField()
  .addField('Gerekli Puan', '**'+gerekli+'**')
  .setColor('RED')
  .setURL('https://discord.gg/928PgW')
  .setColor('E52EC6')
 if(puan < 5000) { 
   message.channel.send(yetersiz).then(a => a.delete(8000))
    message.delete()
return
 }
 let alındı = new Discord.RichEmbed()
.setAuthor(message.member.user.username, message.author.avatarURL)
 .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı!')
 .setDescription('Satın almak istediğiniz `Konak` başarı ile satın alındı.')
 .addBlankField()
 .addField('<a:sonsuz:641278479970729999> | Mülk Sahipleri', '**»** '+msjy+' \n **»** '+iki+'')
 .addBlankField()
 .addField(':information_source: | Konut Bilgileri', 'Yapımcı Şirket **»** CodEming TR \n Kiraya Verilirse Alınacak Gelir **»** 6000')
 .setFooter('CodEming  Rp sistemi')
 .setColor('RED')
 message.channel.send(alındı)
  db.add(`puanask_${message.author.id}`, -98000)
  db.set(`mülk_${message.author.id}`, 'konak')
  db.set(`mülk_${sevgili}`, 'konak')  
    
 }
  
       if(alınacak == 'rezidans') {
  
  let gerekli = 1000000 - puan  
    let yetersiz = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:iptal:626445972620443648> | İşlem Reddedildi!')
  .setDescription('`rezidans` mülkünü almak için yeteri kadar puanınız bulunmuyor.')
  .addBlankField()
  .addField('Gerekli Puan', '**'+gerekli+'**')
  .setColor('RED')
  .setURL('https://discord.gg/928PgW')
  .setColor('E52EC6')
 if(puan < 5000) { 
   message.channel.send(yetersiz).then(a => a.delete(8000))
    message.delete()
return
 }
 let alındı = new Discord.RichEmbed()
.setAuthor(message.member.user.username, message.author.avatarURL)
 .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı!')
 .setDescription('Satın almak istediğiniz `Rezidans` başarı ile satın alındı.')
 .addBlankField()
 .addField('<a:sonsuz:641278479970729999> | Mülk Sahipleri', '**»** '+msjy+' \n **»** '+iki+'')
 .addBlankField()
 .addField(':information_source: | Konut Bilgileri', 'Yapımcı Şirket **»** CodEming TR \n Kiraya Verilirse Alınacak Gelir **»** 10000')
 .setFooter('CodEming  Rp sistemi')
 .setColor('RED')
 message.channel.send(alındı)
  db.add(`puanask_${message.author.id}`, -1000000)
  db.set(`mülk_${message.author.id}`, 'rezidans')
  db.set(`mülk_${sevgili}`, 'rezidans')  
    
 }
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['ev', 'bina', 'mülk-al'], 
  permLevel: 0
};

exports.help = {
  name: 'mülk',
  description: 'taslak', 
  usage: 'mülk'
};
