import React from "react";
import "./App.css";
import moment from "moment";

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
            <th>Number of Nights</th>
          </tr>
        </thead>

        <tbody>
          {props.results.map((booking) => {
            const start = moment(booking.checkInDate);
            const end = moment(booking.checkOutDate);
            const nights = end.diff(start, "days");

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
                <td>{nights}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SearchResults;
