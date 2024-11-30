const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255760774888";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_55_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA3LFxuICAgICAgICA5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAwLFxuICAgICAgICA1NixcbiAgICAgICAgNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDExLFxuICAgICAgICAxNzksXG4gICAgICAgIDczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MixcbiAgICAgICAgMjA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMEd1NTc3SWZZVy91OU5zanRnVDBKLzFsRTVKSlNVcVNyaE4rQ2huVTNDND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicnk1cklDaFJSYktuZnJObDNBTXZqQVwiLFxuICBcInBob25lSWRcIjogXCIzMjAzOGU4NS0yMDQ5LTQxZTQtOTg2ZC0yOWM1YjA2MGQ0NWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgNTYsXG4gICAgICA2NCxcbiAgICAgIDE0MSxcbiAgICAgIDI1NCxcbiAgICAgIDE2OCxcbiAgICAgIDE1MCxcbiAgICAgIDIwMCxcbiAgICAgIDE3MixcbiAgICAgIDkzLFxuICAgICAgODEsXG4gICAgICAxNzMsXG4gICAgICAyNTMsXG4gICAgICAxNTEsXG4gICAgICAxOTYsXG4gICAgICAxMDAsXG4gICAgICAxMjUsXG4gICAgICA4MixcbiAgICAgIDIwMSxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDEwNixcbiAgICAgIDE1MyxcbiAgICAgIDMsXG4gICAgICAyMzQsXG4gICAgICAyMjYsXG4gICAgICA4NixcbiAgICAgIDEzNCxcbiAgICAgIDY2LFxuICAgICAgMjQwLFxuICAgICAgMTI3LFxuICAgICAgMTQ4LFxuICAgICAgMjU1LFxuICAgICAgODEsXG4gICAgICA5NSxcbiAgICAgIDEzNSxcbiAgICAgIDE2NSxcbiAgICAgIDMyLFxuICAgICAgMTUzLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhLMTM1QjFFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NjA3NzQ4ODg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjgwNTY1MDMwODk5ODQxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJTeExvR0VLZVdyTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGTDVhaVc2WXdVK3hBODN5NTQrWFp4M2lnaU1xOUd0c0JMeEdCa3Ywa2tRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZZZTgvM1RmaVhxeXFYaVU1TGhtVFZEZ1ljN2JqZWZYMnNNVEs5aXNxaU5vSUdBcjR2cUVJZ2xJU1dsUnYyUTNnTUNVODVzRUx0QUNURUdLVTd3ZUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpYSEU2cmMweTNtcldMRVRrMlhtMEovZDcrVlZkY05UTitJTXQ2NmE4ZytEMDBxRk9jUkVpTFAvYkNQbmpQZTJURExpTWQrRHJTOWVPVjFOM1V1SEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc2MDc3NDg4ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyOTcxMzA2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "HANSTZ",
  packname: process.env.PACK_NAME || "HANS MD",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "HANSTZ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
