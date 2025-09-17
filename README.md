# Customer Retention Dashboard

A tool designed to empower **Customer Success**, **Onboarding**, and **Product** teams by connecting retention metrics, NPS, and user feedback in an intuitive, real-time interface. It solves the problem of disconnected, hard-to-read customer data, enabling teams to spot risks, understand needs, and act faster.

## Live Demo
[Try it here](https://patriciabog.github.io/RetentionDashboard/)

## Features
- **Feedback Form**: Collects user, company, email, score, retention, and usage data.
- **User Type Filters**: Segment data by Freemium, POC, or Enterprise users.
- **Data Visualization**: Dynamic charts for retention and NPS metrics.
- **Usage Alerts**: Notifies teams when usage falls below a threshold.
- **Real-Time Updates**: Powered by Google Sheets and Apps Script.
- **Intuitive UI**: Built with React for a seamless user experience.

## Tech Stack
- **Frontend**: React
- **Backend**: Google Sheets, Apps Script
- **Tools**: AI tools (Copilot) for optimized development

## Installation
1. Clone the repository: `git clone https://github.com/patriciabog/RetentionDashboard.git`
2. Navigate to the project: `cd RetentionDashboard`
3. Install dependencies: `npm install`
4. Start the app: `npm start`

## Configuration
- Set the URL of your Google Apps Script in `src/App.jsx` to save data into your Google Sheet.

## Project Structure
- `src/components/`: React components (Dashboard, NPSForm, UserTypeFilter, AlertBox)
- `src/utils/`: Utilities for data fetching
- `src/index.css`: Global styles

## License
MIT

## Feedback
I’d love to hear your thoughts! Connect with me on [LinkedIn](https://www.linkedin.com/in/epmontesdeoca).

