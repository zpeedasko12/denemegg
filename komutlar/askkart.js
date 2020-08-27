const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message, args) => { 


  
  let ikininsevgilisi = await db.fetch(`sevgilisi_${message.author.id}`)
  let iki = await db.fetch(`sevgilisi_${message.author.id}`)
  let sevgili = await db.fetch(`sevgili_${message.author.id}`)
  let msjy = message.member.user.username
  let puan = await db.fetch(`puanask_${message.author.id}`)
  let birpuan = await db.fetch(`puanask_${sevgili}`)

let embed = new Discord.RichEmbed()
  .setTitle('<a:pandarun:641318474798596136> | Üzgünüm Ama..')
  .setDescription('Sevgilisi olmayan biri bu hizmetten yararlanamaz...')
  .setColor('RED')

if(!iki) return message.channel.send(embed).then(x => x.delete(5500))
 
     let timeout = 10800000
   let stanıt = await db.fetch(`kartsure_${message.author.id}`);
   if (stanıt !== null && timeout - (Date.now() - stanıt) > 0) {
   let time = ms(timeout - (Date.now() - stanıt));
   
let hms = new Discord.RichEmbed()
.setTitle('<a:iptal:626445972620443648> | Hata!')
.setDescription('Bu oyundan çok fazla para kazandığını biliyorum ama,Bu komutu kullanmak için; **'+time.hours+'** Saat,**'+time.minutes+'** Dakika,**'+time.seconds+'** Saniye süren daha var.')
.setColor('RED')
message.channel.send(hms).then(s => s.delete(5500))  
   
   } else {  
  var kart1 = Math.floor(Math.random() * 1000);
   var kart2 = Math.floor(Math.random() * 1000);
   var kart3 = Math.floor(Math.random() * 1000);
   var kart4 = Math.floor(Math.random() * 1000);
 let uno1 = client.emojis.has('uno1') 
  let kartlar = new Discord.RichEmbed()
    .setTitle('<a:yasin:643051556949721120> | Rastgele Kart')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Nasıl Oynanır? \n Aşağıda kart numaraları veriliyor.Bulunduğun kanala seçmek istediğin kart numarasını girmelisin.Karttan çıkan para hesabına eklenir.')
  .addBlankField()
  .addField('**__KARTLAR__**', '1. **=>** <:uno1:643055130773553152> \n\n 2. **=>** <:uno2:643055163178876928>  \n\n 3. **=>**<:uno3:643055202764718080> \n\n 4. **=>** <:uno4:643055239360020500>')
  .addBlankField()
  .addField(':information_source: | Küçük Bilgiler', '**»** Her kartta farklı bir sayı bulunur. \n **»** Kartlardaki puan miktarı 1000 kadar olabilir. \n **»** %10 ihtimalle bir kartın içinde 100.000 puan olabilir.!')
  .setFooter('Bol Şanslar!')
  .setTimestamp()
  .setThumbnail('https://media.giphy.com/media/Jo85Nij8XBKRvY5O00/giphy.gif')
  .setURL('https://discord.gg/3vMKch')
  .setColor('RANDOM')
  let filtre = mes => mes.author.id === message.author.id;  
message.channel.send(kartlar).then(msg => {
      message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
         if(collected.first().content === "1") { 
          
         
        
  msg.delete()
     let kartlar = new Discord.RichEmbed()
    .setTitle('<a:yasin:643051556949721120> | Rastgele Kart')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Kart açılımı başarılı!')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Açılan Kart', '**»** Kart Numarası: **1** \n\n **»** Kart: <:uno1:643055130773553152> \n\n **»** Karttan Kazanılan Puan: `'+kart1+'`')
  .addBlankField()
  .addField('<a:iptal:626445972620443648> | Kaybedilen Kartlar', 'kart 2 **»** <:uno2:643055163178876928> **»** `'+kart2+'` Puan! \n\n kart 3 **»** <:uno3:643055202764718080> **»** `'+kart3+'` Puan! \n\n kart 4 **»** <:uno4:643055239360020500> **»** `'+kart4+'` Puan!')
  .setFooter('Bol Şanslar!')
  .setTimestamp()
  .setThumbnail('https://media.giphy.com/media/Jo85Nij8XBKRvY5O00/giphy.gif')
  .setURL('https://discord.gg/3vMKch')
  .setColor('RED')
  message.channel.send(kartlar)  
      db.add(`puanask_${message.author.id}`, kart1)

     return
   }
 
                 if(collected.first().content === "2") { 
          
         
        
  msg.delete()
     let kartlar = new Discord.RichEmbed()
    .setTitle('<a:yasin:643051556949721120> | Rastgele Kart')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Kart açılımı başarılı!')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Açılan Kart', '**»** Kart Numarası: **2** \n\n **»** Kart: <:uno2:643055163178876928> \n\n **»** Karttan Kazanılan Puan: `'+kart2+'`')
  .addBlankField()
  .addField('<a:iptal:626445972620443648> | Kaybedilen Kartlar', 'kart 1 **»** <:uno1:643055130773553152> **»** `'+kart1+'` Puan! \n\n kart 3 **»** <:uno3:643055202764718080> **»** `'+kart3+'` Puan! \n\n kart 4 **»** <:uno4:643055239360020500> **»** `'+kart4+'` Puan!')
  .setFooter('Bol Şanslar!')
  .setTimestamp()
  .setThumbnail('https://media.giphy.com/media/Jo85Nij8XBKRvY5O00/giphy.gif')
  .setURL('https://discord.gg/3vMKch')
  .setColor('GREEN')
  message.channel.send(kartlar)  
      db.add(`puanask_${message.author.id}`, kart1)

     return
   }
                     if(collected.first().content === "3") { 
          
         
        
  msg.delete()
     let kartlar = new Discord.RichEmbed()
    .setTitle('<a:yasin:643051556949721120> | Rastgele Kart')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Kart açılımı başarılı!')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Açılan Kart', '**»** Kart Numarası: **3** \n\n **»** Kart: <:uno3:643055202764718080> \n\n **»** Karttan Kazanılan Puan: `'+kart3+'`')
  .addBlankField()
  .addField('<a:iptal:626445972620443648> | Kaybedilen Kartlar', 'kart 1 **»** <:uno1:643055130773553152> **»** `'+kart1+'` Puan! \n\n kart 2 **»** <:uno2:643055163178876928> **»** `'+kart2+'` Puan!\n\n kart 4 **»** <:uno4:643055239360020500> **»** `'+kart4+'` Puan!')
  .setFooter('Bol Şanslar!')
  .setTimestamp()
  .setThumbnail('https://media.giphy.com/media/Jo85Nij8XBKRvY5O00/giphy.gif')
  .setURL('https://discord.gg/3vMKch')
  .setColor('YELLOW')
  message.channel.send(kartlar)  
      db.add(`puanask_${message.author.id}`, kart1)

     return
   }
        
        
        if(collected.first().content === "4") { 
          
  msg.delete()
     let kartlar = new Discord.RichEmbed()
    .setTitle('<a:yasin:643051556949721120> | Rastgele Kart')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Kart açılımı başarılı!')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Açılan Kart', '**»** Kart Numarası: **4** \n\n **»** Kart: <:uno4:643055239360020500> \n\n **»** Karttan Kazanılan Puan: `'+kart4+'`')
  .addBlankField()
  .addField('<a:iptal:626445972620443648> | Kaybedilen Kartlar', 'kart 1 **»** <:uno1:643055130773553152> **»** `'+kart1+'` Puan! \n\n kart 2 **»** <:uno2:643055163178876928> **»** `'+kart2+'` Puan!\n\n kart 3 **»** <:uno3:643055202764718080> **»** `'+kart3+'` Puan!')
  .setFooter('Bol Şanslar!')
  .setTimestamp()
  .setThumbnail('https://media.giphy.com/media/Jo85Nij8XBKRvY5O00/giphy.gif')
  .setURL('https://discord.gg/3vMKch')
  .setColor('BLUE')
  message.channel.send(kartlar)  
      db.add(`puanask_${message.author.id}`, kart1)

     return
   }
        
      })
 
})
if(!message.member.roles.has('634991951355314177')) {
  db.set(`kartsure_${message.author.id}`, Date.now())
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
  name: 'kartlar',
  description: 'taslak', 
  usage: 'kartlar'
};
