// import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Strem from './components/Strem';
import Home from './components/Home';


function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>

      <Route path='/movie' element={<Movies/>}></Route>

      <Route path='/stream' element={<Strem/>}></Route>
    </Routes>
   </Router>

    </>
    );
}

export default App;
