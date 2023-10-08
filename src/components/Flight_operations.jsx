import React, { useState, useEffect } from 'react';
import axios from 'axios';
import flight02 from './images/flight02.jpg';
import { Link } from 'react-router-dom';


function Flight_operations() {
  const [flights, setFlights] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://63d38c048d4e68c14eacf011.mockapi.io/Flights/FlightSearch');
      setFlights(response.data);
    }

    fetchData();
  }, []);


  return (


    <div>

<br/>
<center>
      <h2>Flight Booking <button className="btn btn-success">
        Back
      </button> <Link to="/SearchFlights"><button  className='btn btn-info'>Search Flights</button></Link></h2>
    
      
      <hr></hr>



      <table className='styled-table'>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.airline_iata}</td>
              <td>{flight.flight_iata}</td>
              <td>{flight.arr_iata}</td>
              <td>{flight.dep_iata}</td>
              <td>{flight.dep_time}</td>
              <td>{flight.arr_time}</td>

              
              <td>
                <button  className="btn btn-warning btn-sm">View Flight Information</button>
                &nbsp;
                <button  className="btn btn-primary btn-sm">Book Flight</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>

</div>


);
}











export default Flight_operations