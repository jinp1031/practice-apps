import React from 'react';

var F1 = ({handleClick, handleInput}) => (
  <form onSubmit={handleClick}>
  <h1>Account Info</h1>
  <label>
    Name:
    <input type="text" name="name" onChange={handleInput} />
  </label><br/>
  <label>
    email:
    <input type="text" name="email" onChange={handleInput} />
  </label><br/>
  <label>
    password:
    <input type="password" name="password" onChange={handleInput} />
  </label><br/>
  <input type="submit" value="Next"/>
</form>
)

export default F1;