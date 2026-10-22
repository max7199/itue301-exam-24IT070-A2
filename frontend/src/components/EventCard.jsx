import React from "react";

// EventCard component receives event details through props
function EventCard({ event, onBookTicket }) {
  // Check if the event is sold out (available tickets equal to 0)
  const isSoldOut = event.availableTickets === 0;

  return (
    <div className={`event-card ${isSoldOut ? "event-card-sold-out" : ""}`}>
      {/* 1. Event title */}
      <h3 className="event-title">{event.title}</h3>

      {/* 2. Category badge */}
      <div className="event-category-badge">{event.category}</div>

      <div className="event-details">
        {/* 3. Event date */}
        <p className="detail-item">
          <strong>Date:</strong> {event.date}
        </p>

        {/* 4. Venue */}
        <p className="detail-item">
          <strong>Venue:</strong> {event.venue}
        </p>

        {/* 5. Available ticket count with conditional Sold Out display */}
        <p className="detail-item">
          <strong>Available Tickets:</strong>{" "}
          {isSoldOut ? (
            <span className="sold-out-tag">Sold Out</span>
          ) : (
            <span className="tickets-count">{event.availableTickets}</span>
          )}
        </p>
      </div>

      {/* Booking button: disabled when sold out */}
      <button
        className="book-btn"
        disabled={isSoldOut}
        onClick={() => onBookTicket && onBookTicket(event)}
      >
        {isSoldOut ? "Sold Out" : "Book Ticket"}
      </button>
    </div>
  );
}

export default EventCard;
