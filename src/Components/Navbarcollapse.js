import React from 'react';

function Navbarcollapse() {
   
    return <div className='navbar-collapse'>
      <ul className = "navbar-nav">
                            <li className = "nav-item">
                                <a href = "#" className = "nav-link">Home</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#" className = "nav-link">Service</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#" className = "nav-link">Team</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#" className = "nav-link">Blog</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#" className = "nav-link">Contact</a>
                            </li>
                        </ul>

                        <div className = "header-btns">
                            <a href = "#" className = "btn btn-login">Log in</a>
                            <a href = "#" className = "btn btn-start">Getting Started</a>
                        </div>
        
  </div>;
}

export default Navbarcollapse;
