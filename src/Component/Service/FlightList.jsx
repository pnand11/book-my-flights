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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
            <th>flightId </th>
            <th> airlines </th>
            <th>flightNumbers</th>
            <th>flightDuration</th>
            <th> source</th>
            <th> destination</th>
            <th>departureTime</th>
            <th> arrivalTime</th>
            <th> seatsAvailable</th>
            <th>layovers</th>
            <th>layoverDurations</th>
          </tr>
        </thead>
        <tbody>
          {Flight.map((Flight) => (
            <tr key={Flight.id}>
              <td>{Flight.flightId}</td>
              <td>{Flight.airlines}</td>
              <td>{Flight.flightNumbers}</td>
              <td>{Flight.flightDurations}</td>
              <td>{Flight.source}</td>
              <td>{Flight.destination}</td>
              <td>{Flight.departureTime}</td>
              <td>{Flight.arrivalTime}</td>
              <td>{Flight.seatsAvailable}</td>
              <td>{Flight.layovers}</td>
              <td className='fare'>{Flight.ayoverDurations}</td>
              <td >
                <button className='button-49' onClick={() => DeleteFlight(Flight.id)} >delete</button>
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
