import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export const About = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>About</h1>
      <hr />

      <pre>
        { JSON.stringify( user, null, 3) }
      </pre>

      <button className='btn btn-primary' onClick={ setUser({}) }>
        Login
      </button>
    </>
  )
}
