import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';

// links will always be placed in index.html

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link> */}

      <Navbar />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='signup' element = {<Signup />} />
        <Route path='login' element = {<Login />} />
        <Route path='event' element = {<EventHandling />} />
      </Routes>
      </BrowserRouter>
      {/* ctrl space to include */}
    </div>
    
  );
}

export default App;
