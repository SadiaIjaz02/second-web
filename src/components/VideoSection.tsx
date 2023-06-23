import React from 'react'

function VideoSection() {
  return (
    <section className="wrapper d-flex ">
        
            <div className='row align-items-center'>
                <div className='col-12 col-md-5'>
                    <div className='image-container'>
                        <img className=" img-fluid aboutpic" src="assets/about.jpg" />
                    </div>
                </div>
            
                <div className="ml-5 col col-md-6">
                
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
                <div className="row icon-box">
                
                    <div className='col-1 myicon pt-3'>
                    <span className="rounded-circle border border-primary p-2">
                    <i className="bi bi-fingerprint"></i>
                    
                    </span>
                    
                    </div>
                    <div className='col'>
                    <h4><a>Lorem Ipsum</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                </div>
                <div className="row icon-box">
                    <div className='col-1 myicon  pt-3'>
                    <span className="rounded-circle border border-primary p-2">
                    
                    <i className="bi bi-gift"></i>
                    </span>
                    </div>
                    <div className='col'>
                    <h4><a>Lorem Ipsum</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                </div>
                <div className="row icon-box">
                    <div className='col-1 myicon  pt-3'>
                    <span className="rounded-circle border border-primary p-2">
                    
                        <i className="bi bi-flower2"></i>
                        </span>
                    </div>
                    <div className='col'>
                    <h4><a>Lorem Ipsum</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                </div>
                
                
                </div>
            
            </div>

        

    </section>
    
  )
}

export default VideoSection