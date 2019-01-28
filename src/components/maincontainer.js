import React from 'react';
// import Posts from './posts.js'

const topNav = (props) => {
  let posts = props.contents
  return(
      <div className="w-100">
        {posts}
      </div>
  )
}

export default topNav;
