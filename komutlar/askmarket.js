const Discord = require('discord.js');
const db = require('quick.db')
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
  
  let birinci;
  if (puan == null) birinci = 0
else birinci = puan

let s;
  if (birpuan == null) s = 0
else s = birpuan
  
let q;
  if(puan > 350) q = '<a:verifed:633993795066658832>'
  else q = '<a:iptal:626445972620443648>'
  
let e;
  if(puan > 580) e = '<a:verifed:633993795066658832>'
  else e = '<a:iptal:626445972620443648>'  
 
 let r;
  if(puan > 90) r = '<a:verifed:633993795066658832>'
  else r = '<a:iptal:626445972620443648>'   
   let t;
  if(puan > 4000) t = '<a:verifed:633993795066658832>'
  else t = '<a:iptal:626445972620443648>'   
  
  let x;
  if(puan > 25000) x = '<a:verifed:633993795066658832>'
  else x = '<a:iptal:626445972620443648>'
  
  let p;
  if(puan > 300) p = '<a:verifed:633993795066658832>'
  else p = '<a:iptal:626445972620443648>'
  
  
  let market = new Discord.RichEmbed()
  .setTitle('<a:selin:641676134081232896> | Market')
  .setDescription('<a:verifed:633993795066658832> » Alabilirsiniz \n <a:iptal:626445972620443648> » Alamazsınız')
  .addField('<a:buyuktur:641328397187809311> | '+msjy+'', 'Puan Durumu » **'+birinci+'**')
  .addField('<a:buyuktur:641328397187809311> | '+iki+'', 'Puan Durumu » **'+s+'**')
  .addBlankField()
  .addField('<a:boost:639135012846829610> | Özel sa-as Mesaj:', '**Açıklama:** Sevgililer sohbete selam verdiğinde,Onlar için özel bir mesaj atar. \n **Satın Alınabilirlik:** '+q+' \n **Ücret:** 350 \n **Satın Almak Kodu**: 0qRp6 \n **-----------------------**')
  
  .addField('<a:nitro:641278523289501712> | Nitro:', '**Açıklama:** Sevgilinize onu sevdiğini nitro ile mi anlatmak istiyorsunuz? Peki.. (gerçeklik değeri yoktur.) \n **Satın Alınabilirlik:** '+e+' \n **Ücret:** 580 \n **Satın Alma Kodu:** PtRp1 \n **---------------------**')
  
  .addField(':rose: | Gül:', '**Açıklama:** Onu taze bir gülle mutlu etmeye ne dersin? \n **Satın Alınabilirlik:** '+r+' \n **Ücret:** 90 \n **Satın Alma Kodu:** OxD9r \n**---------------------**')
  
  .addField('<a:hh:639135059051413524> | Özel Rol:', '**Açıklama:** Sadece size özel bir rol bunu kim istemez ki? \n **Satın Alınabilirlik:** '+t+' \n **Ücret:** 4000\n **Satın Alma Kodu:** öYl76 \n**---------------------**')

  .addField('<a:hyper:632905422407335948> | Özel Oda:', '**Açıklama:** Sunucu içinde baş harflerinizden oluşan bir sesli kanal açar,Bu kanala sadece siz ve müzik botları bağlanabilir. \n **Satın Alınabilirlik:** '+x+' \n **Ücret:** 25000\n **Satın Alma Kodu:** zHox2 \n**---------------------**')
  
  .addField(':star: | Random Kod:', '**Açıklama:** Kurucunun kod oluşturduğu gibi size random bir kod atar kodun Puan içeriği değişkendir. \n **Satın Alınabilirlik:** '+p+' \n **Ücret:** 300\n **Satın Alma Kodu:** Trp18 \n**---------------------**')
  
  
  .setThumbnail('https://media1.tenor.com/images/ff23932008a05460bffe8742dbbe306d/tenor.gif?itemid=11737158')
 .setFooter('Sonsuz bir aşk dileğiyle..')
  .setColor('RANDOM')
 message.channel.send(market)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'market',
  description: 'taslak', 
  usage: 'market'
};
