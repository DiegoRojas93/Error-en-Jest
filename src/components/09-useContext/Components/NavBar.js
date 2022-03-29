import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/`}>Navbar</Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <NavLink
              className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}
              aria-current="page"
              to={`/`}
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}
              to={`/login`}
            >
              Login
            </NavLink>

            <NavLink
              className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}
              to={`/about`}
            >
              About
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  )
}
