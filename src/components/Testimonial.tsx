import React from 'react'


function Testimonial() {
  return (
    <section className='text-center container p-5 mt-5'>
    <div className='row '>
      <div className='col-6'>
          <div className="row bg-primary">
            <div className='col-1'>
            <img src="assets/testimonials/testimonials-4.jpg" className="Timg" alt=""/>
            </div>
            <div className='col text-start'>
            <h3>Matt Brandon</h3>
            <h5>Freelancer</h5>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            </div>
          </div>
      </div>
    </div>

    </section>


  )
}

export default Testimonial