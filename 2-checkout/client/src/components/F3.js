import React from 'react';

var F3 = ({handleClick, handleInput}) => (
  <form onSubmit={handleClick}>
    <h1>Billing Info</h1>
  <label>
  credit card #
    <input type="text" name="creditCard" onChange={handleInput} />
  </label><br/>
  <label>
  Expiration date
    <input type="text" name="expiration"onChange={handleInput} />
  </label><br/>
  <label>
  CVV
    <input type="text" name="cvv"onChange={handleInput} />
  </label><br/>
  <label>
  billing zipcode
    <input type="text" name="billingZipcode"onChange={handleInput} />
  </label><br/>
  <input type="submit" value="Next" />
</form>
)



export default F3;