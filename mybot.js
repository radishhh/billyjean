const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");



client.on("ready", () => {
  client.user.setGame('with a pair of jeans');
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

client.on("message", (message) => {

	  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("fuck you");
  } else

  if (message.content.startsWith(config.prefix + "doittoem")) {
  message.channel.send("https://imgur.com/a/k8Tv8");
  } else

  if (message.content.startsWith(config.prefix + "hi")) {
  message.channel.send("get out of my life");
  } else
	  
   if (message.content.startsWith(config.prefix + "kirbyfan")) {
  message.channel.send("<@282291841884225536>");
  } else
	  
   if (message.content.startsWith(config.prefix + "heystix")) {
  message.channel.send("shut your dirty mouth <@270358787473408011>");
  } else
	  
   if (message.content.startsWith(config.prefix + "coolest")) {
  message.reply("you are the coolest");
  if(message.author.id !== config.ownerID) return;
  message.reply("you are the ultimate example of sheet coolness");
  } else

  if (message.content.startsWith(config.prefix + "ssradish")) {
  message.channel.send("https://imgur.com/a/V9Rgo");
  } else

  if (message.content.startsWith(config.prefix + "sonicgun")) {
  message.channel.send("https://imgur.com/a/6U6OC");
  } else

  if (message.content.startsWith(config.prefix + "spiderdelet")) {
  message.channel.send("https://imgur.com/a/vlMRv");
  } else	  
	  
   if (message.content.startsWith(config.prefix + "twerkdoggo")) {
  message.channel.send("https://imgur.com/a/gm5I7");
  } else
	  
    if (message.content.startsWith(config.prefix + "nerds")) {
  message.channel.send("all ${client.users.size} of the people using this bots are nerds");
  } else

  if (message.content.startsWith(config.prefix + "image help")) {
  message.channel.send(">doittoem: you know i had to do it to em /// >ssradish: tfw vegetable becomes saiyan /// >sonicgun: sonics finna shoot /// >twerkdoggo: a funy dog do a dance /// >spiderdelet: spiderman asks an important question");
  } else
	  
   if (message.content.startsWith(config.prefix + "rosy help")) {
  message.channel.send(">kirbyfan: pings kirbyfan /// >heystix: puts stix in his rightful place");
  } else

  if (message.content.startsWith(config.prefix + "help")) {
  message.channel.send(">ping: sends a nice message /// >hi: sends another nice message /// >image help: commands for images /// >coolest: tells who the coolest person is");
  }
});

client.login(process.env.BOT_TOKEN);


