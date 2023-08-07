import React from "react";

const ConfirmationPage = () => {
  // Retrieve booking details from local storage
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));

  return (
    <div className="container mt-4 text-center">
      <h2>Booking Confirmation</h2>
      <div className="card mt-4">
        <div className="card-body">
          <p className="lead">
            Thank you,{" "}
            <span className="text-primary">{bookingDetails.userName}</span>, for
            booking a ticket for the show!
          </p>
          <p>Your booking details:</p>
          <ul className="list-unstyled">
            <li>Show Name: {bookingDetails.showName}</li>
            <li>Show ID: {bookingDetails.showId}</li>
            <li>Email: {bookingDetails.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
