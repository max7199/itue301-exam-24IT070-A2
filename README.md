# EventHub Ticket Booking System

**Course:** ITUE301 Advanced Web Development Frameworks  
**Exam Set:** Set F  
**Candidate ID:** 24IT070  
**Repository:** [https://github.com/max7199/itue301-exam-24IT070-A2](https://github.com/max7199/itue301-exam-24IT070-A2)

---

## Project Overview
EventHub is an event ticket booking application built as part of the ITUE301 practical examination. 

### Current Implementation (Task 1: React Component Architecture)
- **`EventCard.jsx`**: Reusable component rendering event title, date, venue, category, and available tickets. Displays "Sold Out" and disables booking when available tickets are 0.
- **`EventsPage.jsx`**: Displays a list of events from sample data using JavaScript array `.map()`.
- **`MyTicketsPage.jsx`**: Displays user's booked tickets with details.
- **`LoginPage.jsx`**: Controlled React form with email and password fields.
- **`App.jsx`**: Top navigation header and tab-based page switcher.

---

## Project Structure
```text
├── backend/            # Express API folder (prepared for future backend tasks)
├── frontend/           # React frontend built with Vite
│   ├── src/
│   │   ├── components/ # Reusable UI components (EventCard.jsx)
│   │   ├── data/       # Sample event dataset (events.js)
│   │   ├── pages/      # Application views (EventsPage, MyTicketsPage, LoginPage)
│   │   ├── App.jsx     # Main layout and tab navigation
│   │   ├── App.css     # Responsive student-level styling
│   │   └── main.jsx    # React entry point
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## How to Run the Project Locally

### Prerequisites
- Node.js (v18 or above recommended)
- npm

### Running the Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173`.
