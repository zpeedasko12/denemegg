const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
    let hata = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Yetki Hatası!')
  .setDescription('Kod oluşturmak için yeterli yetkiye sahip değilsin!')
  .setColor('E52EC6')
  
  if(message.author.id !== "598176001037565960") if(message.author.id !== "419214688061227009") return message.channel.send(hata).then(hata => hata.delete(7000))
  
    let iki = await db.fetch(`sevgilisi_${message.author.id}`)
  let sevgili = await db.fetch(`sevgili_${message.author.id}`)
  let puan = await db.fetch(`puanask_${message.author.id}`)
  let mülk = await db.fetch(`mülk_${message.author.id}`)
  let birpuan = await db.fetch(`puanask_${sevgili}`)
  let işletmesi = await db.fetch(`isletme_${message.author.id}`)  
  let amacı = await db.fetch(`isletmeamac_${message.author.id}`)
  let level = await db.fetch(`isletmelevel_${message.author.id}`)
  
  
  let user = message.mentions.users.first()
  
  if(!user) return message.reply('işlem devamı için birini etiketle.')
  
       let filtre = mes => mes.author.id === message.author.id;  
message.channel.send(user + ' Adlı arkadaşın ne verisini siliyorum? ```Hepsi => Ne var ne yok hepsini siler. \n işletme => İşletme verilerini siler. \n mülk => Mülk verilerini siler \n Puan => Puan verilerini siler \n aşk => Sevgilisi ile olan bağını koparır.\n süre => Bekleme sürelerini siler.```').then(msg => {
 
  message.channel.send('**Cevabını bekliyorum.**')
 
  message.channel.awaitMessages(filtre, {
          max: 1
      })
        .then(collected => {
   if(collected.first().content === "hepsi") { 
    db.delete(`sevgilisi_${user.id}`) 
    db.delete(`sevgili_${user.id}`)
    db.delete(`puanask_${user.id}`)
    db.delete(`mülk_${user.id}`)
    db.delete(`isletme_${user.id}`)
    db.delete(`isletmeamac_${user.id}`)
    db.delete(`isletmelevel_${user.id}`)
  
  message.channel.send(user + ' Tüm verileri silindi.')       
   }
   if(collected.first().content === "işletme") { 
    db.delete(`isletme_${user.id}`)
    db.delete(`isletmeamac_${user.id}`)
    db.delete(`isletmelevel_${user.id}`)
  
  message.channel.send(user + ' işletme verileri silindi.')      
   }    
  if(collected.first().content === "mülk") { 
    db.delete(`mülk_${user.id}`)
  
  message.channel.send(user + ' Mülk verileri silindi.')       
   } 
     if(collected.first().content === "puan") { 
    db.delete(`puanask_${user.id}`)
  
  message.channel.send(user + ' Puan verileri silindi.')   
     
   }  
   if(collected.first().content === "aşk") { 
    db.delete(`sevgilisi_${user.id}`) 
    db.delete(`sevgili_${user.id}`)
  
  message.channel.send(user + ' aşk verileri silindi.')   

   }    
      if(collected.first().content === "süre") { 
      db.delete(`kartsure_${user.id}`) 
     db.delete(`çark_${user.id}`)  
     db.delete(`stanıt_${user.id}`);  
    db.delete(`soygun_${user.id}`);
  message.channel.send(user + ' Süre verileri silindi.')       
     }   
  })
})
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'verisil',
  description: 'taslak', 
  usage: 'verisil'
};
