import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Home from './components/Home.js';
import F1 from './components/F1.js';
import F2 from './components/F2.js';
import F3 from './components/F3.js';
import Confirmation from './components/Confirmation.js';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page:0,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZipcode: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.back = this.back.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleInput(event){
    let propName = event.target.name;
    this.setState({
      [propName]: event.target.value
    })
  }
  handleClick(e){
    e.preventDefault()
    this.setState({
      page: this.state.page + 1
    })
  }
  back(){
    console.log('HERE')
    this.setState({
      page: 0,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZipcode: ''
    })
  }
  submit(){
    let query = this.state;
    console.log('QUERY',query)
    axios.post('/checkout',query).then(()=> this.back())
  }

  render(){
    let currentPage;
    this.state.page === 0 ? currentPage = <Home handleClick={this.handleClick}/> :
    this.state.page === 1 ? currentPage = <F1 handleInput={this.handleInput} handleClick={this.handleClick}/> :
    this.state.page === 2 ? currentPage = <F2 handleInput={this.handleInput} handleClick={this.handleClick}/> :
    this.state.page === 3 ? currentPage = <F3 handleInput={this.handleInput} handleClick={this.handleClick} /> :
    this.state.page === 4 ? currentPage = <Confirmation info={this.state} handleSubmit={this.submit}/> :
    currentPage = <Home />
    return currentPage;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));