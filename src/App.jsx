import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Component/About';
import Home from './Component/Home';
import Ticket from './Component/Ticket';
import Service from './Component/Service';
import Header from './Component/Header';
import Register from './Component/Register';
import SignUp from './Component/SignUp';
import AddFlights from './Component/Service/AddFlights';
import BookingDetails from './Component/BookingDetails';
import FlightList from './Component/Service/FlightList';
import Search from './Component/Service/Search';
import SearchList from './Component/Service/SearchList';
import CheckIn from './Component/CheckIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/*' element={<About />} />
          <Route path='/ticket/*' element={<Ticket />}>
            <Route path='list' element={<FlightList />} />
          </Route>
          <Route path='/service' element={<Service />}>
            <Route path='addflight' element={<AddFlights />} />
          </Route>
          <Route path='/bookingdetails/*' element={<BookingDetails />}>
            <Route path='search' element={<Search />} />
            <Route path='SearchCon' element={<SearchList />} />
          </Route>
          <Route path='CheckIn' element={<CheckIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App