
const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
    let yardım = new Discord.RichEmbed()
  .setTitle('<a:pkalp:641276271606759445> | Sevgili Rp Sistemi')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Bu sistemden yararlanabilmek için sevgilinizin sunucumuzda bulunması gerekir.Sunucuda bulunduktan sorna kuruculara haber verirseniz sizi sisteme kaydedecektir.')
  .addBlankField()
  .addField('**__KOMUTLAR__**', '**!aşk** » Sunucunuzda bulunan sevgilniz ile aşknızı ölçer,"%" oranına göre puan kazanılır. \n\n **!market** » Bulunan puanlarınızı harcayabildiğiniz,Özel üyelikler,sevgilinize hediye alabildiğiniz yer. \n\n **!satınal** » Markette beğendiğiniz,almak iştediğiniz şeyi satın aldığınız komut. \n\n **!puan** » Sevgiliniz ve sizin puan durumunuzu,maddi yorumunuzu gösteren komut. \n\n **!kodgir** » Kurucular tarafından oluşturulan kodu bu komut ile girerseniz belirli düzeyde Puan kazanırsınız. \n\n **!gönder** » Sevgilinize hesabınızdaki belirttiğiniz kadar puanı göndermenizi sağlar.\n\n **!çark** » Çark döner,rastgele 0-200 arasında bir sayı çıkar çıkan sayı sizin puanınıza eklenir. \n\n *Yeni >>* **!kartlar** » Komut sizden 4 karttan birini seçmenizi ister.Her kartta farklı bir puan miktarı vardır,Bulunduğunuz kanala seçtiğiniz kartın numarasını gönderirsiniz çıkan puan hesabınıza eklenir. \n\n **!soygun** » Soygun yaparsınız ve soygunun sonunda kazanılan puan hesabınıze eklenir botun en zor komutudur.')
   .addBlankField()
   .addField('**__MÜLK SİSTEMİ__**', '**!mülk** » Belli fiyattaki evleri satın alırsınız,Evler size günlük olarak kira kazandırır. \n\n **!mülkler** » Satılık olan mülkleri fiyatları,kira miktarını gösterir.\n\n **!mülk-sat** » Bulunan mülkünüzü aldığınız fiyatın altında bir miktar ile satarsınız.')
    .addBlankField()
      .addField('**__İŞLETME SİSTEMİ__**', '**!işletme-kur** » Şirketinizi bu komut ile kurarsınız şirlket kurması tamaman bedavadır. \n\n **!güncelle** » Şirketinizin seviyesini yükseltir.Şirket seviye atladıkca,Size verilen günlük para artar.')
    .addBlankField()
    .addField('**__KURUCU__**', '**!kod** » Üyelerin kazanmasını istediğiniz Puan miktarını girerseniz size özelden bir kod gönderecektir.Üyeler bu kod ile Puanı kazanabilirler. \n\n **!eşleştir** » İki sevgiliyi sisteme kayıt edersiniz. \n\n **!verisil** » Kullanıcıdaki belirtilen Rp verilerini siler.')
 .addBlankField()
    .addField('Güncelleme Kayıtları', '-Soygun \n -Hata düzeltmeleri')
    
    .setFooter('CodEming iyi kullanmalar diler..')
  .setTimestamp()
  .setThumbnail('https://i.pinimg.com/originals/87/c9/b9/87c9b907f296f5e36d25acb7f10ec39d.gif')
  .setURL('https://discord.gg/3vMKch')
  .setColor('RANDOM')
  message.channel.send(yardım)
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['rp', 'sistem', 'sevgili-sistemi', 'yardım'], 
  permLevel: 0
};

exports.help = {
  name: 'sevgili',
  description: 'taslak', 
  usage: 'sevgili'
};
