const Discord = require('discord.js');
const db = require('quick.db')
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
 
  let kontrols = await db.fetch(`bankam_${message.author.id}`)
  if(kontrols) return message.reply('Banka şu an başka bir işlem ile meşgul lütfen bekle.')
  
  
  let para = args[0]
  
  let hatalı = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:iptal:626445972620443648> | Hatalı Kullanım!')
 .setDescription('Sevgili,**'+ikininsevgilisi+'** Gönderilecek puan miktarını girmelisin.! <a:pkalp:641276271606759445>')
 .addBlankField()
 .addField('Doğru Kullanım:', '`!gönder <miktar>`')
.setURL('https://discord.gg/928PgW')
  .setColor('79a9ff')
  if(!para) return message.channel.send(hatalı).then(d => d.delete(10000))
  
  if(para < 0) return message.channel.send(hatalı).then(d => d.delete(10000))
  
  
  
  db.set(`bankam_${message.author.id}`, 'mesgul')
  let işlem = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:google:635846373052383243> | İşleme Alınıyor..')
  .setDescription('Banka isteğinizi işleme aldı lütfen biraz bekleyin..!')
  .addBlankField()
  .addField(':credit_card: | Gönderici Hesap', 'Hesap Sahibi: **'+msjy+'** \n\n Hesap Puan: **'+puan +'**')
  .addBlankField()
  .addField(':mag_right: | Alıcı Hesap', 'Hesap Sahibi: **'+ikininsevgilisi+'** \n\n Hesap Puan: **'+birpuan+'**')
  .addBlankField()
  .setURL('https://discord.gg/928PgW')
  .addField('<a:hyper:632905422407335948> | Gönderilecek Miktar', para)
  .setColor('E52EC6')
  message.channel.send(işlem).then(s => {
   

  
    setTimeout(() => {
  
 if(puan < para) {
  let eksik = (para - puan)
   
   let işlem = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | İşlem İptali!')
  .setURL('https://discord.gg/928PgW')
    .setDescription('**Banka Reddeti:** Puan Transferi,**'+eksik +'** eksik puan bulunduğundan işlem gerçekleştirilemedi.')
 .setColor('RED')  
s.edit(işlem)
  db.delete(`bankam_${message.author.id}`)
   message.delete()
   return
   
   }

  if(isNaN(args[0])) {
       let işlem = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | İşlem İptali!')
  .setURL('https://discord.gg/928PgW')
    .setDescription('**Banka Reddeti:** Gönderme işlemi yapabilmemiz için bir sayı girmen gerektiğini bilmen gerekirdi!')
 .setColor('RED')  
s.edit(işlem)
   message.delete()
  db.delete(`bankam_${message.author.id}`)
   
   return
   
  }    
      
      if(para < 100) {
  let eksik = (para - puan)
   
   let işlem = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | İşlem İptali!')
  .setURL('https://discord.gg/928PgW')
    .setDescription('**Banka Reddeti:** Puan transferi en düşük `100` puan ile yapılabilir.')
 .setColor('RED')  
s.edit(işlem)
   message.delete()
  db.delete(`bankam_${message.author.id}`)
   
   return
   
   }      
      
      
   let işlem = new Discord.RichEmbed()
    .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:verifed:633993795066658832> | İşlem Onaylandı..')
  .setDescription('Banka başarıyla istemi gerçekleştirdi.Hesaba puan gönderildi!')
  .addBlankField()
  .addField(':credit_card: | Gönderici Hesap', 'Hesap Sahibi: **'+msjy+'** \n\n Hesap Puan: **'+puan+'**')
  .addBlankField()
  .addField(':mag_right: | Alıcı Hesap', 'Hesap Sahibi: **'+ikininsevgilisi+'** \n\n Hesap Puan: **'+birpuan +'**')
  .addBlankField()
  .setURL('https://discord.gg/928PgW')
  .addField('<a:hyper:632905422407335948> | Gönderilen Miktar', para)
  .setColor('GREEN')     
  s.edit(işlem)    
  db.delete(`bankam_${message.author.id}`)     
 db.add(`puanask_${sevgili}`, para)    
 db.add(`puanask_${message.author.id}`, -para)       
      
      
    }, 10000)
    
    
  })
  
  

  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['g'], 
  permLevel: 0
};

exports.help = {
  name: 'gönder',
  description: 'taslak', 
  usage: 'gönder'
};
