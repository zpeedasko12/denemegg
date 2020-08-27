const Discord = require('discord.js');
const ms = require('parse-ms')
const db = require('quick.db')
exports.run = async(client, message, args) => { 

 
  let ikininsevgilisi = await db.fetch(`sevgilisi_${message.author.id}`)
   let puans = await db.fetch(`puanask_${message.author.id}`)
  let embed = new Discord.RichEmbed()
  .setTitle('<a:pandarun:641318474798596136> | Üzgünüm Ama..')
  .setDescription('Sevgilisi olmayan biri bu hizmetten yararlanamaz...')
  .setColor('RED')

  if(!ikininsevgilisi) return message.channel.send(embed).then(x => x.delete(5500))
  
    
   let timeout = 600000
   let stanıt = await db.fetch(`stanıt_${message.author.id}`);
   if (stanıt !== null && timeout - (Date.now() - stanıt) > 0) {
   let time = ms(timeout - (Date.now() - stanıt));

let hms = new Discord.RichEmbed()
.setTitle('<a:iptal:626445972620443648> | Hata!')
.setDescription('Birbirinizi sevdiğinizi görmek çok güzel ama..Bu komutu kullanmak için; **'+time.minutes+'** Dakika,**'+time.seconds+'** Saniye süren daha var.')
.setColor('RED')
message.channel.send(hms).then(s => s.delete(5500))  
} else {  
 var espri = Math.floor(Math.random() * 100);
 let puan; 
 if(espri < 25) {
  let sıfır = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçülüyor!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlankField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  🖤 | 🖤 |🖤 |🖤 | 🖤  <a:kucuktur:641328448476020742>')
  .setColor('RANDOM') 
  message.channel.send(sıfır).then(x => {
     setTimeout(() => {
       
  let sonuc = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçüldü!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlankField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  ❤ | 🖤 | 🖤 |🖤 | 🖤  <a:kucuktur:641328448476020742>')
  .addBlankField()
  .addField('Sonuçlar:', 'Aşk Seviyesi: **%'+espri+'** \n Kazanılan Puan: **15** \n Bot Yorumu: **Belkide bazı şeyler yanlıştır?**')
  .setColor('RANDOM') 
  puan = 15
  x.edit(sonuc)
        if(!puans) {
  db.set(`puanask_${message.author.id}`, 15) 
return
}
  db.add(`puanask_${message.author.id}`, 15)    
     }, 7000)
                                 
                                  
  }) 

 } 
  
 if(espri < 40 & espri > 25) {
  let sıfır = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçülüyor!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlankField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  🖤 | 🖤 |🖤 |🖤 | 🖤  <a:kucuktur:641328448476020742>')
  .setColor('RANDOM') 
  message.channel.send(sıfır).then(x => {
     setTimeout(() => {
       
  let sonuc = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçüldü!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlankField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  ❤ | ❤ | 🖤 | 🖤 | 🖤  <a:kucuktur:641328448476020742>')
  .addBlankField()
  .addField('Sonuçlar:', 'Aşk Seviyesi: **%'+espri+'** \n Kazanılan Puan: **30** \n Bot Yorumu: **Güzel bir ilişki,çok daha güzel yerlere gelebilir!**')
  .setColor('RANDOM') 
  
  x.edit(sonuc)
     puan = 30
       if(!puans) {
  db.set(`puanask_${message.author.id}`, 30) 
return
}
  db.add(`puanask_${message.author.id}`, 30) 

     
     }, 7000)
  })
 }
                                  

if(espri < 70 & espri > 40) {
  let sıfır = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçülüyor!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlankField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  🖤 | 🖤 |🖤 |🖤 | 🖤  <a:kucuktur:641328448476020742>')
  .setColor('RANDOM') 
  message.channel.send(sıfır).then(x => {
     setTimeout(() => {
       
  let sonuc = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçüldü!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlankField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  ❤ | ❤ | ❤ |🖤 | 🖤  <a:kucuktur:641328448476020742>')
  .addBlankField()
  .addField('Sonuçlar:', 'Aşk Seviyesi: **%'+espri+'** \n Kazanılan Puan: **48** \n Bot Yorumu: **İşte..! Karşılıklı sevgi bu olmalı.**')
  .setColor('RANDOM') 
  puan = 48
  x.edit(sonuc)
    if(!puans) {
  db.set(`puanask_${message.author.id}`, 48) 
return
}
  db.add(`puanask_${message.author.id}`, 48) 
     
     }, 7000)
  })
 } 

 if(espri < 95 & espri > 70) {
  let sıfır = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçülüyor!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlankField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  🖤 | 🖤 |🖤 |🖤 | 🖤  <a:kucuktur:641328448476020742>')
  .setColor('RANDOM') 
  message.channel.send(sıfır).then(x => {
     setTimeout(() => {
       
  let sonuc = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçüldü!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlankField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  ❤ | ❤ | ❤ | ❤ | 🖤  <a:kucuktur:641328448476020742>')
  .addBlankField() //
  .addField('Sonuçlar:', 'Aşk Seviyesi: **%'+espri+'** \n Kazanılan Puan: **60** \n Bot Yorumu: **Burda iki çok güzel çift görüyorum!**')
  .setColor('RANDOM') 
    x.edit(sonuc)
  
  if(!puans) {
  db.set(`puanask_${message.author.id}`, 60) 
return
}
  db.add(`puanask_${message.author.id}`, 60) 

     }, 7000)
  })
 }  

 if(espri == '100') {
  let sıfır = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçülüyor!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlanField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  🖤 | 🖤 |🖤 |🖤 | 🖤  <a:kucuktur:641328448476020742>')
  .setColor('RANDOM') 
  message.chnnel.send(sıfır).then(x => {
     setTimeout(() => {
       
  let sonuc = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Aşk Seviyesi Ölçüldü!')
  .setDescription('**'+ikininsevgilisi+'** <a:hh:639135059051413524> **'+message.member.user.username +'**')
  .addBlanField()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .addField('Sevgi Göstergesi', '<a:buyuktur:641328397187809311>  ❤ | ❤ | ❤ | ❤ | ❤  <a:kucuktur:641328448476020742>')
  .addBlanField()
  .addField('Sonuçlar:', 'Aşk Seviyesi: **%'+espri+'** \n Kazanılan Puan: **100** \n Bot Yorumu: **Bu inanılmaz! Neden burda duruyorsunuz?**')
  .setColor('RANDOM') 
  
  x.edit(sonuc)
   puan = 100    
    if(!puans) {
  db.set(`puanask_${message.author.id}`, 100) 
return
}
  db.add(`puanask_${message.author.id}`, 100) 

     }, 7000)
  })
 }  
if(!message.member.roles.has('634991951355314177')) {
db.set(`stanıt_${message.author.id}`, Date.now())
}


 

}
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'aşk',
  description: 'taslak', 
  usage: 'aşk'
};
