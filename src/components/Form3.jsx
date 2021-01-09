import React from 'react';

let Form3 = (props) => {

  return (
    <div>
      <form type="submit">
        <h4>Card Info</h4>
        <label>Credit Card Number</label><br></br>
        <input type="text"></input><br></br>
        <label>Expiry Date</label><br></br>
        <input type="text"></input><br></br>
        <label>CVV</label><br></br>
        <input type="text"></input><br></br>
        <label>Billing Zip Code</label><br></br>
        <input type="text"></input><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form3