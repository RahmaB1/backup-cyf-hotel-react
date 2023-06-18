import React from "react";
import "./App.css";

const SearchResults = (props) => {
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
          </tr>
        </thead>

        <tbody>
          {props.results.map((booking) => {
            return (
              <tr>
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SearchResults;
