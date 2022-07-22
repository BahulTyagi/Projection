import React from 'react'
import { useNavigate } from 'react-router-dom';


const View = () => {

    let navigate=useNavigate();


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
        <div className="container-fluid  mt-5 top:10px  shadow- mb-5  pd-3 bg-body rounded center  " >
        <div className="row row-cols-1 row-cols-md-3 g-4">

        <div div className="col">           
          </div>

    <div div className="col">
            <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '30rem' }}>
              <img src="./gg6.png" className="card-img-top" alt="" />
              <div className="card-body border-info mb-3 g-4 text-center text-bg-dark">
                <h1 className="card-title">VIEW TEAM</h1>
                <p className="card-text">Click here to view All Members</p>
                <button onClick={handleView} type="submit" className="btn btn-primary col-lg-9">VIEW</button>
              </div>
            </div>
          </div>

</div>
</div>


  )
}

export default View