import React from 'react'
import loadingSpinner from '../images/loading.gif'

const loading = () => {
  return(
    <div className="w-100">
      <img src={ loadingSpinner } alt="loading spinner"/>
    </div>
  )
}

export default loading
