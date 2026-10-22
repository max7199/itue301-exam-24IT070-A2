import React, { useState } from "react";
import EventsPage from "./pages/EventsPage";
import MyTicketsPage from "./pages/MyTicketsPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  // State to manage active view/tab without React Router (as per Task 1 scope)
  const [activeTab, setActiveTab] = useState("events");
  const [currentUser, setCurrentUser] = useState(null);

  const handleLoginSuccess = (email) => {
    setCurrentUser(email);
    // Switch to events page after login
    setTimeout(() => {
      setActiveTab("events");
    }, 1000);
  };

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-brand">
          <h1>EventHub</h1>
          <span className="brand-tag">Ticket Booking System</span>
        </div>

        <nav className="nav-links">
          <button
            className={`nav-btn ${activeTab === "events" ? "nav-btn-active" : ""}`}
            onClick={() => setActiveTab("events")}
          >
            Events
          </button>
          <button
            className={`nav-btn ${activeTab === "tickets" ? "nav-btn-active" : ""}`}
            onClick={() => setActiveTab("tickets")}
          >
            My Tickets
          </button>
          <button
            className={`nav-btn ${activeTab === "login" ? "nav-btn-active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            {currentUser ? "Account" : "Login"}
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === "events" && <EventsPage />}
        {activeTab === "tickets" && <MyTicketsPage />}
        {activeTab === "login" && (
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>ITUE301 Set F — EventHub Ticket Booking System &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App;
