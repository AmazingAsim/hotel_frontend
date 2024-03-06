import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import Food from './components/food';
import Updateroom from './components/Updateroom';
import Rooms from './components/rooms';


function App() {
  return (
  <div className='main'>
    <BrowserRouter>
          <Navbar/>
          <Routes>
                  <Route  path = "/" element = {<Dashboard/>}/>
                  <Route  path = "customers" element = {<Customers/>}/>
                  <Route  path = "food" element = {<Food/>}/>
                  <Route  path = "rooms" element = {<Rooms/>}/>
                  <Route  path = "updaterooms/:roomId/:available/:guestId/:stars/:capacity" element = {<Updateroom/>}/>
          </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;