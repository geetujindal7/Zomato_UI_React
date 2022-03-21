import React from 'react'
import "./AR_css.css"

function Products() {
    return (
        <div >
            <h1 style={{ textAlign: "center", marginTop: "80px" }}>Our products</h1>
            <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "20%", marginRight: "10%"}}>
                
                    <div className="Product_card">
                        
                            <img className="product_image" src="https://www.zomato.com/partner-with-us/static/media/ZomatoAdvertise.31195a83.svg" alt="img1" />
                            <h2 className="product_1_a">Advertise</h2>
                            <p className="product_1_b">A free app that allows you to manage your Zomato listing directly from your smartphone
</p>
                            <p className="product_1_c">Learn More</p>
                      
                        
                </div>
                <div className="Product_card">
                        
                        <img className="product_image" src="https://www.zomato.com/partner-with-us/static/media/ZomatoAdvertise.31195a83.svg" alt="img1" />
                        <h2 className="product_1_a">Events</h2>
                        <p className="product_1_b">Partner with us for India’s grandest food & entertainment carnival - “Zomaland”...
</p>
                        <p className="product_1_c">Learn More</p>
                  
                    
            </div>
            <div className="Product_card">
                        
                        <img className="product_image" src="https://www.zomato.com/partner-with-us/static/media/ZomatoAdvertise.31195a83.svg" alt="img1" />
                        <h2 className="product_1_a">Hyperpure</h2>
                        <p className="product_1_b">Supplies fresh and high quality ingredients to restaurant for serving delicious meals...</p>
                        <p className="product_1_c">Learn More</p>
                  
                    
            </div>
            </div>
            </div>
    )
}

export default Products;
