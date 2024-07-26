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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_49_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMixcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODksXG4gICAgICAgIDY2LFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjExLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMixcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQwLFxuICAgICAgICA2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKUC9SWFI5bFlITy9FVFNhNHhZWEdBcUwyUVFaZDdZK1BEb3ptWkFnNDA0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzEzNjEzNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRBRDI4NkQ5NDc1RUE1OTlBQUE0QkE3NDk5OUEyQzg4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY3NDE1OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0ZGVxMXNVZVJaeVJnaktydVRMWlpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhmMWYyZmYyLWJlZjUtNGQ3Zi05YTc3LTFkM2ZkYWRiOWExNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICA4MixcbiAgICAgIDI0NyxcbiAgICAgIDEzOSxcbiAgICAgIDE4NyxcbiAgICAgIDIzNixcbiAgICAgIDEzOCxcbiAgICAgIDcyLFxuICAgICAgMjgsXG4gICAgICAxMDksXG4gICAgICA2MixcbiAgICAgIDEzNCxcbiAgICAgIDQwLFxuICAgICAgMjMxLFxuICAgICAgMTU4LFxuICAgICAgMTIzLFxuICAgICAgMTAwLFxuICAgICAgMzgsXG4gICAgICAzNSxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDIxLFxuICAgICAgMjAxLFxuICAgICAgMzgsXG4gICAgICAxMzcsXG4gICAgICA4MCxcbiAgICAgIDczLFxuICAgICAgMjEzLFxuICAgICAgMTQ1LFxuICAgICAgMTI3LFxuICAgICAgMTg1LFxuICAgICAgNjcsXG4gICAgICAyMTMsXG4gICAgICA2NCxcbiAgICAgIDU5LFxuICAgICAgMjUzLFxuICAgICAgMzgsXG4gICAgICA5LFxuICAgICAgMTIsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdVA2czhDRUtiVCtyUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZOYThIRGRKRkFSbkJ4cmNMV1A4VkFWSmJlVlA0U2swOFZxSnM5eTRLZ289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZkJhSjdKVXZFaldodzRZajVPa08rdEYyT3BJK0J6QkhmYWxPelM1RHJ2QVZjYU0xa3NUQ2tRUnEvSEMrYXc5K1JubVRJQTYraDR4SElhUkd6TzB2RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNzdBUGZaTGdycy9uWmZJUUtBakhuL1FyL1J1TUVRSkxzOURZZ3BwM1BQWldvSis0NzJ0aUNOMXV0djAwVE9LbFBia1Y2ODNIbnRaTVlhMllxTURRQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcxMzYxMzcxOjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2ODUwNDk0NjUyMDE2Nzo2MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzEzNjEzNzE6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NzQxNTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNVVZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1VVi5qc29uIjogIntcImtleURhdGFcIjpcIkxhUWZML0Q5ZTl0YnF1amwvVEh1ZmU0eE1USVUwb0FDOEJvaGxxeWc0VDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzA0Mjg0NjUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4RGxzM1ZNSzczeGVhYzhMVDkvR1V4bVZLYmFhYnVWYkkvWlVnL2VyM0lnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVVYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZThZd1VHbjI0UFVidTBwSy9lV2puVVVleWtMdWZCK0JPQWI3WlpqNERnTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQyODQ2NTEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVVZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNlFQOE05ZEpCZTI0WVVnelp3WTZXcEw2OC9rY2xIazA4YmtVNDZCVzZmdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQyODQ2NTEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1VWi5qc29uIjogIntcImtleURhdGFcIjpcImw3cGxGek9SSzZSTklOcVBYT210L1BpSWY0NWEwZEVWMDFZUWw0Z3BZdW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzA0Mjg0NjUxLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4aW1xK1hKS0RtYzd1V3pBbno0cFhzK01DMGtZWHFWM1c3Sk1lbitJM2gwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDI4NDY1MSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVViLmpzb24iOiAie1wia2V5RGF0YVwiOlwickR3UWpmZ3o3QmF3Qk83T1pTa3ZLbjFkeWpkL01DdUhRNWprUmIzVFRxdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQyODQ2NTEsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsOF19LFwidGltZXN0YW1wXCI6XCIxNzIxNjc0MDc5ODUwXCJ9Igp9"  // PUT your SESSION_ID 


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
        "run": "pm2 start . --deep-monitoring --attach --name Suhail || node ."


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
