import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function AddFlights() {
  let navigate = useNavigate();

  const [airlines, setAirlines] = useState([]);
  const [flightNumbers, setFlightNumbers] = useState([]);
  const [flightDurations, setFlightDurations] = useState([]);
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState(0);
  const [layovers, setLayovers] = useState([]);
  const [layoverDurations, setLayoverDurations] = useState([]);

  const [airlinesText, setAirlinesText] = useState('');
  const [flightNumbersText, setFlightNumbersText] = useState('');
  const [flightDurationsText, setFlightDurationsText] = useState('');
  const [layoversText, setLayoversText] = useState('');
  const [layoverDurationsText, setLayoverDurationsText] = useState('');
  const [seatsAvailableText, setSeatsAvailableText] = useState('');

  const handleChange = () => {
    setAirlines(airlinesText.split(', '));
    setFlightNumbers(flightNumbersText.split(', '));
    setFlightDurations(flightDurationsText.split(', '));
    setLayovers(layoversText.split(', '));
    setLayoverDurations(layoverDurationsText.split(', '));
    setSeatsAvailable(parseInt(seatsAvailableText));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      airlines,
      flightNumbers,
      flightDurations,
      departure,
      arrival,
      departureTime,
      arrivalTime,
      seatsAvailable,
      layovers,
      layoverDurations
    };
    axios.post('https://bookmyflights-server.onrender.com/flights/saveFlight', data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='addFlights'>
      <h1 className='hOne'>ADD FLIGHTS</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Airlines</label>
          <input type="text" placeholder='airline1, airline2' value={airlinesText} onChange={(e) => setAirlinesText(e.target.value)} />
        </div>
        <div>
          <label>Flight Numbers</label>
          <input type="text" placeholder='fln1, fln2' value={flightNumbersText} onChange={(e) => setFlightNumbersText(e.target.value)} />
        </div>
        <div>
          <label>Flight Durations</label>
          <input type="text" placeholder='hh:mm:ss, hh:mm:ss' value={flightDurationsText} onChange={(e) => setFlightDurationsText(e.target.value)} />
        </div>
        <div>
          <label>Departure</label>
          <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
        </div>
        <div>
          <label>Arrival</label>
          <input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
        </div>
        <div>
          <label>Departure Time</label>
          <input 
            type="datetime-local" 
            value={departureTime} 
            onChange={(e) => setDepartureTime(e.target.value.toString())} 
          />
        </div>
        <div>
          <label>Arrival Time</label>
          <input 
            type="datetime-local" 
            value={arrivalTime} 
            onChange={(e) => setArrivalTime(e.target.value.toString())} 
          />
        </div>
        <div>
          <label>Seats Available</label>
          <input type="text" value={seatsAvailableText} onChange={(e) => setSeatsAvailableText(e.target.value)} />
        </div>
        <div>
          <label>Layovers</label>
          <input type="text" placeholder='lay1, lay2' value={layoversText} onChange={(e) => setLayoversText(e.target.value)} />
        </div>
        <div>
          <label>Layover Durations</label>
          <input type="text" placeholder='hh:mm:ss, hh:mm,ss' value={layoverDurationsText} onChange={(e) => setLayoverDurationsText(e.target.value)} />
        </div>
        <button type="submit" onClick={handleChange}>Add Flight</button>
      </form>
    </div>
  )
}

export default AddFlights
