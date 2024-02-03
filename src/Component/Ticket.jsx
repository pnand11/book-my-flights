import React, { useEffect, useState } from 'react';
import FlightDetails from './FlightDetails';

function Ticket() {
    let [flights, setFlight] = useState([]);

    useEffect(() => {
        fetch('https://bookmyflights-server.onrender.com/flights/getFlights')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setFlight(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="main_2">
            <section className="main_sec">
                <div className="first_sec">
                    <div className="filter">
                        <button className="filter_option">Cost</button>
                        <button className="filter_option">Airline</button>
                        <button className="filter_option">Stops</button>
                        <button className="filter_option">Duration</button>
                    </div>
                    <div className="flight_detail">
                        {
                            flights.map((flight, index) => {
                                return (
                                    <FlightDetails Airlines={flight.airlines} FlightNumbers={flight.flightNumbers} Source={flight.source} DepartureTime={flight.departureTime} ArrivalTime={flight.arrivalTime} destination={flight.destination} durations={flight.flightDurations} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ticket;