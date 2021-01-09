import React from 'react';

let Form1 = (props) => {

  return (
    <div>
      <form type="submit">
        <h4>Account Credentials</h4>
        <label>Name</label><br></br>
        <input type="text"></input><br></br>
        <label>Email</label><br></br>
        <input type="text"></input><br></br>
        <label>Password</label><br></br>
        <input type="text"></input><br></br>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default Form1