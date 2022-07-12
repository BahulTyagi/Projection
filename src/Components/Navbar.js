import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">Projection</Link>
      <form className="d-flex" role="search">
      <Link className="btn btn-primary mx-3" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
      </form>
    </div>
  </nav>
  )
}
export default Navbar