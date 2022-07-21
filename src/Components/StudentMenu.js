import React from 'react'

import { useNavigate } from 'react-router-dom'

const StudentMenu = () => {

    let navigate=useNavigate();


    const handleCreate=()=>{
        console.log(localStorage.token)
        navigate("/CreateTeam");
    }


    const handleJoin=()=>{
        console.log("Join Button clicked")
        navigate("/Create");
    }

    const handleView=()=>{
        console.log("View Button Clicked")
        navigate("/Create");
    }

    return (
        <>
            <button type="button" className="btn btn-lg btn-primary mx-5 my-5" onClick={handleCreate}>Create Team</button>
            <button type="button" className="btn btn-lg btn-secondary mx-5" onClick={handleJoin}>Join Team</button>
            <button type="button" className="btn btn-lg btn-success mx-5" onClick={handleView}>My Team</button>
        </>
    )
}

export default StudentMenu