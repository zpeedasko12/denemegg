const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message, args) => { 

  
     let iki = await db.fetch(`sevgilisi_${message.author.id}`)
  let sevgili = await db.fetch(`sevgili_${message.author.id}`)
  let puan = await db.fetch(`puanask_${message.author.id}`)
  let birpuan = await db.fetch(`puanask_${sevgili}`)
  let msjy = message.member.user.username
  
  let embed = new Discord.RichEmbed()
  .setTitle('<a:pandarun:641318474798596136> | Üzgünüm Ama..')
  .setDescription('Sevgilisi olmayan biri bu hizmetten yararlanamaz...')
  .setColor('RED')

  if(!iki) return message.channel.send(embed).then(x => x.delete(5500))
 
      
   let timeout = 10800000
   let stanıt = await db.fetch(`çark_${message.author.id}`);
   if (stanıt !== null && timeout - (Date.now() - stanıt) > 0) {
   let time = ms(timeout - (Date.now() - stanıt));
 
     
     let hms = new Discord.RichEmbed()
.setTitle('<a:iptal:626445972620443648> | Hata!')
.setDescription('Çark komutunda çok şanslı olabilirsin ama bu komutu kullanmak için; **'+time.minutes+'** Dakika,**'+time.seconds+'** Saniye süren daha var.')
.setColor('RED')
message.channel.send(hms).then(s => s.delete(5500))  
} else { 

  var espri = Math.floor(Math.random() * 200);
  
  let sıfır = new Discord.RichEmbed()
  .setTitle('<a:isikli:642696382414585856> | Çark Dönüyor!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Dönüş sonucunda; `0-200` arası bir para kazanacaksın!')
  .addBlankField()
  .addField(':information_source: | Küçük Bilgiler', '**»** Çark tamamen rastgele bir seçim yapar.Yapımcının herhangi bir işlevi yoktur.\n **»** Çark 3 saate bir kullanılabilir.')
  .setFooter('Umrım şansın bol olur!')
  .setTimestamp()
  .setThumbnail('https://images.milled.com/2019-07-17/raLHJAj5RIbPC1Ox/x1DUTrNSBpw3.gif')
  .setColor('RANDOM') 
message.channel.send(sıfır).then(x => {
 db.set(`çark_${message.author.id}`, Date.now())
    setTimeout(() => {
 let puanı = puan + espri
      
 let yorum;
  if(espri < 50) yorum = 'Bu gün şansız gününde misin?'
  if(espri > 50 & espri < 130) yorum = 'Hiç yoktan iyidir ne dersin?'  
  if(espri > 130 & espri < 180) yorum = 'Birileri bu gün şanslı gününde!'
  if(espri > 180 & espri < 200) yorum = 'Sen gerçekten çok şanslısın!'
      
 
 
      let sıfır = new Discord.RichEmbed()
  .setTitle(':tada: | Çark Döndü!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Çark dönüşü sonlandı,aşağıdan detayları görebilirsin.!')
  .addBlankField()
  .addField('<a:parti:642699046447874054> | Sonuçlar:', '**»** Çark dönüşü sonucu `'+espri+'` Puan kazandın! \n\n **»** Artık `'+puanı+'` Puana sahipsin!')
  .addBlankField()
  .addField('<a:verifed:633993795066658832> | Bot Yorumu:', '**»** '+yorum)
  .setFooter('Aynı komutu 3 saat sonra tekrar kullanabilirsin.')
  .setTimestamp()
  .setThumbnail('https://images.milled.com/2019-07-17/raLHJAj5RIbPC1Ox/x1DUTrNSBpw3.gif')
  .setColor('RED')   
  x.edit(sıfır) 
 
      if(!message.member.roles.has('634991951355314177')) {

if(!message.member.roles.has('634991951355314177')) {
        db.add(`puanask_${message.author.id}`, espri)
}
      }
      
      }, 7000)
  
  
  
})
  }
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'çark',
  description: 'taslak', 
  usage: 'çark'
};
