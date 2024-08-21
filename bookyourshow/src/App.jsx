// import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Strem from './components/Strem';
import Home from './components/Home';
import Corporate from './components/Corporate';
import Moviedetail from './components/Moviedetail';
import Navbar from './components/Navbar';
import Activity from './components/Activity'


function App() {
  return (
    <>
    <Navbar/>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
  

      <Route path='/movie' element={<Movies/>}></Route>
      <Route path='/movie/:movie_name' element={<Moviedetail/>}></Route>

      <Route path='/stream' element={<Strem/>}></Route>
      <Route path='/activity' element={<Activity/>}></Route>
      <Route path='/corporate' element={<Corporate/>}></Route>
      
    </Routes>
   </Router>

    </>
    );
}

export default App;
