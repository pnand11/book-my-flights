import React from 'react'
import { useEffect,useState } from 'react';
import FlightDetails from './FlightDetails';

function Home() {
    let [flights, setFlight] = useState([]);

    useEffect(()=>{

        fetch('https://bookmyflights-server.onrender.com/flights/getFlights')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
           setFlight(data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])

    console.log(flights);


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
                            flights.map((flight,index)=>{
                                return(

                                    <FlightDetails  Airlines={flight.airlines[0]} FlightNumbers={flight.FlightNumbers[0]} Source={flight.source} DepartureTime={flight.departureTime} ArraivalTime={flight.arrivalTime} destination={flights.destination} duration={flights.flightDuration} price={flight.price}/>
                                )
                            })
                        }


                    </div>
                </div>
            </section>
        </div>
  )
}

export default Home;