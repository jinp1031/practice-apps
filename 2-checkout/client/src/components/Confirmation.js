import React from 'react';

var Confirmation = ({handleSubmit,info}) => (
  <div>
        <h1>Confirmation</h1><br/>
        <h2>Check your info Dude 👀👀👀👀</h2><br/>
        <table>
        <thead><tr><th>Account Details</th></tr></thead>
        <tbody>
          <tr><td>Name</td><td>{info.name}</td></tr>
          <tr><td>Email</td><td>{info.email}</td></tr>
          <tr><td>Password</td><td>{info.password}</td></tr>
        </tbody>
        <thead><tr><th>Shipping Address</th></tr></thead>
        <tbody>
          <tr><td>Address Line 1</td><td>{info.address1}</td></tr>
          <tr><td>Address Line 2</td><td>{info.address2}</td></tr>
          <tr><td>City</td><td>{info.city}</td></tr>
          <tr><td>State</td><td>{info.state}</td></tr>
          <tr><td>Zip Code</td><td>{info.zipcode}</td></tr>
          <tr><td>Phone Number</td><td>{info.phone}</td></tr>
        </tbody>
        <thead><tr><th>Payment Method</th></tr></thead>
        <tbody>
          <tr><td>Credit Card</td><td>{info.creditCard}</td></tr>
          <tr><td>Expire Date</td><td>{info.expiration}</td></tr>
          <tr><td>CVV</td><td>{info.cvv}</td></tr>
          <tr><td>Billing Zip Code</td><td>{info.billingZipcode}</td></tr>
        </tbody>
      </table><br/>
      <input
        type="button"
        value="Purchase"
        onClick={handleSubmit} />
    </div>
)



export default Confirmation;