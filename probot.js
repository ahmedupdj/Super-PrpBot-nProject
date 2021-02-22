const express = require('express');
const app = express();

app.listen(() => console.log('Server started'));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const client = new Discord.Client()
const fs = require("fs");
const dateFormat = require("dateformat")
const moment = new require("moment");
const { prefix, token, , , youtubekey } = require("./Config/configuration.json");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube(youtubekey);

client.login(token).catch(err => console.error(`[ Discord ] Worng Token :<`))

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const fs = require("fs");

const prefix ="$"
const devs = '667342379753275421';
client.login('ODA4MzUxODUyMzQwODM4NDQw.YCFSVA.2OD-QQPwUMJ1rgiZyfZpK2umU7k');
        



client.on('message', msg => {
    if (msg.content === prefix + 'createcolors') {
        msg.guild.roles.create({
            data: {
                name: "1",
                color: "#FFB6C1",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "2",
                color: "#FFC0CB",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "3",
                color: "#FF69B4",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "4",
                color: "#FF1493",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "5",
                color: "#DB7093",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "6",
                color: "#C71585",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "7",
                color: "#E6E6FA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "8",
                color: "#D8BFD8",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "8",
                color: "#DDA0DD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "9",
                color: "#DA70D6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "10",
                color: "#EE82EE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "11",
                color: "#FF00FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "12",
                color: "#BA55D3",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "13",
                color: "#9932CC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "14",
                color: "#9400D3",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "15",
                color: "#8A2BE2",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "16",
                color: "#8B008B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "17",
                color: "#800080",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "18",
                color: "#9370DB",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "19",
                color: "#7B68EE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "20",
                color: "#6A5ACD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "21",
                color: "#483D8B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "22",
                color: "#663399",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "23",
                color: "#4B0082",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "24",
                color: "#FFA07A",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "25",
                color: "#FA8072",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "26",
                color: "#E9967A",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "27",
                color: "#F08080",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "28",
                color: "#CD5C5C",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "29",
                color: "#DC143C",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "30",
                color: "    #FF0000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "31",
                color: "#B22222",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "32",
                color: "#8B0000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "33",
                color: "#FFA500",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "34",
                color: "#FF8C00",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "35",
                color: "#FF7F50",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "36",
                color: "#FF6347",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "37",
                color: "#FF4500",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "38",
                color: "#FFD700",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "39",
                color: "#FFFFE0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "40",
                color: "#FFFACD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "41",
                color: "#FAFAD2",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "42",
                color: "    #FFEFD5",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "43",
                color: "#FFE4B5",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "44",
                color: "#FFDAB9",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "45",
                color: "#EEE8AA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "46",
                color: "#F0E68C",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "47",
                color: "#BDB76B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "48",
                color: "#ADFF2F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "49",
                color: "#7FFF00",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "50",
                color: "#7CFC00",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "51",
                color: "#00FF00",
                permissions: []
            }
        })
 
        msg.guild.roles.create({
            data: {
                name: "52",
                color: "#32CD32",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "53",
                color: "#98FB98",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "54",
                color: "#90EE90",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "55",
                color: "#00FA9A",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "56",
                color: "#00FF7F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "57",
                color: "#3CB371",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "58",
                color: "#2E8B57",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "59",
                color: "#2E8B57",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "60",
                color: "#008000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "61",
                color: "#006400",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "62",
                color: "#9ACD32",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "63",
                color: "#6B8E23",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "64",
                color: "#556B2F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "65",
                color: "#66CDAA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "66",
                color: "#8FBC8F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "67",
                color: "#20B2AA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "68",
                color: "#008B8B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "69",
                color: "#008080",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "70",
                color: "#00FFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "71",
                color: "#E0FFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "72",
                color: "#AFEEEE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "73",
                color: "#7FFFD4",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "74",
                color: "#40E0D0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "75",
                color: "#48D1CC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "76",
                color: "#00CED1",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "77",
                color: "#5F9EA0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "78",
                color: "#4682B4",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "79",
                color: "#B0C4DE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "80",
                color: "#ADD8E6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "81",
                color: "#B0E0E6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "82",
                color: "#87CEFA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "83",
                color: "#87CEEB",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "84",
                color: "#6495ED",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "85",
                color: "#00BFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "86",
                color: "#1E90FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "87",
                color: "#4169E1",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "88",
                color: "#0000FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "89",
                color: "#0000CD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "90",
                color: "#00008B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "91",
                color: "#000080",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "92",
                color: "#191970",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "93",
                color: "#FFF8DC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "94",
                color: "#FFEBCD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "95",
                color: "#FFE4C4",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "96",
                color: "#FFDEAD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "97",
                color: "#F5DEB3",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "98",
                color: "#DEB887",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "99",
                color: "#D2B48C",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "100",
                color: "#BC8F8F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "101",
                color: "#F4A460",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "102",
                color: "#DAA520",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "103",
                color: "#B8860B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "104",
                color: "#CD853F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "105",
                color: "#D2691E",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "106",
                color: "#808000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "107",
                color: "#8B4513",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "108",
                color: "#A0522D",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "109",
                color: "#A52A2A",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "110",
                color: "#800000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "111",
                color: "#FFFFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "112",
                color: "#FFFAFA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "113",
                color: "#F0FFF0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "114",
                color: "#F5FFFA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "115",
                color: "#F0FFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "116",
                color: "#F0F8FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "117",
                color: "#F8F8FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "118",
                color: "#F5F5F5",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "119",
                color: "#FFF5EE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "120",
                color: "#F5F5DC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "121",
                color: "#FDF5E6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "122",
                color: "#FFFAF0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "123",
                color: "#FFFFF0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "124",
                color: "#FAEBD7",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "125",
                color: "#FAF0E6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "126",
                color: "#FFF0F5",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "127",
                color: "#FFE4E1",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "128",
                color: "#DCDCDC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "129",
                color: "#D3D3D3",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "130",
                color: "#C0C0C0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "131",
                color: "#f7f7f7",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "132",
                color: "#b2b2b2",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "133",
                color: "#6f6c6c",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "134",
                color: "#4d4646",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "135",
                color: "#4c4c4c",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "136",
                color: "#2F4F4F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "137",
                color: "#040000",
                permissions: []
            }
        })
        const embed1 = new Discord.MessageEmbed()
            .setTitle("🕑 **Preparing your server color rules ...**")
            .setFooter(`Request By ${msg.author.username}`)
            .setTimestamp()
        const embed2 = new Discord.MessageEmbed()
            .setTitle("✅ **Your colors is ready**")
            .setFooter(`Request By ${msg.author.username}`)
            .setTimestamp()
        msg.channel.send(embed1).then(m => {
            setTimeout(() => {
                m.delete()
                m.channel.send(embed2)
            }, 30000)
        })
    }
})


client.on("message", message => {
  if (message.content === prefix + "bots") {
    var list_all = [];
    message.guild.members.cache.forEach(bb => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});
const replyMSG = JSON.parse(fs.readFileSync("./replyMSG.json", "utf8"));

function saveReplay() {
  fs.writeFile("./replyMSG.json", JSON.stringify(replyMSG), function(err) {
    if (err) throw err;
  });
}

/////كود صنع رد تلقائي
client.on("message", async message => {
  if (message.content.startsWith(prefix + "reply")) {
    if (message.author.bot || message.channel.type == "dm") return undefined;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if (!replyMSG[message.author.id])
      replyMSG[message.author.id] = {
        contentmessage: "none",
        replayMessage: "none"
      };
    saveReplay();
    let contmessage;

    let filter = m => m.author.id === message.author.id;
    message.channel.send(" |** من فضلك اكتب الرساله الان...** ").then(msg => {
      message.channel
        .awaitMessages(filter, {
          //R.I.P Royal Bot!
          max: 1,
          time: 12000,
          errors: ["time"]
        })

        .then(collected => {
          contmessage = collected.first().content;
          msg.edit(":scroll: | من فضلك اكتب الرد الان... :pencil2: ");

          message.channel
            .awaitMessages(filter, {
              max: 1,
              time: 12000,
              errors: ["time"]
            })

            .then(async collectedd => {
              replyMSG[message.author.id] = {
                contentmessage: contmessage,
                replayMessage: collectedd.first().content
              };
              saveReplay();
              var embed1 = new Discord.MessageEmbed()
                .setTitle(`Done The Autoreply Setup`)
                .setThumbnail(message.author.avatarURL())
                .setColor("GRAY")
                .setDescription(
                  `
                    Message:
                    ${contmessage}
                    Reply:
                    ${collectedd.first().content}`
                );
              let steve = await client.users.fetch("359541019836022784");
              embed1.setFooter(
                `رد تلقائي`,
                steve ? steve.displayAvatarURL() : message.author.displayAvatarURL()
              );
              msg.edit("  |** تم الاعداد بنجاح...**");

              message.channel.send(embed1);
            });
        });
    });
  }
});

client.on("message", message => {
  if (
    !replyMSG[message.author.id] ||
    !replyMSG[message.author.id].contentmessage ||
    !replyMSG[message.author.id].replayMessage
  )
    return;
  let messagecontent = replyMSG[message.author.id].contentmessage;
  let reply = replyMSG[message.author.id].replayMessage;
  if (message.content == messagecontent) {
    if (messagecontent == "none" || reply == "none") return undefined;
    message.channel.send(`\`#\` ${reply}`);
  }
});



 client.on("message", message => {
  if (message.content.startsWith(prefix + "apply")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.cache.find(gg => gg.name === "التقديمات");
    if (!channel)
      return message.reply(
        "**لانشاء روم التقديمات ${prefix}room1 من فضلك اكتب الامر**"
      );
    if (channel) {
      message.channel.send(message.member + ", **:timer:**").then(m => {
        m.edit(message.member + ", **اسمك الحقيقى  ✍**");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            max: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + ", **:timer:**").then(m => {
              m.edit(message.member + ", **كم عمرك 🎓**");
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  max: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + ", **:timer:**")
                    .then(m => {
                      m.edit(message.member + ", **هل تتفاعل في الرتبه🎙**");
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages(m1 => m1.author == message.author, {
                          max: 1,
                          time: 60 * 1000
                        })
                        .then(m3 => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + ", **:timer:**")
                            .then(m => {
                              m.edit(
                                message.member + ", **هل ستحترم القوانين ؟ 📑**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  m1 => m1.author == message.author,
                                  { max: 1, time: 60 * 1000 }
                                )
                                .then(m4 => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + ", **:timer:**")
                                    .then(m => {
                                      m.edit(
                                        message.member +
                                          ", **لماذا يجب علينا ان نقبلك ؟ وما هي الرتبه التي تريدها 🤔**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          m1 => m1.author == message.author,
                                          { max: 1, time: 60 * 1000 }
                                        )
                                        .then(m5 => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              ", **....جارى جمع البيانات**"
                                          ).then(mtime => {
                                            setTimeout(() => {
                                              let embed = new Discord.MessageEmbed()
                                                .setColor("RANDOM")
                                                .setTitle(
                                                  `**تقديم على رتبه** [__**${message.guild.name}**__]`
                                                )
                                                .addField(
                                                  "**`الاسم`**",
                                                  `${name}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`العمر`**",
                                                  `${age}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`هل سوف يتفاعل ؟`**",
                                                  `${ask}`
                                                )
                                                .addField(
                                                  "**`هل سوف يحترم القوانين ؟`**",
                                                  `${ask2}`
                                                )
                                                .addField(
                                                  "**`لماذا يجب علينا قبوله|وماهى الرتبه اللتي يريدها`**",
                                                  `${ask3}`
                                                )
                                                .setFooter(
                                                  `Name : ${message.author.username}\nID User : ${message.author.id}`,
                                                  "https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
                                                );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
                                          });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "room1")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("`MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.channels.create("التقديمات", "text").then(c => {
      c.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**");
  }
});



client.on("message", async message => {
  if (!message.guild) return;
  let mention = message.mentions.members.first();
  let role = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  let mySupport = message.guild.roles.cache.find(gg => gg.name === role);
  if (message.content.startsWith(prefix + "قبول")) {
    let acRoom = message.guild.channels.cache.find(gg => gg.name === "القبول-الرفض");
    if (!acRoom)
      return message.reply(
        `${prefix}room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر`
      );
    if (acRoom) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      if (!mention) return message.reply("منشن شخص");
      if (!role) return message.reply("ادخل اسم رتبة");
      if (!mySupport) return message.reply("هذه الرتبة غير موجودة");
      if (mention.roles.has(mySupport))
        return message.reply("هذا الشخص معه الرتبة مسبقا");
      if (mySupport.rawPosition >= message.member.roles.highest.rawPosition)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      mention.roles.add(mySupport).then(() => {
        acRoom.send(
          `**[ ${mySupport} ] واعطائك رتبة ${mention} تم قبولك بنجاح**`
        );
      });
    }
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "رفض")) {
    if (!message.channel.guild) return;

    let mention = message.mentions.members.first();
    let acRoom = message.guild.channels.cache.find("name", "القبول-الرفض");
    let rrrr = message.content.split(/ +/).slice(2);
    let reason = rrrr.join(" ");
    if (!acRoom)
      return message.reply(
        `${prefix}room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر`
      );
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!mention) return message.reply("منشن شخص");
    message.react("✅");
    acRoom
      .send(
        `**${mention} تم رفضك للأسف **
السبب : \`${reason}\``
      )
      .then(m => m.react("✅"));
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "room2")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.channels.create("القبول-الرفض", "text").then(c => {
      c.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("**✅ تم انشاء روم القبول والرفض بنجاح**");
  }
});
client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  let args = msg.content.split(" ");

  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);

  if (command === `avatar`) {
    if (msg.channel.type === "dm")
      return msg.channel.send(
        "Nope Nope!! u can't use avatar command in DMs (:"
      );
    let mentions = msg.mentions.members.first();
    if (!mentions) {
      let sicon = msg.author.avatarURL();
      let embed = new Discord.MessageEmbed()
        .setImage(msg.author.avatarURL())
        .setColor("#5074b3");
      msg.channel.send({ embed });
    } else {
      let sicon = mentions.user.avatarURL();
      let embed = new Discord.MessageEmbed().setColor("#5074b3").setImage(sicon);
      msg.channel.send({ embed });
    }
  }
});

const db = require('quick.db');

const pre = "$"//GOLBAL PREFIX !
client.on("message", async badboy => {
     var prefix = await db.fetch(`prefix_${badboy.guild.id}`);
  if (prefix == null) prefix = pre;
  if (!badboy.guild || badboy.author.bot) return;
  var prefix = await db.fetch(`prefix_${badboy.guild.id}`);
  if (prefix == null) prefix = pre;
  var args = badboy.content.toLowerCase().split(" ");
  var cmd = args[0];
  var prefix = await db.fetch(`prefix_${badboy.guild.id}`);
  if (prefix == null) prefix = pre;
  if (cmd === `${prefix}setprefix`) {

    if (!badboy.member.hasPermission("ADMINISTRATOR")) return 
    if (!args[1]) {
      return badboy.channel.send("اكتب البرفكس الجديد")
    };
    await db.set(`prefix_${badboy.guild.id}`, `${args[1]}`);
    let embed = new Discord.MessageEmbed()
      .setAuthor(`${badboy.author.tag}`, `${badboy.author.avatarURL()}`)
      .setColor('GREEN')
      .setDescription(`**The new prefix is : \`${args[1]}\`**`)
    badboy.channel.send(embed);
  }
});



client.on("message", async badboy => {
  var prefix = await db.fetch(`prefix_${badboy.guild.id}`);
  if (prefix == null) prefix = pre;
  if (badboy.author.bot || !badboy.guild) return;
  if (badboy.mentions.users.first() === client.user) {
    let embed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(`**My Prefix is** **${prefix}** 
 **For help** **${prefix}help**`)
      .setColor("GREEN")
    badboy.channel.send(embed);
  };
});
let vojson = JSON.parse(fs.readFileSync("vojson.json", "utf8")); // ملف تخزين الفويس اونلاين
client.on("message", message => {
  if (message.content.startsWith(prefix + "setVc")) {
    let channel = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحية :rolling_eyes: ** "
      );
    let channelfind = message.guild.channels.cache.find(c => c.name == channel);
    if (!channel)
      return message.channel.send(
        "Please Type The Voice Channel Name Example: " +
          `${prefix}setVc <Channel name>`
      );
    if (!channelfind)
      return message.channel.send(`I can't find this channel \`${channel}\``);
    vojson[message.guild.id] = {
      stats: "enable",
      chid: channelfind.id,
      guild: message.guild.id
    };
    channelfind.setName(
      `Voice Online : ${message.guild.members.cache.filter(m => m.voice.channel).cache.size}` ///تعديل غير اساسي تعديل اسم روم الفويس اونلاين
    );
    message.channel.send("**Done The Voice Online  Is Turned On**");
  }
  if (message.content.startsWith(prefix + "vc off")) {
    // ايقاف الفويس اونلاين
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "ADMINISTRATOR ليس لديك صلاحية :rolling_eyes:"
      );

    message.guild.channels
      .find(gg => gg.name === vojson[message.guild.id].chid)
      .delete();
    vojson[message.guild.id] = {
      stats: "disable",
      chid: "undefined",
      guild: message.guild.id
    };
    message.channel.send("**Done The Voice Online Is Turned Off**");
  }
  fs.writeFile("./vojson.json", JSON.stringify(vojson), err => {
    if (err) console.error(err);
  });
});

client.on("voiceStateUpdate", (oldMember, newMember) => {
  if (!vojson[oldMember.guild.id])
    vojson[oldMember.guild.id] = {
      stats: "disable",
      chid: "undefined",
      guild: "undefined"
    };
  if (vojson[oldMember.guild.id].stats === "enable") {
    let ch = vojson[oldMember.guild.id].chid;
    let channel = oldMember.guild.channels.cache.get(ch);
    if (!channel) return;
    let guildid = vojson[oldMember.guild.id].guild;
    channel.setName(
      `Voice Online : ${
        oldMember.guild.members.cache.filter(m => m.voice.channel).cache.size
      }` ///تعديل غير اساسي تغير اسم روم الفويس اونلاين
    );
  }
  if (vojson[oldMember.guild.id].stats === "disable") {
    return;
  }
});



let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
 
 
client.on('message', async message => {
 
  
 
 
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.cache.find(m => m.id == args[1]));
    const embed = new Discord.MessageEmbed()
        .setDescription(`
**لم يتم تسجيل أي نقطة حتى الأن **
** أمثلة للأوامر: **
**:small_orange_diamond:** ${prefix}points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** ${prefix}points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** ${prefix}points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points reset \`لتصفير جميع النقاط\``)
        .setFooter('Requested by ' + message.author.username, message.author.avatarURL())
        .setColor(`#e60909`)
    const error = new Discord.MessageEmbed()
        .setDescription(`
**:x: | يجب كتابة الأمر بشكل صحيح. **
** أمثلة للأوامر: **
**:small_orange_diamond:** ${prefix}points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** ${prefix}points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** ${prefix}points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points reset \`لتصفير جميع النقاط\``)
        .setFooter('Requested by ' + message.author.username, message.author.avatarURL())
        .setColor(`#e60909`)
           var prefix = await db.fetch(`prefix_${badboy.guild.id}`);
  if (prefix == null) prefix = pre;
    if (command == prefix + 'points') {
 
        if (!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
        if (!args[1]) {
            if (!points) return message.channel.send(embed);
            var members = Object.values(points, null, 5);
            var memb = members.filter(m => m.points >= 1);
            if (memb.length == 0) return message.channel.send(embed);
            var x = 1;
            let pointsTop = new Discord.MessageEmbed()
                .setAuthor('Points:')
                .setColor('#FBFBFB')
                .setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**:small_blue_diamond:** <@${m.id}> \`${m.points}\``).join('n'))
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            message.channel.send({
                embed: pointsTop
            });
        } else if (args[1] == 'reset') {
            let pointsReset = new Discord.MessageEmbed()
                .setDescription('**:white_check_mark: | تم تصفير جميع النقاظ بنجاح**')
                .setFooter('Requested by ' + message.author.username, message.author.avatarURL())
            if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("You dont have Manage Server permission.");
            if (!points) return message.channel.send(pointsReset);
            var members = Object.values(points, null, 5);
            var memb = members.filter(m => m.points >= 1);
            if (memb.length == 0) return message.channel.send(pointsReset);
            points = {};
            message.channel.send(pointsReset);
        } else if (userM) {
            if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("You dont have Manage Server permission.");
            if (!points[userM.user.id]) points[userM.user.id] = {
                points: 0,
                id: userM.user.id
            };
            if (!args[2]) {
                if (points[userM.user.id].points == 0) return message.channel.send(`${userM.user.username} Not have any points.`);
                var userPoints = new Discord.MessageEmbed()
                    .setColor('#d3c325')
                    .setAuthor(`${userM.user.username} have ${points[userM.user.id].points} points.`);
                message.channel.send({
                    embed: userPoints
                });
            } else if (args[2] == 'reset') {
                if (points[userM.user.id].points == 0) return message.channel.send(error);
                points[userM.user.id].points = 0;
                message.channel.send(`Successfully reset ${userM.user.username} points.`);
            } else if (args[2].startsWith('+')) {
                args[2] = args[2].slice(1);
                args[2] = parseInt(Math.floor(args[2]));
                if (points[userM.user.id].points == 1000000) return message.channel.send(error);
                if (!args[2]) return message.channel.send(error);
                if (isNaN(args[2])) return message.channel.send(error);
                if (args[2] > 1000000) return message.channel.send(error);
                if (args[2] < 1) return message.channel.send(error);
                if ((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
                points[userM.user.id].points += args[2];
                let add = new Discord.MessageEmbed()
                    .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                    .setAuthor('Points:')
                    .setColor('#FBFBFB')
                    .setFooter('Requested by' + message.author.username, message.author.avatarURL())
                message.channel.send(add);
            } else if (args[2].startsWith('-')) {
                args[2] = args[2].slice(1);
                args[2] = parseInt(Math.floor(args[2]));
                if (points[userM.user.id].points == 0) return message.channel.send(error);
                if (!args[2]) return message.channel.send(error);
                if (isNaN(args[2])) return message.channel.send(error);
                if (args[2] > 1000000) return message.channel.send(error);
                if (args[2] < 1) return message.channel.send(error);
                if ((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
                points[userM.user.id].points -= args[2];
                let rem = new Discord.MessageEmbed()
                    .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                    .setAuthor('Points:')
                    .setColor('#FBFBFB')
                    .setFooter('Requested by' + message.author.username, message.author.avatarURL())
                message.channel.send(rem);
            } else if (!args[2].startsWith('+') || !args[2].startsWith('-')) {
                args[2] = parseInt(Math.floor(args[2]));
                if (isNaN(args[2])) return message.channel.send(error);
                if (args[2] > 1000000) return message.channel.send(error);
                if (args[2] < 1) return message.channel.send(error);
                if (points[userM.user.id].points == args[2]) return message.channel.send(`${userM.user.username} points is already ${args[2]}.`);
                points[userM.user.id].points = args[2];
                let set = new Discord.MessageEmbed()
                    .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                    .setAuthor('Points:')
                    .setColor('#FBFBFB')
                    .setFooter('Requested by' + message.author.username, message.author.avatarURL())
                message.channel.send(set);
            }
        }
    }
    fs.writeFile("./points.json", JSON.stringify(points, null, 5), (err) => {
        if (err) console.log(err.message);
    });
 
});
client.on("message", message =>{
  if(message.content.startsWith(prefix + "credits")){
 let user = message.mentions.users.first() || message.author;
    let bal = db.fetch(`money_${user.id}`)
    if (bal === null) bal = 0;
      return message.channel.send(`:bank: | **${user.username} , your account balance is** \`\`$${bal}\`\`.`)
}});
const ms = require('parse-ms')
client.on("message", async message => {
if(message.content.startsWith(prefix + "daily")){
    let timeout = 86400000/2 // 12 hours in milliseconds, change if you'd like.
  let amount = Math.floor(Math.random() * 1000) + 1;
    let daily = await db.fetch(`daily_${message.author.id}`);
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        message.channel.send(`:rolling_eyes: **| ${message.author.username}, your daily credits refreshes in ${time.hours}h ${time.minutes}m ${time.seconds}s .** `)
    } else {
    message.channel.send(`:moneybag: **${message.author.username}, you got :dollar: ${amount} daily credits!**`)
    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
    }}});
client.on("message", async message =>{
  if(message.content.startsWith(prefix + "pay")){
    let args = message.content.split(" ").slice(2); 
    let user = message.mentions.members.first() 
    let member = db.fetch(`money_${message.author.id}`)
    if (!user) {
        return message.channel.send(`:rolling_eyes: | ** ${message.author.username}, I Cant Find a User**`)
    }
    if (!args) {
        return message.channel.send(`:rolling_eyes: | **${message.author.username}, type the credit you need to transfer!**`)
    }
    if (message.content.includes('-')) { 
      return message.channel.send(`:rolling_eyes: | **${message.author.username}, Type a Amount \`Not Negative\`**`)
    }
    if (member < args) {
        return message.channel.send(`:thinking: ** | ${message.author.username}, Your balance is not enough for that!**`)
    }
    if(isNaN(args)) 
return message.channel.send(`:rolling_eyes: Numbers Only`)
    message.channel.send(`:moneybag: **| ${message.author.username}, has transferred \`$${args}\` to ${user}**`)
    user.send(`:atm:  |  Transfer Receipt \n\`\`\`You have received $${args} from user ${message.author.username} (ID: ${user.id})\`\`\``)
    db.add(`money_${user.id}`, args)
    db.subtract(`money_${message.author.id}`, args)
}});

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
  if (!oldMember.voice.channel && newMember.voice.channel) {
    var addXP = setInterval(async function() {
      top[newMember.guild.id][newMember.user.id].voice += parseInt(Math.random() * 4);
      save();
      if (!newMember.voice.channel) {
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
    var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.cache.get(user.id)).map(function(user) {
      if (user.text > 0) {
        return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
      }
    }).join("\n")}`;
    var embed = new Discord.MessageEmbed()
      .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL())
      .setColor(`RED`)
      .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}   \n\n\n **\`${prefix}top text\`**`, true)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp()
    message.channel.send({
      embed: embed
    });
    //   if (!message.content.startsWith(prefix)) return;
  } else {
    if (message.content.startsWith(prefix + "top voice")) {
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.cache.get(user.id)).map(function(user) {
        if (user.voice > 0) {
          return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
        }
      }).join("\n")}`;
      var embed = new Discord.MessageEmbed()
        .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL())
        .setColor(`RED`)
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}   \n\n\n **:sparkles:\`${prefix}top voice\``, true)

        .setFooter(message.author.tag, message.author.displayAvatarURL())
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
        var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.cache.get(user.id)).map(function(user) {
          if (user.text > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
          }
        }).join("\n")}`;
        num = 0;
        var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.cache.get(user.id)).map(function(user) {
          if (user.voice > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
          }
        }).join("\n")}`;
        var embed = new Discord.MessageEmbed()
          .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL())
          .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``, true)
          .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``, true)
          .setFooter(message.author.tag, message.author.displayAvatarURL())
          .setTimestamp()
          .setColor(`RED`);
        message.channel.send({
          embed: embed


        });



      }
    }
  }

});

'use strict';
var _0xee92 = ["./welcome.json", "utf8", "readFileSync", "parse", "message", "set-welcome", "startsWith", "content", "MANAGE_GUILD", "hasPermission", "member", "first", "channels", "mentions", "\u0645\u0646\u0634\u0646 \u0627\u0644\u0631\u0648\u0645", "send", "channel", "id", "guild", "stringify", "error", "writeFile", "Ahmed \u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0646\u0638\u0627\u0645 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0641\u064a \u0631\u0648\u0645 ", "", "on", "guildMemberAdd",
"WELCOME", "log", "find", "cache", "\r\n \u0645\u0631\u062d\u0628\u0627 \u0628\u0643 ", "\r\n \u0627\u0646\u062a \u0627\u0644\u0639\u0636\u0648 \u0631\u0642\u0645 ", "memberCount", " \r\n "];
var welcome = JSON[_0xee92[3]](fs[_0xee92[2]](_0xee92[0], _0xee92[1]));
client[_0xee92[24]](_0xee92[4], function(canCreateDiscussions) {
if (canCreateDiscussions[_0xee92[7]][_0xee92[6]](prefix + _0xee92[5])) {
if (!canCreateDiscussions[_0xee92[10]][_0xee92[9]](_0xee92[8])) {
return;
}
var args = canCreateDiscussions[_0xee92[13]][_0xee92[12]][_0xee92[11]]();
if (!args) {
return canCreateDiscussions[_0xee92[16]][_0xee92[15]](_0xee92[14]);
}
welcome[canCreateDiscussions[_0xee92[18]][_0xee92[17]]] = {
channel : args[_0xee92[17]]
};
fs[_0xee92[21]](_0xee92[0], JSON[_0xee92[19]](welcome), function(actionPayload) {
if (actionPayload) {
console[_0xee92[20]](actionPayload);
}
});
canCreateDiscussions[_0xee92[16]][_0xee92[15]]("" + _0xee92[22] + args + _0xee92[23]);
}
});
client[_0xee92[24]](_0xee92[25], function(scopeClassName) {
console[_0xee92[27]](_0xee92[26]);
var _0x4987x3 = scopeClassName[_0xee92[18]][_0xee92[12]][_0xee92[29]][_0xee92[28]](function(canCreateDiscussions) {
return canCreateDiscussions[_0xee92[17]] === welcome[scopeClassName[_0xee92[18]][_0xee92[17]]][_0xee92[16]];
});
if (!welcome[scopeClassName[_0xee92[18]][_0xee92[17]]]) {
return;
}
_0x4987x3[_0xee92[15]]("" + _0xee92[30] + scopeClassName + _0xee92[31] + scopeClassName[_0xee92[18]][_0xee92[32]] + _0xee92[33]);
});



let rules = JSON.parse(fs.readFileSync("./rules.json", 'utf8'));

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "set-rules")){
    const args = badboy.content.split(" ").slice(1).join(" ")
        rules[badboy.guild.id] = {
aa: args,
        }
         fs.writeFile("./rules.json", JSON.stringify(rules), (err) => {
if(err)
console.error(err);
 
})
badboy.channel.send("done")
  }
})
///test
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "rules")){
      if(!rules[badboy.guild.id]) return badboy.channel.send("plase set rules messege")
let rrr = rules[badboy.guild.id].aa
    var embed = new Discord.MessageEmbed()
    .setTitle(`rules of ${badboy.guild.name}`)
    .setDescription(`${rrr}`)
    badboy.channel.send(embed)
    fs.writeFile("./rules.json", JSON.stringify(rules), (err) => {
if(err)
console.error(err);
 
})
  }
})





let auto = JSON.parse(fs.readFileSync("./auto.json", 'utf8'));
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "set-auto-role")){
    if(!badboy.member.hasPermission("ADMINISTRATOR")) return badboy.channel.send("انت لا تمتلك صلاحية")
    var role = badboy.mentions.roles.first();
    if(!role) return badboy.channel.send("هاذه ليست رول")
    auto[badboy.guild.id] = {
rolejoin: role.id,
    }
     fs.writeFile("./auto.json", JSON.stringify(auto), (err) => {
if(err)
console.error(err);
 badboy.channel.send("تم ")

})
  }
})
client.on('guildMemberAdd', member => {
 let rolejoin = member.guild.roles.cache.find(role => role.id === `${auto[member.guild.id].rolejoin}`);
if(!rolejoin) return;
if(!auto[member.guild.id]) return;
  member.roles.add(rolejoin);

})




let probot1 = JSON.parse(fs.readFileSync("./probot.json", 'utf8'));

const probot = require("probot-tax");
client.on("message", msg=> {
    if(msg.content.startsWith(prefix + 'tax')) {
      const args = msg.content.split(" ").slice(1).join(" ")
      if(!args) return msg.channel.send("اكتب الرقم")
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`**
المبلغ ${args}
مع الضريبة المبلغ يصير ${probot.taxs(args)}

**`)
msg.channel.send(embed)
probot1[msg.author.username] = {
the_number_excluding_the_tax : args,
amount_with_tax : probot.taxs(args)
}
fs.writeFile("./probot.json", JSON.stringify(probot1,null,5), (err) => {
if(err)
console.error(err);
 
})
    }
})



client.on("message", msg => {
  if (msg.content === prefix + "image") {
    let embed = new Discord.MessageEmbed()
.setImage(msg.guild.iconURL());
    msg.channel.send(embed);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "setby")) {
    let args = message.mentions.channels.first();
    if (!args)
      message.channel.send("** **").then(m => {
        m.delete(1500);
      });
    if (
      !message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send("**ليس لديك صلاحيات . ❌**");
    message.channel.send(
      `**${args}.  | :ballot_box_with_check: |لقد تم شغيل المغادرة هنا**`
    ); //By ItzTexo
    client.on("guildMemberAdd", member => {
      if (member.user.bot) return;
      var embed = new Discord.MessageEmbed()
        .setAuthor(member.user.username, member.user.avatarURL())
        .setThumbnail(member.user.avatarURL())
        .setTitle(`**الله معاك ✋ **`)
        .addField("**__شكرا لوقتك__**  ", `${member}`)
        .setDescription(`**مع السلامه تشرفنا بك ✋** `)
        .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
        .setColor("RANDOM")
        .setFooter(`نتمنى لكم الاستمتاع`);

      var channel = member.guild.channels.cache.find(gg => gg.name === "log"); //// تعديل اساسي
      if (!channel) return;
      channel.send({ embed: embed });
    });
  }
});


client.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on('message', message => {
     if (message.content === (prefix + "inv")) {
     let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .setTitle("ClickHere")
  .setURL("https://discord.com/api/oauth2/authorize?client_id=810576951995662357&permissions=8&scope=bot")
     .setFooter("Dream Craft BOT")
     .setTimestamp()
  message.channel.send(embed);
    }
});
client.on('message', message => {
     if (message.content === (prefix + "sup")) {
     let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .setTitle("ClickHere")
  .setURL("https://discord.gg/mUTsZdnEbs")
     .setFooter("Dream Craft BOT")
     .setTimestamp()
  message.channel.send(embed);
    }
});



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






client.on('message', naar => {
  if(naar.content.startsWith(prefix + "mark")){
let args = naar.content.split(" ").slice(0);
let mark = [
   '1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',
'10',
'11',
'12',
'13',
'14',
'15',
'16',
'17',
'18',
'19',
'20',
'15',
'24',
'30',
'35',
'40',
'43',
'45',
'50',
'55',
'60',
'75',
'85',
'90',
'99',
'100',
'105',
'110',
 
  ];
            
            let you = mark[Math.floor(Math.random() * mark.length)];

  var embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`** لول ${naar.author.username} علامتك بالامتحان ${you} **`)
 naar.channel.send(embed)
  }

})




client.on('message', message =>{
if(message.content === prefix + "instructions"){
  const ins = [
'http://www.emro.who.int/images/stories/coronavirus/overall_ar.png',
'http://www.emro.who.int/images/stories/coronavirus/isolate_ar.png',
'http://www.emro.who.int/images/stories/coronavirus/handwash_ar.png',
'http://www.emro.who.int/images/stories/coronavirus/foodsafetychoppingboard_ar.png',
'http://www.emro.who.int/images/stories/coronavirus/coronavirus_drugs.png',
'http://www.emro.who.int/images/stories/coronavirus/protect_your_self_and_others_travel_health_ar.png'
];
const embed = new Discord.MessageEmbed()
.setColor("#00ccff")
.setAuthor("أرشاادات منظمة الصحة العالمية","https://www.who.int/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2")
.setImage(`${ins[Math.floor(Math.random() * ins.length)]}`)
.setFooter('Stay Home')
message.channel.send(embed)
}
});

/*

- [ All rights reserved ZombieX in YT ] -

*/

client.on('message', function(message) {
if(message.content.startsWith(prefix + "today")) {
let args = message.content.split(" ").slice(1).join(" ");
if (!args) return message.channel.send(`أكتب أسم الدولة`);
fetch(`https://disease.sh/v3/covid-19/countries/${args}`)
.then(res => res.json())
.then(body => {
const embed = new Discord.MessageEmbed()
.setColor("#80C341")
.setAuthor(`أحصائيات ${body.country} لليوم`,"https://cdn.pixabay.com/photo/2020/05/22/19/51/corona-5206905_1280.png")
.setThumbnail(body.countryInfo.flag)
.addField("`أصابات اليوم`", `${body.todayCases}`,true)
.addField("`وفيات اليوم`", `${body.todayDeaths}`,true)
.addField("`حالات شفاء اليوم`", `${body.todayRecovered}`,true)
.setTimestamp()
message.channel.send(embed)
}).catch(e => {
return message.channel.send('Invalid country provided')          
})
}
});

/*

- [ All rights reserved ZombieX in YT ] -

*/

client.on('message', function(message) {
if(message.content.startsWith(prefix + "country")) {
let args = message.content.split(" ").slice(1).join(" ");
if (!args) return message.channel.send(`أكتب أسم الدولة`);
fetch(`https://disease.sh/v3/covid-19/countries/${args}`)
.then(res => res.json())
.then(body => {
const embed = new Discord.MessageEmbed()
.setColor("#80C341")
.setAuthor(`أحصائيات ${body.country}`,"https://cdn.pixabay.com/photo/2020/05/22/19/51/corona-5206905_1280.png")
.setThumbnail(body.countryInfo.flag)
.addField("`الاصابات`", `${body.cases}`,true)
.addField("`الوفيات`", `${body.deaths}`,true)
.addField("`الشفاء`", `${body.recovered}`,true)
.setTimestamp()
message.channel.send(embed)
}).catch(e => {
return message.channel.send('Invalid country provided')          
})
}
});

/*

- [ All rights reserved ZombieX in YT ] -

*/

client.on('message', message =>{
if(message.content === prefix + "total"){
fetch(`https://disease.sh/v3/covid-19/all`)
.then(res => res.json())
.then(body => {
const embed = new Discord.MessageEmbed()
.setColor("#80C341")
.setThumbnail("https://cdn.pixabay.com/photo/2020/05/22/19/51/corona-5206905_1280.png")
.addField("`الاصابات`", `${body.cases}`,true)
.addField("`الوفيات`", `${body.deaths}`,true)
.addField("`الشفاء`", `${body.recovered}`,true)
.setTimestamp()
message.channel.send(embed)           
})           
}
});



client.on("message", message => {
  const mm = message.mentions.members.first() || message.member;
  if (message.content.startsWith(prefix + "avatar")) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(mm.user.tag, mm.user.avatarURL())
      .setTitle("Avatar Link")
      .setURL(mm.user.avatarURL())
      .setColor("RANDOM")
      .setImage(mm.user.avatarURL())
      .setFooter(
        `Requested By : ${message.author.tag}`,
        message.author.avatarURL()
      );
    message.channel.send(embed);
  }
});


let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "settings")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    if (message.content.startsWith(prefix + "settings limitsban")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "settings limitskick")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleD")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleC")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelD")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelC")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

let order11 = JSON.parse(fs.readFileSync("./order1.json", 'utf8'));
client.on('message', async message => {
  if (message.author.bot || !message.guild) return;
  if (message.content.startsWith(prefix + 'set-room')) {

    if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.channel.send(`** > I Don't Have Permission**`)

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**> You Don't Have \`ADMINISTRATOR\`**`)
    var args1 = message.content.split(" ").slice(1).join(" ");
    let channel = message.mentions.channels.first()
    if (!args1) return message.channel.send(`> **Write Name Channel**`);
    if (!channel) return message.channel.send(`> **there is no channel with this name ${args1}**`);
    message.channel.send(`> **Done Selected Channel Commands**`);
    order11[message.guild.id] = {
      channel: channel.id,
    }
    fs.writeFile("./order1.json", JSON.stringify(order11), (err) => {
      if (err)
        console.error(err);
    })
  }

})




//SET ODRER ROOM CODE

let order = JSON.parse(fs.readFileSync("./order.json", 'utf8'));
client.on('message', async message => {
  if (message.author.bot || !message.guild) return;
  if (message.content.startsWith(prefix + 'set-order')) {

    if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) {
      message.channel.send(`** > I Don't Have Permission \`__ADMINISTRATOR__\`**`)
    }
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**> You Don't Have \`ADMINISTRATOR\`**`)
    if (!order11[message.guild.id]) return message.channel.send(`**Please Type : \`${prefix}set-room #channel\` To Select Commands Channel**`)

    var args1 = message.content.split(" ").slice(1).join(" ");
    let channel = message.mentions.channels.first()
    if (!args1) return message.channel.send(`> **Write Name Channel**`);
    if (!channel) return message.channel.send(`> **there is no channel with this name ${args1}**`);
    message.channel.send(`> **Done Selected Channel order**`);
    order[message.guild.id] = {
      channel: channel.id,
    }
    fs.writeFile("./order.json", JSON.stringify(order), (err) => {
      if (err)
        console.error(err);
    })
  }

})



// ORDER CODE

client.on('message', async message => {
  if (message.author.bot || !message.guild) return;
  if (message.content.startsWith(prefix + 'order') ||
    message.content.startsWith(prefix + 'طلب')) {
    if (!order11[message.guild.id]) return message.channel.send(`**Please Type : \`${prefix}set-room #channel\` To Select Commands Channel**`)
    if (!order[message.guild.id]) return message.channel.send(`**Please Type : \`${prefix}set-order #channel\` To Use This Command**`)
    if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.channel.send(`** > I Don't Have Permission \`__ADMINISTRATOR__\`**`)
    if (message.channel.id !== order11[message.guild.id].channel) return message.reply(`**Go To <#${order11[message.guild.id].channel}>**`)
    let order1 = message.content.split(" ").slice(1).join(" ");
    if (!order1) return message.channel.send(`> **Write Order**`);
    let room = message.guild.channels.cache.find(ro => ro.id === `${order[message.guild.id].channel}`);
    if (!room) return message.channel.send(`> **Not Found Room**`);
    let send21 = new Discord.MessageEmbed()
      .setTitle(`**New Order For Seller**`)
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .addField(`Requested By`, message.author)
      .setDescription(`> **${order1}**`)
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/717897049315606548/787016419312140318/2ac42a3cf2242f40bc93a124f4ca5295.png")
      .setFooter(`This Bot Made By Ahmed Abd El-Latif Gaming`, client.user.avatarURL())
      .setColor('RANDOM')
    room.send(send21).then(msg => {
      message.delete().then(c => {
        message.reply(`**Done Your Order Has Been Sent <#${order[message.guild.id].channel}>**`).then(m => {
          m.delete({ timeout: 10000 })
        })
      })
    })
    fs.writeFile("./order.json", JSON.stringify(order), (err) => {
      if (err)
        console.error(err);
    })

  }
})




client.on('message', async message => {
  let cmd = message.content.split(" ")[0];
  if (cmd == prefix + "gstart") {
    let winners = message.content.split(" ")[1];
    let time = message.content.split(" ")[2];
    let prize = message.content.split(" ").slice(3).join(" ");
    if (!winners || !time || !prize) return message.channel.send(`**Pls Use This Command Like this**\n \`${prefix}gstart 1 10m Nitro C\``);
    ///////time
    let ggg = ['d', "m", "h", "s"];
    if (ggg.some(c => time.endsWith(c))) {
      let timee = ms(time);
      console.log(timee);
      if (timee <= 10000) return message.channel.send(`**You Can't Make Giveaway Time Less Than 10sec**`);
      /////winners
      if (timee > 2592000000) return message.channel.send(`**You Can't Make Giveaway Time More Than 30Day**`)
      if (isNaN(winners)) return message.channel.send(`**Pls Type Number Of Winners Like:**\n${prefix}gstart \`1\` 10m Nitro C`);
      let wooners = Math.floor(winners);
      if (wooners >= 20 || wooners <= 0) return message.channel.send(`**Winners Most Be More Than 0 And Not More Than 20**`);
      ///// prize
      let tm = ms((timee - (Date.now() - (Date.now() + timee)) % 2), { long: true })
      let embed = new Discord.MessageEmbed()
        .setTitle('Giveaway Started')
        .setDescription(`Prize : ${prize}\n Ends At : ${tm}`)
        .setFooter(`${wooners} Winners | Hosted By : ${message.author.username}`)
        .setColor('GREEN')


      message.channel.send(embed).then(c => {
        c.react('🎉');
        asta(c, wooners, timee, prize, message.author.id);
      })
    } else {
      message.channel.send("**Please The Time Most Be Ends With 10m or 10s or 11h or 2d**");
    }
  }
})
function asta(message, winners, time, prize, hoster) {
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 2), { long: true })
    let embed = new Discord.MessageEmbed()
      .setTitle('Giveaway Started')
      .setDescription(`Prize : ${prize}\n Ends At : ${tm}`)
      .setFooter(`${winners} Winners | Hosted By : ${hoster}`)
      .setColor('GREEN')

    message.edit(embed);

  }, time / 4);
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 4), { long: true })
    let embed = new Discord.MessageEmbed()
      .setTitle('Giveaway Started')
      .setDescription(`Prize : ${prize}\n Ends At : ${tm}`)
      .setFooter(`${winners} Winners | Hosted By : ${hoster}`)
      .setColor('GREEN')

    message.edit(embed);

  }, time / 2);
  setTimeout(() => {
    message.reactions.cache.get('🎉').users.remove(client.user.id)
    setTimeout(async () => {
      let winner = "";
      let s = [];
      let m = await message.reactions.cache.get('🎉').users.cache;

      m.forEach((value, key) => {
        s.push(key);
      })



      console.log(m);

      for (i = 0; i <= winners - 1; i++) {
        console.log(s);

        let r = s[Math.floor(Math.random() * s.length)];
        console.log(r);
        winner += "<@" + r + "> \n";

      }
      if (message.reactions.cache.get('🎉').users.cache.size < 1) {
        let embed = new Discord.MessageEmbed()
          .setTitle('End Giveaway')
          .setDescription(`No One Entered`)
          .setColor('RED')
        message.edit(embed);
      } else {
        let embed = new Discord.MessageEmbed()
          .setTitle('End Giveaway')
          .setDescription(`**Hosted By : <@${hoster}>**\n **Winner/s :**${winner}`)
          .setColor('GREEN')
        message.edit(embed);
        message.channel.send(`**Congratulations  ${winner}! You won the  ${prize}!**`);
      }





    }, 1000)
  }, time)
} ///حقوق monn codes


const cool = [];

client.on('message',async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
  }
 
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
 
      var number = `${one}${two}${three}${four}`;
 
      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);
 
    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
});








const sug = JSON.parse(fs.readFileSync("./rasug.json", "utf8"));
var sugcool = new Set();
client.on('message', async message => {
  if (message.content.startsWith(prefix + 'sug')) {
    if (['set', 'blacklist add', 'blacklist add', 'blacklist list', 'on', 'off'].includes(message.content.split(" ")[1])) return null;
    if (!sug[message.guild.id] || !message.guild.channels.cache.get(sug[message.guild.id].channel)) return message.channel.send(`**:x: حدث خطا!
  اذا كنت من ادمنيه السيرفر برجاء كتابه الامر الاتي : \`${prefix}set-sug\`  لتحديد روم الاقتراحات**`);
    if (sug[message.guild.id].onoff == 'Off') return message.channel.send(`**This Command Has Been Disabled**!`);
    if (sugcool.has(message.author.id)) return message.channel.send(message.author.username + ',**برجاء الانتظار 5 دقائق بين كل اقتراح**!')
    if (!sug[message.guild.id]) sug[message.guild.id] = {};
    var args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.channel.send('**برجاء كتابه اقتراحك بعد الامر مباشره**!');
    var random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var ID = "";
    for (var y = 0; y < 8; y++) {
      ID += `${random.charAt(Math.floor(Math.random() * random.length))}`;
    };
    sugcool.add(message.author.id);
    setTimeout(() => {
      sugcool.delete(message.author.id);
    }, 5 * 60 * 1000);
    let embed = new Discord.MessageEmbed().setAuthor(`Username : ${message.author.tag}   ID: ${message.author.id}`)
      .setColor('#f06301')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(args).setFooter(`Suggestion Code: ${ID}`).setTimestamp();
    let ch = message.guild.channels.cache.get(sug[message.guild.id].channel);
    message.channel.send(`**تم ارسال اقتراحك الى : ${ch}**`);
    ch.send(embed).then(M => {
      M.react('👍');
      M.react('👎')
      sug[message.guild.id + ID] = {
        ID: M.id,
        by: message.author.id,
        content: args
      }
      fs.writeFile("./rasug.json", JSON.stringify(sug), (err) => {
        if (err) console.error(err)
      });
      fs.writeFile("./rasug.json", JSON.stringify(sug), (err) => {
        if (err) console.error(err)
      });
    })
  }


  if (message.content.startsWith(prefix + 'اعد')) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**ليس لديك صلاحيه "MANAGE_MESSAGES" !!**`)
    if (!sug[message.guild.id] || !message.guild.channels.cache.get(sug[message.guild.id].channel)) return message.channel.send(
      `**:x: حدث خطا!
            اذا كنت من ادمنيه السيرفر برجاء كتابه الامر الاتي : \`${prefix}set-sug\`  لتحديد روم الاقتراحات**`)
    var ID = message.content.split(" ")[1];
    if (!ID || !sug[message.guild.id + ID]) return message.channel.send('**لم اتمكن من العثور على الاقتراحات يحمل هذا ال id !**')
    let ch = message.guild.channels.cache.get(sug[message.guild.id].channel)
    let oMessage = sug[message.guild.id + ID].ID ? await ch.messages.fetch(sug[message.guild.id + ID].ID) : null;
    if (!oMessage) return message.channel.send('**لم اتمكن من العثور على الاقتراحات يحمل هذا ال id !**')
    let editt = message.content.split(" ")[2];
    if (!editt) return message.channel.send(`**برجاء كتابه الرد بعد الامر مباشره**`);
    message.channel.send(`**☑️ تم الرد على الاقتراح حامل هذا ال ID : \`${ID}\` !**`)
    let em = message.guild.members.cache.get(sug[message.guild.id + ID].by);
    em.send(new Discord.MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor('#00ff97').setDescription(`**شكرا للرد على الاقتراح   Server ID : (${message.guild.id}) | Suggestion ID : (${ID})**`).setTimestamp())
    oMessage.edit(new Discord.MessageEmbed().setAuthor(`New Suggestion By ${em.user.username}`, em.avatarURL)
      .addField('**Suggestion:**', sug[message.guild.id + ID].content).addField(`**${message.author.tag} Replied:**`, editt)
      .setFooter(`Suggestion Code: (${ID})`).setTimestamp().setColor('#9ef001'))

  }
})


client.on('message', message => {
  if (message.content.startsWith(prefix + 'set-sug')) {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`صلاحياتك لا تكفي لنحديد الروم يجيب ان يكون لديك صلاحيه **MANAGE_GUILD**`)
    let ch = message.mentions.channels.first() || message.guild.channels.cache.get(message.content.split(" ")[1]);
    if (!ch) return message.channel.send('لم اتمكن من العثور على هذا الروم برجاء المحاوله مره اخرى');
    sug[message.guild.id] = {
      onoff: 'On',
      channel: ch.id
    };
    fs.writeFile("./rasug.json", JSON.stringify(sug), (err) => {
      if (err) console.error(err)
    });
    message.channel.send(`**جميع الاقتراحات سيتم ارسالها للروم الاتي : ${ch}**`)
  }
})



client.on('message', message => {
  if (message.content === prefix + 'info') {
    let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
    let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
    let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
    let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL() : message.author.avatarURL();

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.cache.get(message.guild.id).members.cache.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce((p, v) => v.url + ` , إجمالي عدد الأعضاء غير المحتملين: ${v.uses}.\n` + p, `\nServidor: ${message.guild.name} \n `);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [['إجمالي عدد أعضاء المكتب:']];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.MessageEmbed()
        .setTitle(`:incoming_envelope: **[معلومات دعوة]** ${Username}`)
        .setThumbnail(client.user.avatarURL())
        .addField('**الدعوات**', `** ↝** [ شخص **${Number(inviteCount)}** ]`)
        .addField('**تم الانضمام للسيرفر من**', `** ↝** [ يوم **${daysJoined.toFixed(0)}** ]`)
        .addField('**رابط دعوة الانضمام**', `** ↝** [ **${inviteCode || 'Zm2U6we'}** ]`)
        .setColor('#36393e')
        .setTimestamp()
        .setFooter(Tag, Avatar)

      message.channel.send(inviteInfo);
    })



  };
});


client.on("message", ahmed => {
  if(ahmed.content === (prefix + 'help'))
   var embed = new Discord.MessageEmbed()
  .setFooter(`Developer : nas₮⍥кẙ⍥ ℃їẙ#0001`)
  .setColor("RANDOM")
  .setTitle(`\`\`${client.user.username}\`\` **help**`)
  .setDescription(`         
  Dream Craft BOT command
  Use $help [command] for more info.

  inv, sup
  General:
  help, ping, avatar, image,  user,هل تعلم, rank
  invites, memes, نكت, top, bots
  
  Admin:
  ban, unban, مسح, warn,  اخفاء , اظهار, mute, unmute, unvmute, kick, move
  mc, unmc, bans, points, info, reply


  credits command
  credits, daily, pay, tax


  Ticket command
  new, close


  Protection command
  antibot on, antibot of, antilink on, antilink of


  Covid command
  instructions, today, country, total

  giveaway command
  gstart


  log command
  setLog, toggleLog

  welcome command
set-welcome

  bay command
  setby

  suggestion command
  set-sug, sug

  order command
  set-room, set-order, order

  Games command
  اعلام, صراحه,  اسرع, winer, slap, deletes, triggered, kill, game,  gay, hug, spank, marker

  play command
  play, pause, resume, np, skip, stop, volume, queue

  roles command
mrole, set-auto-role, role

rules command
set-rules, rules

apply command
apply, room1, قبول, رفض, room2

Voice command
setVc

colors command
createcolors
`)
ahmed.channel.send(embed)
});
const category = "category-id";
let mtickets = true;
let tchannels = [];
let current = 0;
 
 
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (args[0].toLowerCase() === `${prefix}heeeeelsasaollooop`) {
    let embed = new Discord.MessageEmbed()
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
    message.guild.channels.create(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
      message.channel.send(`**تـم فـتـح تـذكرتـك**`);
      c.createOverwrite(message.guild.id, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
      });
      c.createOverwrite(message.author.id, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      });
 
      if (args[1])
        openReason = `\nReason: [ **__${args.slice(1).join(" ")}__** ]`;
      let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
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
    message.channel.createOverwrite(member.id, {
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
    message.channel.createOverwrite(member.id, {
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


const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.cache.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.MessageEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${client.user.username}`);
    message.channel.send(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.cache.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL())
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL());

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.cache.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL())
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL());

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();

    let roleCreate = new Discord.MessageEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();

    let roleDelete = new Discord.MessageEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.cache.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.MessageEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.MessageEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());

      logChannel.send(roleUpdateColor);
    }
  });
});


client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();

    let channelCreate = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL());

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();

    let channelDelete = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL());

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.cache.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();

    if (userID === client.user.id) return;

    let banInfo = new Discord.MessageEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.MessageEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.cache.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.MessageEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL());

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.cache.size < newMember.roles.cache.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.MessageEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL())
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.cache.size > newMember.roles.cache.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.MessageEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL())
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.MessageEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL())
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL());

    logChannel.send(newOwner);
  }
});



client.on("message",message => {
    if(message.content.startsWith(prefix + "user")){
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.username,message.author.avatarURL())
  .setThumbnail(message.author.avatarURL())
  .setTitle("معلومات المستخدم")
  .addField('``الاسم``', ` ${message.author.tag} `, true)
  .addField('``المعرف``', ` ${message.author.id} `, true)  
  .addField('``أنشئت في``', ` ${message.author.createdAt.toLocaleString()} `, true)
  .setTimestamp(); 
  message.channel.send(embed)
  }
  });
client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "memes")){
    let reply =[
      'https://pm1.narvii.com/7630/ca050d19dc9832424a888f017e6f1c28762d8f17r1-863-540v2_hq.jpg',
      'https://i.pinimg.com/originals/9a/b7/b7/9ab7b7e225f2cc5ee190e8a67c126c66.jpg',
      'https://pbs.twimg.com/media/Ecq6FxYWkAIQ8pE.jpg',
      'https://i.ytimg.com/vi/sm6z50Qoxqg/maxresdefault.jpg',
      'https://64.media.tumblr.com/tumblr_m7mw1u9vb81rr8kmyo1_1280.jpg',
      'https://i.ytimg.com/vi/7lTvO9wxqPw/hqdefault.jpg',
      'https://pm1.narvii.com/7723/6ed7ca7c14b84d2f36a9383ba01751a600e537f8r1-799-624v2_uhq.jpg',
      'https://i.pinimg.com/564x/04/80/c8/0480c863e93e5f83f3eb087c0579961a.jpg',
      'https://i.ytimg.com/vi/rlOT3GCBVjE/hqdefault.jpg',
      'https://i.ytimg.com/vi/C7-hq9Ffcj8/maxresdefault.jpg',
      'https://pbs.twimg.com/media/ESnM7BbXQAAb0w2.jpg',
      'https://i.ytimg.com/vi/0Hp2a-lrm_o/hqdefault.jpg',
      'https://i.ytimg.com/vi/SRrIcSkwYGQ/mqdefault.jpg',
      'https://stepcdn.com/assets/2019-04/18/11/43vc5/55944951_2568294106575830_8991684621687062528_n-700x.jpg',
      'https://i.pinimg.com/originals/cb/bf/da/cbbfdaf0da7743a491e832cb86e95ea3.jpg',
      'https://i.pinimg.com/736x/09/01/e3/0901e327b98ca708b81e64917a02d2a0.jpg',
      'https://i.pinimg.com/originals/df/91/4e/df914ee1f44c13ad4e7a1a472bf582c3.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8p_FAfFjnwjtMTPBLPINsIurByWcBYziQIQ&usqp=CAU',
      'https://64.media.tumblr.com/48616c5f37aa9b702b0838a8cfff058f/9663137ce20047ec-52/s1280x1920/77f01452f0473b4edf142cfd8649a8bb2b8a2f40.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPFTRZcVlYXkAQYa0dEYuUHgYoFHbCAE7Zw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BkWoPcUKvxRJY1mQk87ST2d-zPxc89Epiw&usqp=CAU',
     
      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
});

//nokta

client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "نكت")){
    let reply =[
      'https://i.pinimg.com/originals/90/4a/e9/904ae9fdd07d8d7afbd3b89c0067a24e.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlE0X6Q3y_CXhdJThWUnVvwKQQZOS_PBu_MQ&usqp=CAU',
      'https://i.pinimg.com/564x/4f/c3/d0/4fc3d08016a6398836d7c64c7d64d7ba.jpg',
      'https://www.aljawab24.com/wp-content/uploads/2020/10/%D9%86%D9%83%D8%AA-1-1-1-6-845x475.jpg',
      'https://i.pinimg.com/564x/ed/14/bf/ed14bfbcbfaeef8afdcf399f9c81681b.jpg',
      'https://m7et.com/wp-content/uploads/2020/04/dd78334190a889394039a9a72ea07c40.jpg',
      'https://i.pinimg.com/474x/90/92/d2/9092d2e5586919b5c4892a1f99a95ace.jpg',
      'https://www.i7lm.com/wp-content/uploads/2019/04/%D9%86%D9%83%D8%AA-%D9%85%D8%B6%D8%AD%D9%83%D8%A9.png',
      'https://www.eqrae.com/wp-content/uploads/2020/09/%D9%83-3.jpg',
      'https://media.gemini.media/img/large/2017/3/23/2017_3_23_16_51_15_362.jpg',
      'https://www.meshwarmedia.com/wp-content/uploads/2017/10/%D9%86%D9%83%D8%AA%D8%A9-12.jpg',
      'https://womenss.net/wp-content/uploads/2020/02/1713.jpg',
      'https://www.nsowo.com/wp-content/uploads/2019/02/%D9%86%D9%83%D8%AA-%D9%85%D8%B6%D8%AD%D9%83%D8%A9-%D9%85%D8%B9-%D9%86%D9%83%D8%AA%D9%87-%D8%B4%D8%B1%D8%B7%D9%8A-300x224.jpg',
      'https://www.i7lm.com/wp-content/uploads/2020/03/3333-5.jpg',
      'https://pbs.twimg.com/profile_images/378800000670246023/33e11a886fb45f462552bfdde1a5c40b_400x400.jpeg',
      
      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
});


client.on("message", message => {
    if (message.content === prefix + "ping") {
      let start = Date.now();
      message.channel.send("pong").then(message => {
        message.edit(`\`\`\`js
  Time taken: ${Date.now() - start} ms
  Discord API: ${client.ws.ping.toFixed(0)} ms\`\`\``);
      });
    }
  });




client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar")) {
    const mention = message.mentions.users.first()

    if (!mention) return console.log("")
    let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(`${mention.username}#${mention.discriminator}`, `${mention.avatarURL()}`)
      .setTitle("رابط الصورة الرمزية")
      .setURL(`${mention.avatarURL()}`)
      .setImage(`${mention.avatarURL()}`)
      .setFooter(`بتوصية من ${message.author.tag}`, `${message.author.avatarURL()}`)
    message.channel.send(embed)
  }
});






//////////////////////////////////////////////////////
  client.on('message',message =>{
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'invite') {
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.MessageEmbed()
      .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
      .setColor('#36393e')
      message.channel.send(e)
  }else {
                       var embed = new Discord.MessageEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.MessageEmbed()
.setColor("#000000")
.addField(`رموز دعوتك في ${message.guild.name}`, `ليس لديك حاليا أي دعوات نشطة! يرجى إنشاء دعوة والبدء بالدعوة ، وبعد ذلك ستتمكن من رؤية الرموز الخاصة بك هنا!`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.MessageEmbed()
.setColor("#000000")
.addField(`رموز دعوتك في ${message.guild.name}`, `أكواد الدعوة :\n${codes.join("\n")}`)
.setColor('#36393e')
message.channel.send({ embed: embed });
return;
}
})
}

});

client.on('message',message =>{
    if(message.content.startsWith(prefix + 'top invites')) {
     
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`يدعو: ${inv.url} الداعي: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.MessageEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on('message', message => {
  if (message.author.bot) return;
  let args = message.content.split(' ');
  // By Alpha Codes - AboKhalil 26/7/2019
  let command = args[0];

  let user = message.mentions.users.first();

  let reasonkick = message.content
    .split(' ')
    .slice(2)
    .join(' ');

  if (command == '$kick') {
    if (!message.channel.guild) {
      message.channel.send('**لا يمكن استعمال هذا الأمر في الخاص**');
    }
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) {
      message.channel.send('**يجب ان يكون لديك خاصية `KICK_MEMBERS`**');
    }
    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
      message.channel.send('**البوت لا يمتلك خاصية `KICK_MEMBERS`**');
    }
    if (!user) {
      message.channel.send('**يجب عليك إختيار الشخص المراد طرده**');
    } else if (!reasonkick) {
      message.channel.send('**يجب عليك إدراج سبب الحظر**');
    } else if (message.guild.member(user).hasPermission('KICK_MEMBERS')) {
      message.channel.send('**لا يمكن طرد هذا الشخص , فهو من الإدارة**');
    } else {
      message.guild.member(user).kick();
      message.channel.send(
        '**The Member Was Kicked **' +
        user.tag +
        ' **By** : ' +
        message.author.tag
      );
      message.channel.send('**Reason : __' + reasonkick + '__**');

      user.send('**You are Kicked By** : ' + message.author.tag);
      user.send('**Reason : __' + reasonkick + '__**');
    }
  }
  // By Alpha Codes - AboKhalil 26/7/2019
});


client.on('message', message => {
  if (message.content === '$bot') {
    var yaman = new Discord.MessageEmbed()
      .setAuthor(
        client.user.username,
        client.user.displayAvatarURL({ dynamic: true, size: 2048 })
      )
      .setFooter(
        `Requested By ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true, size: 2048 })
      )
      .setTimestamp()
      .setColor('RED').setDescription(`**Bot Ping : ${client.ws.ping}
    
    Bot Name : \`${client.user.username}\`

    Bot Tag : \`${client.user.tag}\`

    Bot ID : \`${client.user.id}\`

    Bot Users : \`${client.users.cache.size}\`

    Bot Servers : \`${client.guilds.cache.size}\`

    Bot Owner : <595914439832633344><667342379753275421>
    **`);
    message.channel.send(yaman);
  }
});


//server

client.on("message", russi => {
  if (russi.content === prefix + "server") {


    let embed = new Discord.MessageEmbed()
      .setTitle(`${russi.guild.name}`)///Russi
      .setThumbnail(client.user.avatarURL())
      .setColor('#3a6bff')///Russi
      .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
      .addField('> <:ID:791203015708770304> ID Server :', `${russi.guild.id}`)
      .addField('> :crown: Owner Server :', `${russi.guild.owner}`)
      .addField('> :calendar: Created : ', `${russi.guild.createdAt.toLocaleString()}`)
      .addField('> :busts_in_silhouette: Members : ', `${russi.guild.memberCount}`)
      .addField('> :speech_balloon: Channels : ', `${russi.guild.channels.cache.size}`)
      .addField('> :earth_americas: Region : ', `${russi.guild.region}`)
      .setTimestamp()///Russi
    russi.channel.send(embed);
  }
});


client.on('message', msg => {
  if (msg.content === '$support') {
    msg.reply('https://discord.gg/aN52jS3EPN');
  }
});

client.on('message', async message => {
  if (message.content.startsWith('$role')) {
    if (!message.member.hasPermission('MANAGE_ROLES'))
      return message.channel.send(
        `>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_ROLES\`**`
      );
    var user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        `**Usage: ${prefix}role \`<@user> <role>\`**`
      );
    var role =
      message.mentions.roles.first() ||
      message.guild.roles.cache.find(r =>
        r.name.startsWith(
          message.content
            .split(' ')
            .slice(2)
            .join(' ')
        )
      );
    if (!role) return message.channel.send(`**Can't found this role**`);
    if (user.roles.cache.get(role.id)) {
      user.roles.remove(role).then(() => {
        return message.channel.send(
          `✅ - **Successfully Removed Role From ${user.user.username}, \`-${
          role.name
          }\`**`
        );
      });
    } else {
      user.roles.add(role).then(() => {
        return message.channel.send(
          `✅ - **Successfully Added Role To ${user.user.username}, \`+${
          role.name
          }\`**`
        );
      });
    }
  }
});





const DIG = require("discord-image-generation");
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "spank")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("need mention user")

    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let img = await new DIG.Spank().getImage(`${avatar}`, `${avatar2}`);
    let attach = new Discord.MessageAttachment(img, "Spank.png");;
    message.channel.send(attach)
  }
});

//hug

client.on('message', russi => {
  if (russi.content.startsWith(prefix + "hug")) {
    let member = russi.mentions.users.first();
    if (!member) return russi.reply("**Please Mention Member**")
    let hugs = [
      'https://cdn.discordapp.com/attachments/782532317729652757/797086131018924032/tenor.gif',


    ];
    let hug1 = hugs[Math.floor(Math.random() * hugs.length)];

    var embed = new Discord.MessageEmbed()
      .setTitle("HUG")
      .setColor("RANDOM")
      .setImage(`${hug1}`)
      .setFooter(`you hug by ${russi.author.username}`)
    russi.channel.send(embed)

  }
});

//gay


client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "gay")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("need mention user")

    const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let img = await new DIG.Gay().getImage(`${avatar2}`);
    let attach = new Discord.MessageAttachment(img, "Gay.png");;
    message.channel.send(attach)
  }
});

//wanted

client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "wanted")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("need mention user")

    const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let img = await new DIG.Wanted().getImage(`${avatar2}`);
    let attach = new Discord.MessageAttachment(img, "Wanted.png");;
    message.channel.send(attach)
  }
});

//game

client.on('message', badboy => {
  if (badboy.content.startsWith(prefix + "game")) {
    let args = badboy.content.split(" ").slice(0);
    var user = badboy.mentions.users.first() || badboy.author;
    if (user.bot || !badboy.guild) return;

    if (badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
    let win = [
      ':upside_down: :upside_down: :upside_down:  win',
      ':upside_down: :face_with_raised_eyebrow: :zany_face: lose',
      ':upside_down: :face_with_raised_eyebrow: :upside_down: lose',
      ' :yum: :yum: :yum: win',
      ' :kissing_heart:  :kissing_heart:  :kissing_heart:  win',
      ' :frowning2: :frowning2: :kissing_heart: lose',

    ];

    let an = win[Math.floor(Math.random() * win.length)];

    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${an}`)
    badboy.channel.send(embed)
  }

});

//kill

client.on('message', message => {
  if (message.content.startsWith(prefix + 'kill')) {
    let user = message.mentions.users.first();
    if (!user) {
      message.reply(`You've to mention user you want to kill.`)
    }
    let kill = ['https://steamuserimages-a.akamaihd.net/ugc/782985908083449716/7D8D3247449A582D75182D76E083F3C11F7A9A1F/', 'حط الصورة الي تبغاها', ``];
    message.channel.send({
      embed: new Discord.MessageEmbed()
        .setDescription(`${message.author} killed **${user}**`)
        .setImage(
          kill[Math.floor(Math.random() * kill.length)]
        )
    });
  }
});

//iq


//triggered

client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "triggered")) {
    var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let img = await new DIG.Triggered().getImage(avatar)
    let attach = new Discord.MessageAttachment(img, "Triggered.gif");;
    message.channel.send(attach)
  }
});

//deletes

client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "deletes")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("need mention user")
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let img = await new DIG.Delete().getImage(`${avatar2}`);
    let attach = new Discord.MessageAttachment(img, "Delete.png");;
    message.channel.send(attach)
  }
});

//trash

client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "trash")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("need mention user")

    const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let img = await new DIG.Trash().getImage(`${avatar2}`);
    let attach = new Discord.MessageAttachment(img, "Trash.png");;
    message.channel.send(attach)
  }
});

//slap

client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "slap")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("need mention user")

    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let img = await new DIG.Batslap().getImage(`${avatar}`, `${avatar2}`);
    let attach = new Discord.MessageAttachment(img, "slap.png");;
    message.channel.send(attach)
  }
});

//winer

client.on('message', vest => {
  let winer1 = vest.content.split(" ")[1]
  let winer2 = vest.content.split(" ")[2]
  let score1 = (Math.floor(Math.random() * 40));
  let score2 = (Math.floor(Math.random() * 40));
  if (vest.content.startsWith(prefix + 'winer')) {
    let usage = new Discord.MessageEmbed()
      .setTitle(' ERROR :')
      .setColor("Gray")
      .setDescription(`
      Usage :
      ${prefix}winer <palyer1> <palyer 2>
 
      Ex :
      ${prefix}winer ${vest.author} <palyer2>
      `)
      .setAuthor(vest.author.username
        , vest.author.avatarURL())

      .setFooter(`Requsted by: ${vest.author.username}`)
    if (!winer1 || !winer2) return vest.channel.send(usage)
    if (score2 > score1) {
      let fff = new Discord.MessageEmbed()
        .setTitle(' Winer  :')
        .setColor("Gray")
        .setAuthor(vest.author.username
          , vest.author.avatarURL())

        .setDescription(`
     Winer{${winer2} : ${score2}}
 
 
     Lozer {${winer1}: ${score1}}
 
 
      `)
      vest.channel.send(fff)

    } else {
      if (score1 > score2) {
        let ff = new Discord.MessageEmbed()
          .setTitle(` Winer  :`)
          .setColor("Gray")

          .setAuthor(vest.author.username
            , vest.author.avatarURL())

          .setDescription(`
     Winer{${winer1}: ${score1} }
 
 
     Lozer {${winer2} : ${score2}}
 
 
      `)
        vest.channel.send(ff)

      } else {
        if (score1 = score2) {
          let equal = new Discord.MessageEmbed()
            .setTitle(' Equal :')
            .setColor("Gray")
            .setAuthor(vest.author.username
              , vest.author.avatarURL())

            .setDescription(`
     Equal{ ${winer1}: ${score1} }
 
 
     Equal {${winer2} : ${score2} }
 
 
      `)
          vest.channel.send(equal)
        }
      }

    }



  }

});






client.on('message', badboy => {
  if (badboy.content.startsWith(prefix + "هل تعلم")) {
    let reply = [
      "https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"

    ];
    let an = reply[Math.floor(Math.random() * reply.length)];
    badboy.channel.send(`${an}`)
  }
});











client.on('message', salm => {
  if (salm.content.startsWith(`${prefix}embed`)) {
    salm.channel
      .send({
        embed: new Discord.MessageEmbed()
          .setAuthor(salm.guild.name, salm.guild.iconURL({ dynamic: true }))
          .setColor(`RANDOM`)
          .setThumbnail(salm.guild.iconURL({ dynamic: true }))
          .setTimestamp()
          .setDescription(
            salm.content
              .split(' ')
              .slice(1)
              .join(' ')
          )
      })
      .then(s => {
        salm.delete({ timeout: 3000 });
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('$mrole') ||

    message.content.startsWith(prefix + 'الرتب')) {


    const user = message.guild.member(message.mentions.members.first());
    if (!user) return message.channel.send('منشن الشخص');
    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Server Roles Info By Ali And Bad Boy ')
      .addField('**Server Roles:**', `**${message.guild.roles.cache.size}**`)
      .addField(
        '**Your Roles:**',
        `**${user.roles.cache.map(roles => `${roles}`)}**`
      )
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`);
    message.channel.send(embed);
  }
});


client.on('message', message => {
  if (message.content.startsWith('$اعلام')) {
    if (!message.channel.guild)
      return message
        .reply('**⛔ هذا الأمر للسيرفرات فقط**')
        .then(m => m.delete(3000));
    const type = require('./data/Flags.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
      return item.answers.some(
        answer => answer.toLowerCase() === response.content.toLowerCase()
      );
    };
    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('**⏲️ لديك (10) ثانية فقط لكتابة اسم العلم**')
      .setImage(`${item.type}`);
    message.channel.send(embed).then(() => {
      message.channel
        .awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
        .then(collected => {
          const sh = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(
              `لقد قمت بكتابة اسم العلم في الوقت المناسب <@${
              message.author.id
              }>`
            );
          message.channel.send(sh);
        })
        .catch(collected => {
          message.channel.send(
            `**⏲️ انتهئ الوقت ولم يقم احد بكتابة اسم العلم **`
          );
        });
    });
  }
});

client.on('message', message => {
  if (message.content.startsWith('$اسرع')) {
    if (!message.channel.guild)
      return message
        .reply('**⛔ هذا الأمر للسيرفرات فقط**')
        .then(m => m.delete(3000));
    const type = require('./data/speed.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
      return item.answers.some(
        answer => answer.toLowerCase() === response.content.toLowerCase()
      );
    };
    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('**⏲️ لديك (15) ثانية فقط لكتابة الكلمة**')
      .setImage(`${item.type}`);
    message.channel.send(embed).then(() => {
      message.channel
        .awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
        .then(collected => {
          const sh = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`لقد قمت بكتابة الكلمة في الوقت المناسب`);
          message.channel.send(sh);
        })
        .catch(collected => {
          message.channel.send(`**⏲️ انتهئ الوقت ولم يقم احد بكتابة الكلمة **`);
        });
    });
  }
});

client.on('message', msg => {
  if (msg.content === 'prefix') {
    msg.reply('<$>');
  }
});

const sir = [
  'كم مرة اكلت كيكيه',
  'كم مرة سرقت ',
  'كم مرة سرقت كود',
  'كم مرة هربت من البيت',
  'كم مرة عصبت و كسرت جهازك ',
  'كم مرة سافرت',
  'هل اصبت  فايروس من قبل',
  'هل هربت من مدرسه',
  'هل قتلت شخص'
];

client.on('message', message => {
  if (message.content.startsWith('$صراحه')) {
    var embed = new Discord.MessageEmbed()

      .setColor('RANDOM')

      .setDescription(`${sir[Math.floor(Math.random() * sir.length)]}`)

      .setTimestamp();

    message.channel.send(embed);
  }
});

client.on('message', message => {
  const msg = message;
  var s1 = msg.content.split(' ')[1];
  var s2 = message.content
    .split(' ')
    .slice(2)
    .join(' ');
  if (message.content.startsWith('$create')) {
    if (!s1 || !s2)
      return message.channel.send("❌ I can't found room name/status");
    else if (s1 !== 'text' && s1 !== 'voice')
      return message.channel.send('❌ only voice + text');
    if (!message.member.hasPermission('MANAGE_CHANNELS'))
      return msg.reply("**I don't have MANAGE_CHANNELS Permission**");
    else
      message.guild.channels.create(s2, s1).then(channel => {
        var room = `<#${channel.id}>`;
        if (s1 === 'voice') room = ``;
        msg.reply(`Done ${room}`);
      });
  }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'مسح')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.messages.fetch({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.send("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });



client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('$ban')) {
    if (!message.member.hasPermission('BAN_MEMBERS')) return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!'
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});


const lej = [
  ':sweat_smile:/:kissing_smiling_eyes:/:joy: = lose',
  ':grinning:/:grinning:/:grinning: = win',
  ':expressionless:/:expressionless:/:sweat_smile: = lose',
  ':unamused:/:unamused:/:unamused: = win',
  ':kissing_heart:/:kissing_heart:/:kissing_closed_eyes: = lose',
  ':zipper_mouth:/:zipper_mouth:/:zipper_mouth: = win'
];

client.on('message', message => {
  if (message.content.startsWith('$kok')) {
    var embed = new Discord.MessageEmbed()

      .setColor('RANDOM')

      .setDescription(`${lej[Math.floor(Math.random() * lej.length)]}`)

      .setTimestamp();

    message.channel.send(embed);
  }
});









client.on('message', prof => {

  if (prof.content.startsWith(prefix + 'mc')) {
    if (!prof.guild.me.hasPermission('MANAGE_CHANNELS')) return prof.reply('**ليس لدي إذن `MANAGE_CHANNELS`:pleading_face: **')
    if (!prof.member.hasPermission('MANAGE_CHANNELS')) return prof.reply('**ليس لديك إذن`MANAGE_CHANNELS`!**')

    prof.channel.overwritePermissions([{
      id: prof.guild.id,
      deny: ['SEND_MESSAGES'],
    }]).then(p => {
      var professor = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setThumbnail(client.user.avatarURL())
        .setTitle(`قفل ${prof.channel.name} `)
        .setDescription(`هذه الغرفة <#${prof.channel.id}> تم قفلها `)
      prof.channel.send(professor);
    })

    //unlock

  }
  if (prof.content.startsWith(prefix + 'unmc')) {
    if (!prof.guild.me.hasPermission('MANAGE_CHANNELS')) return prof.reply('**ليس لدي إذن `MANAGE_CHANNELS`:pleading_face: **')
    if (!prof.member.hasPermission('MANAGE_CHANNELS')) return prof.reply('**ليس لدي إذن`MANAGE_CHANNELS`!**')

    prof.channel.overwritePermissions([{
      id: prof.guild.id,
      allow: ['SEND_MESSAGES'],
    }]).then(p => {
      var professor = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setThumbnail(client.user.avatarURL())
        .setTitle(`open ${prof.channel.name}  `)
        .setDescription(`هذه الغرفة <#${prof.channel.id}> انفتحت `)
      prof.channel.send(professor);
    })

  }


});

//hide 

client.on('message', message => {
  if (message.content === prefix + "hide") {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' **ليس لديك إذن "MANAGE CHANNELS" **');
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.createOverwrite(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL())
        .setDescription(`> **تم إخفاء هذه الغرفة ${message.channel}**`)
        .setFooter(`بواسطة ${message.author.username}`)
      message.channel.send(embed)
    })
  }
});

//show

client.on('message', message => {
  if (message.content === prefix + "show") {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** ليس لديك إذن "MANAGE CHANNELS" **');
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.createOverwrite(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      const embed = new Discord.MessageEmbed()
        .setColor("#RANDOM")
        .setThumbnail(message.guild.iconURL())
        .setDescription(`> **تم عرض هذه الغرفة ${message.channel}**`)

        .setFooter(`بواسطة ${message.author.username}`)
      message.channel.send(embed)
    })
  }
});






client.on('message', message => {

  if (message.content.startsWith(prefix + "warn")) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`ليس لديك الإذن `);
    let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
      .setColor('#0083ff')
      .setTimestamp();

    if (!user) {
      embed.addField("**منشن الشخص** ", ` ${message.author.tag}?`)
        .setTimestamp();
      return message.channel.send(embed);
    } if (!reason) {
      embed.addField("**لماذا تريد اعطاء الشخص أنذار** ? ", ` ${user.tag}?`)
      return message.channel.send(embed);
    }
    embed.addField("**تم ارسال الانذار** ", ` ${user.tag}!`)
      .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
      .setColor('#0083ff')
      .setTimestamp()
      .addField("لقد اخذت انذار", `
 
          السبب : **${reason}**`)
      .setFooter(`
        انذار بواسطة ${message.author.tag}.`);
    user.send(embed1);
    message.delete();
  }
});






client.on('ready', () => {
  console.log('Estou online');
  var tabela = [
    { name: '$help', type: 'PLAYING' },
    { name: 'صلي علي النبي', type: 'STREAMING' },
    { name: 'اهلا بكم', type: 'WATCHING' }

  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    client.user.setActivity(altstatus)
  }
  setStatus("STREAMING")
  setInterval(() => setStatus(), 1000)
})






//mute

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'mute')) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`ليس لديك الإذن : \`\`\` \n\n **\`MUTE_MEMBERS\`**`);
    let mention = message.mentions.members.first();
    let role = message.guild.roles.cache.find(ro => ro.name == 'صامت');
    if (!role) {
      message.guild.roles.create({
        data: {
          name: 'صامت',
          permissions: [],
          color: 'random'
        }
      })
    }
    if (!mention) return message.channel.send(`**Usage: ${prefix}ميوت \`<@user>\`**`);
    message.guild.channels.cache.forEach(c => {
      c.updateOverwrite(role, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    mention.roles.add(role)
    message.channel.send(`**✅ - تم كتم الصوت بنجاح ${mention.user.tag}**`)
  }
});

//unmute

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'unmute')) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
    let mention = message.mentions.members.first();
    var args = message.content.split(" ").slice(2).join(" ")
    let member = message.mentions.members.first()
    let role = message.guild.roles.cache.find(ro => ro.name == 'صامت');
    if (!mention) return message.channel.send(`**Usage: ${prefix}توقيف ميوت \`<@user>\` **`);
    if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
    mention.roles.remove(role)
    message.channel.send(`**✅ - تم بنجاح ${mention.user.tag} **`)
    let mens = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setTitle(`تم إلغاء كتم صوتك`)
      .setDescription(`**
 في السرفر : ${message.guild.name}
 مع سبب  : ${args || "لم يتم تقديم سبب."}
 بواسطة : ${message.author}
**`)
      .setColor("GREY")
      .setFooter('الايدي ' + message.author.id, message.author.avatarURL())
    member.send(mens);
  }
});




//Protection Commands

//antibot

let antibots = JSON.parse(fs.readFileSync('./antibots.json', 'utf8'));//require antihack.json file
client.on('message', message => {
  if (message.content.startsWith(prefix + "antibot on")) {
    if (!message.channel.guild) return message.reply('**هذا الأمر فقط للخوادم**');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**آسف ولكن ليس لديك إذن** `ADMINISTRATOR`');
    antibots[message.guild.id] = {
      onoff: 'On',
    }
    message.channel.send(`**✅ حماية من البوتات شغال !**`)
    fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

})



client.on('message', message => {
  if (message.content.startsWith(prefix + "antibot of")) {
    if (!message.channel.guild) return message.reply('**هذا الأمر فقط للخوادم**');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**آسف ولكن ليس لديك إذن** `ADMINISTRATOR`');
    antibots[message.guild.id] = {
      onoff: 'Off',
    }
    message.channel.send(`**⛔ الحماية من البوتات مطفية !**`)
    fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

})

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id]) antibots[member.guild.id] = {
    onoff: 'ايقاف'
  }
  if (antibots[member.guild.id].onoff === 'stop') return;
  if (member.user.bot) return member.kick()
})

fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
    .catch(err => {
      console.error(err);
    });

});







//antilink

let spread = JSON.parse(fs.readFileSync('./antilinks.json', 'utf8'));


client.on('message', message => {
  if (message.content.startsWith(prefix + "antilink of")) {
    if (!message.channel.guild) return message.reply('**هذا الأمر فقط للخوادم**');
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**آسف ولكن ليس لديك إذن** `MANAGE_GUILD`');
    spread[message.guild.id] = {
      onoff: 'Off',
    }
    message.channel.send(`**⛔ حماية من الروابط مطفي!**`)
    fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

})
client.on('message', message => {
  if (message.content.startsWith(prefix + "antilink on")) {
    if (!message.channel.guild) return message.reply('**هذا الأمر فقط للخوادم**');
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**آسف ولكن ليس لديك إذن** `MANAGE_GUILD`');
    spread[message.guild.id] = {
      onoff: 'On',
    }
    message.channel.send(`**✅ حماية من الروابط شغال !**`)
    fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

})


client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if (message.content.includes('http://')) {
    if (!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'
    }
    if (spread[message.guild.id].onoff === 'Off') return;
    message.delete()
    return message.reply(`**⛔ مكافحة الروابط شغال! لذلك لا يمكنك نشر هنا !**`)
  }
});

client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if (message.content.includes('https://www.snapchat.com/')) {
    if (!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'

    }
    if (spread[message.guild.id].onoff === 'Off') return;
    message.delete()
    return message.reply(`**⛔ مكافحة الروابط شغال! لذلك لا يمكنك نشر هنا !**`)
  }
});


client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if (message.content.includes('https://www.instagram.com/')) {
    if (!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'
    }
    if (spread[message.guild.id].onoff === 'Off') return;
    message.delete()
    return message.reply(`**⛔ مكافحة الروابط شغال! لذلك لا يمكنك نشر هنا !**`)
  }
});


client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if (message.content.includes('https://www.twitter.com/')) {
    if (!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'
    }
    if (spread[message.guild.id].onoff === 'Off') return;
    message.delete()
    return message.reply(`**⛔ مكافحة الروابط شغال! لذلك لا يمكنك نشر هنا !**`)
  }
});


client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if (message.content.includes('http://www.facebook.com/')) {
    if (!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'
    }
    if (spread[message.guild.id].onoff === 'Off') return;
    message.delete()
    return message.reply(`**⛔ مكافحة الروابط شغال! لذلك لا يمكنك نشر هنا !**`)
  }
});



client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if (message.content.includes('https://www.youtube.com/')) {
    if (!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'
    }
    if (spread[message.guild.id].onoff === 'Off') return;
    message.delete()
    return message.reply(`**⛔ مكافحة الروابط شغال! لذلك لا يمكنك نشر هنا !**`)
  }

});

client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if (message.content.includes('https://www.discordapp.com/')) {
    if (!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'
    }
    if (spread[message.guild.id].onoff === 'Off') return;
    message.delete()
    return message.reply(`**⛔ مكافحة الروابط شغال! لذلك لا يمكنك نشر هنا !**`)
  }

});
client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if (message.content.includes('https://discord.gg/')) {
    if (!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'
    }
    if (spread[message.guild.id].onoff === 'Off') return;
    message.delete()
    return message.reply(`**⛔ مكافحة الروابط شغال! لذلك لا يمكنك نشر هنا !**`)
  }

});




client.on('guildMemberAdd', angelo => {
  angelo.createDM().then(function(channel) {
    return channel.send("نرحب")
  }
  )
});






client.on("message", message => {
        let command = message.content.split(" ")[0];
        if (command == prefix + "unban") {
          if (!message.member.hasPermission("BAN_MEMBERS")) return;
          let args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
          if (args == "allllll") {
            message.guild.fetchBans().then(zg => {
              zg.forEach(Saad => {
                message.guild.members.unban(Saad);
              });
            });
            return message.channel.send("**✅ Unbanned all members **");
          }
          if (!args) return message.channel.send("**Please Type the member ID**");
          message.guild
            .unban(args)
            .then(m => {
              message.channel.send(
                `<a:x13:712913365508292610> **-** **Done Unbanned ${m.username}**`
              );
            })
            .catch(stry => {
              message.channel.send(
                `<a:x30:714394016883540031> **-** **I can't find \`${args}\` in the ban list**`
              );
            });
        }
      });
      
