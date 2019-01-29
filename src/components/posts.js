import React from 'react';
import { Card, CardImg, CardDeck, CardText, CardBody,
CardTitle, CardSubtitle, Button, Row, Col, CardHeader } from 'reactstrap';
import image from '../images/image.png'
import UserImages from './UserImages.js'

const posts = (props) => {
  let { users } = props
  let userCards = users.map(user => {
    return (
      <Col md='4'>
        <Card className="mt-3">
          <CardHeader>{user.username}</CardHeader>
          <CardBody>
            <CardTitle>User ID: {user.id}</CardTitle>
            <CardSubtitle>Sub-Title</CardSubtitle>
            <CardText>Card Text</CardText>
            <UserImages userId={user.id}/>
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
