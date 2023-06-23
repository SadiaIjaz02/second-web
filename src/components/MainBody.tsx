import React from 'react'

function MainBody() {
  return (
    <div className="big-banner">
        <section className="d-flex">
            <div className="align-items-start bannerstyle">
            
            <h1 style={{color:"#0F155D"}}>Welcome to Medilab</h1>
            <h3 style={{color:"#0F155D", fontWeight:"normal"}}>We are team of talented designers making websites with Bootstrap</h3>
            <button className="btn btn-primary rounded-pill" style={{padding:"10px 40px", fontSize:"20px", marginTop:"50px"}}> Get Started</button>
            </div>
        </section>
    </div>
  )
}

export default MainBody