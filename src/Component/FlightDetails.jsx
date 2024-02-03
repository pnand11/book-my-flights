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
                <p>ArrivalTime : </p>{props.ArrivalTime}
            </h1>

            <h1>

                <p>Destination : </p>{props.destination}</h1>
            <h1>
                <p>duration : </p>{props.durations}</h1>

            {/* <div className="priceBtn">
                <button className="price_btn">{props.price}</button>
            </div> */}

        </div>
    )
}

export default FlightDetails;
