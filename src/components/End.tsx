import React from 'react'

function End() {
  return (
    <section className='text-center px-5 shadow-lg'>
        <div className='row d-flex pt-5'>
            <div className='col-12 col-md-6 col-lg-3 container text-start'>
                
                <h3>Medilab</h3>
                
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p>United States</p>
                <br></br>
                <strong><p>Phone:</p></strong><p> +1 5589 55488 55</p>
                <strong><p>Email:</p></strong><p> info@example.com</p>
                
            </div>
            
            <div className='col-12 col-md-6 col-lg-2 container text-start'>
                <h4 className='ml-5'>Useful Links</h4>
                <ul className=' mt-3'>
                    <li>
                        <i className="bi bi-chevron-right"></i> 
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right"></i> 
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right"></i>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right"></i>
                        <a href="#">Terms of service</a>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right"></i> 
                        <a href="#">Privacy policy</a>
                    </li>
                </ul>
            </div>
            <div className='col-12 col-md-6 col-lg-3 container text-start'>
                <h4 className='ml-5'>Our Services</h4>
                <ul className='mt-3'>
                    <li>
                        <i className="bi bi-chevron-right"></i> 
                        <a href="#">Web Design</a>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right"></i> 
                        <a href="#">Web Development</a>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right"></i>
                        <a href="#">Product Management</a>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right"></i>
                        <a href="#">Marketing</a>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right"></i> 
                        <a href="#">Graphic Design</a>
                    </li>
                </ul>
            </div>
            <div className='col-12 col-md-6 col-lg-4 text-start'>
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form className='mt-4'>
                    <input className='Eform pr-5' type="email" name="email"/>
                    <input className='Eform bg-primary' type='submit' value='Subscribe'/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default End