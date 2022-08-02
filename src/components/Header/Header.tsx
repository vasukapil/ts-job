import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="Header__navbar">

        <div className="Header__logo">
        <img src="/Images/logo.png" className="Header__logo--img"/>
        </div>
        <div className="Header__items">
        <ul className="nav__items">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Cart</li>
        </ul>
        </div>

    </div>
  )
}

export default Header