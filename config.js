const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sammybaby:achiwa@cluster0.pd62luw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://samuel:<F6YryNZ7yR3LGFS43V9ppQ>@sammyi-15727.8nj.gcp-europe-west1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349071361371";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_23_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI3LFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkczSWtLTUVRQ2hqKzBxRDVWak5veTVVbFFaamNibFEvcFR6T1FwZis4cEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpPWGVFWDh6UlRTeVZxakNnamxjQ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjY5YjZmMTgtZTQ1OC00ZjgwLTk2Y2QtY2NiNWNkZjJhOTkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgMTA4LFxuICAgICAgMTg5LFxuICAgICAgMTMsXG4gICAgICAxMSxcbiAgICAgIDE0NSxcbiAgICAgIDI1MixcbiAgICAgIDIzMyxcbiAgICAgIDE5MyxcbiAgICAgIDI0MSxcbiAgICAgIDQsXG4gICAgICAxODIsXG4gICAgICAyMjEsXG4gICAgICAxNzIsXG4gICAgICAxOTEsXG4gICAgICAxOTksXG4gICAgICAwLFxuICAgICAgMjMzLFxuICAgICAgMTg5LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDEzMCxcbiAgICAgIDE5MixcbiAgICAgIDExOCxcbiAgICAgIDU0LFxuICAgICAgMTQzLFxuICAgICAgMTUzLFxuICAgICAgMTc3LFxuICAgICAgMjIyLFxuICAgICAgMTQyLFxuICAgICAgNzcsXG4gICAgICA3NyxcbiAgICAgIDQ2LFxuICAgICAgMyxcbiAgICAgIDI1LFxuICAgICAgMTQ3LFxuICAgICAgMjEsXG4gICAgICA3MyxcbiAgICAgIDI0MixcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3VQNnM4Q0VQVFkyclFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2TmE4SERkSkZBUm5CeHJjTFdQOFZBVkpiZVZQNFNrMDhWcUpzOXk0S2dvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZFSHY5eWJjcDZmNGtQclh2MittNFNoWWgyNmZXUnpTL0JmNTNqdzFTU21XZXpZRnIyZ3V5dno5RnlTanhaZHJ5NW9sdGgyaW00dklxMDdPeWt1ZEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJ2cHh2UitrcUlRajZDYTliNzhHTElsalYxazRKZnB0TUdMMEt6Mlh1SkZKalFqVmFINWRabzBWWTY5T3BhQ3ZML0tpOE5qYmI0YWZkdno3K3ZCYkN3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MTM2MTM3MTo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjg1MDQ5NDY1MjAxNjc6NjBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcxMzYxMzcxOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTUwNTg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVVWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVVYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMYVFmTC9EOWU5dGJxdWpsL1RIdWZlNHhNVElVMG9BQzhCb2hscXlnNFQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVVXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOERsczNWTUs3M3hlYWM4TFQ5L0dVeG1WS2JhYWJ1VmJJL1pVZy9lcjNJZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQyODQ2NTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1VWC5qc29uIjogIntcImtleURhdGFcIjpcImU4WXdVR24yNFBVYnUwcEsvZVdqblVVZXlrTHVmQitCT0FiN1paajREZ009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzA0Mjg0NjUxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1VWS5qc29uIjogIntcImtleURhdGFcIjpcIjZRUDhNOWRKQmUyNFlVZ3pad1k2V3BMNjgva2NsSGswOGJrVTQ2Qlc2Znc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzA0Mjg0NjUxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsN3BsRnpPUks2Uk5JTnFQWE9tdC9QaUlmNDVhMGRFVjAxWVFsNGdwWXVvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVVhLmpzb24iOiAie1wia2V5RGF0YVwiOlwieGltcStYSktEbWM3dVd6QW56NHBYcytNQzBrWVhxVjNXN0pNZW4rSTNoMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQyODQ2NTEsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE1MDU0NDI4M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
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
