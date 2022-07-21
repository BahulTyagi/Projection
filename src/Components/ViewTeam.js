import React from 'react'

const ViewTeam = () => {
    let data = localStorage.getItem('team')

  return (
    <div>{data}</div>
  )
}

export default ViewTeam