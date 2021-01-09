import React from 'react';
import $ from 'jquery';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      home: true,
      dbIndex: null,
      form1: false,
      form2: false,
      form3: false
    }
  }

  handleHomeSubmit () {
    this.setState({
      home: false,
      form1: true
    });
  }

  handleCredentialsSubmit (event, elementsArr) {
    event.preventDefault();
    let credentialsDataObj = this.parseFormData(elementsArr)[0];
    //send post request to server
    $.post({
      url: '/credentials',
      contentType: 'application/json',
      data: JSON.stringify(credentialsDataObj),
      success: (res) => {
        console.log(res);
        this.setState({
          form1: false,
          form2: true,
          dbIndex: res.data
        });
      }
    });
    // console.log(credentialsDataObj);
    // this.setState({
    //   form1: false,
    //   form2: true
    // });
  }

  handleAddressSubmit (event, elementsArr) {
    event.preventDefault();
    let dataArr = this.parseFormData(elementsArr);
    let addressDataObj = dataArr[0];
    addressDataObj['address'] = dataArr[1];
    //send post request to server
    console.log(addressDataObj);
    this.setState({
      form2: false,
      form3: true
    });
  }

  handleBillingSubmit (event, elementsArr) {
    event.preventDefault();
    let billingDataObj = this.parseFormData(elementsArr)[0];
    console.log(billingDataObj);
    //send post request to server with data packet
    alert('Successful Checkout!!');
    this.setState({
      form3: false,
      home: true
    });
  }

  parseFormData (elementsArr) {
    let dataObj = {};
    let addressString = '';
    for (let i=0; i< elementsArr.length; i++) {
      if (elementsArr[i].classList.length === 1) {
        addressString += elementsArr[i].value + ','
      } else {
        let dataKey = elementsArr[i].classList[1];
        dataObj[dataKey] = elementsArr[i].value;
      }
    }
    return [dataObj, addressString.slice(0, addressString.length -1)];
  }

  render () {
    const isAtHome = this.state.home;
    let homeButton;
    if (isAtHome) {
      homeButton = <button type="submit" onClick={()=>{this.handleHomeSubmit()}}>CheckOut Now</button>
    }
    return(
      <div>
        <h1>Checkout</h1>
        {homeButton}
        <Form1
          onClick={this.handleCredentialsSubmit.bind(this)}
          state={this.state.form1}
        />
        <Form2
          onClick={this.handleAddressSubmit.bind(this)}
          state={this.state.form2}
        />
        <Form3
          onClick={this.handleBillingSubmit.bind(this)}
          state={this.state.form3}
        />
      </div>
    );
  }
}

export default App;