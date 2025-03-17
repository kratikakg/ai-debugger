# 🚀 AI Debugger – AI-Powered Code Reviewer  

AI Debugger is an AI-driven code review tool that analyzes JavaScript code for readability, security, and performance issues. Powered by **Google Gemini AI**, it provides automated feedback, helping developers enhance their code quality efficiently.  

## 🌟 Features  
- **🔍 AI-Powered Code Review:** Uses Google Gemini AI to provide structured feedback on code quality.  
- **🖥️ Interactive Code Editor:** Built-in syntax highlighting and real-time editing with PrismJS.  
- **📜 Markdown-Rendered Feedback:** Displays AI-generated suggestions in a clear, readable format.  
- **🌎 Fully Deployed:** Both frontend and backend are hosted on **Vercel** for easy accessibility.  

## 🛠️ Tech Stack  
- **Frontend:** React, Tailwind CSS, React Simple Code Editor, PrismJS  
- **Backend:** Node.js, Express, Google Generative AI (Gemini)  
- **Deployment:** Vercel (both frontend & backend)  

## 🚀 Getting Started  

### 🔧 Installation  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/kratikakg/aidebugger.git
   cd aidebugger
   ```

2. **Install dependencies**  
   ```sh
   cd client  # Navigate to frontend
   npm install

   cd ../server  # Navigate to backend
   npm install
   ```

3. **Set up environment variables**  
   - In the `server` folder, create a `.env` file and add your **Google Gemini API Key**:  
     ```
     GOOGLE_GEMINI_KEY=your_api_key_here
     ```

4. **Run the application**  

   **Backend:**  
   ```sh
   cd server
   npm start
   ```

   **Frontend:**  
   ```sh
   cd client
   npm run dev
   ```

   Your app should now be running at `http://localhost:5173`.  

## 🎯 How It Works  
1. **Paste your JavaScript code** into the editor.  
2. **Click "Review"** to get an AI-powered analysis.  
3. **Get structured feedback** on best practices, security, and performance improvements.  

## 📸 Screenshots  
![AI Debugger - Google Chrome 17-03-2025 15_47_12](https://github.com/user-attachments/assets/fcbb88a8-5158-4d80-b836-431606e21017)


## 🎯 Live Demo  
👉 [AI Debugger Frontend](https://aidebugger.vercel.app/)  
👉 [AI Debugger Backend](https://aidebuggerbackend.vercel.app/)  

## 🛠️ Future Improvements  
- 🏗️ Support for multiple programming languages.  
- 📊 More detailed AI feedback with inline code suggestions.  
- 🚀 User authentication for personalized reviews.  

