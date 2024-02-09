import axios from 'axios';

const FLIGHT_REST_API_URL ='https://bookmyflights-server.onrender.com/flights/getFlights'


class FlightService {

   getFlights(){
            
    return axios.get( FLIGHT_REST_API_URL+'/');

   }
   saveFlight(f1){
      return axios.get( FLIGHT_REST_API_URL+'/saveFlight',f1);
   }
   getFlightbyId(Id){
      return axios.get( FLIGHT_REST_API_URL+'/getFlight',Id);
   }
   deleteFlightbyId(Id){
      return axios.get( FLIGHT_REST_API_URL+'/deleteFlight',Id);
   }
   updateFlightbyId(f1){
      return axios.get( FLIGHT_REST_API_URL+'/updateFlight',f1);
   }

}
export default new FlightService();
