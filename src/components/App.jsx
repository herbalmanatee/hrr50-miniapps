import React from 'react';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form1: true,
      form2: false,
      form3: false
    }
  }

  handleCredentialsSubmit () {
    this.setState({
      form1: false,
      form2: true
    });
  }

  handleAddressSubmit () {
    this.setState({
      form2: false,
      form3: true
    });
  }

  handleBillingSubmit () {
    this.setState({
      form3: false,
      form1: true
    });
  }

  render () {
    return(
      <div>
        <h1>Checkout</h1>
        <Form1 state={this.state.form1}/>
        <Form2 state={this.state.form2}/>
        <Form3 state={this.state.form3}/>
      </div>
    );
  }
}

export default App;