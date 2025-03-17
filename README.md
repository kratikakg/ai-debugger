🚀 AI Debugger – AI-Powered Code Reviewer
AI Debugger is an AI-driven code review tool that analyzes JavaScript code for readability, security, and performance issues. Powered by Google Gemini AI, it provides automated feedback, helping developers enhance their code quality efficiently.

🌟 Features
🔍 AI-Powered Code Review: Uses Google Gemini AI to provide structured feedback on code quality.
🖥️ Interactive Code Editor: Built-in syntax highlighting and real-time editing with PrismJS.
📜 Markdown-Rendered Feedback: Displays AI-generated suggestions in a clear, readable format.
🌎 Fully Deployed: Both frontend and backend are hosted on Vercel for easy accessibility.
🛠️ Tech Stack
Frontend: React, Tailwind CSS, React Simple Code Editor, PrismJS
Backend: Node.js, Express, Google Generative AI (Gemini)
Deployment: Vercel (both frontend & backend)
🚀 Getting Started
🔧 Installation
Clone the repository

sh
Copy
Edit
git clone https://github.com/kratikakg/aidebugger.git
cd aidebugger
Install dependencies

sh
Copy
Edit
cd client  # Navigate to frontend
npm install

cd ../server  # Navigate to backend
npm install
Set up environment variables

In the server folder, create a .env file and add your Google Gemini API Key:
ini
Copy
Edit
GOOGLE_GEMINI_KEY=your_api_key_here
Run the application

Backend:

sh
Copy
Edit
cd server
npm start
Frontend:

sh
Copy
Edit
cd client
npm run dev
Your app should now be running at http://localhost:5173.

🎯 How It Works
Paste your JavaScript code into the editor.
Click "Review" to get an AI-powered analysis.
Get structured feedback on best practices, security, and performance improvements.
📸 Screenshots
(You can add screenshots here to showcase how it looks.)

🎯 Live Demo
👉 AI Debugger Frontend
👉 AI Debugger Backend

🛠️ Future Improvements
🏗️ Support for multiple programming languages.
📊 More detailed AI feedback with inline code suggestions.
🚀 User authentication for personalized reviews.
