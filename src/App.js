import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Header";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
    </div>
  );
};

export default App;
