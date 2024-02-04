
import {  Outlet } from 'react-router-dom'
import AddFlights from './Service/AddFlights'



function Service() {

  return (
    <div className='service'>
      <AddFlights/>
        <Outlet/>
    </div>
  )
}

export default Service
