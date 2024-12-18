const { Client } = require("whatsapp-web.js");

const client = new Client();

// Listen for the QR code to authenticate
client.on("qr", (qr) => {
  console.log("QR Code received. Scan this with your WhatsApp app.");
  const qrcode = require("qrcode-terminal"); // Optional for better display
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});
// ----------------------------------------------------------------
client.on("message", (msg) => {
  console.log(`Received message: ${msg.body}`);
});

// -------------------------------------------------------------------
const fs = require('fs'); // File system module
const { exit } = require("process");
const { SlowBuffer } = require("buffer");

// to delete all the chat cache files-------------------------------------------
const path = require("path");
function deleteUSTextFiles() {
  let directory = __dirname;
  // Read all files in the directory
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    // Check if the file ends with ".us.txt"
    if (file.endsWith(".us.txt")) {
      const filePath = path.join(directory, file);
      // Delete the file
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filePath}`);
    }
  });
  console.log("All .us.txt files have been deleted.");
}


let grpfiles=[]
let flag = 0;
async function summ (msg,n){
  console.log("length of summ: "+ n)
  // console.log("bruhhhhhhhhh");
  let chatId = msg.from; // Replace with your group ID
  if(msg.from.includes("@g.us")){
  }
  else if(msg.from.includes("@c.us")){
    chatId=msg.to;
  }
  else{
    console.log("-------------------------whaaaaaaaaaaaaaaa--------------");
    console.log(msg.from);
    exit();
  }
  console.log(chatId)
  const chat = await client.getChatById(chatId);
  const mgs = await chat.fetchMessages({ limit: 500 });
  console.log(mgs.length);
  // let n = 150;
  if(mgs.length<n-1){
    console.log("less length");
    return -1;
  }

  let grpnamefile=chatId+".txt";
  // checking whether I already recieved a message from this chat and made a folder for this
  // if (grpfiles.includes(grpnamefile) || mgs.length < n - 1) {
  //   console.log("already written");
  //   return;
  // }
  if (grpfiles.includes(grpnamefile)) {
    console.log("already written");
    console.log("appended: "+grpnamefile,msg.notifyName + ": " + msg.body + "\n")
    fs.appendFileSync(grpnamefile,msg.notifyName + ": " + msg.body + "\n");
    return 0;
  }
  
  grpfiles.push(grpnamefile)
  fs.writeFileSync(grpnamefile, "chats for the group "+mgs[0].from+" are below:\n");
  console.log("file for "+grpnamefile+" made");

  // fs.writeFile("hmm.json", msgString + ",\n", (err) => {
  //   if (err) throw err;
  // });

  if (mgs.length > n - 1) {// this should be automatically satisfied here
    if (flag == 0) {
      flag = 1;
      for (let i = 0; i < mgs.length; i++) {
        fs.appendFileSync(grpnamefile,mgs[i].notifyName + ": " + mgs[i].body + "\n");
      }
      console.log("Messages written to file: "+grpnamefile);
    }
  }
  return 1;
}

// trying to make a script so that on certain goofy keyword I can get a summary directly on wp
client.on("message_create", async (msg) => {
  // Fired on all message creations, including your own
  let stat=-2;
  if (msg.fromMe && /^summarize_shit_\d+$/.test(msg.body)) {
    console.log(msg)
    let number=msg.body.match(/^summarize_shit_(\d+)$/)[1]; // Captures the number
    number=parseInt(number);
    stat = summ(msg,number);
  }
  if(stat==-2){
    console.log("not told to summarize or not message not mine");
  }
  else if(stat == -1){
    console.log("had less length ig");
  }
  else if(stat == 0){
    console.log("grp already in list and message appended");
  }
  else if(stat == 1){
    console.log("new txt made successfully");
  }
  else{
    console.log("ermm what the sigma: "+stat);
  }
});

deleteUSTextFiles();
client.initialize();










// ==========IDKMAN---------------------------------------to be ignored
// client.on("message", async (msg) => {
//   // console.log(msg)
//   if (msg.from && msg.from.endsWith('@g.us')) 
//   {
//     console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
//     // Fetch all chats
//     // const chats = await client.getChats();
//     // console.log(chats)
    
//     let chat = await msg.getChat();
//     // if (chat.isGroup) {
//     //   let newSubject = msg.body.slice(9);
//     //   chat.setSubject(newSubject);
//     // } else {
//     //   msg.reply("This command can only be used in a group!");
//     // }
//     console.log("bad_apple")
//     console.log(chat)
//     // Find the group chat by name or ID
//     const groupName = "hmm"; // Replace with the actual group name
//     // const groupChat = chat.find(chat.name === groupName);

//     if (chat.name === groupName)
//     {
//       console.log("founddd")


//       const chatId = msg.from; // Replace with your group ID
//       const chat = await client.getChatById(chatId);
//       const mgs = await chat.fetchMessages({ limit: 1000 });
//       console.log(mgs.length);
//     } 
//     else
//     {
//       // msg.reply("Group not found.");
//     }
//   }
// });
// ==========IDKMAN---------------------------------------to be ignored












// // SUMMARIZING---------------------------------------------------- to be uncommented and run 
// // and run node script.js again

// const fs = require("fs");
// function getConcatenatedLines(fileName, numberOfLines) {
//   try {
//     const data = fs.readFileSync(fileName, 'utf-8');
//     const lines = data.split('\n');
//     const selectedLines = lines.slice(0, numberOfLines);
//     const concatenatedString = selectedLines.join(' \n'); // Using a space to separate the lines
//     return concatenatedString;

//   } catch (err) {
//     console.error('Error reading file:', err);
//     return ''; // Return an empty string in case of error
//   }
// }

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// require("dotenv").config();
// const apikey = process.env.apikey;

// async function generateAIContent() {
//   const genAI = new GoogleGenerativeAI(apikey);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//   let n=470;
//   const summof = getConcatenatedLines("917980968131@c.us.txt", 470);
//   // console.log(summof)
//   const prompt = "summarize the following chats between two users:\n\n"+summof+"\nin only 5 lines";
//   console.log(prompt)
//   // const prompt="what is the limit of this prompt, I am using through my api of google gemini";

//   const result = await model.generateContent(prompt);
//   console.log(result.response.text());
// }

// // Call the async function
// generateAIContent().catch((error) => {
//   console.error("Error:", error);
// });

// // -------------------------------------------------------------










// ==========IDKMAN---------------------------------------to be ignored
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

