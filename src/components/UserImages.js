import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import Loading from './loading.js'
import Image from "react-graceful-image";
import placeholder from "../images/placeholder.svg"

class UserImages extends Component {
  state = {
    isLoading: true,
    images: []
  }

  componentDidMount() {
    let userId = this.props.userId;
    // performing a GET request to '/api-end-point'
    axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
    .then(result => {
      this.setState({
        images: result.data,
      })
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
    let {images} = this.state;
    let imageContainer = this.state.isLoading

    ? <div>
      <Image
          src={ placeholder }
          width="250"
          height="250"
          alt="placeholder loadings"
        /><br/>
      </div>

    : <div>
        <img className="mb-3" src={images[0]} style={{width:'250px'}} alt="user profile image"/><br/>
      </div>
      return(
        <div>
          { imageContainer }
        </div>
      )
  }
}

export default UserImages
