const { AoiClient, LoadCommands, Util} = require("aoi.js");
const { setup } = require("aoi.parser");
setup(Util); 

const bot = new AoiClient({
    token: process.env.token,
    prefix: ".",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"]
});
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./src/") 

bot.command({
    name: "ping",
    code: `Pong! $pingms`
});
bot.status({
    text: "Valentia YouTube",
    type: "STREAMING",
    url: "https://youtube.com/@valentias"
});

bot.interactionCommand({
    name: "ping",
    prototype: "slash",
    code: `
$interactionReply[Pong! $pingms;;;;everyone;false]`
});

//Maded by Vαlєntìα
