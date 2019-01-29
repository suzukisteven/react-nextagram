import React from 'react'
import axios from 'axios'
import Loading from '../components/loading'
import MainContainer from '../components/maincontainer'
import Posts from '../components/posts'
import Sidebar from '../components/sidebar'
import UserImages from '../components/UserImages'
import { Link } from 'react-router-dom'

class UserProfilePage extends React.Component {
  state = {
    user: [],
    isLoading: true
  }

  componentDidMount(){
    let userId = this.props.match.params.id
    let mainContent = this.state.isLoading
      ? <Loading />
      : <MainContainer/>
    console.log(userId)

    axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
    .then(result => {
      console.log('request successful')
      // console.log(result.data[0].profileImage)
      this.setState({
        user: result.data
      })
      console.log(this.state.user)
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
    let images = this.state.user
    let userImages = images.map (image => {
      return(
        <img src={image} alt="" style={{width: '250px'}}/>
      )
    })
    return(
      <div>
        <Link className="sidebarlink nav-item text-dark text-center m-0 p-3" to="/">Back to Home</Link>
        <h1>User {this.props.match.params.id}'s Profile Page</h1>
        { userImages }
      </div>
    )
  }
}

export default UserProfilePage
