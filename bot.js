const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "512596390745079829"; // ايدي السررفر
var channel = "515246118460981252";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** Hi , Hi , Hi , Hi ,Hi ,Hi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,Hi Dreaaam , HI , HI ,HI , HI ,HI ,HI ,HI ,HI HI, HI, HI ,HI محمض ميضو محمض ميضو**')
    },305);
})



client.on('ready', async() => {
var server = "512596390745079829"; // ايدي السررفر
var channel = "515246118460981252";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
})




client.on('message', message => {
if(message.content.startsWith('2s')) {
if(message.author.id !== "#daily") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 




client.login('NTE1OTY5ODIwODQ4Njg1MDU3.DuXWvg.TON44osAy45YdpyUrO9-e1gkXvI'); 
