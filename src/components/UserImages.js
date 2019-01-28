import React from 'react'

const userImages = () => {
  const { users } = props.state
  componentDidMount() {
    // performing a GET request to '/api-end-point'
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      console.log('request successful')
      this.setState({
        users: result.data,
      })
      console.log(result.data)
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
}

export default userImages
