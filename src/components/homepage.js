import React from 'react';
import { Row, Col } from 'reactstrap'
import MainContainer from './maincontainer.js'
import Sidebar from './sidebar.js'
import Posts from './posts.js'
import Loading from './loading.js'
import UserImages from './UserImages'

const homepage = (props) => {
  const { users } = props.state
  let mainContent = props.state.isLoading
    ? <Loading />
    : <MainContainer contents={<Posts users={ users } />} />
  return (
    <div className="App">
      <Row>
        <Col xs='3' className='p-0'>
          <Sidebar />
        </Col>
        <Col xs='9' className='p-0'>
          {mainContent}
        </Col>
      </Row>
    </div>
  );
}

export default homepage
