import React from 'react'

export const data=[
    {label:"Why Choose Medilab?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis."},
    {label:"Corporis voluptates sit", content:"Corporis voluptates sit"},
    {label:"Ullamco laboris ladore pan", content:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"},
    {label:"Labore consequatur", content:"Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"}
]

const Cards = () => {
  return (
    <div className='d-flex align-items-center justify-content-center gap-4 negative-margin' >
        <div className="my-card">
                <h3>
                    {data[0].label}
                </h3>
                <p>
                    {data[0].content}
                </p>

        </div>
        <div className="my-card2">
                <h3>
                    {data[1].label}
                </h3>
                <p>
                    {data[1].content}
                </p>
        </div>
        <div className="my-card2">
                <h3>
                    {data[2].label}
                </h3>
                <p>
                    {data[2].content}
                </p>
        </div>
        <div className="my-card2">
                <h3>
                    {data[3].label}
                </h3>
                <p>
                    {data[3].content}
                </p>
            </div>

{/*         
            <div className="my-card bg-primary" >
                <h3>
                    {data[0].label}
                </h3>
                <p>
                    {data[0].content}
                </p>
            </div>
            <div className="card2">
                <h3>
                    {data[0].label}
                </h3>
                <p>
                    {data[0].content}
                </p>
            </div>
            <div style={{backgroundColor:'white', width:"20%", margin:"50px", color:"black", padding:"20px", textAlign:"left", borderRadius:"10px"}}>
                <h3>
                    {data[0].label}
                </h3>
                <p>
                    {data[0].content}
                </p>
            </div>
            <div style={{backgroundColor:'white', width:"20%", margin:"50px", color:"black", padding:"20px", textAlign:"left", borderRadius:"10px"}}>
                <h3>
                    {data[0].label}
                </h3>
                <p>
                    {data[0].content}
                </p>
            </div> */}

       
        
    </div>
  )
}

export default Cards