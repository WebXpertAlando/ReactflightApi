import React, { useState, useEffect } from "react";
import axios from "axios";
import flight02 from './images/flight02.jpg'

const SearchFlights = () => {
  const [flights, setFlights] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:5600/api/flights`
      );
      setFlights(result.data);
    };

    fetchData();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm);
  };

  return (


    <div>
<img src={flight02} className="img" alt="Flight"></img>
<br/>
<center>


      <form onSubmit={handleSearch}>
        <input type="text" className="form-control-sm"  required value={searchTerm} onChange={handleChange} />
        &nbsp;
        <button type="submit" className="btn btn-success btn-sm">Search</button>
      </form>
      <table className="styled-table">
        <thead>
          <tr className="active-row">
            <th>Airline</th>
            <th>Flight Number</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.airline_iata}</td>
              <td>{flight.flight_iata}</td>
              <td>{flight.dep_time}</td>
              <td>{flight.arr_time}</td>
              <td>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
 </center>
    </div>
  );
};

export default SearchFlights;