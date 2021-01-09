import React from 'react';

let Form2 = (props) => {

  if (props.state) {
    return (
      <div>
        <form type="submit" onSubmit={()=>{
          let values = document.getElementsByClassName('address');
          props.onClick(event, values)
          }}
        >
          <h4>Address</h4>
          <label>Line 1</label><br></br>
          <input className="address" type="text"></input><br></br>
          <label>Line 2</label><br></br>
          <input className="address" type="text"></input><br></br>
          <label>City</label><br></br>
          <input className="address" type="text"></input><br></br>
          <label>State</label><br></br>
          <input className="address" type="text"></input><br></br>
          <label>Zip Code</label><br></br>
          <input className="address" type="text"></input><br></br>
          <label>Phone Number</label><br></br>
          <input className="address phoneNum" type="text"></input><br></br>
          <button type="submit">Next</button>
        </form>
      </div>
    )
  } else {
    return (<div></div>);
  }
}

export default Form2