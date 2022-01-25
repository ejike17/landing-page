import React from 'react';


function Banner() {
    return <div className = "banner-left">
                        <h1 className = "banner-title">Grow your business with <span>Ejike's Web Dev Team</span></h1>
                        <p className = "banner-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla maiores tenetur omnis harum quaerat dolor dicta necessitatibus officiis non.</p>
                        <form className = "header-form">
                            <div className = "form-item">
                                <input type = "email" className = "form-control" placeholder="Email Address" />
                                <button type = "submit" className = "submit-btn">Learn More</button>
                            </div>
                        </form>

                        <ul className = "social-links">
                            <li>
                                <a href = "#"><i className = "fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href = "#"><i className = "fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href = "#"><i className = "fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href = "#"><i className = "fab fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href = "#"><i className = "fab fa-whatsapp"></i></a>
                            </li>
                        </ul>
        </div>
 
}

export default Banner;
