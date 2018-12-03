const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "512596390745079829"; // ايدي السررفر
var channel = "515246118460981252";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** Hi , Hi , Hi , Hi ,Hi ,Hi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,Hi Dreaaam , محمض ميضو لقمد نق محمض ميضو لقمد نق محمض ميضو القمد نق محمض ميضو لقمد نق #سيث رولنظ**')
    },305);
})



client.on('ready', async() => {
var server = "512596390745079829"; // ايدي السررفر
var channel = "515246118460981252";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})




client.on('message', message => {
if(message.content.startsWith('2s')) {
if(message.author.id !== "#daily") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 
client.on('message', message => {
if(message.content.startsWith('2s')) {
if(message.author.id !== "#daily") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
  if(message.content === '-ريب'){
     message.channel.send('#rep @CherishCherry#2048')
  }
 });

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});



client.login('NTE1MDkzOTUyNjY4MzY4OTA4.DuaInw.W6dLhirbs2Jox0EujXEJL2p21zE'); 
