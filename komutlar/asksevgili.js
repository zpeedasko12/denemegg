const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
  let hata = new Discord.RichEmbed()
  .setTitle('Hata!')
  .setDescription('Sadece gerçek `Aşk Tanrıları` iki çifti eşleştirebilir.!')
  .setColor('E52EC6')
  
  if(message.author.id !== "598176001037565960") if(message.author.id !== "419214688061227009") return message.channel.send(hata).then(hata => hata.delete(7000))
  
 let çift2 = message.mentions.members.array()
  
 let hata2 = new Discord.RichEmbed()
 .setTitle('Hatalı Eşleştirme!')
 .setDescription('2 çif kullanımınız yanlış.Aşağıda doğru kullanım bulunuyor..')
 .addBlankField()
 .addField('Doğru Kullanım:', '`!eşleştir @kullanıcı1 @kullanıcı2`')
 .setColor('79a9ff')
 
 
 if(!çift2[0]) return message.channel.send(hata2)
 let sevgilibir = await db.fetch(`sevgili_${çift2[0].user.id}`)
 let sevgiliiki = await db.fetch(`sevgili_${çift2[1].user.id}`)
 let birinsevgilisi = await db.fetch(`sevgilisi_${çift2[0].user.id}`)
 let ikininsevgilisi = await db.fetch(`sevgilisi_${çift2[1].user.id}`)
 
 
 if(!message.member.roles.has('634991951355314177')) {
 if(birinsevgilisi) if(ikininsevgilisi) {
 let başarılı = new Discord.RichEmbed()
.setTitle('<a:uyari:641250116165959698> | Hata!')
.setDescription('**'+birinsevgilisi+' <a:sonsuz:641278479970729999> '+ikininsevgilisi+'** \n Sonsuz bir sevgiye yeni birini ekliyemessin :)')
.setColor('RED')
 message.channel.send(başarılı)
message.delete()
 return
 }
 }
 


  if(!çift2[1]) return message.channel.send(hata2) 
  message.delete()
let başarılı = new Discord.RichEmbed()
.setAuthor(çift2[0].user.username, çift2[1].user.avatarURL)
.setTitle('<a:pkalp:641276271606759445> | Eşleştiriliyor!')
.setDescription('**'+çift2[0]+' <a:sonsuz:641278479970729999> '+çift2[1]+'**')
.setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
.setColor('E52EC6')
message.channel.send(başarılı).then(a => {
  
  setTimeout(() => {

let başarılı = new Discord.RichEmbed()
.setAuthor(çift2[0].user.username, çift2[1].user.avatarURL)
.setTitle('<a:hh:639135059051413524> | Eşleştirildi!')
.setDescription('**'+çift2[0]+' <a:kalps:639134965887664138> '+çift2[1]+'**')
.addBlankField()
.addField('<a:kartopu:633994062428635136>', 'evet onlar artık ayrılmaz bir ikili..')
.setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
.setColor('E52EC6')
a.edit(başarılı)    
    
db.set(`sevgili_${çift2[0].user.id}`, çift2[1].user.id)
db.set(`sevgili_${çift2[1].user.id}`, çift2[0].user.id)    
db.set(`sevgilisi_${çift2[0].user.id}`, çift2[1].user.username)  
db.set(`sevgilisi_${çift2[1].user.id}`, çift2[0].user.username)    

   let hıh = new Discord.RichEmbed()
   .setTitle('<a:pkalp:641276271606759445> | Sonsuzluk Başladı..')
   .setDescription('**'+çift2[0].user.username + '** İle sonsuzluk yolculuğunuzda güzel günler dileriz. :rose: ')
   .setColor('RED')
   .setFooter('CodEming Yönetimi')
    
   let hıh2 = new Discord.RichEmbed()
   .setTitle('<a:pkalp:641276271606759445> | Sonsuzluk Başladı..')
   .setDescription('**'+çift2[1].user.username + '** İle sonsuzluk yolculuğunuzda güzel günler dileriz. :rose: ')
   .setColor('RED')
   .setFooter('CodEming Yönetimi')
    
 client.users.get(çift2[1].id).send(hıh) 
  client.users.get(çift2[0].id).send(hıh2)  
  }, 10000)
  
  
  
  
})

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'eşleştir',
  description: 'taslak', 
  usage: 'eşleştir'
};
