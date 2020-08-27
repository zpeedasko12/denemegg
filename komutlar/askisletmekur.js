const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
 
  
  let ikininsevgilisi = await db.fetch(`sevgilisi_${message.author.id}`)
  let iki = await db.fetch(`sevgilisi_${message.author.id}`)
  let sevgili = await db.fetch(`sevgili_${message.author.id}`)
  let msjy = message.member.user.username
  let puan = await db.fetch(`puanask_${message.author.id}`)
  let birpuan = await db.fetch(`puanask_${sevgili}`)
  let işletme = await db.fetch(`isletme_${message.author.id}`)
let embed = new Discord.RichEmbed()
  .setTitle('<a:pandarun:641318474798596136> | Üzgünüm Ama..')
  .setDescription('Sevgiliniz olmadan kurum kuramazsınız.')
  .setColor('RED')

if(!iki) return message.channel.send(embed).then(x => x.delete(5500))
 
 if(işletme) return message.reply('Hata! zaten **'+işletme+'** Adında bir işletmeniz bulunuyor') 
  
  
  let menü = new Discord.RichEmbed()
  .setTitle('<a:yildiz:633977788981968896> | İşletme Kurmak.')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('İşletme size günlük olarak kazanç sağlayacaktır.İşletmeniz level atladığında,Kazancınız yükselir.')
  .addBlankField()
  .addField(':question: | İşletme Nasıl Kurulur?', 'İşletme kurmak çok basittir.Aşağıda kurulumun bir örneği bulunuyor.\n **> = Bot Mesajı** \n **- = Siz** \n\n Örnek: ```> Bu embed \n > Kurulacak İşletmenin ismi nedir? \n -Owner Team Cafe \n > İşletme Alanını seçiniz <numaralar> \n -1```')
  .addBlankField()
  .addField('İşte Bu Kadar.!', 'Bunları yaptıktan sonra işletmenizi kurmuş bulunuyorsunuz.')
  .setTimestamp()
  .setThumbnail('https://media.tenor.com/images/88699685ba8b74fc534913c7376a3288/tenor.gif')
  .setURL('https://discord.gg/3vMKch')
  .setColor('RED')  
     let filtre = mes => mes.author.id === message.author.id;  
message.channel.send(menü).then(msg => {
message.channel.send('Kurulacak işletmenin ismi nedir?')
  message.channel.awaitMessages(filtre, {
          max: 1
      })
        .then(collected => {
    let isim = collected.first().content
let bu = new Discord.RichEmbed()
.setTitle('İsim Kaydedildi!')
.setDescription('İsim tercihinizi `'+isim+'` Olarak kabul ediyorum.Peki çalışma alanı ne olucak? Bulunduğun kanala aşağıdaki seçeneğe göre numarayı atmalısın.')
.addBlankField()
.addField('Numaralar:', '[1] **=>** Yemek,Yiyecek,Restoran \n\n [2] **=>** Teknoloji \n\n [3] **=>** Yapı (inşaat)')
 message.channel.send(bu)
message.channel.awaitMessages(filtre, {
          max: 1
 
      })
        .then(collected => {
       if(collected.first().content === "1") { 
    
   let işlem = new Discord.RichEmbed()
    .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı..')
  .setDescription('Şirketiniz başarıyla kuruldu!')
  .addBlankField()
  .addField(':busts_in_silhouette: | İşletme Sahipleri:', '`'+message.member.user.username+','+iki+'`')
  .addBlankField()
  .addField(':mag_right: | İşletme Bilgileri', 'İşletme İsmi: **'+isim+'** \n\n İşletme Alanı: **Yiyecek.Yemek,Restoran**')
  .addBlankField()
  .addField('İşletme Seviyesi', '1')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')     
 message.channel.send(işlem)
 db.set(`isletme_${message.author.id}`, isim)
 db.set(`isletme_${sevgili}`, isim)        
 db.set(`isletmeamac_${message.author.id}`, 'Yiyecek.Yemek,Restoran')
 db.set(`isletmeamac_${sevgili}`, 'Yiyecek.Yemek,Restoran')          
 db.set(`isletmelevel_${message.author.id}`, 1)
 db.set(`isletmelevel_${sevgili}`, 1)   
         return
   }
      if(collected.first().content === "2") { 
       
   let işlem = new Discord.RichEmbed()
    .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı..')
  .setDescription('Şirketiniz başarıyla kuruldu!')
  .addBlankField()
  .addField(':busts_in_silhouette: | İşletme Sahipleri:', '`'+message.member.user.username+','+iki+'`')
  .addBlankField()
  .addField(':mag_right: | İşletme Bilgileri', 'İşletme İsmi: **'+isim+'** \n\n İşletme Alanı: **Teknoloji**')
  .addBlankField()
  .addField('İşletme Seviyesi', '1')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')     
  message.channel.send(işlem)
 db.set(`isletme_${message.author.id}`, isim)
 db.set(`isletme_${sevgili}`, isim)        
 db.set(`isletmeamac_${message.author.id}`, 'Teknoloji')
 db.set(`isletmeamac_${sevgili}`, 'Teknoloji')    
 db.set(`isletmelevel_${message.author.id}`, 1)
 db.set(`isletmelevel_${sevgili}`, 1)       
        return
      }
       if(collected.first().content === "3") { 
       
         let işlem = new Discord.RichEmbed()
    .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı..')
  .setDescription('Şirketiniz başarıyla kuruldu!')
  .addBlankField()
  .addField(':busts_in_silhouette: | İşletme Sahipleri:', '`'+message.member.user.username+' , '+iki+'`')
  .addBlankField()
  .addField(':mag_right: | İşletme Bilgileri', 'İşletme İsmi: **'+isim+'** \n\n İşletme Alanı: **Yapı,İnşaat**')
  .addBlankField()
  .addField('İşletme Seviyesi', '1')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')     
  message.channel.send(işlem)
  db.set(`isletme_${message.author.id}`, isim)
 db.set(`isletme_${sevgili}`, isim)        
 db.set(`isletmeamac_${message.author.id}`, 'Yapı (inşaat)')
 db.set(`isletmeamac_${sevgili}`, 'Yapı (inşaat)')    
  db.set(`isletmelevel_${message.author.id}`, 1)
 db.set(`isletmelevel_${sevgili}`, 1)   
         return
       }
  return message.channel.send('Hatalı bir kullanım tespit ettim lütfen komutu tekrar kullanın.')
     })
        
        
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
  name: 'işletme-kur',
  description: 'cafe', 
  usage: 'işletme-kur'
};
