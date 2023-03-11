import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>Welcome to Budget Buddy</h2>
      <p>
        Budget Buddy is a personal finance app that helps you manage your money
        and stay on track with your financial goals.
      </p>
      <Link className="linkers" to="/signin">
        Log In
      </Link>
      <Link className="linkers" to="/signup">
        Register
      </Link>
    </div>
  );
}

export default HomePage;
