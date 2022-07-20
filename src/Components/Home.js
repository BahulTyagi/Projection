import React from 'react'

export default function Home() {
  return (
    <>
      <div className='container mt-5'>
        <h1><p className="text-info text-center mt-5 shadow-lg p-3 mb-5 bg-body rounded ">PROJECTION</p></h1>

        <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
          
          <div className='rounded mx-auto d-block  d-flex justify-content-center border border-light '>
            <img src='./gg.png' style={{ maxWidth: 800 }} alt="" />

            < div className='right_data mt-3' style={{ width: "100%" }}>
            <p className="text-info text-center fs-3 shadow-lg p-3 mb-5 bg-body rounded  text-bg-primary p-3">Collaborate seamlessly across teams and departments to gain visibility into the progress of your work. Keep everyone aligned with a platform they will enjoy using to ensure a smoother execution. </p> 
            </div>

          </div>
          
        </div>

      </div>
    </>
  )
}
