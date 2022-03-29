// './src/Routers/pages/Login.js'

import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export const Login = () => {

  const { setUser } = useContext(UserContext)

  const handleClick = () => setUser({
      id: 1,
      name: 'Diego',
      email: 'xxx@gmail.com'
  })

  return (
    <>
      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary' onClick={ handleClick }>
        Login
      </button>
    </>
  )
}
