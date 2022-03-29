// './src/Routers/pages/Home.js'

import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export const Home = () => {

  const { user } = useContext(UserContext)

  return (
    <>
      <h1>Home</h1>
      <hr />

      <pre>
        { JSON.stringify( user, null, 3) }
      </pre>
    </>
  )
}
