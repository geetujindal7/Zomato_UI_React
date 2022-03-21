import React from 'react'

function Freq() {
    return (
        <div style={{marginLeft:"20%", marginRight:"20%" , marginBottom:"100px"}}>
            <h1 style={{marginLeft:"30%", color:"rgb(54, 54, 54)", marginBottom:"30px"}}> Frequently asked questions</h1>
            <div className="freq_card">
            <h5 style={{marginLeft:"30px", marginTop:"25px", color:"rgb(28, 28, 28)", fontSize:"20px", fontWeight:"400"}} >What will Zomato charge me for creating a page on its platform?</h5>
            </div>
            <div className="freq_card" style={{marginTop:"20px"}}>
            <h5  style={{marginLeft:"30px", marginTop:"25px", color:"rgb(28, 28, 28)", fontSize:"20px", fontWeight:"400"}} >What all documents are required for registering on online ordering?</h5>
            </div>
            <div className="freq_card" style={{marginTop:"20px"}}>
            <h5 style={{marginLeft:"30px", marginTop:"25px", color:"rgb(28, 28, 28)", fontSize:"20px", fontWeight:"400"}}  >I have a large fleet of delivery boys, why should I use Zomato’s delivery service?</h5>
            </div>
            <div className="freq_card" style={{marginTop:"20px"}}>
            <h5 style={{marginLeft:"30px", marginTop:"25px", color:"rgb(28, 28, 28)", fontSize:"20px", fontWeight:"400"}}  >What happens if the average order value of Zomato orders is very low</h5>
            </div>
        </div>
    )
}

export default Freq
