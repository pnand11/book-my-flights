
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Component/About';
import Home from './Component/Home';
import Ticket from './Component/Ticket';
import Service from './Component/Service';
import Header from './Component/Header';
import Register from './Component/Register';
import SignUp from './Component/SignUp';



function App() {
  return (
  <div>
  <BrowserRouter>
    <Header/>

<Routes>

<Route  path='/' element={<Home/>}/>
<Route  path='/about' element={<About/>}/>
 
<Route  path='/ticket' element={<Ticket/>}/>
<Route  path='/service/s1/s2/s3' element={<Service/>}/>
<Route  path='/register' element={<Register/>}/>
<Route  path='/signup' element={<SignUp/>}/>
  


</Routes>
</BrowserRouter>

 

  </div> 
  );
  
}

export default App
