import React from 'react'


export default function Create() {
  return (
    <>
      <div className="container-fluid  mt-5 top:10px  shadow- mb-5  pd-3 bg-body rounded center  " >
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div div className="col">
            <div className="card h-100" style={{ width: '30rem' }}>
              <img src="./p1.webp" className="card-img-top" alt="" />
              <div className="card-body border-info mb-3 g-4 text-center text-bg-dark">
                <h1 className="card-title">CREATE TEAM</h1>
                <p className="card-text">Click on the Button Below
                  to Generate unique Id.</p>
                <div className="form-group">

                  <textarea className="form-control-sm" id="textarea" rows="2" col="6" placeholder='sampleid:123467889'></textarea>
                </div>
                <a href="#" className="btn btn-primary">GENERATE</a>




              </div>
            </div>
          </div>
          <div div className="col">
            <div className="card h-100" style={{ width: '30rem' }}>
              <img src="./gg3.png" className="card-img-top" alt="" />
              <div className="card-body border-info mb-3 g-4 text-center text-bg-dark">
                <h1 className="card-title">JOIN TEAM</h1>
                <p className="card-text">Accept the Invite.</p>
                <div className="form-group">

                  <textarea className="form-control-sm" id="textarea" rows="2" col="6" placeholder='sampleid:123467889'></textarea>
                </div>
                <a href="#" className="btn btn-primary">GENERATE</a>
              </div>
            </div>
          </div>

          <div div className="col">
            <div className="card h-100" style={{ width: '30rem' }}>
              <img src="./gg6.png" className="card-img-top" alt="" />
              <div className="card-body border-info mb-3 g-4 text-center text-bg-dark">
                <h1 className="card-title">VIEW TEAM</h1>
                <p className="card-text">Click here to view Projects</p>
                
                <a href="#" className="btn btn-primary">GENERATE</a>


              </div>



            </div>
          </div>
        </div>
      </div>

    </>

  )
}
