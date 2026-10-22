import React from "react";
import EventCard from "../components/EventCard";
import { sampleEvents } from "../data/events";

function EventsPage() {
  // Simple handler to simulate booking an event ticket
  const handleBookTicket = (event) => {
    alert(`Success! You have selected a ticket for "${event.title}".`);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Upcoming Events</h2>
        <p className="page-subtitle">
          Browse all available events and book your tickets easily.
        </p>
      </div>

      {/* Grid displaying event cards rendered using array map() */}
      <div className="events-grid">
        {sampleEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onBookTicket={handleBookTicket}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
