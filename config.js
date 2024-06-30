const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_34_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTEsXG4gICAgICAgIDksXG4gICAgICAgIDE4LFxuICAgICAgICA5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICA3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMjEzLFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDYxLFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTHJxZDVsTjNJY1ZEU2FrU3pSd0Mrb0ttQVdMR1hoYjlYQjhPbWdUcHhFMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDcxMzYxMzcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRDI5Nzg4NTdGOURGNDYyM0IwMzFFOEM5QTRCRTZGM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk1ODg4NDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQkRCY2xjV1JTZU9kZ2tzUWMzYm5DQVwiLFxuICBcInBob25lSWRcIjogXCJmMDhlN2ZiMi01NGY3LTQ5OTQtODE1NS1hNTA5ZGYwYWY0M2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMzIsXG4gICAgICAyLFxuICAgICAgMjAyLFxuICAgICAgMjEsXG4gICAgICAyNDAsXG4gICAgICA4MixcbiAgICAgIDU4LFxuICAgICAgMTY0LFxuICAgICAgNzIsXG4gICAgICAxNzYsXG4gICAgICAyMzgsXG4gICAgICAxOTEsXG4gICAgICAyMDUsXG4gICAgICAxNTIsXG4gICAgICAxMTIsXG4gICAgICA1MCxcbiAgICAgIDMwLFxuICAgICAgMTMwLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDE1NixcbiAgICAgIDEyOCxcbiAgICAgIDIzMyxcbiAgICAgIDIzNixcbiAgICAgIDI0LFxuICAgICAgMTUwLFxuICAgICAgMTQyLFxuICAgICAgNzcsXG4gICAgICAxNzMsXG4gICAgICAzNixcbiAgICAgIDQ0LFxuICAgICAgMjA2LFxuICAgICAgMTAsXG4gICAgICAxNjEsXG4gICAgICA5NCxcbiAgICAgIDUsXG4gICAgICAyNTEsXG4gICAgICAyMSxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3VQNnM4Q0VPV3YrN01HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2TmE4SERkSkZBUm5CeHJjTFdQOFZBVkpiZVZQNFNrMDhWcUpzOXk0S2dvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm13aDg3dFBvM01vUFRURERDSHZMWm1FbmU5UzIwTnhmNUcrWEpKNFI2UGg2T005Vll3eXVtTFpaaXc1eXdZVzRvYlFzdHRqcmtpSU1PaUJUTmYvTkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVBay82SXE2UmdDbVRUb00vSGw4K2hzOFU5NmRHY0dsZ3VrNzFKTHdYaFp2cFhKQWVOYVNueUxXcVpLMTAyL25oK3YydE0xb29nS3U0OVBaQ3lLakNBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MTM2MTM3MTo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjg1MDQ5NDY1MjAxNjc6NTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2FtbXkg8J+YjlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3MTM2MTM3MTo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU4ODg0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1VVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVVWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGFRZkwvRDllOXRicXVqbC9USHVmZTR4TVRJVTBvQUM4Qm9obHF5ZzRUND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQyODQ2NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTIxMjQ4NDQ5NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
