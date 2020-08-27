const Discord = require('discord.js');
const generator = require('generate-password');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

    let iki = await db.fetch(`sevgilisi_${message.author.id}`)
  let sevgili = await db.fetch(`sevgili_${message.author.id}`)
  let puan = await db.fetch(`puanask_${message.author.id}`)
  
  let birpuan = await db.fetch(`puanask_${sevgili}`)
    let birinci;
  if (puan == null) birinci = 0
else birinci = puan
  
  
 
  
  let msjy = message.member.user.username
  
    let embed = new Discord.RichEmbed()
  .setTitle('<a:pandarun:641318474798596136> | Üzgünüm Ama..')
  .setDescription('Sevgilisi olmayan biri bu hizmetten yararlanamaz...')
  .setColor('RED')
   
   let hata12 = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Hatalı Satın Alma Kodu')
  .setDescription('Bir satın alma kodu girmelisiniz! \n `!market` kullanarak satınalma kodlarına tekrar bakınız.')
  .setColor('RED')
  
   
   if(!iki) return message.channel.send(embed).then(x => x.delete(5500))
  
  message.delete()
  let kod = args[0]

  
  if(!kod) return message.channel.send(hata12).then(x => x.delete(15000))
  let hata1 = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Hatalı Satın Alma Kodu')
  .setDescription('kullandığınız **'+kod+'** Hatalı bir kod.\n `!market` kullanarak satınalma kodlarına tekrar bakınız.')
  .setColor('RED')
  if(kod.length !== 5) return message.channel.send(hata1).then(x => x.delete(15000))

     if(kod == 'Trp18') {
  let puanh = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Yetersiz Puan!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Satın Almaya çalıştığın; `Random Kod` adlı,`Trp18` Kodlu ürünü satın alabilmek için yeteri kadar puana sahip değilsiniz.')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Elinizdeki Puan', '`'+birinci+'`')
  .addBlankField()
   .addField('<a:buyuktur:641328397187809311> | Gerekli Puan', 300 - puan)
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('RANDOM') 

 if(puan < 300) return message.channel.send(puanh).then(x => x.delete(15000))
    



    let np = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> | İşlem Başarılı!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Özelden size random oluşturulan kod gönderiliyor.Kod un süresi `4 Dakika`! <a:hh:639135059051413524>')
  .addBlankField()
    .addField('<a:yildiz:633977788981968896> | Kalan Puanınız', '`'+puan+'`')
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')
  message.channel.send(np)
  db.add(`puanask_${message.author.id}`, -300)

       var kart1 = Math.floor(Math.random() * 400);
         
         var password = generator.generate({
        length: 10,
        numbers: true,  
         })
        db.set(`kod`, password)
  db.set(`kodpuan`, kart1)   
       
message.member.send('İşte sizin için oluşturduğum random kod! `'+password+'`')
  return    
}
  
  
  if(kod == '0qRp6') {
let k1 = await db.fetch(`aktifu_${message.author.id}`)
let k2 = await db.fetch(`aktifu_${sevgili}`)

if(k1 & k2) {
  let puanh = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Zaten Satın Alınmış!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Satın Almaya çalıştığın; `sa-as emojili`adlı,`0qRp6` Kodlu ürün zaten aktifleştirilmiş gibi görünüyor..')
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('RANDOM') 
  message.channel.send(puanh)
  return 
}
  let puanh = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Yetersiz Puan!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Satın Almaya çalıştığın; `sa-as emojili` adlı,`0qRp6` Kodlu ürünü aktifleştirmeniz için yeteri kadar puana sahip değilsiniz.')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Elinizdeki Puan', '`'+birinci+'`')
  .addBlankField()
   .addField('<a:buyuktur:641328397187809311> | Gerekli Puan', 350 - puan)
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('RANDOM') 

  
  if(puan < 350) return message.channel.send(puanh).then(x => x.delete(15000))
    
  let np = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> | İşlem Başarılı!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('`sa-as emojili` adlı,`0qRp6` kodlu ürün başarıyla aktif hale getirildi! Şu andan itibaren kullanmaya başlayabilirsiniz..')
  .addBlankField()
    .addField('<a:yildiz:633977788981968896> | Kalan Puanınız', '`'+puan+'`')
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')
  message.channel.send(np)
  db.add(`puanask_${message.author.id}`, -350)
    
  db.set(`aktifu_${message.author.id}`, 'aktif')  
  db.set(`aktifu_${sevgili}`, 'aktif')
 return
  }
    
  
  if(kod == 'PtRp1') {
  let puanh = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Yetersiz Puan!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Satın Almaya çalıştığın; `Nitro` adlı,`PtRp1` Kodlu ürünü satın alabilmek için yeteri kadar puana sahip değilsiniz.')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Elinizdeki Puan', '`'+birinci+'`')
  .addBlankField()
   .addField('<a:buyuktur:641328397187809311> | Gerekli Puan', 580 - puan)
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('RANDOM') 
 if(puan < 580) return message.channel.send(puanh).then(x => x.delete(15000))

    let np = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> | İşlem Başarılı!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('`Nitro` adlı,`PtRp1` Adlı ürünün satın alma işlemi tamamlandı! `'+iki+'` Ye sizin adınıza nitro gönderdim.<a:hh:639135059051413524>')
  .addBlankField()
    .addField('<a:yildiz:633977788981968896> | Kalan Puanınız', puan - 580)
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')
  message.channel.send(np)
  db.add(`puanask_${message.author.id}`, -580)

let nitro = new Discord.RichEmbed()
.setTitle('<a:nitro:641278523289501712> | WuW!')
.setDescription('Bu inanılmaz..! **'+msjy+'** Tarafından size bir **Nitro** Gönderildi! <a:hh:639135059051413524>')
.setColor('RANDOM')
.setFooter(msjy + "'den Sevgilerle..'")
.setImage('https://media.discordapp.net/attachments/635032282134085654/641709859397435393/Ekran_Alnts8.JPG')
client.users.get(sevgili).send(nitro)
  return    
}
  
    if(kod == 'OxD9r') {
  let puanh = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Yetersiz Puan!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Satın Almaya çalıştığın; `Gül` adlı,`OxD9r` Kodlu ürünü satın alabilmek için yeteri kadar puana sahip değilsiniz.')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Elinizdeki Puan', '`'+birinci+'`')
  .addBlankField()
   .addField('<a:buyuktur:641328397187809311> | Gerekli Puan', 90 - puan)
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('RANDOM') 

 if(puan < 90) return message.channel.send(puanh).then(x => x.delete(15000))
    



    let np = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> | İşlem Başarılı!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('`Gül :rose:` adlı,`OxD9r` Adlı ürünün satın alma işlemi tamamlandı! `'+iki+'` Ye sizin adınıza bir **Gül** :rose: gönderdim.<a:hh:639135059051413524>')
  .addBlankField()
    .addField('<a:yildiz:633977788981968896> | Kalan Puanınız', '`'+puan+'`')
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')
  message.channel.send(np)
  db.add(`puanask_${message.author.id}`, -90)

let nitro = new Discord.RichEmbed()
.setTitle(':rose: | Hımm!')
.setDescription('Aşkınızın geçmişi kadar kırmızı bir gül aldın! bu güzel insanın ismi; **'+msjy+'** <a:pkalp:641276271606759445>')
.setColor('RANDOM')
.setFooter(msjy + "'den Sevgilerle..'")
.setImage('https://media.tenor.com/images/0c95d76af522af4af8dbb93f3009a335/tenor.gif')
client.users.get(sevgili).send(nitro)
  return    
}
  
      if(kod == 'öYl76') {
  let puanh = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Yetersiz Puan!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Satın Almaya çalıştığın; `Özel Rol` adlı,`öYl76` Kodlu ürünü satın alabilmek için yeteri kadar puana sahip değilsiniz.')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Elinizdeki Puan', '`'+birinci+'`')
  .addBlankField()
   .addField('<a:buyuktur:641328397187809311> | Gerekli Puan', 4000 - puan)
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('RANDOM') 

 if(puan < 4000) return message.channel.send(puanh).then(x => x.delete(15000))
  db.add(`puanask_${message.author.id}`, -4000)

   message.channel.send('Almak istediğiniz özel rol ismini bulunduğunuz kanala yazın')     
   
      var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
              maxMatches: 1,
              time: 20000,
              errors: ['time']
            })
      
        message.guild.createRole({name: response.first().content, color: 'F32ED1'}).then(s => {
          
   message.member.addRole(s.id)
   message.guild.members.get(sevgili).addRole(s.id)       
  return        
   
        })
} 

if(kod == 'zHox2') {
    let s = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> | Yetersiz Puan!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Satın Almaya çalıştığın; `Özel Oda` adlı,`zHox2` Kodlu ürünü satın alabilmek için yeteri kadar puana sahip değilsiniz.')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Elinizdeki Puan', '`'+birinci+'`')
  .addBlankField()
   .addField('<a:buyuktur:641328397187809311> | Gerekli Puan', 25000 - puan)
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('RANDOM') 

 if(puan < 25000) return message.channel.send(s).then(x => x.delete(15000))

   let np = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> | İşlem Başarılı!')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Özel oda başarıyla satın alındı.Odanız kuruluyor.!.<a:hh:639135059051413524>')
  .addBlankField()
    .addField('<a:yildiz:633977788981968896> | Kalan Puanınız', '**'+puan - 25000+'**')
  .setFooter('Güzel günler dileğiyle..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')
  message.channel.send(np)
  db.add(`puanask_${message.author.id}`, -25000)
  let sevgilis = message.guild.members.get(sevgili)
  let every = message.guild.roles.find(r => r.name === '@everyone')
  message.guild.createChannel(message.member.user.username.charAt(0) +'💞'+ iki.charAt(0), 'voice').then(duyurular => {
  
    duyurular.overwritePermissions(every, {
    		CONNECT : false,
    }) 
       duyurular.overwritePermissions(message.author, {
      CONNECT: true,
     SPEAK: true
    })	 
  
       duyurular.overwritePermissions(sevgilis, {
      CONNECT: true,
     SPEAK: true
    })  
    duyurular.setParent('642641138230099968')
  })
  }
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['satın-al'], 
  permLevel: 0
};

exports.help = {
  name: 'satınal',
  description: 'taslak', 
  usage: 'satınal'
};
