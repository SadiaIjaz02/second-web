import React from 'react'

function Appointment() {
  return (
    <section className='appoint'>
    <section className='text-center container px-5'>
        <h2 className='text-primary-emphasis'>Make an Appointment</h2>
        <div className="border-top my-4"></div>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="row">
            <div className="col-12 col-md-4">
                <input type="text" className="form-control" placeholder="Your Name"/>
            </div>
            <div className='col-12 col-md-4 mt-3 mt-md-0'>
            <input type="email" className="form-control" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
            </div>
            <div className="col-12 col-md-4 mt-3 mt-md-0">
                <input type="text" className="form-control" placeholder="Your Phone"/>
            </div>

            <div className="col-12 col-md-4 mt-3">
                <input type="text" className="form-control" placeholder="Appointment Date"/>
            </div>
            <div className="col-12 col-md-4 mt-3">
                <select className="form-select">
                    <option selected>Select Department </option>
                    <option value="1">Department 1</option>
                    <option value="2">Department 2</option>
                    <option value="3">Department 3</option>
                </select>
            </div>
            <div className="col-12 col-md-4 mt-3">
                <select className="form-select" >
                    <option selected>Select Doctor </option>
                    <option value="1">Doctor 1</option>
                    <option value="2">Doctor 2</option>
                    <option value="3">Doctor 3</option>
                </select>
            </div>
            <div className="form-group mt-3 mt-3">
                <textarea className="form-control" name="message" rows={4} placeholder="Message (Optional)"></textarea>
                <div className="validate"></div>
            </div>
            
        </div>
        <button type="button" className="btn btn-primary rounded-pill mt-2">Make an Appointment</button>
    </section>
    </section>
  )
}

export default Appointment