import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#0F155D', height: '45px' }}>
        <a className="navbar-brand" href="#">
            <img className="logo" alt="BootstrapMade" src="https://bootstrapmade.com/assets/img/logo.png" style={{ width: '300px', height: 'auto' }}/>
        
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            
            
            {/* <i className="fas fa-stream navbar-toggler-icon mt-10"></i> */}
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            
            <h2 style={{ textAlign: 'center' }}><a className="template-home text-white" href="https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/" title="Medilab Template Home Page">Medilab</a></h2>
            
            <a className="download" title="Download the Medilab Template"><svg className="icon icon-download" fill="currentColor"></svg> <span>Free Download</span></a>
            </div>
        </nav>

        <div className="navbar navbar-expand-lg navbar-light" style={{ width: 'auto', height: '10%' }}>
            <nav className="navbar navbar-expand-lg navbar-light container" aria-label="breadcrumb">
                <div className="contact-info d-flex align-items-center">
                    <div>
                        <i className="bi bi-envelope"></i> <a style={{marginLeft:"10px", marginRight: "20px"}}>contact@example.com</a>
                    </div>
                    <i className="bi bi-phone"></i>
                    <span>+1 5589 55488 55</span>
                </div>
            </nav>
        </div>







        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" style={{marginLeft:"70px", fontSize:"30px", fontWeight:"bold", color:"#0F155D"}}>Medilab</a>
            
            <div className="d-flex ms-auto">
            
        
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse float-right" id="navbarSupportedContent" >
                    

                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Department</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Doctors</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        
                        

                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                    

                </div>
                    
                <button type="button" className="btn btn-primary rounded-pill">Make an Appointment</button>
                
            </div>
        </nav>

        
    </div>
  )
}

export default Navbar