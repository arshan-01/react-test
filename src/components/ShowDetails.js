import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"; // Import useHistory
import axios from "axios";

const ShowDetails = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error("Error fetching show details:", error);
      });
  }, [id]);

  const handleBooking = () => {
    const bookingDetails = {
      userName,
      email,
      showName: show.name,
      showId: show.id,
    };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    setBookingConfirmed(true);
    // Reset form fields after booking confirmation
    setUserName("");
    setEmail("");
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{show.name}</h2>
      <p>{show.summary}</p>

      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Book a Movie Ticket</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleBooking();
              }}
            >
              Book Now
            </button>
          </form>
          {bookingConfirmed && (
            <div className="mt-4 alert alert-success" role="alert">
              Booking confirmed! Thank you, {userName}, for booking a ticket.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
