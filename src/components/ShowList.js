import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);



  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch(() => {
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Show List</h1>
      <div className="row">
        {shows.map((show) => (
          <div key={show.show.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={show.show.image?.medium}
                className="card-img-top"
                alt={show.show.name}
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <Link to={`/show/${show.show.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
