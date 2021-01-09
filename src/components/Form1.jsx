import React from 'react';

let Form1 = (props) => {

  if (props.state) {
    return (
      <div>
        <form type="submit"
          onSubmit={()=>{
            let values = document.getElementsByClassName('credentials');
            props.onClick(event, values)
          }}
        >
          <h4>Account Credentials</h4>
          <label>Name</label><br></br>
          <input className="credentials name" type="text"></input><br></br>
          <label>Email</label><br></br>
          <input className="credentials email" type="text"></input><br></br>
          <label>Password</label><br></br>
          <input className="credentials password" type="text"></input><br></br>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default Form1