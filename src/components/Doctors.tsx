import React from 'react'

function Doctors() {
  return (
    <section className='wrapper container px-5'>
        <h2 className='text-primary-emphasis  text-center'>Doctors</h2>
        <div className="border-top my-4  text-center"></div>
        <p className=' text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        
        <div className='row mt-4'>

        <div className="col-12 col-md-6 shadow-lg p-5 docCard">
            <div className="d-flex align-items-start">
                <div className="doctorimg">
                    <img src="assets/doctors-1.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="pl-4">
                    <h4>Walter White</h4>
                    <span>Chief Medical Officer</span>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                    <div>
                    <a href=""><i className="bi bi-twitter socialIcon"></i></a>
                    <a><i className="bi bi-facebook socialIcon ml-2"></i></a>
                    <a><i className="bi bi-instagram socialIcon ml-2"></i></a>
                    <a><i className="bi bi-linkedin socialIcon ml-2"></i> </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12 col-md-6 shadow-lg p-5">
            <div className="d-flex align-items-start">
                <div className="doctorimg">
                    <img src="assets/doctors-2.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="pl-4">
                    <h4>Sarah Jhonson</h4>
                    <span>Anesthesiologist</span>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                    <div>
                    <a href=""><i className="bi bi-twitter socialIcon"></i></a>
                    <a><i className="bi bi-facebook socialIcon ml-2"></i></a>
                    <a><i className="bi bi-instagram socialIcon ml-2"></i></a>
                    <a><i className="bi bi-linkedin socialIcon ml-2"></i> </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12 col-md-6 shadow-lg p-5">
            <div className="d-flex align-items-start">
                <div className="doctorimg">
                    <img src="assets/doctors-3.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="pl-4">
                    <h4>William Anderson</h4>
                    <span>Cardiology</span>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                    <div>
                    <a href=""><i className="bi bi-twitter socialIcon"></i></a>
                    <a><i className="bi bi-facebook socialIcon ml-2"></i></a>
                    <a><i className="bi bi-instagram socialIcon ml-2"></i></a>
                    <a><i className="bi bi-linkedin socialIcon ml-2"></i> </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12 col-md-6 shadow-lg p-5">
            <div className="d-flex align-items-start">
                <div className="doctorimg">
                    <img src="assets/doctors-4.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="pl-4">
                    <h4>Amanda Jepson</h4>
                    <span>Neurosurgeon</span>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                    <div>
                    <a href=""><i className="bi bi-twitter socialIcon"></i></a>
                    <a><i className="bi bi-facebook socialIcon ml-2"></i></a>
                    <a><i className="bi bi-instagram socialIcon ml-2"></i></a>
                    <a><i className="bi bi-linkedin socialIcon ml-2"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
    </section>
  )
}

export default Doctors