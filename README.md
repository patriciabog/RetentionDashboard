# 📊 Customer Retention Dashboard

A tool designed to empower Customer Success, Onboarding, and Product teams by connecting retention metrics, NPS, and user feedback in an intuitive, real-time interface. It solves the problem of disconnected, hard-to-read customer data, enabling teams to spot risks, understand needs, and act faster.

## 🚀 Live Demo
[Try it here](https://patriciabog.github.io/RetentionDashboard/)

## ✨ Features
- **Feedback Form**: Collects user, company, email, score, retention, and usage data.
- **User Type Filters**: Segment data by Freemium, POC, or Enterprise users.
- **Data Visualization**: Dynamic charts for retention and NPS metrics, powered by [Chart.js or similar, si aplica].
- **Usage Alerts**: Notifies teams when usage falls below a threshold.
- **Real-Time Updates**: Syncs with Google Sheets for live data updates.
- **Intuitive UI**: Built with React for a seamless, responsive user experience.

## 🛠️ Tech Stack
- **Frontend**: React, [Chart.js/Tailwind CSS/Bootstrap, si aplica]
- **Backend**: Google Sheets, Google Apps Script
- **Tools**: GitHub Copilot for optimized development

## 📸 Screenshots
![Dashboard Overview](screenshots/dashboard.png)
![Feedback Form](screenshots/feedback-form.png)

## 🔧 Installation
1. Clone the repository: `git clone https://github.com/patriciabog/RetentionDashboard.git`
2. Navigate to the project: `cd RetentionDashboard`
3. Install dependencies: `npm install`
4. Start the app: `npm start`

## ⚙️ Configuration
- Set the URL of your Google Apps Script in `src/App.jsx` to save data into your Google Sheet.
- Ensure Google Sheets API is properly configured for real-time updates.

## 📂 Project Structure
- `src/components/`: React components (Dashboard, NPSForm, UserTypeFilter, AlertBox)
- `src/utils/`: Utilities for data fetching
- `src/index.css`: Global styles

## 📜 License
This project is licensed under the [MIT License](LICENSE).

## 💬 Feedback
I’d love to hear your thoughts! Connect with me on [LinkedIn](https://linkedin.com/in/carla-perez) or email me at carla.perez@email.com.

## 🙌 About the Project
Built as a personal project to combine my expertise in Customer Success and front-end development, this dashboard helps teams monitor and improve customer retention through data-driven insights.

