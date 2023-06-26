import React from 'react'

function counts() {
  return (
    <section className='wrapper'>
    <div className='counts'>
        <div className='d-flex justify-content-center'>
        <div className='row container'>
            <div className="col-12 col-lg-3 col-md-6 mb-4 mb-lg-auto">
                <div className="count-box">
                    <i className="bi bi-person"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="0" className="purecounter">85</span>
                    <p>Doctors</p>
                </div>
            </div>
            <div className='col-12 col-lg-3 col-md-6 mb-4 mb-lg-auto'>
                <div className="count-box">
                    <i className="bi bi-hospital"></i>
                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="0">85</span>
                    <p>Departments</p>
                </div>
            </div>
            <div className='col-12 col-lg-3 col-md-6 mb-4 mb-lg-auto'>
                <div className="count-box">
                    <i className="bi bi-funnel"></i>
                    <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="0">15</span>
                    <p>Research Labs</p>
                </div>
            </div>
            <div className='col-12 col-lg-3 col-md-6'>
                <div className="count-box">
                    <i className="bi bi-award"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="0">150</span>
                    <p>Awards</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default counts