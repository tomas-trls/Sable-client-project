import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";
const Error = ({ page }) => {
  return (
    <div className="error-page">
      <main className="error-page__main">
        <h1 className="error-page__neg error-page__title">
          <span className="error-page__bg">Error - 401</span>
        </h1>
        <p>{`You have tried to access ${page} page without logging in, to continue:`}</p>
        <p>* Return to our homepage:</p>
        <nav className="error-page__nav">
          <Link to="/">Login</Link>
        </nav>
      </main>
    </div>
  );
};

export default Error;
