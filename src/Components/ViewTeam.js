import React from 'react'

const ViewTeam = () => {
    let data = localStorage.getItem('teamMem')
    console.log(data);
  return (
    <>
    <p>We are continously working on it.</p>
    <br />
    <p>Soon, you will be able to see all the Names of Team Members here.</p>
    <br />
    <p>Below are the Student ID's of the Students in your team</p>
    
    <div>{data}</div>

    </>
  )
}

export default ViewTeam