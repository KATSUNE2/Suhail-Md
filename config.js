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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_56_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDM1LFxuICAgICAgICA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDc5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgODQsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFPYUZ5TTZDZEg1Um9XY1JSTkZKRkFKekpZK1E5SWRZczl3ZmoydXlONWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVJU0tTNU9VUkNpdF9uSU50UTM5VHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTg5Nzg4MWUtMjY3OS00MDY2LTgyNGMtYThjMDgxN2NkNTY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgNzQsXG4gICAgICA0NixcbiAgICAgIDI0MCxcbiAgICAgIDEwNixcbiAgICAgIDYsXG4gICAgICAyMjUsXG4gICAgICAyMDQsXG4gICAgICAyMzgsXG4gICAgICAwLFxuICAgICAgNixcbiAgICAgIDEyMCxcbiAgICAgIDY1LFxuICAgICAgNjIsXG4gICAgICAyNDUsXG4gICAgICA4NCxcbiAgICAgIDE1NSxcbiAgICAgIDE1OSxcbiAgICAgIDE5NyxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTc5LFxuICAgICAgMTg0LFxuICAgICAgMTAzLFxuICAgICAgNjIsXG4gICAgICA4MCxcbiAgICAgIDc3LFxuICAgICAgMjQwLFxuICAgICAgMTYsXG4gICAgICA2MCxcbiAgICAgIDQ3LFxuICAgICAgNjYsXG4gICAgICAzNyxcbiAgICAgIDk1LFxuICAgICAgMTUyLFxuICAgICAgMTY1LFxuICAgICAgMTIzLFxuICAgICAgMTAyLFxuICAgICAgMjA1LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdVA2czhDRUszUDJMUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZOYThIRGRKRkFSbkJ4cmNMV1A4VkFWSmJlVlA0U2swOFZxSnM5eTRLZ289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWTlYL0VIdkoyVFFjZkRaNEk4WGs2RS9MMzlTZTlvTXQzQ0VTZ2RZRVU1U0hwOWdIakpGSndLRzVjK2xFUkZnOXJ6YjdvWi9qeFN2UkNWOUo1bmE3Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMXNVMm9hQXRHZFF6eGwzOXY2bzRJUGtRUEg0SkcwbHNuZCtScWxzYStoallZQjFPTXI5WXRwV3RHNUdBN3FoWUN2RTR4ZEdZd3paVmNMMUxUMk1XQVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcxMzYxMzcxOjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2ODUwNDk0NjUyMDE2Nzo1N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzEzNjEzNzE6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMTY1OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNVVZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1VVi5qc29uIjogIntcImtleURhdGFcIjpcIkxhUWZML0Q5ZTl0YnF1amwvVEh1ZmU0eE1USVUwb0FDOEJvaGxxeWc0VDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzA0Mjg0NjUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4RGxzM1ZNSzczeGVhYzhMVDkvR1V4bVZLYmFhYnVWYkkvWlVnL2VyM0lnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDYyMTc0OTg4XCJ9Igp9"  // PUT your SESSION_ID 


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
