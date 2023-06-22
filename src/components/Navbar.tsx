import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#0F155D', height: '45px' }}>
        <a className="navbar-brand" href="#">
            <img className="logo" alt="BootstrapMade" src="https://bootstrapmade.com/assets/img/logo.png" style={{ width: '300px', height: 'auto' }}/>
        
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            
            <h2 style={{ textAlign: 'center' }}><a className="template-home text-white" href="https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/" title="Medilab Template Home Page">Medilab</a></h2>
            
            <a className="download" title="Download the Medilab Template"><svg className="icon icon-download" fill="currentColor"></svg> <span>Free Download</span></a>
            </div>
        </nav>

        <div className="navbar navbar-expand-lg navbar-light" style={{ width: 'auto', height: '10%' }}>
            <nav className="navbar navbar-expand-lg navbar-light container" aria-label="breadcrumb">
                <div className="contact-info d-flex align-items-center">
                    
                    <div style={{justifyContent:'space-between'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        <i className="bi bi-envelope"></i> <a style={{marginLeft:"10px", marginRight: "20px"}}>contact@example.com</a>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <span style={{marginLeft:"10px"}}>+1 5589 55488 55</span>
                </div>
            </nav>
        </div>





        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" style={{marginLeft:"70px", fontSize:"30px", fontWeight:"bold", color:"#0F155D"}}>Medilab</a>
            

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
                

                
                
                <div>
                    <button type="button" className="btn btn-primary rounded-pill">Make an Appointment</button>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar