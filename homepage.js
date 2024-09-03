import React from "react";
import { Link } from "react-router-dom";


const HomepageComponent = () => {
  return (
    <div class="buttonsContainer">
      <Link to="/assignment1">
        <div>
          <button className="routeBtn">Assignment1</button>
        </div>
      </Link>
      <Link to="/assignment2">
        <div>
          <button className="routeBtn">Assignment2</button>
        </div>
      </Link>
    </div>
  );
};

export default HomepageComponent;
