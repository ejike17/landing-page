import React from 'react';


function Navigation() {
   
    

    return <div className ="brand-and-toggler">
                        <a href = "/" className = "navbar-brand">EjikeCreate</a>
                        <button className = "navbar-toggler" type = "button">
                            <span>
                                <i className = "fas fa-bars"></i>
                            </span>
                        </button>
  </div>;
}

export default Navigation;
