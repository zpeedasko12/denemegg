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
  let timeout = 86400000
   let stanıt = await db.fetch(`soygun_${message.author.id}`);
   if (stanıt !== null && timeout - (Date.now() - stanıt) > 0) {
   let time = ms(timeout - (Date.now() - stanıt));
 
     
     let hms = new Discord.RichEmbed()
.setTitle('<a:iptal:626445972620443648> | Hata!')
.setDescription('Çark komutunda çok şanslı olabilirsin ama bu komutu kullanmak için; **'+time.hours+'** Saat,**'+time.minutes+'** Dakika,**'+time.seconds+'** Saniye süren daha var.')
.setColor('RED')
message.channel.send(hms).then(s => s.delete(5500))  
} else { 
  
  let menü = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<:polis:644238848599130122> | Soygun Başlıyor!')
  .setDescription('Banka soygunun ilk adımına hoşgeldin.Hangi bankaya saldıracağız patron?')
  .addBlankField()
  .addField('<a:yildiz:633977788981968896> | Bankalar', ':moneybag: | SüloBank \n\n :moneybag: | YasinBank \n\n :moneybag: | CodEmingBank')
  .addBlankField()
  .addField('Buna ne gerek var?', 'Bu seçiminiz oyunu etkileyecek.')
  .setURL('https://discord.gg/928PgW')
  .setThumbnail('https://66.media.tumblr.com/251d7a0207662eaa7197ec11cff17901/tumblr_p2i9moCP571vekp86o1_400.gifv')
  .setColor('E52EC6')
    let filtre = mes => mes.author.id === message.author.id;  
message.channel.send(menü).then(msg => {
message.channel.send('Cevabınız bekleniyor.')
  message.channel.awaitMessages(filtre, {
          max: 1
      })
        .then(collected => {
   let yer;
    
    if(collected.first().content === "SüloBank") yer = 'SüloBank'
     if(collected.first().content === "YasinBank") yer = 'YasinBank'
     if(collected.first().content === "CodEmingBank") yer = 'CodEmingBank'
    if(!yer) return message.channel.send('Hatalı kullanım tespiti.Soygun iptal edildi!')
  
    let devam = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<:polis:644238848599130122> | Soyguna Devam!')
  .setDescription('Harika!, **'+yer+'** Bankasını soyuyoruz! Saldırıda yanımıza kaç kişi alacağız?')
  .addBlankField()
  .addField('Dikkat!', 'herhangi bir sayı girmezseniz kullanım hakkı iptal olucak.Yanınıza ne kadar fazla adam alırsanız,Soygun sonu o kadar puanınız düşer.')
  .setURL('https://discord.gg/928PgW')
  .setThumbnail('https://66.media.tumblr.com/251d7a0207662eaa7197ec11cff17901/tumblr_p2i9moCP571vekp86o1_400.gifv')
  .setColor('E52EC6')  
   message.channel.send(devam).then(msg => {
message.channel.send('Cevabınız bekleniyor.')
  message.channel.awaitMessages(filtre, {
          max: 1
      })
        .then(collected => {
    if(isNaN(collected.first().content)) return message.channel.send('Bir sayı belirtmediğiniz için işlemi iptal ediyorum.')
    if(collected.first().content < 0) return message.channel.send('Bir sen mi akıllısın? - asker ile banka soymak iq seviyeninde - ile başladığını gösteriyor.')
    
    let asker = collected.first().content
       let devam = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:google:635846373052383243> | Soygun Sonlanıyor!')
  .setDescription('Soygunun sonuçlanmasını bekle!')
  .setURL('https://discord.gg/928PgW')
  .setThumbnail('https://66.media.tumblr.com/251d7a0207662eaa7197ec11cff17901/tumblr_p2i9moCP571vekp86o1_400.gifv')
  .setColor('GREEN')   
 message.channel.send(devam).then(s => {
 
   
  let ç1 = Math.floor(Math.random() * 100);
  let ç2 = Math.floor(Math.random() * 50);
  let çıkarma = Math.floor(Math.random() * 45);
   
   setTimeout(() => {
let olamaz = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:selin:641676134081232896> | Olamaz!')
  .setDescription('Bu da ne? Bu bir kapı kilidi! Ama bu nedir?? bir şifre istiyor.. \n\n **Yardımcı Yasin:** Hey..! Burda bir ipucu buldum! \n\n **'+msjy+':** Bu güzel.Bu ipucunu biraz düşünmeliyim!')
  .addBlankField()
  .addField('<a:hyper:632905422407335948> | İpucu:', '**('+ç1+'.'+ç2+') -'+çıkarma+'**')
  .setURL('https://discord.gg/928PgW')
  .setThumbnail('https://66.media.tumblr.com/251d7a0207662eaa7197ec11cff17901/tumblr_p2i9moCP571vekp86o1_400.gifv')
  .setColor('RED')    
  s.edit(olamaz)
}, 10000)
   
  message.channel.send('Cevabınız bekleniyor.')
  message.channel.awaitMessages(filtre, {
          max: 1
      })
        .then(collected => { 
    let sonuc = (ç1*ç2)-çıkarma

    let olamaz3 = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:iptal:626445972620443648>| Soygun Başarısız!')
  .setDescription('Hatalı şifre girdin.Kapının alarmı çaldı ve polisler sen ve **'+asker+'** Adamın tutuklandı! Olması gereken şifre: `'+sonuc+'`')
  .setURL('https://discord.gg/928PgW')
  .setThumbnail('https://external-preview.redd.it/UsjyXf1mpS0MsO2szfdI473HHZ9RAz0lFggCCUX5dCI.jpg?auto=webp&s=1e5d0f3dbcf6922caa9bea3a932ffd515acdcf85')
  .setColor('RED')   
 if(collected.first().content !== `${sonuc}`) return message.channel.send(olamaz3)
    

 if(asker < 25) {
let olamaz2 = new Discord.RichEmbed()
   .setAuthor(message.member.user.username, message.author.avatarURL)
  .setTitle('<a:iptal:626445972620443648>| Soygun Başarısız!')
  .setDescription('Soygun sırasında. `'+asker+'` sayıdaki askerinizin hepsi öldü.Ve tutuklandınız.Birdahakine daha fazla asker almayı deneyebilirsin..')
  .setURL('https://discord.gg/928PgW')
  .setThumbnail('https://external-preview.redd.it/UsjyXf1mpS0MsO2szfdI473HHZ9RAz0lFggCCUX5dCI.jpg?auto=webp&s=1e5d0f3dbcf6922caa9bea3a932ffd515acdcf85')
  .setColor('RED')   
message.channel.send(olamaz2) 
 return
 }
   let ölen = Math.floor(Math.random() * asker);
   let giden = asker * 10
   let kazanılan = Math.floor(Math.random() * 9000);
   let tkazanılan = kazanılan - giden
   
   
   let işlem = new Discord.RichEmbed()
    .setAuthor(message.member.user.username, message.author.avatarURL)
   .setTitle('<a:verifed:633993795066658832> | Soygun Başarılı!')
  .setDescription('Soygun başarılı..Banka soyuldu! Aşağıda kazanç bilgilerin veriliyor.')
  .addBlankField()
  .addField('<a:isikli:642696382414585856> | Kazanç: ', '**»** Yanına alınan asker sayısı: `'+asker+'` \n\n **»** Ölen asker sayısı:  `'+ölen+'` \n\n **»** Askerlere verilen puan: `'+giden+'`')
  .addBlankField()
  .addField(':star: | Toplam Kazanç', '`'+tkazanılan+'`')
  .setURL('https://discord.gg/928PgW')
  .setColor('GREEN')     
  .setThumbnail(message.author.avatarURL           )
message.channel.send(işlem)
  db.add(`puanask_${message.author.id}`, tkazanılan) 
 
  return

    })
   
 })   
  })
   })
  })
})

if(!message.member.roles.has('634991951355314177')) {
  db.set(`soygun_${message.author.id}`, Date.now())
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
  name: 'soygun',
  description: 'taslak', 
  usage: 'soygun'
};
