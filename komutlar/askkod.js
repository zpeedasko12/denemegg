const Discord = require('discord.js');
const db = require('quick.db')
const generator = require('generate-password');
exports.run = (client, message, args) => { 

  
  
  let hata = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Yetki Hatası!')
  .setDescription('Kod oluşturmak için yeterli yetkiye sahip değilsin!')
  .setColor('E52EC6')
  
  if(message.author.id !== "598176001037565960") if(message.author.id !== "419214688061227009") return message.channel.send(hata).then(hata => hata.delete(7000))
  
 let para = args[0]
 
 let hata2 = new Discord.RichEmbed()
 .setTitle('<a:iptal:626445972620443648> | Hatalı Kod Oluşturma!')
 .setDescription('Kod ile kazanılacak puanı belirtmelisiniz.')
 .addBlankField()
 .addField('Doğru Kullanım:', '`!kod-oluştur <puan>`')
 .setColor('79a9ff')
 
 if(!para) {
   message.channel.send(hata2).then(x => x.delete(13000))
 message.delete()
   return
 }
  
  let anaembed = new Discord.RichEmbed()
    .setTitle('<a:google:635846373052383243>| Kod Oluşturuluyor')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Belirttiğiniz Kod Oluşturulma işlemine başladı!,Oluşturulan kod size dm yoluyla iletilecek.')
  .addBlankField()
  .addField('<a:boost:639135012846829610> | Kod Karşılığında Verilecek Puan:', '**'+para+'**')
  .setFooter('CodEming Yönetimi')
  .setColor('RANDOM')
  message.channel.send(anaembed).then(x => {
    setTimeout(() => {
      
         var password = generator.generate({
        length: 10,
        numbers: true,  
         })
      
  let anaembed = new Discord.RichEmbed()
    .setTitle('<a:verifed:633993795066658832> | Kod Oluşturuldu!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Belirttiğiniz Kod Oluşturulma işlemi başarı ile tamamlandı,Özelden kod verildi!')
  .addBlankField()
  .addField('<a:boost:639135012846829610> | Kod Karşılığında Verilecek Puan:', '**'+para+'**')
.setColor('RANDOM')
  .setFooter('CodEming Yönetimi')      
  x.edit(anaembed)

message.member.send(para + ' Karşılığındaki kod: `'+password+'`')
     
  db.set(`kod`, password)
  db.set(`kodpuan`, para)    
 
      
    }, 10000)  
    })
    
 

  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kods'], 
  permLevel: 0
};

exports.help = {
  name: 'kod-oluştur',
  description: 'taslak', 
  usage: 'kod-oluştur'
};
