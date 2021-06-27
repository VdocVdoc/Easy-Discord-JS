// importing package: npm install discord.js
const Discord = require("discord.js");

// create a new Discord client
const client = new Discord.Client();

// getting prefix and token from config.json
const { prefix, token } = require("./config.json");

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Ready!");
});

// basic commands
client.on("message", (message) => {
  if (message.content === `${prefix}ping`) {
    // send back "Pong." to the channel the message was sent in
    message.channel.send("Pong.");
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`This server's name is: ${message.guild.name}`);
  }
});

// login to Discord with your app's token
client.login(token);
