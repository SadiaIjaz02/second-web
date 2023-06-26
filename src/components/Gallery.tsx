import React from 'react'

function Gallery() {
  return (
    <section className='text-center pt-5 px-2'>
        <div className='container'>
        <h2 className='text-primary-emphasis'>Gallery</h2>
        <div className="border-top my-4"></div>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
    
        <div className='row px-4'>
        <div className="col col-md-4 col-lg-3 p-1">
            <img className='img-fluid' src="assets/gallery/gallery-1.jpg"/>

        </div>
        <div className="col col-md-4 col-lg-3 p-1">
            <img className='img-fluid' src="assets/gallery/gallery-2.jpg"/>

        </div>
        <div className="col col-md-4 col-lg-3 p-1">
            <img className='img-fluid' src="assets/gallery/gallery-3.jpg"/>

        </div>
        <div className="col col-md-4 col-lg-3 p-1">
            <img className='img-fluid' src="assets/gallery/gallery-4.jpg"/>

        </div>
        <div className="col col-md-4 col-lg-3 p-1">
            <img className='img-fluid' src="assets/gallery/gallery-5.jpg"/>

        </div>
        <div className="col col-md-4 col-lg-3 p-1">
            <img className='img-fluid' src="assets/gallery/gallery-6.jpg"/>

        </div>
        <div className="col col-md-4 col-lg-3 p-1">
            <img className='img-fluid' src="assets/gallery/gallery-7.jpg"/>

        </div>
        <div className="col col-md-4 col-lg-3 p-1">
            <img className='img-fluid' src="assets/gallery/gallery-8.jpg"/>

        </div>
        </div>
    </section>
  )
}

export default Gallery