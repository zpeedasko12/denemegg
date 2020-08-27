const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
let işletmesi = await db.fetch(`isletme_${message.author.id}`)  
let amacı = await db.fetch(`isletmeamac_${message.author.id}`)
let level = await db.fetch(`isletmelevel_${message.author.id}`)
let iki = await db.fetch(`sevgilisi_${message.author.id}`)
let yazan = message.member.user.username
let ikininsevgilisi = await db.fetch(`sevgilisi_${message.author.id}`)
let sevgili = await db.fetch(`sevgili_${message.author.id}`)
let msjy = message.member.user.username
let puan = await db.fetch(`puanask_${message.author.id}`)
let birpuan = await db.fetch(`puanask_${sevgili}`) 

if (message.channel.name !== '💻│bot-komut') {
if (!message.member.hasPermission("ADMINISTRATOR"))  {
var embed2 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata! `,message.author.avatarURL)
.setColor("RED")
.setDescription('Bot komutları,**"#💻│bot-komut"** Odasında kullanılmalı.')
.setTimestamp()
.setFooter(message.author.username , message.author.avatarURL)
return message.channel.send(embed2).then(msg => msg.delete(8000));
}
} 
  let yokki = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | İşlem İptali!')
  .setDescription('Sistem bir hata ile karşılaşmışa banziyor..')
  .addBlankField()
  .addField('Hata!', '**'+yazan +' <a:sonsuz:641278479970729999> '+iki+'** Çiftine ait bir işletme bulamadım.')
  .setTimestamp()
  .setURL('https://discord.gg/3vMKch')
  .setColor('E52EC6')
  .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/pexels-photo-556667.jpeg') 
    
    let embed = new Discord.RichEmbed()
    .setTitle('<a:pandarun:641318474798596136> | Üzgünüm Ama..')
    .setDescription('Sevgilisi olmayan biri bu hizmetten yararlanamaz...')
    .setColor('RED')
   
      if(!iki) return message.channel.send(embed).then(x => x.delete(5500))
       if(!işletmesi) {
         message.delete()
         message.channel.send(yokki).then(s => s.delete(10000))
       } else {

   
         
      if(level == 4) {
      let hata = new Discord.RichEmbed()
      .setTitle('<a:iptal:626445972620443648> | İşlem İptali!')
      .setDescription('İşletmeniz olan,`'+işletmesi+'` Zaten gelebileceiği en üst seviye olan; **4** Seviyesine ulaşmış.!')
      .setColor('BLUE')
      .setTimestamp()
      .setThumbnail(message.author.avatarURL)
      .setURL('https://discord.gg/3vMKch')
      message.channel.send(hata)
      message.delete()
      return  
      }   
         
         
         
     if(level == 3) {
      
      let gerekli = 50000 - puan
      let yetmedi = new Discord.RichEmbed()
     .setTitle('<a:iptal:626445972620443648> | İşlem İptali!')
     .setDescription('Seviye yükseltmeye `Puan` miktarınız yetmiyor.!')
     .addBlankField()
     .addField('Seviye/Kazanç Bilgisi', '**»** Şu anki seviye: `3` \n\n **»** Günlük kazanç: `6500`')
     .addBlankField()
     .addField(':star: | Seviye 4', '**»** Gerekli puan miktarı: `50.000` \n\n **»** Günlük kazanç: `15000` \n\n Güncelleme için gerekli miktar: `'+gerekli+'`')
     .setTimestamp()
     .setURL('https://discord.gg/3vMKch')
     .setColor('RED')
     .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/pexels-photo-556667.jpeg')     
     if(puan < 15000) {
       message.delete()
       message.channel.send(yetmedi)(s => s.delete(10000))
       message.member.send('Şirket yükseltilemedi.')
    return   
     }
     
      let yetti = new Discord.RichEmbed()
     .setTitle('<a:levelup:643800647556399120> | Yükseltme Başarılı!')
     .setDescription('**'+işletmesi+'** Adlı işletmeniz başarıyla **4** Seviyeye taşındı!')
     .addBlankField()
     .addField('Güncelleme Sonrası Seviye/Kazanç Bilgisi', '**»** Şu anki seviye: `4` \n\n **»** Günlük kazanç: `15000`')
     .addBlankField()
     .addField(':star: | X', '**»** Max seviyeye ulaştınız.')
     .setTimestamp()
     .setURL('https://discord.gg/3vMKch')
     .setColor('BLUE')
     .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/pexels-photo-556667.jpeg')          
      message.channel.send(yetti)
      message.delete()
      db.add(`puanask_${message.author.id}`, -50000) 
      db.set(`isletmelevel_${message.author.id}`, 4)
      db.set(`isletmelevel_${sevgili}`, 4) 
       
     }  
         
         
    if(level == 2) {
      
      let gerekli = 25000 - puan
      let yetmedi = new Discord.RichEmbed()
     .setTitle('<a:iptal:626445972620443648> | İşlem İptali!')
     .setDescription('Seviye yükseltmeye `Puan` miktarınız yetmiyor.!')
     .addBlankField()
     .addField('Seviye/Kazanç Bilgisi', '**»** Şu anki seviye: `2` \n\n **»** Günlük kazanç: `3500`')
     .addBlankField()
     .addField(':star: | Seviye 3', '**»** Gerekli puan miktarı: `50.000` \n\n **»** Günlük kazanç: `6500` \n\n Güncelleme için gerekli miktar: `'+gerekli+'`')
     .setTimestamp()
     .setURL('https://discord.gg/3vMKch')
     .setColor('RED')
     .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/pexels-photo-556667.jpeg')     
     if(puan < 15000) {
       message.delete()
       message.channel.send(yetmedi)(s => s.delete(10000))
       message.member.send('Şirket yükseltilemedi.')
    return   
     }
     
      let kontrol = 25000 - puan 
      let şimdiki = 50000 - kontrol
      let yetti = new Discord.RichEmbed()
     .setTitle('<a:levelup:643800647556399120> | Yükseltme Başarılı!')
     .setDescription('**'+işletmesi+'** Adlı işletmeniz başarıyla **3** Seviyeye taşındı!')
     .addBlankField()
     .addField('Güncelleme Sonrası Seviye/Kazanç Bilgisi', '**»** Şu anki seviye: `3` \n\n **»** Günlük kazanç: `6500`')
     .addBlankField()
     .addField(':star: | Seviye 4', '**»** Gerekli puan miktarı: `50.000` \n\n **»** Günlük kazanç: `15000` \n\n Güncelleme için gerekli miktar: `'+şimdiki+'`')
     .setTimestamp()
     .setURL('https://discord.gg/3vMKch')
     .setColor('BLUE')
     .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/pexels-photo-556667.jpeg')          
      message.channel.send(yetti)
      message.delete()
      db.add(`puanask_${message.author.id}`, -25000) 
      db.set(`isletmelevel_${message.author.id}`, 3)
      db.set(`isletmelevel_${sevgili}`, 3) 
       
     }    
         
             
              
         
     if(level == 1) {
      
      let gerekli = 15000 - puan
      let yetmedi = new Discord.RichEmbed()
     .setTitle('<a:iptal:626445972620443648> | İşlem İptali!')
     .setDescription('Seviye yükseltmeye `Puan` miktarınız yetmiyor.!')
     .addBlankField()
     .addField('Seviye/Kazanç Bilgisi', '**»** Şu anki seviye: `1` \n\n **»** Günlük kazanç: `1000`')
     .addBlankField()
     .addField(':star: | Seviye 2', '**»** Gerekli puan miktarı: `15.000` \n\n **»** Günlük kazanç: `3500` \n\n Güncelleme için gerekli miktar: `'+gerekli+'`')
     .setTimestamp()
     .setURL('https://discord.gg/3vMKch')
     .setColor('RED')
     .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/pexels-photo-556667.jpeg')     
     if(puan < 15000) {
       message.delete()
       message.channel.send(yetmedi)(s => s.delete(10000))
       message.member.send('Şirket yükseltilemedi.')
    return   
     }
     
      let kontrol = 15000 - puan 
      let şimdiki = 25000 - kontrol
      let yetti = new Discord.RichEmbed()
     .setTitle('<a:levelup:643800647556399120> | Yükseltme Başarılı!')
     .setDescription('**'+işletmesi+'** Adlı işletmeniz başarıyla **2** Seviyeye taşındı!')
     .addBlankField()
     .addField('Güncelleme Sonrası Seviye/Kazanç Bilgisi', '**»** Şu anki seviye: `2` \n\n **»** Günlük kazanç: `3500`')
     .addBlankField()
     .addField(':star: | Seviye 3', '**»** Gerekli puan miktarı: `25.000` \n\n **»** Günlük kazanç: `6500` \n\n Güncelleme için gerekli miktar: `'+şimdiki+'`')
     .setTimestamp()
     .setURL('https://discord.gg/3vMKch')
     .setColor('BLUE')
     .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/pexels-photo-556667.jpeg')          
      message.channel.send(yetti)
      message.delete()
      db.add(`puanask_${message.author.id}`, -15000) 
      db.set(`isletmelevel_${message.author.id}`, 2)
      db.set(`isletmelevel_${sevgili}`, 2) 
       
     }    
         
       }


  



  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yükselt', 'güncelle', 'işletme-güncelle'], 
  permLevel: 0
};

exports.help = {
  name: 'işletme-yükselt',
  description: 'işletme-yükselt', 
  usage: 'işletme-yükselt'
};
