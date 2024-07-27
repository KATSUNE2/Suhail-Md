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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_19_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICA2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICA5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNCxcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJub1R2RnJ1TjdBbG5NUVlyaXQvUVlqb293Tmo0UlBWZFAya1BabWM2OXB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5NkNETzJ4N1RmNlczUVB4WUZjWnJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3NDY1ZGY4LTQzMTgtNDA2MC05NTRiLTE3ZjNlZjI5NDk2ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICA4MixcbiAgICAgIDEwNixcbiAgICAgIDE1LFxuICAgICAgMjYsXG4gICAgICA5MSxcbiAgICAgIDEyMixcbiAgICAgIDE1LFxuICAgICAgMTksXG4gICAgICAxOTAsXG4gICAgICAyMTYsXG4gICAgICAyMzQsXG4gICAgICAxNDAsXG4gICAgICAxOTcsXG4gICAgICAxOTIsXG4gICAgICAxNzgsXG4gICAgICAxODIsXG4gICAgICAyMjgsXG4gICAgICA3NixcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMjA3LFxuICAgICAgMTc1LFxuICAgICAgMjQwLFxuICAgICAgMTM2LFxuICAgICAgMTQwLFxuICAgICAgMzgsXG4gICAgICAyMyxcbiAgICAgIDI2LFxuICAgICAgODMsXG4gICAgICA1MSxcbiAgICAgIDE3NCxcbiAgICAgIDExNSxcbiAgICAgIDE4MixcbiAgICAgIDEyNSxcbiAgICAgIDExNyxcbiAgICAgIDExNCxcbiAgICAgIDEzOCxcbiAgICAgIDE1MCxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091UDZzOENFTE9Ka0xVR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidk5hOEhEZEpGQVJuQnhyY0xXUDhWQVZKYmVWUDRTazA4VnFKczl5NEtnbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1bHBlcTU3dk83WGgxSUk1RXcrNWh6WVFXbmlHZGdCTWsyMTg1ZUphaE9kaFNqS3RrVmMyV0Q1dWN2WlJyRElpRGF0YUp0WnQwNXA1ak9HWFVCemhBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpcVZHK2tBTGNWQUtUNHZTWXJZY3U3ckNKRHhicmhiSXJZYkZwUkY2UGtWRnZ2M0l6WVA5aFV1Y3FlTmNMenZ1dVByT25sZWs4Y1hiY2p3QldiM0hpQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzEzNjEzNzE6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY4NTA0OTQ2NTIwMTY3OjY5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3MTM2MTM3MTo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjAyNTE0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1VZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVVWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGFRZkwvRDllOXRicXVqbC9USHVmZTR4TVRJVTBvQUM4Qm9obHF5ZzRUND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQyODQ2NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1VVy5qc29uIjogIntcImtleURhdGFcIjpcIjhEbHMzVk1LNzN4ZWFjOExUOS9HVXhtVktiYWFidVZiSS9aVWcvZXIzSWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzA0Mjg0NjUxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVVguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlOFl3VUduMjRQVWJ1MHBLL2VXam5VVWV5a0x1ZkIrQk9BYjdaWmo0RGdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVVkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2UVA4TTlkSkJlMjRZVWd6WndZNldwTDY4L2tjbEhrMDhia1U0NkJXNmZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVVaLmpzb24iOiAie1wia2V5RGF0YVwiOlwibDdwbEZ6T1JLNlJOSU5xUFhPbXQvUGlJZjQ1YTBkRVYwMVlRbDRncFl1bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQyODQ2NTEsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1VYS5qc29uIjogIntcImtleURhdGFcIjpcInhpbXErWEpLRG1jN3VXekFuejRwWHMrTUMwa1lYcVYzVzdKTWVuK0kzaDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzA0Mjg0NjUxLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVWIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyRHdRamZnejdCYXdCTzdPWlNrdktuMWR5amQvTUN1SFE1amtSYjNUVHF3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw4XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyRVY4dkpDRzc5Q3pQeENxbld1K2NsSS9OZ3BHVW41K01reXdDVXowK3F3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsOSwxMF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVVkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZXRzR01pNjVOOFM3WjZBanRIM2VuSW40TVJPSXluelNwT3kyY2Z4Mnd3Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQyODQ2NTEsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCw5LDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsdEZLNVBhdnJWUHN6VHRXL292VnlpTnEzMEVRamp2VTJuNW56Z1hvSTFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEwLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIdE9BbDNTdTBwMGJhSTQwSnhLT0ZncUsxcE4rY2lXckdBWGFIR1NnckNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEwLDExLDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwV0JQWGNZSzZmcm1UdjJiRUZOZ09WQlhqeFZEa043ODFxSlN2QUh5KytRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDExLDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoVDlhOVBWRG1qb1hvMWxtY1Q2MW53NVcyVkdrM01lVVFGeFJheTk0SkhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwMjI3MTk1MTdcIn0iCn0="  // PUT your SESSION_ID 


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


name: Suhail-MD

on: 
  push:
    branches: 
      - main
  schedule:
    - cron: '*/15 * * * *'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Run the bot
        "scripts": {
            "run": "pm2 start . --deep-monitoring --attach --name Suhail || node .",
            "suhail": "pm2 start . --deep-monitoring --attach --name Suhail || node .",
            "start": "pm2 start . --attach --name Suhail",
            "stop": "pm2 stop Suhail",
            "old-heroku-postbuild": "git clone https://github.com/SuhailTechInfo/Suhail-Md.git temp && mv temp/.git .git && rm -rf temp && npx puppeteer@latest install  --y",
            "fis-heroku-postbuild": "git clone https://github.com/SuhailTechInfo/Suhail-Md.git temp1 && rsync -av temp1/* ./ && rsync -av temp1/.* ./ && rm -rf temp1 && npm i && npx puppeteer@latest install",
            "dbs--postinstall": "npx puppeteer@latest install --y"



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
