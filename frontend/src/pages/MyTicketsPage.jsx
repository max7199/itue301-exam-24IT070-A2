import React from "react";

// Sample booked tickets data for the current user
const sampleTickets = [
  {
    ticketId: "TKT-1001",
    eventTitle: "TechSprint Hackathon 2026",
    eventDate: "2026-11-15",
    venue: "Main Auditorium, CHARUSAT",
    bookingDate: "2026-10-20",
    quantity: 2,
    status: "Confirmed",
  },
  {
    ticketId: "TKT-1002",
    eventTitle: "AI & Robotics Workshop",
    eventDate: "2026-12-05",
    venue: "Seminar Hall 2",
    bookingDate: "2026-10-21",
    quantity: 1,
    status: "Confirmed",
  },
];

function MyTicketsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2>My Booked Tickets</h2>
        <p className="page-subtitle">
          View all your confirmed event reservations and booking details.
        </p>
      </div>

      {sampleTickets.length === 0 ? (
        <p className="empty-message">No tickets booked yet.</p>
      ) : (
        <div className="tickets-list">
          {sampleTickets.map((ticket) => (
            <div key={ticket.ticketId} className="ticket-card">
              <div className="ticket-header">
                <span className="ticket-id">{ticket.ticketId}</span>
                <span className="ticket-status">{ticket.status}</span>
              </div>
              <h3 className="ticket-event-title">{ticket.eventTitle}</h3>
              <div className="ticket-details">
                <p>
                  <strong>Date:</strong> {ticket.eventDate}
                </p>
                <p>
                  <strong>Venue:</strong> {ticket.venue}
                </p>
                <p>
                  <strong>Booked On:</strong> {ticket.bookingDate}
                </p>
                <p>
                  <strong>Tickets Count:</strong> {ticket.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyTicketsPage;
