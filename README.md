# RetentionDashboard

Dashboard to visualize and collect customer feedback, calculating NPS and retention metrics.

## Features

- Feedback form with fields for user, company, email, score, retention, and usage.
- Filter by user type (Freemium, POC, Enterprise).
- Data visualization in a dashboard.
- Alert if usage falls below a threshold.
- Data stored in Google Sheets via Google Apps Script.

## Installation

1. Clone the repository:
   git clone https://github.com/patriciabog/RetentionDashboard.git
   cd RetentionDashboard

2. Install dependencies
npm install

3. Start the app
npm start

## Configuration

- Set the URL of your Google Apps Script in `src/App.jsx` to save the data into your Google Sheet.

## Project Structure

- `src/components/`: React components (Dashboard, NPSForm, UserTypeFilter, AlertBox)
- `src/utils/`: Utilities such as data fetching
- `src/index.css`: Global styles

## License

MIT
