import React from 'react'

export const data=[
    {label:"Why Choose Medilab?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis."},
    
    {label:"Corporis voluptates sit", content:"Corporis voluptates sit"},
    {label:"Ullamco laboris ladore pan", content:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"},
    {label:"Labore consequatur", content:"Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"}
]

const Cards = () => {
  return (
    <div className='container d-flex align-items-center justify-content-center negative-margin' >
        <div className='row gap-4'>
            <div className='col-12 col-md-7 col-lg-4'>

                <div className="my-card p-5">
                    <h1>
                        {data[0].label}
                    </h1>
                    <p>
                        {data[0].content}
                    </p>
                    
                    <div className="text-center p-3">
                        <button className="btn bg-white rounded-pill">
                        Learn More
                        <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>

                </div>
            </div>
            
            <div className='col' >
                <div className='row gap-4  py-5'>
                    
                    <div className="text-center col-12 col-md-12 col-lg-3 my-card2 shadow-lg">
                            <i className="bi bi-receipt myicon"></i>
                            <h3>
                                {data[1].label}
                            </h3>
                            <p>
                                {data[1].content}
                            </p>
                    </div>
                    <div className=" text-center col-12 col-md-12 col-lg-3 my-card2 shadow-lg">
                            <i className="bi bi-box myicon"></i>
                            <h3>
                                {data[2].label}
                            </h3>
                            <p>
                                {data[2].content}
                            </p>
                    </div>
                    <div className=" text-center col-12 col-md-12 col-lg-3 my-card2 shadow-lg">
                            <i className="bi bi-images myicon"></i>
                            <h3>
                                {data[3].label}
                            </h3>
                            <p>
                                {data[3].content}
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards