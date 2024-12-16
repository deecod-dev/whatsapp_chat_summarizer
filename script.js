// const { Client } = require("whatsapp-web.js");

// const client = new Client();

// // Listen for the QR code to authenticate
// client.on("qr", (qr) => {
//   console.log("QR Code received. Scan this with your WhatsApp app.");
//   const qrcode = require("qrcode-terminal"); // Optional for better display
//   qrcode.generate(qr, { small: true });
// });

// client.on("ready", () => {
//   console.log("Client is ready!");
// });
// // ----------------------------------------------------------------
// client.on("message", (msg) => {
//   console.log(`Received message: ${msg.body}`);
// });

// // -------------------------------------------------------------------
// const fs = require('fs'); // File system module
// const { exit } = require("process");
// const { SlowBuffer } = require("buffer");

// // client.on("message", async (msg) => {
// //   // console.log(msg)
// //   if (msg.from && msg.from.endsWith('@g.us')) 
// //   {
// //     console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
// //     // Fetch all chats
// //     // const chats = await client.getChats();
// //     // console.log(chats)
    
// //     let chat = await msg.getChat();
// //     // if (chat.isGroup) {
// //     //   let newSubject = msg.body.slice(9);
// //     //   chat.setSubject(newSubject);
// //     // } else {
// //     //   msg.reply("This command can only be used in a group!");
// //     // }
// //     console.log("bad_apple")
// //     console.log(chat)
// //     // Find the group chat by name or ID
// //     const groupName = "hmm"; // Replace with the actual group name
// //     // const groupChat = chat.find(chat.name === groupName);

// //     if (chat.name === groupName)
// //     {
// //       console.log("founddd")


// //       const chatId = msg.from; // Replace with your group ID
// //       const chat = await client.getChatById(chatId);
// //       const mgs = await chat.fetchMessages({ limit: 1000 });
// //       console.log(mgs.length);
// //     } 
// //     else
// //     {
// //       // msg.reply("Group not found.");
// //     }
// //   }
// // });

// let flag=0
// client.on("message", async (msg) => {
//   console.log("bruhhhhhhhhh")
//   const chatId = msg.from; // Replace with your group ID
//   const chat = await client.getChatById(chatId);
//   const mgs = await chat.fetchMessages({ limit: 500 });
//   console.log(mgs.length);

//   // Convert the message to a string (e.g., JSON format)
//   const msgString = JSON.stringify(mgs, null, 2);

//   fs.writeFile("hmm.json", msgString + ",\n", (err) => {
//     if (err) throw err;
//   });

//   if (mgs.length > 150) {
//     if(flag==0){
//       flag = 1;
//       fs.appendFileSync("hmm.txt", "aaageyaaaa\n");
//       for (let i = 0; i < mgs.length; i++) {
//         fs.appendFileSync("hmm.txt", mgs[i].notifyName+": "+mgs[i].body + "\n");
//       }
//       console.log("Messages written to file.");
//     }
//   }
// });

// client.initialize();







// SUMMARIZING

const fs = require("fs");
function getConcatenatedLines(fileName, numberOfLines) {
  try {
    const data = fs.readFileSync(fileName, 'utf-8');
    const lines = data.split('\n');
    const selectedLines = lines.slice(0, numberOfLines);
    const concatenatedString = selectedLines.join(' \n'); // Using a space to separate the lines
    return concatenatedString;

  } catch (err) {
    console.error('Error reading file:', err);
    return ''; // Return an empty string in case of error
  }
}


const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();
const apikey = process.env.apikey;

async function generateAIContent() {
  const genAI = new GoogleGenerativeAI(apikey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const summof=getConcatenatedLines('hmm.txt', 470);
  // console.log(summof)
  const prompt = "summarize the following chats between two users:\n\n"+summof+"\nin only 2 lines";
  console.log(prompt)
  // const prompt="what is the limit of this prompt, I am using through my api of google gemini";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

// Call the async function
generateAIContent().catch((error) => {
  console.error("Error:", error);
});











// ==========IDKMAN--------------------------


// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function hmm() {
//   console.log("bruhhhhhhhhh");
//   const chatId = "120363166696012848@g.us"; // Replace with your group ID

//   // Ensure client is initialized before making API calls

//   // Fetch chat and messages
//   const chat = await client.getChatById(chatId);
//   const mgs = await chat.fetchMessages({ limit: 200 });
//   console.log(mgs.length);

//   // Convert the message to a string (e.g., JSON format)
//   const msgString = JSON.stringify(mgs, null, 2);

//   // Append the message to the JSON file
//   fs.appendFile("hmm.json", msgString + ",\n", (err) => {
//     if (err) throw err;
//     console.log("Messages appended to file.");
//   });
//   console.log("realll");
// }

// async function main() {
//   await client.initialize();
//   console.log("Starting...");
//   await delay(30000); // Wait for 10 seconds
//   console.log("Executed after 10 seconds");
//   await hmm();
// }

// main();

