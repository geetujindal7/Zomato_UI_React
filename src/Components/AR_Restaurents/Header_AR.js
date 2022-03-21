import React from 'react';
import './AR_css.css';

function Header_AR() {
    return (

        <>
            <div className="header_image_AR" style={{ width: "100%" }}>
                <div>
                    <div className="header_top_AR">
                        <div>
                            <img className="zomato_image" src="https://b.zmtcdn.com/web/merchant/advertize/3d432595dac7d2bda0b4cc41f6afe6ef1564646824.png" alt="zom" />
                        </div>

                        <h2 className="prod">Products</h2>
                        <button className="loginb">Login</button>
                        <button className="create">Create Account</button>
                    </div>
                    <div>
                        <h3 className="headin">Register your restaurant on Zomato</h3>
                        <p className="headin_down">for free and get more customers!</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <button className="registr">Register your restaurant</button>
                        <button className="login_now">Restaurant already listed? login now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header_AR
