﻿# WhatsApp Chat Summarization Bot using Gemini🌟

Unlock the power of WhatsApp Web automation, advanced AI-based summarization, and real-time message tracking with this cutting-edge bot. By leveraging the Gemini API from Google, the bot analyzes chat messages and distills them into concise summaries, enhancing your workflow with smart, AI-driven insights.

## 🚀 Key Features

- **Seamless Authentication**: Utilize WhatsApp Web API for secure and easy authentication via QR code scanning
- **Real-Time Messaging**: Automatically capture and process WhatsApp group chat messages
- **Gemini AI Integration**: Harness Google Gemini 1.5 to summarize group conversations
- **Smart File Management**: Organize chat logs with precision
- **Advanced Keyword Monitoring**: Instantly generate summaries with special commands
- **Cache Clean-Up**: Automatically delete chat cache files

## 📦 Prerequisites

- Node.js (v16.x or higher)
- NPM (Node Package Manager)
- Active WhatsApp Account

## 🛠 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-repository-name/whatsapp-chat-summary-bot.git
cd whatsapp-chat-summary-bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root:

```env
apikey=your-google-api-key
```

### 4. Run the Bot

```bash
node script.js
```

*Note: A QR code will be displayed for WhatsApp Web authentication. Scan it with your WhatsApp mobile app.*

## 💡 How It Works

### Summarize Group Chats

Send a message with the format `summarize_shit_<number>` to trigger AI-powered chat summarization.

Example:
```
summarize_shit_500
```
This command summarizes the last 500 messages using Google Gemini's AI.

## 🔧 Project Structure

- `script.js`: Core bot logic
- `.env`: Configuration file
- `package.json`: Dependency management

## 🔗 Key Dependencies

- `whatsapp-web.js`: WhatsApp Web integration
- `@google/generative-ai`: Gemini API client
- `dotenv`: Environment variable management

## 🌐 Google Gemini API Integration

The bot uses Gemini 1.5 API to generate intelligent, context-aware summaries of WhatsApp conversations.

## 🤝 Contributing

1. Fork the Repository
2. Create a Feature Branch
3. Commit Changes
4. Push to Your Fork
5. Open a Pull Request

## 📜 License

MIT License - see the LICENSE file for details.

## 🔥 Why Use This Bot?

- **Efficiency**: Automate chat tracking and summarization
- **AI-Powered**: Real-time, intelligent insights
- **Easy Integration**: Simple WhatsApp Web API setup

---

*Built with Gemini and WhatsApp-WebJs API*
