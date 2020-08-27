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
  
 if(!mülk) {
  let embed = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | İşlem Hatası!')
  .setDescription('**'+msjy+'** Ait herhangi bir mülk bulunamadı.!')
  .setColor('RED') 
   message.channel.send(embed)
  return
 }
  
  if(mülk == 'gecekondu') {
   
  let satış = new Discord.RichEmbed()
      .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı..')
  .setDescription('Başarıyla `Gecekondu` mülkünüzü sattınız.')
  .addBlankField()
  .addField(':credit_card: | Satış Fiyatı', '**1500**')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')     
 db.add(`puanask_${message.author.id}`, 1500)
 db.delete(`mülk_${message.author.id}`)
 db.delete(`mülk_${sevgili}`)   
    
    
  }
  
   if(mülk == 'villa') {
   
  let satış = new Discord.RichEmbed()
      .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı..')
  .setDescription('Başarıyla `Villa` mülkünüzü sattınız.')
  .addBlankField()
  .addField(':credit_card: | Satış Fiyatı', '**10.000**')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')     
 db.add(`puanask_${message.author.id}`, 10000)
 db.delete(`mülk_${message.author.id}`)
 db.delete(`mülk_${sevgili}`)   
    
    
  }   

     if(mülk == 'konak') {
   
  let satış = new Discord.RichEmbed()
      .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı..')
  .setDescription('Başarıyla `Konak` mülkünüzü sattınız.')
  .addBlankField()
  .addField(':credit_card: | Satış Fiyatı', '**40.000**')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')     
 db.add(`puanask_${message.author.id}`, 40000)
 db.delete(`mülk_${message.author.id}`)
 db.delete(`mülk_${sevgili}`)   
    
    
  }  
     if(mülk == 'rezidans') {
   
  let satış = new Discord.RichEmbed()
      .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı..')
  .setDescription('Başarıyla `Rezidans` mülkünüzü sattınız.')
  .addBlankField()
  .addField(':credit_card: | Satış Fiyatı', '**600.000**')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')     
 db.add(`puanask_${message.author.id}`, 600000)
 db.delete(`mülk_${message.author.id}`)
 db.delete(`mülk_${sevgili}`)   
    
    
  }  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'mülk-sat',
  description: 'taslak', 
  usage: 'mülk-sat'
};
