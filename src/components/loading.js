import React from 'react'
import loadingSpinner from '../images/loading.gif'

const loading = (props) => {
  return(
    <div>
      <img src={ loadingSpinner } alt="loading spinner" style={ { width: `${props.size}px`} }/>
    </div>
  )
}

export default loading
