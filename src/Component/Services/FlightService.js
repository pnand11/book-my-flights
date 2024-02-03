import axios from 'axios';

const FLIGHT_REST_API_URL ='https://bookmyflights-server.onrender.com/flights/getFlights'


class FlightService {

   getFlights(){
            
    return axios.get( FLIGHT_REST_API_URL)

   }


}
export default new FlightService();
