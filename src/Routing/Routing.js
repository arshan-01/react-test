import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ShowList from "../components/ShowList";
import ShowDetails from "../components/ShowDetails";
import ConfirmationPage from "../components/ConfirmationPage";

const NotFound = () => <div>404 - Page Not Found</div>;

const Routing = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Show List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="*" element={<NotFound />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
