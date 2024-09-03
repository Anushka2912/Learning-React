import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Assignment1 from "./assignment1";
import Assignment2 from "./assignment2";
import HomepageComponent from "./homepage";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageComponent />}></Route>
        <Route path="/assignment1" element={<Assignment1 />}></Route>
        <Route path="/assignment2" element={<Assignment2 />}></Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
