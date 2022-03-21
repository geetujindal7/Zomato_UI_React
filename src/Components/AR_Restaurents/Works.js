import React from 'react'

function Works() {
    return (
        <>
            <div className="Works_img" style={{ width: "100%", marginBottom: "300px" }}>
                <div>
                    <div className="works_a">

                        <div>
                            <h2 className="works_b">How it works?</h2>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className="works_card">
                            <div>
                                <img className="card_image" src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png" alt="img1" />
                                <h2 className="card_1_a">Step 1</h2>
                                <p className="card_1_b">Create your page on Zomato</p>
                                <p className="card_1_c">Help users discover your place by creating a listing on Zomato</p>
                            </div>

                        </div>
                        <div className="works_card_1">
                            <div>
                                <img className="card_image" src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png" alt="img1" />
                                <h2 className="card_1_a">Step 2</h2>
                                <p className="card_1_b">Register for online ordering</p>
                                <p className="card_1_c">And deliver orders to millions of customers with ease</p>
                            </div>

                        </div>
                        <div className="works_card_1">
                            <div>
                                <img className="card_image" src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png" alt="img1" />
                                <h2 className="card_1_a">Step 3</h2>
                                <p className="card_1_b">Start receiving orders online</p>
                                <p className="card_1_c">Manage orders on our partner app, web dashboard or API partners</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works;