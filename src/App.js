import React, { Component } from 'react'
import Homepage from './components/homepage.js'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    isLoading: true
  }

  componentDidMount() {
    // performing a GET request to '/api-end-point'
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      // console.log('request successful')
      // console.log(result.data[0].profileImage)
      this.setState({
        users: result.data
      })
      // let usersimg = this.state.users.map((user, i) => {
      //   // console.log(result.data[i].profileImage)
      // })
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 1000)
    })
    .catch(error => {
      // If unsuccessful, we notify users what went wrong
      console.log('ERROR: ', error)
      alert('There was an unexpected error. Please try again.')
    })
  }

  render() {
    return(
      <Homepage state={this.state}/>
    )
  }
}

export default App;
