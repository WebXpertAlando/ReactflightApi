import React, { useState } from "react";


import kism from "./images/kism.jpg";
import mombasa from "./images/mombasa.jpg";
import eld from "./images/eld.jpg";
import Nairobi from "./images/Nairobi.jpg";
import travel02 from "./images/travel02.jpg";
import flight1 from "./images/flight1.jpg";
import pic3 from "./images/pic3.jpg";

// material ui


import { Button, TextField, Input } from "@mui/material";

import "./style.css";

function Home() {
  const [results, setResults] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passangers, setPassangers] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://localhost:5000/flights?origin=${origin}&destination=${destination}&DepartureDate=${departureDate}`
    )
      .then((response) => response.json())
      .then((data) => setResults(data));
  };

  return (
    <div
      style={{
        display: "",
        fontSize: "12px",

        height: "200vh",
      }}
    >
      

      <br />
      <br />
      <br />

      <center>
   
        <h3>
          <span>Top Domestic Flight Trips </span>
        </h3>
      
        <br/>
       
      </center>

      <img src={flight1} width={300} height={200}></img>
      <img src={travel02} width={300} height={200}></img>
      <img src={pic3} width={350} height={200}></img>
      


      <br/>
      <br/>
      
      <form onSubmit={handleSubmit} action="search_flights.jsx">
        <center>
        <table border={0} width={960}>
          <div>
            <td>
             
              <TextField
                type="text"
                required
                value={origin}
                variant="outlined"
                onChange={(event) => setOrigin(event.target.value)}
                label="Origin"
               
                
              />
            </td>
            <td>
         
              <TextField
                type="text"
                required
                value={destination}
                variant="outlined"
                onChange={(event) => setDestination(event.target.value)}
                label="Destination"
                placeholder="Enter flight Destination"
              />
            </td>
            <td>
            <TextField
                type="number"
                required
                value={passangers}
                variant="outlined"
                onChange={(event) => setPassangers(event.target.value)}
                label="Passangers"
                placeholder="Enter No of Passangers"
              />
            </td>
            
            <td>
          
              <TextField
                type="date"
                required
                value={departureDate}
                onChange={(event) => setDepartureDate(event.target.value)}
                
              />
            </td>
            <td>
            <Button
                type="submit"
                variant="contained"
                onSubmit={handleSubmit}
              >
                Book Now
              </Button>
            </td>
          </div>
        </table>
        </center>
      </form>
<br/>
      <table className="table table" border={0} cellSpacing={2}>
        <td>
          <div class="card" id="card-kisumu">
            <img className="card-img-top" src={kism} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Kisumu Trip</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-success btn-sm">
                Book Flight
              </a>
            </div>
          </div>
        </td>

        <td>
          <div class="card" id="card-mombasa">
            <img
              className="card-img-top"
              src={mombasa}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Mombasa Trip</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-success btn-sm">
                Book Flight
              </a>
            </div>
          </div>
        </td>

        <td>
          <div class="card" id="card-mombasa">
            <img className="card-img-top" src={eld} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Eldoret Trip</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-success btn-sm">
                Book Flight
              </a>
            </div>
          </div>
        </td>

        <td>
          <div class="card" id="card-mombasa">
            <img
              className="card-img-top"
              src={Nairobi}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Nairobi Trip</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-success btn-sm">
                {" "}
                Book Flight
              </a>
            </div>
          </div>
        </td>
      </table>
    </div>
  );
}

export default Home;
