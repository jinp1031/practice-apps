import React from 'react';

var Home = ({handleClick}) => (
  <div>
        <h1>Jin's LEGO store</h1>
        <br/>
        <button onClick={handleClick}>
          Click Here to Checkout
        </button>
    </div>
)



export default Home;