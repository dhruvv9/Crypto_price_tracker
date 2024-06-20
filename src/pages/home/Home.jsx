import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <div className='hero'>
            <h1>largest <br/> Crypto Marketplace</h1>
<p>Welcome to the world largest crypto currency market.
    Signup to explore more cryptos.
</p>
<form>
    <input type='text' placeholder='Search Crypto...'/>
    <button type='submit'>Search</button>
</form>
        </div>
      
    </div>
  )
}

export default Home
