
import React, { useState, useEffect } from "react";
import Axios from 'axios';

// import flight1 from './images/flight1.jpg';

// material ui
import { Box }  from '@mui/material';
import { TextField} from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from '@mui/material';
import FlightTakeoffIcon from '@mui/material';





const  City = [
  {value: 'ADDIS ABABA (ADD)', label: 'ADDIS ABABBA (ADD)'},
  {value: 'BAHRAIN (BAH)', label: 'BAHRAIN (BAH)'},
  {value: 'BLANTYRE (BLZ)', viewValue: 'BLANTYRE (BLZ)'},
  
  {value: 'DELHI (DEL)', label: 'DELHI (DEL)'},
  {value: 'DOHA (DOH)', label: 'DOHA (DOH)'},
  {value: 'DUBAI (DXB)', label: 'DUBAI (DXB)'},
  {value: 'ELDORET (ELD)', label: 'ELDORET (ELD)'},
  {value: 'ENTEBBE (EBB)', label: 'ENTEBBE (EBB)'},
  {value: 'GABORONE (GBE)', label: 'GABORONE (GBE)'},
  {value: 'HARARE (HRE)', label: 'HARARE (HRE)'},
  {value: 'INSTABUL (IST)', label: 'INSTABUL (IST)'},
  {value: 'JOHANNESBURG (JNB)', label: 'JOHANNESBURG (JNB)'},
  {value: 'JUBA (JUB)', label: 'JUBA (JUB)'},
  {value: 'KISUMU (KIS)', label: 'KISUMU (KIS)'},
  {value: 'KINSHASA (FIH)', label: 'KINSHASA (FIH)'},
  {value: 'KILIMANJARO (JRO)', label: 'KILIMANJARO (JRO)'},
  {value: 'LIBREVILLE (LBV)', label: 'LIBREVILLE (LBV)'},
  {value: 'LAGOS (LOS)', label: 'LAGOS (LOS)'},
  {value: 'NAIROBI (NBO)', label: 'NAIROBI (NBO)'},
  {value: 'MALINDI (MYD)', label: 'MALINDI (MYD)'},
  {value: 'MOMBASA (MBA)', label: 'MOMBASA (MBA)'},
  {value: 'PARIS FRANCE (CDG)', label: 'PARIS FRANCE (CDG)'},
  {value: 'UKUNDA (UKA)', label: 'UKUNDA (UKA)'},
  {value: 'SHARJAH (SHJ)', label: 'SHARJAH (SHJ)'},

];




 
const AddFlights = () => {

  const [dep_iata, setDep_iata] = useState("")
  const [arr_iata, setArr_iata] = useState("")
  const [airline_iata, setAirline_iata] = useState("")
  const [flight_iata, setFlight_iata] = useState("")
  const [flight_number, setFlight_number] = useState("")
  const [dep_time, setDep_time] = useState("")
  const [arr_time, setArr_time] = useState("")
  const [status, setStatus] = useState("")

  
const handleSubmit = async (e) => {
  e.preventDefault();
  
    const flightData = {
    dep_iata: dep_iata,
    arr_iata: arr_iata,
    flight_iata: flight_iata,
    airline_iata: airline_iata,
    flight_number: flight_number,
    dep_time: dep_time,
    arr_time: arr_time,
    status: status
};

console.log("flightData")
await Axios.post("/flights", flightData).then((res)=> {
  console.log(res.data);

setDep_iata(dep_iata);
setArr_iata(arr_iata);
setAirline_iata(airline_iata);
setFlight_iata(flight_iata);
setFlight_number(flight_number);
setDep_time(dep_time);
setArr_time(arr_time);
setStatus(status);
}).catch ((error)=> {
  console.log(error);})
  setStatus(true);
};





  
    return (
      <div
       
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'justy',
        height: '100vh'
      }}
      

      >
       {/* <img className='img' src={flight1} alt='airports' /> */}

     <br/>





<div>
  
<br/>
<br/>
<br/>
<br/>

<form onSubmit={handleSubmit} action="process_flights.js" method="POST">

<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >



      
  <TextField
  id="outlined-select-origin"
  className="dep_iata"
  required 
  select
  label="Origin"
  defaultValue="NAIROBI (NBO)"
  helperText = "Please select your Origin"
  onChange={(e) => {setDep_iata(e.target.value)}}
  >
  {City.map((option) => (
    <MenuItem key={option.value } value={option.value}>
      {option.label}
      </MenuItem>
  ))}
  </TextField>

<TextField 
 id="outlined-select-destination"
 className="arr_iata"
 label="Destination"
 required
 select
 defaultValue="NAIROBI (NBO)"
 helperText = "Please select your Destination"
 onChange={(e) => {setArr_iata(e.target.value)}}
>
  {City.map((option) =>(
       <MenuItem key={option.value } value={option.value}>
       {option.label}
       </MenuItem>
   ))}
  
</TextField>

<TextField
type="text"
id="outlined-arline"
required
label="Airline"
variant="outlined"
helperText="Please Enter Airline"
onChange={(e) => {setAirline_iata(e.target.value)}}
>

</TextField>

<TextField
type="text"
className="flight_number"
id="outlened-flight_number"
required
label="Flight Number"
variant="outlined"
helperText="Please Enter Flight Number"
onChange={(e) => {setFlight_number(e.target.value)}}
>

</TextField>

<TextField
type="date"
className="dep_time"
id="outlined-deptime"
required
variant="outlined"
helperText="Departure Date"
onChange={(e) => {setDep_time(e.target.value)}}
>
</TextField>


<TextField
type="date"
id="outlined-arrivalDate"
className="arr_time"
required
variant="outlined"
helperText="Arrival Date"
onChange={(e) => {setArr_time(e.target.value)}}
>
</TextField>


<TextField 
type="text"
className="status"
id="outlined-Status"
required
variant="outlined"
helperText = " Flight Status"
onChange={(e) => {setStatus(e.target.value)}}
>

</TextField>

<br/>

<Button
                type="submit"
                variant="contained"
                onSubmit={handleSubmit}
              >
                Add Flight
              </Button>





</Box>
</form>


</div>


</div>
      
    );
  };
    
  export default AddFlights;





