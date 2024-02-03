
import {  Outlet} from 'react-router-dom'
import FlightList from './Service/FlightList'

function Ticket() {
  return (
    <div>
    <div className="product">

   

    <FlightList/>
    <Outlet/>

</div>
    </div>
  )
}

export default Ticket