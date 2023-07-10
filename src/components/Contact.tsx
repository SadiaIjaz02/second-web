import React from 'react'

function Contact() {
  return (
    <section className='text-center container p-5'>
        <h2 className='text-primary-emphasis'>Contact</h2>
    <div className="border-top my-4"></div>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

        <div className="row">
            <div className='col-5'>
                <div className="info">
                    <div className="address d-flex">
                        <i className="bi bi-geo-alt cicon"></i>
                        <div>
                        <h4>Location:</h4>
                        <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>

                    <div className="email d-flex">
                        <i className="bi bi-envelope cicon"></i>
                        <div>
                        <h4>Email:</h4>
                        <p>info@example.com</p>
                        </div>
                    </div>

                    <div className="phone d-flex">
                        <i className="bi bi-phone cicon"></i>
                        <div className=''>
                        <h4>Call:</h4>
                        <p>+1 5589 55488 55s</p>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className='col'>
                <div className='col'>
                    <div className='row'>
                        <div className="col-12 col-md-6 mt-3">
                            <input type="text" className="form-control" placeholder="Your Name"/>
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <input type="text" className="form-control" placeholder="Your Email"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <input type="text" className="form-control" placeholder="Subject"/>
                </div>
                <div className="col-12 form-group mt-3 mt-3">
                    <textarea className="form-control" name="message" rows={4} placeholder="Message (Optional)"></textarea>
                <div className="validate"></div>

                <button type="button" className="btn btn-primary rounded-pill mt-4 px-4">Send Message</button>

            </div>
        </div>
    </div>

    </section>
  )
}

export default Contact