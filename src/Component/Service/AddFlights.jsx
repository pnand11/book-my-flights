
import axios from 'axios';
import {useState } from 'react';
import {  useNavigate } from 'react-router-dom';


function AddFlights() {
   
  let navigate = useNavigate();
  const [Flight, setFlight]= useState({
  
     flightId :null,
     airlines :null,
     flightNumbers:null,
      flightDuration:null,
      source:null,
      destination:null,
      departureTime:null,
      arrivalTime:null,
      seatsAvailable:null,
      layovers:null,
      layoverDurations:null

    });
    
      const { flightId ,
         airlines ,
         flightNumbers,
         flightDuration,
         source,
         destination,
         departureTime,
         arrivalTime,
         seatsAvailable,
         layovers,
         layoverDurations}=Flight;

      const onChange = e=>{
        setFlight({...Flight,[e.target.name]: e.target.value});
      };

      const onSubmit= async e =>{
          e.preventDefault();
          await axios.post("https://bookmyflights-server.onrender.com/flights/saveFlight",Flight);
           navigate("/f1")
        };


  return (
   <div>
  
    <div className='addFlight'>
    <h1>ADD FLIGHT</h1>
      <br /><br />
      <div className='FromOf'>
  <form  onSubmit={e=>{onSubmit(e)}}>
    
      <input 
          type="text" 
          name='flightId'
          value={flightId }
          className='inputAdd'
          placeholder='FlightId '
          required="required"
          onChange={e=>{onChange(e)}}
          />
          <br /> <br />
      <input 
          type="text" 
          name='airline'
          value={airlines}
          className='inputAdd'
          placeholder='Airlines Name'
          required="required"
          onChange={e=>{onChange(e)}}
          />
          <br /> <br />
      <input 
          type="text" 
          name='flightNumbers'
          value={flightNumbers}
          className='inputAdd'
          placeholder='FlightNumbers'
          required="required"
          onChange={e=>{onChange(e)}}
          />
          <br /> <br />
      <input 
          type="text" 
          name='flightDuration'
          value={flightDuration}
          className='inputAdd'
          placeholder='Flight Duration'
          required="Travelling Time"
          onChange={e=>{onChange(e)}}
          />
          <br /><br />
      <input 
          type="text"
          name='source' 
          value={source}
          className='inputAdd'
          placeholder='Come From'
          required="required"
          onChange={e=>{onChange(e)}}
          />
          <br /><br />

          <input 
          type="text"
          name='destination' 
          value={destination}
          className='inputAdd'
          placeholder='Flight Destination'
          required="required"
          onChange={e=>{onChange(e)}}
          />
          <br /><br />

          <input 
          type="date" 
          name='departureTime'
          value={departureTime}
          className='inputAdd'
          aria-describedby="date-format" 
              min="2021-03-01" max="2031-01-01"
              required="required"
              onChange={e=>{onChange(e)}}
          />
          <br /><br />

          <input 
          type="date" 
          name='arrivalTime'
          value={arrivalTime}
          className='inputAdd'
          aria-describedby="date-format" 
              min="2021-03-01" max="2031-01-01"
              required="required"
              onChange={e=>{onChange(e)}}
          />
          <br /><br />

          <input 
          type="text"
          name='seatsAvailable' 
          value={seatsAvailable}
          className='inputAdd'
          placeholder='Seats Available'
          required="required"
          onChange={e=>{onChange(e)}}
          />
          <br /><br />

          <input 
          type="text"
          name='layovers' 
          value={layovers}
          className='inputAdd'
          placeholder='Layovers Airports'
          required="required"
          onChange={e=>{onChange(e)}}
          />
          <br /><br />

          <input 
          type="text"
          name='layoverDurations' 
          value={layoverDurations}
          className='inputAdd'
          placeholder='LayoverDurations Airports'
          required="required"
          onChange={e=>{onChange(e)}}
          />
          <br /><br />

         
       <button className='button-30'>submit</button>       


  </form>
  </div>
	
    </div>
    </div>
  )
}

export default AddFlights
