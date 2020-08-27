const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 


  let kod = args[0]
 
 let kodlar = await db.fetch(`kod`)
let kodpara = await db.fetch(`kodpuan`)

    let iki = await db.fetch(`sevgilisi_${message.author.id}`)

    let embed = new Discord.RichEmbed()
  .setTitle('<a:pandarun:641318474798596136> | Üzgünüm Ama..')
  .setDescription('Sevgilisi olmayan biri bu hizmetten yararlanamaz...')
  .setColor('RED')

if(!iki) return message.channel.send(embed).then(x => x.delete(5500))


  
  
  
  
let kods = new Discord.RichEmbed()
  .setAuthor(message.member.user.username, message.author.avatarURL)
.setTitle('<a:yildiz:633977788981968896> | Elinde bir kod mu var?')
.setDescription('Bu muhteşem! Kodlar sayesinde **Puan** kazanabilirsin!\n Kodları kullanabilmek için kodların kullanışmamış olması gerekiyor.Aşağıdaki şekilde kodunu tekrar girmeyi dene!')
.addBlankField()
.addField('Doğru Kullanım', '`!kod <kodunuz>`')
.addBlankField()
.addField(':information_source: | Küçük Bilgiler', '**»** Kodlar 10 karakterden oluşur.\n **»** Kodların içinde sayılar da vardır.')
.setColor('RANDOM') 
 if(!kod) return message.channel.send(kods)
 if(kod.length !== 10) return message.channel.send(kods) 
  if(kod !== kodlar) return message.reply('hatalı bir kod girdiniz.')
  
 
  let hm = new Discord.RichEmbed()
 .setAuthor(message.member.user.username, message.author.avatarURL)
 .setTitle('<a:google:635846373052383243> | Kod Açılıyor..')
.setDescription('Kod açılımı başladı lütfen biraz bekleyin!')
.setColor('RANDOM') 
message.channel.send(hm).then(s => {
    db.delete(`kod`,)
 db.delete(`kodpuan`)  
  setTimeout(() => {

  let hm = new Discord.RichEmbed()
 .setAuthor(message.member.user.username, message.author.avatarURL)
 .setTitle('<a:yildiz:633977788981968896> | Girişim Başarılı! | <a:yildiz:633977788981968896>')
.setDescription('Kod Açıldı!')
  .addBlankField()
  .addField('<a:buyuktur:641328397187809311> Kazanılan Puan:', '**'+kodpara+'**')
  .setFooter('Kazanılan para hesabınıza yatırıldı.!')
.setColor('RANDOM')      
  db.add(`puanask_${message.author.id}`, kodpara)    
 
  
     s.edit(hm)  
     
   }, 10000)
  
  
})  
  
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kodgir'], 
  permLevel: 0
};

exports.help = {
  name: 'kod',
  description: 'taslak', 
  usage: 'kod'
};
