const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
client.user.setStatus("dnd");
   var oyun = [

        "CodEming RP Bot'u",
         "!yardım",
         "Beni kullanmak için sevgilinin olması gerekiyor.!",
         "iyi eğlenceler!",
         "Güncellemeler yakında gelicek."
     
     

       
 
   ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "dnd");
        }, 2 * 3000);
}
