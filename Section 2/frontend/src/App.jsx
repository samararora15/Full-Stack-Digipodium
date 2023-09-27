import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import Todo from './components/Todo';
import Productlist from './components/Productlist';
import Statemanagement from './components/Statemanagement';
import ManageUser from './components/ManageUser';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';
import { AppProvider } from './AppContext';

// links will always be placed in index.html

function App() {
  return (
    <div>
      <Toaster position='top-center'/>
      <BrowserRouter>
      <AppProvider>
      {/* <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link> */}

      <Navbar />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='signup' element = {<Signup />} />
        <Route path='login' element = {<Login />} />
        <Route path='event' element = {<EventHandling />} />
        <Route path='todo' element = {<Todo/>} />
        <Route path='productlist' element = {<Productlist/>} />
        <Route path='state' element = {<Statemanagement/>} />
        <Route path='manageuser' element = {<ManageUser/>} />
        <Route path='updateuser/:id' element = {<UpdateUser/>} />
      </Routes>
      </AppProvider>
      </BrowserRouter>
      {/* ctrl space to include */}
    </div>
    
  );
}

export default App;
