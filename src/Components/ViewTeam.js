import React from 'react'

const ViewTeam = () => {
    let data = localStorage.getItem('teamMem')
   let name=localStorage.getItem('names')
  return (
    <>
    <p className="shadow-lg p-3 mb-5 bg-body rounded text-center mt-5">
    <p>We are continously working on it.</p>
    <br />
    <p>Soon, you will be able to see all the Names of Team Members here.</p>
    <br />
    <p>Below are the Student ID's of the Students in your team</p>
    
    <div>{data}</div>

    <div>{name}</div>
</p>
    </>
  )
}

export default ViewTeam