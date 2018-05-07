import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',
      changeDue: ''
    };
    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleAmountDue(e) {
    this.setState({
      amountDue: e.target.value
    });
  }

  handleAmountReceived(e) {
    this.setState({
      amountReceived: e.target.value
    });
  }

  handleClick() {
    const changeDue = (this.state.amountReceived - this.state.amountDue).toFixed(2);
    let change = this.state.amountReceived - this.state.amountDue;

    const twenties = (changeDue > 0) ? Math.floor(change / 20) : Math.ceil(change / 20);
    change = (change % 20).toFixed(2);

    const tens = (changeDue > 0) ? Math.floor(change / 10) : Math.ceil(change / 10);
    change = (change % 10).toFixed(2);

    const fives = (changeDue > 0) ? Math.floor(change / 5) : Math.ceil(change / 5);
    change = (change % 5).toFixed(2);

    const ones = (changeDue > 0) ? Math.floor(change / 1) : Math.ceil(change / 1);
    change = (change % 1).toFixed(2);

    const quarters = (changeDue > 0) ? Math.floor(change / 0.25) : Math.ceil(change / 0.25);
    change = (change % 0.25).toFixed(2);

    const dimes = (changeDue > 0) ? Math.floor(change / 0.1) : Math.ceil(change / 0.1);
    change = (change % 0.1).toFixed(2);

    const nickels = (changeDue > 0) ? Math.floor(change / 0.05) : Math.ceil(change / 0.05);
    change = (change % 0.05).toFixed(2);

    const pennies = (changeDue > 0) ? Math.floor(change / 0.01) : Math.ceil(change / 0.01);
    change = (change % 0.01).toFixed(2);


    this.setState({
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
      changeDue: changeDue
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-white'>Change Calculator</h1>
        <hr className='border-white' />
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5>Enter information</h5>
              </div>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>
                      How much is due?
                      <input id='amountDue' type='text' onChange={ this.handleAmountDue } />
                    </label>
                  </div>
                  <div className='form-group'>
                    <label>
                      How much was received?
                      <input id='amountReceived' type='text' onChange={ this.handleAmountReceived } />
                    </label>
                  </div>
                </form>
              </div>
              <div className='card-footer'>
                <button className='btn btn-primary btn-block' onClick={ this.handleClick }>Calculate</button>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='alert alert-success text-center'>The total change due is ${ this.state.changeDue }</h5>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3'>
                      <h5 className='card-title text-center'>Twenties</h5>
                      <p className='text-center'>{ this.state.twenties }</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3'>
                      <h5 className='card-title text-center'>Tens</h5>
                      <p className='text-center'>{ this.state.tens }</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3'>
                      <h5 className='card-title text-center'>Fives</h5>
                      <p className='text-center'>{ this.state.fives }</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3'>
                      <h5 className='card-title text-center'>Ones</h5>
                      <p className='text-center'>{ this.state.ones }</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3'>
                      <h5 className='card-title text-center'>Quarters</h5>
                      <p className='text-center'>{ this.state.quarters }</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3'>
                      <h5 className='card-title text-center'>Dimes</h5>
                      <p className='text-center'>{ this.state.dimes }</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3'>
                      <h5 className='card-title text-center'>Nickels</h5>
                      <p className='text-center'>{ this.state.nickels }</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3'>
                      <h5 className='card-title text-center'>Pennies</h5>
                      <p className='text-center'>{ this.state.pennies }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
