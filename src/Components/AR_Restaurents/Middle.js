import React from 'react'

function Middle() {
    return (
        <div style={{width:"100%"}}>
            <div>
                <h2 className="middle_a">Why should you partner with Zomato?</h2>
                <p className="middle_b">Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
            </div>
            <div style={{display:"flex", width:"100%"}}>
            <div className="card_middle">
            <h1 className="middle_card">500+ cities</h1>
            <p className="middle_card_p">in India</p>
                
            </div>
            <div className="card_middle_2">
            <h1 className="middle_card">2.5 lakhs+</h1>
            <p className="middle_card_p">restaurant listings</p>
                
            </div>
            
            <div className="card_middle_2">
            <h1 className="middle_card">4 crore+</h1>
            <p className="middle_card_p">monthly orders</p>
                
            </div>
            
            </div>
        </div>
    )
}

export default Middle
