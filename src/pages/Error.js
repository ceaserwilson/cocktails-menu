import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error=page section">
      <div className="error-container">
        <h1>this leads nowhere! Go back to home</h1>
        <Link to="/" className="btn">
          home
        </Link>
      </div>
    </section>
  );
};

export default Error;
