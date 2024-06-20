import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Coin from './pages/coin/Coin';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>

   

      </Routes>
    </div>
  )
}

export default App