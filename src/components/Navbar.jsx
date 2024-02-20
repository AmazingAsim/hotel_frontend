import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">Air Bnb</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="food">Food</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="rooms">Rooms</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="customers">Customers</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}