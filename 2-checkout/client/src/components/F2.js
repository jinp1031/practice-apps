import React from 'react';


var F2 = ({handleClick, handleInput}) => (
  <form onSubmit={handleClick}>
  <h1>Shipping Info</h1>
  <label>
    Address:
    <input type="text" name="address1" onChange={handleInput} />
  </label><br/>
  <label>
    email:
    <input type="text" name="address2" onChange={handleInput} />
  </label><br/>
  <label>
    city:
    <input type="text" name="city" onChange={handleInput} />
  </label><br/>
  <label>
    state:
    <input type="text" name="state" onChange={handleInput} />
  </label><br/>
  <label>
    zip code:
    <input type="text" name="zipcode" onChange={handleInput} />
  </label><br/>
  <label>
    Phone:
    <input type="text" name="phone" onChange={handleInput} />
  </label><br/>
  <input type="submit" value="Next"/>
</form>
)


export default F2;