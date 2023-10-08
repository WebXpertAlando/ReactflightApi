import React, { useState, useEffect } from "react";
import axios from "axios";



const Flights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await axios.get("http://localhost:5000/flights");
      setFlights(response.data);
    };
    fetchFlights();
  }, []);

  const formatTime = (timeString) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(timeString).toLocaleTimeString([], options);
  };


  



  return (
    <div>
      <center>
        <table className="styled-table" width={960}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Airline</th>
              <th>Flight</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Arrival Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight._id}>
                 
                <td>{formatTime(flight.dep_time)}
                
               
               
              </td>
                <td>{flight.airline_iata}</td>
                 
                <td>{flight.flight_number}</td>
                <td>{flight.dep_iata}</td>
                <td>{flight.arr_iata}</td>
                <td>{formatTime(flight.arr_time)}</td>
                <td>{flight.status ? "Scheduled" : "Active"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Flights;
