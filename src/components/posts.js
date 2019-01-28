import React from 'react';
import { Card, CardImg, CardDeck, CardText, CardBody,
CardTitle, CardSubtitle, Button, Row, Col, CardHeader } from 'reactstrap';
import image from '../images/image.png'

const posts = (props) => {
  let users = props.users
  let userCards = users.map(user => {
    return (
      <Col md='4'>
        <Card className="mt-3">
          <CardHeader>{user.username}</CardHeader>
          <CardBody>
            <CardTitle>User ID: {user.id}</CardTitle>
            <CardSubtitle>Sub-Title</CardSubtitle>
            <CardText>Card Text</CardText>
            <img className="mb-3" src={user.profileImage} style={{width:'250px'}} alt="user profile image"/><br/>
            <Button outline color="primary">Follow</Button>
          </CardBody>
        </Card>
      </Col>
    )
  })

  return (
    <div>
      <Row className='m-0'>
        {userCards}
      </Row>
    </div>
  )
}

export default posts
