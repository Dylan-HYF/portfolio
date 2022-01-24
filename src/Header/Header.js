import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <header>
        <ul className="menu-items">
          <li>
            <Link className="link" to="/">HOME.</Link>
          </li>
          <li>
            <Link className="link" to="/about">ABOUT.</Link>
          </li>
          <li>
            <Link className="link" to="/projects">PROJECTS.</Link>
          </li>
          <li>
            <Link className="link" to="/contact">CONTACT.</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
