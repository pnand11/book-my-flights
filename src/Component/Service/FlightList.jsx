import axios from 'axios';
import { useEffect, useState } from 'react';

function FlightList() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Flight, setFlight] = useState([]);

  useEffect(() => {
    fetch("https://bookmyflights-server.onrender.com/flights/getFlights")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFlight(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  const DeleteFlight = async (ind) => {
    alert("It will delete the flight ")
    await axios.delete(`https://bookmyflights-server.onrender.com/flights/deleteFlight/{Id}`)
      .then(
        setFlight(Flight.filter(Flight => Flight.id !== ind))
      )
  }

  return (
    <div className='list'>
      <h1 className='hOne'>LIST OF ALL FLIGHTS</h1>
      <table className="Table">
        <thead className='TableHead'>
          <tr>
            <th>Airlines</th>
            <th>Flight Numbers</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Available Seats</th>
            <th>Layovers</th>
            <th>Layover Durations</th>
          </tr>
        </thead>
        <tbody>
          {Flight.map((Flight) => (
            <tr key={Flight.id}>
              <td>
                {Flight.airlines.map((airline, index) => (
                  <div key={index}>{airline}</div>
                ))}
              </td>
              <td>
                {Flight.flightNumbers.map((flightNumber, index) => (
                  <div key={index}>{flightNumber}</div>
                ))}
              </td>
              <td>{Flight.source}</td>
              <td>{Flight.destination}</td>
              <td>{Flight.departureTime}</td>
              <td>{Flight.arrivalTime}</td>
              <td>{Flight.seatsAvailable}</td>
              <td>
                {Flight.layovers.map((layover, index) => (
                  <div key={index}>{layover}</div>
                ))}
              </td>
              <td>
                {Flight.layoverDurations.map((layoverDuration, index) => (
                  <div key={index}>{layoverDuration}</div>
                ))}
              </td>
              <td>
                <button className='button-49' onClick={() => DeleteFlight(Flight.id)}>delete</button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default FlightList
