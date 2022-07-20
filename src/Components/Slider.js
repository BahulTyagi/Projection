import React from 'react'
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <>
    <div id="list-exLinkmple" className="list-group">
    <Link className="list-group-item list-group-item-Linkction col-lg-3  my-4" to="/Create"  role="button">CREATE TEAM</Link>
    <Link className="list-group-item list-group-item-Linkction  col-lg-3 my-4" to="/Join"  role="button">JOIN TEAM</Link>
    <Link className="list-group-item list-group-item-Linkction col-lg-3  my-4" to="/View" role="button">VIEW TEAM</Link>
  </div>
  </>
  )
}
