import React from 'react';

let Form3 = (props) => {

  if (props.state) {
    return (
      <div>
        <form id="billing" type="submit" onSubmit={()=>{
          let values = document.getElementsByClassName('billing');
          props.onClick(event, values)
          }}
        >
          <h4>Card Info</h4>
          <label>Credit Card Number</label><br></br>
          <input className="billing ccNum" type="text"></input><br></br>
          <label>Expiry Date</label><br></br>
          <input className="billing expiryDate" type="text"></input><br></br>
          <label>CVV</label><br></br>
          <input className="billing cvv" type="text"></input><br></br>
          <label>Billing Zip Code</label><br></br>
          <input className="billing billZip" type="text"></input><br></br>
          <button type="submit">Purchase</button>
        </form>
      </div>
    )
  } else {
    return (<div></div>);
  }
}

export default Form3