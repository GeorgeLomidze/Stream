import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streamy
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header

// 933514257690-srtpjctpsrnq3mtcn8tlf7e53fo4eqic.apps.googleusercontent.com
