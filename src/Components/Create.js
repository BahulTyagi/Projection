import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export default function Create() {

  let navigate=useNavigate();

  const [teamId, setTeamId] = useState("")

  const handleChange=(e)=>{
      setTeamId(e.target.value);
  }

  const handleClick= async (e)=>{
      e.preventDefault();

      const token=localStorage.getItem('token')
      const response = await fetch("http://localhost:5000/api/auth/join", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':token

        },
        body: JSON.stringify({ Tid: teamId})
      });

      const json = await response.json();
      if(json.success){
      alert('You are added into the team..!')
        setTeamId("");
      }
  }

  const handleView= async(e)=>{
    e.preventDefault();

    const token=localStorage.getItem('token')
    const response = await fetch("http://localhost:5000/api/auth/view", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':token
        }
      });

      const json= await response.json();
      console.log(json.success)
      console.log(json.team)
      if(json.success){
        // let data=JSON.stringify(json.team.Sid);
        // console.log(data)
        // localStorage.setItem('team', data)

        let jData=json.team.Sid;

        let responses=[]

        for(var i=0; i<jData.length; i++){
          // console.log(jData[i]);
        const response = await fetch("http://localhost:5000/api/auth/find", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'sid': jData[i]
        }
      });
        responses.push(response)
      // const data=await response.json();
      // console.log(data.student.name);
        }

        let names=[]

        for(var j=0; j<responses.length; j++){
          let data=await responses[j].json();
          names[j]=data.student.name;
        }


        localStorage.setItem('names', names)
        localStorage.setItem('teamMem', jData)
      
        navigate('/ViewTeam');
      }
      else{
        alert('Join a Team to view members')
      }
    
  }

  return (
    <>
      <div className="container-fluid  mt-1 top:10px  shadow- mb-1  pd-3 bg-body rounded center  " >
        <div className="row row-cols-1 row-cols-md-3 g-4">

          {/* <div div className="col">
            <div className="card h-100" style={{ width: '30rem' }}>
              <img src="./p1.webp" className="card-img-top" alt="" />
              <div className="card-body border-info mb-3 g-4 text-center text-bg-dark">
                <h1 className="card-title">CREATE TEAM</h1>
                <p className="card-text">Click on the Button Below to Generate unique Id.</p>
                <div className="form-group">
                  <textarea className="form-control-sm" id="textarea" rows="2" col="6" placeholder='sampleid:123467889'></textarea>
                </div>
                <a href="#" className="btn btn-primary">GENERATE</a>
              </div>
            </div>
          </div> */}

          <div div className="col">           
          </div>

          <div div className="col">
            <div className="card h-100 " style={{ width: '30rem' }}>
              <img src="./gg3.png" className="card-img-top" alt="" />
              <div className="card-body border-info mb-3 g-4 text-center text-bg-dark">
                <h1 className="card-title">JOIN TEAM</h1>
                <p className="card-text">Enter a TEAM ID to join a Team.</p>
                <div className="form-group">
                  <textarea className="form-control-sm" id="textarea" rows="1" col="6" placeholder='TEAM ID HERE' name="teamid" value={teamId} onChange={handleChange}></textarea>
                </div>
                <br />
                <button onClick={handleClick} type="submit" className="btn btn-primary col-lg-3">JOIN</button>
               <br />
               <br />
               <p>Contact your Team Lead for a Team ID</p>
                <p>Note: Once you join a team, you will not be allowed to join any other team</p>
              </div>
            </div>
          </div>

          {/* <div div className="col">
            <div className="card h-100" style={{ width: '30rem' }}>
              <img src="./gg6.png" className="card-img-top" alt="" />
              <div className="card-body border-info mb-3 g-4 text-center text-bg-dark">
                <h1 className="card-title">VIEW TEAM</h1>
                <p className="card-text">Click here to view All Members</p>
                <button onClick={handleView} type="submit" className="btn btn-primary col-lg-9">VIEW</button>
              </div>
            </div>
          </div> */}



        </div>
      </div>

    </>

  )
}
