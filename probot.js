const express = require('express');
const app = express();

app.listen(() => console.log('Server started'));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const niro = new Discord.Client()
const fs = require("fs");
const dateFormat = require("dateformat")
const moment = new require("moment");
const { prefix, token, , , youtubekey } = require("./Config/configuration.json");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube(youtubekey);

client.login(token).catch(err => console.error(`[ Discord ] Worng Token :<`))

//---(PingCode)---\\
client.on("message", message => {
  if (message.content === prefix + "ping") {
    let start = Date.now();
    message.channel.send("pong").then(message => {
      message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
  }
});

///bot حاله
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("streaming");

  client.user.setActivity(`${prefix}help | ${client.guilds.size} Server `, { type: "WATCHING" });
});





client.on("message", message => {
  let args = message.content.split(" ");
  if (message.content.startsWith(prefix + "profile")) {
    let member = message.mentions.users.first();

    if (args[0] && !args[1]) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
      message.channel.send({
        files: [
          {
            name: "cutie=niro.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      });
    }
    if (member) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
      message.channel.send({
        files: [
          {
            name: "cutie=niro.png",
            attachment: `https://api.probot.io/profile/${member.id}`
          }
        ]
      });
    } else if (args[1] && !member) {
      client.fetchUser(args[1]).then(userr => {
        message.channel.stopTyping();
        setTimeout(() => {
          message.channel.stopTyping();
        }, Math.random() * (1 - 3) + 1 * 1000);
        message.channel.send({
          files: [
            {
              name: "cutie=niro.png",
              attachment: `https://api.probot.io/profile/${userr.id}`
            }
          ]
        });
      });
    }
  }
});

client.on('message', function(message) {
    if(!message.channel.guild) return;
    if(message.content === '&cc') {
    if(message.member.hasPermission('MANAGE_ROLES')) {
    setInterval(function(){})
    message.channel.send('يتم انشاء 50 لون انتضر | ??')
    }else{
    message.channel.send('ما معاك البرمشن المطلوب |???')
    }
    }
    });
 
    client.on('message', message=>{
    if (message.content === '&cc'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 50; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }
    }
    });

client.on('guildMemberAdd', member => {
    member.createDM().then(function (channel) {
return channel.send("** مرحبا **")
    }
    )});








client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});








//----(AutoreplyCodes)----\\
client.on("message", msg => {
  if (msg.content === "Hi") {
    msg.reply("**Hi**");
  }
});
client.on("message", msg => {
  if (msg.content === "hi") {
    msg.reply("**Hi**");
  }
});
client.on("message", msg => {
  if (msg.content === "هلا") {
    msg.reply("**هـــلا**");
  }
});
client.on("message", msg => {
  if (msg.content === "السلام عليكم") {
    msg.reply("**وعليكم السلام تفضل شاي بالنعناع**");
  }
});
client.on("message", msg => {
  if (msg.content === "باي") {
    msg.reply("**باي**");
  }
});
client.on("message", msg => {
  if (msg.content === "Hello") {
    msg.reply("**Hello**");
  }
});
client.on("message", msg => {
  if (msg.content === "hello") {
    msg.reply("**Hello**");
  }
});
client.on("message", msg => {
  if (msg.content === "bye") {
    msg.reply("**bye**");
  }
});

var top = require("./top.json");
function save() {
  fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {

  if (newMember.user.bot) return;
  if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
  if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
    "text": 0,
    "voice": parseInt(Math.random() * 10),
    "msgs": 0,
    "id": newMember.user.id
  }
  save();
  if (!oldMember.voiceChannel && newMember.voiceChannel) {
    var addXP = setInterval(async function() {
      top[newMember.guild.id][newMember.user.id].voice += parseInt(Math.random() * 4);
      save();
      if (!newMember.voiceChannel) {
        clearInterval(addXP);
      }
    }, 60000);
  }
});


client.on("message", async function(message) {

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!top[message.guild.id]) top[message.guild.id] = {};
  if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
    "text": parseInt(Math.random() * 10),
    "voice": 1,
    "msgs": 0,
    "id": message.author.id
  }
  if (top[message.guild.id][message.author.id].msgs > 10) {
    top[message.guild.id][message.author.id].text += parseInt(Math.random() * 4);
    top[message.guild.id][message.author.id].msgs = 0;
  }
  save();
  var args = message.content.split(" ");
  var cmd = args[0].toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "top text")) {
    var topArray = Object.values(top[message.guild.id]);
    var num = 0;
    var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function(user) {
      if (user.text > 0) {
        return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
      }
    }).join("\n")}`;
    var embed = new Discord.RichEmbed()
      .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
      .setColor(`RED`)
      .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}   \n\n\n **\`${prefix}top text\`**`, true)
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
    message.channel.send({
      embed: embed
    });
    //   if (!message.content.startsWith(prefix)) return;
  } else {
    if (message.content.startsWith(prefix + "top voice")) {
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function(user) {
        if (user.voice > 0) {
          return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
        }
      }).join("\n")}`;
      var embed = new Discord.RichEmbed()
        .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
        .setColor(`RED`)
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}   \n\n\n **:sparkles:\`${prefix}top voice\``, true)

        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
      message.channel.send({
        embed: embed
      });


      //  break;
      // if (!message.content.startsWith(prefix)) return;
    } else {
      if (message.content.startsWith(prefix + "top")) {
        var topArray = Object.values(top[message.guild.id]);
        var num = 0;
        var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function(user) {
          if (user.text > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
          }
        }).join("\n")}`;
        num = 0;
        var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function(user) {
          if (user.voice > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
          }
        }).join("\n")}`;
        var embed = new Discord.RichEmbed()
          .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
          .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``, true)
          .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``, true)
          .setFooter(message.author.tag, message.author.displayAvatarURL)
          .setTimestamp()
          .setColor(`RED`);
        message.channel.send({
          embed: embed


        });



      }
    }
  }

});



let xp = require('./xp.json'); //سوي ملف بأسم xp.json

client.on('message', message => {


  if (message.author.bot) return;
  if (message.channel.type == "dm") return;


  let Addxp = Math.floor(Math.random() * 6) + 8;

  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level + 1;
  let nextLvL = xp[message.author.id].level * 1000; //كل كم اكس بي لحتا يرتفع لفله انصحكم تخلونه فوق ال الف
  xp[message.author.id].xp = curxp + Addxp;
  if (nextLvL <= xp[message.author.id].xp) {
    xp[message.author.id].level = xp[message.author.id].level + 1;

    let lvlup = new Discord.RichEmbed()
      .setTitle('Level Up!')
      .setColor(`BLUE`)
      .setDescription(`New Level: ` + curlvl)
      .setTimestamp()
      .setFooter(message.author.username + '#' + message.author.discriminator);
    message.channel.send(lvlup)
  }
  fs.writeFile("./data/xp.json", JSON.stringify(xp), (err) => {
    if (err) console.log(err)
  });


});

client.on('message', message => {

  if (message.author.bot) return;
  if (message.channel.type == "dm") return;


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nextlvlxp = curlvl * 200;
  let difference = nextlvlxp - curxp

  if (message.content == prefix + "level") {

    if (!xp[message.author.id]) {
      xp[message.author.id] = {
        xp: 0,
        level: 1,
      }
    }
    fs.writeFile("./data/xp.json", JSON.stringify(xp), (err) => {
      if (err) console.log(err)
    });
    var embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor(`BLUE`)
      .setTitle('Your rank')
      .addField('XP: ', curxp, true)
      .addField('Level: ', curlvl, true)
      .setFooter(` ${difference} xp till level up `, message.author.displayAvatarURL);
    message.channel.send(embed);

  }
});

///ticket

const category = "category-id";
let mtickets = true;
let tchannels = [];
let current = 0;
 
 
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (args[0].toLowerCase() === `${prefix}heeeeelsasaollooop`) {
    let embed = new Discord.RichEmbed()
      .addField(``);
    await message.channel.send(
      `:white_check_mark: , **هذه قائمة بجميع اوامر البووت.**`
    );
    await message.channel.send(embed);
  } else if (args[0].toLowerCase() === `${prefix}new`) {
    if (mtickets === false)
      return message.channel.send(
        `**تـم ايـقـاف الـتـذاكـر بـواسـطة أحـد مـن الادارة**`
      );
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**الـبـوت غـيـر قـادر عـلـي صـنـع روم تـحقق مـن الـرتـبـة**`
      );
    console.log(current);
    let openReason = "";
    current++;
    message.guild.createChannel(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
      message.channel.send(`**تـم فـتـح تـذكرتـك**`);
      c.overwritePermissions(message.guild.id, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      });
      c.overwritePermissions(message.author.id, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      });
 
      if (args[1])
        openReason = `\nReason: [ **__${args.slice(1).join(" ")}__** ]`;
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#36393e")
        .setDescription(`**Wait Admin To Answer You**${openReason}`);
      c.send(`${message.author}`);
      c.send(embed);
    });
  } else if (args[0].toLowerCase() === `${prefix}mtickets`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `**هـذا الأمـر للأدارة فـقـط**`
      );
    if (args[1] && args[1].toLowerCase() === "enable") {
      mtickets = true;
      message.channel.send(
        `**تـم تـفـعـيـل نـظـام الـتذاكـر**`
      );
    } else if (args[1] && args[1].toLowerCase() === "disable") {
      mtickets = false;
      message.channel.send(
        `**تـم اغـلاق نـظـام الـتذاكـر**`
      );
    } else if (!args[1]) {
      if (mtickets === true) {
        mtickets = false;
        message.channel.send(
          `**تـم اغـلاق نـظـام الـتذاكـر**`
        );
      } else if (mtickets === false) {
        mtickets = true;
        message.channel.send(
          `**تـم تـفـعـيـل نـظـام الـتذاكـر**`
        );
      }
    }
  } else if (args[0].toLowerCase() === `${prefix}close`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
      `**انـت لـسـت مـن ادارة الـسـيـرفـر لـتـنـفـيذ هذا الأمـر`
      );
    if (
      !message.channel.name.startsWith("ticket-") &&
      !tchannels.includes(message.channel.id)
    )
      return message.channel.send(`**هـذا لـيـس روم تـيـكـيـت**`);
 
    message.channel.send(
      `**جـاري قـفـل الـروم تـلـقـائـيـا بـعـد 5 ثـوانـي**`
    );
    tchannels.splice(tchannels.indexOf(message.channel.id), 1);
    setTimeout(() => message.channel.delete(), 5000); //لحد هنا
  } else if (message.content == prefix + `remove`) {
    if (!message.channel.name.startsWith("ticket-")) {
      return message.channel.send(`**This command only for the tickets**`);
    }
    let member = message.mentions.members.first();
    if (!member || member.id === client.user.id) {
      return message.channel.send(`**Please mention the user**`);
    }
    if (
      !message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    ) {
      return message.channel.send(
        `**${member.user.tag}** is not in this ticket to remove them`
      );
    }
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
      READ_MESSAGE_HISTORY: false
    });
    message.channel.send(
      `**Done \nSuccessfully removed \`${member.user.tag}\` from the ticket**`
    );
  } else if (message.content == prefix + `add`) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**Error** \nI Don\'t have MANAGE_CHANNELS Permission to do this`
      );
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**This command only for the tickets**`);
    let member = message.mentions.members.first();
    if (!member) return message.channel.send(`**Please mention the user**`);
    if (
      message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    )
      return message.channel.send(
        `this member already in this ticket :rolling_eyes:`
      );
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true
    });
    message.channel.send(
      `**Done \nSuccessfully added <@${member.user.id}> to the ticket**`
    );
  } else if (args[0].toLowerCase() === `${prefix}reeeeeeeeeestart`) {
    if (!devs.includes(message.author.id))
      return message.channel.send(
        `:tools:, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`
      );
    message.channel.send(`:white_check_mark:, **جارى اعادة تشغيل البوت.**`);
    client.destroy();
 
        
      
    
  }
});

