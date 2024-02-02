function FlightDetails(props) {
    return (
        <div className="flight_details">

            <h1>
                <p>Airlines : </p>{props.Airlines}
            </h1>
            <h1>
                <p>FlightNumbers: </p>{props.FlightNumbers}
            </h1>
            <h1>
                <p>Source : </p>{props.Source}
            </h1>
            <h1>
                <p>DepartureTime : </p>{props.DepartureTime}
            </h1>
            <h1>
                <p>ArraivalTime : </p>{props.ArraivalTime}
            </h1>

            <h1>

                <p>Destination : </p>{props.destination}</h1>
            <h1>
                <p>duration : </p>{props.duration}</h1>

            {/* <div className="priceBtn">
                <button className="price_btn">{props.price}</button>
            </div> */}

        </div>
    )
}

export default FlightDetails;
