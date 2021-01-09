import React from 'react';

let Form2 = (props) => {

  return (
    <div>
      <form type="submit">
        <h4>Address</h4>
        <label>Line 1</label><br></br>
        <input type="text"></input><br></br>
        <label>Line 2</label><br></br>
        <input type="text"></input><br></br>
        <label>City</label><br></br>
        <input type="text"></input><br></br>
        <label>State</label><br></br>
        <input type="text"></input><br></br>
        <label>Zip Code</label><br></br>
        <input type="text"></input><br></br>
        <label>Phone</label><br></br>
        <input type="text"></input><br></br>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default Form2