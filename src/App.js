import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Header";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
    </div>
  );
};

export default App;
