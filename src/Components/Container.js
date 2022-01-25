import React from 'react';
import Banner from './Banner';
import Bannerimage from './Bannerimage';
import Navbarcollapse from './Navbarcollapse';
import Navigation from './Navigation';
import '../App.css';


function Container() {

    function toggle(){
    
        const navToggleBtn = document.querySelector('.navbar-toggler');   
        const navCollapseDiv = document.querySelector('.navbar-collapse');
            
        navToggleBtn.addEventListener('click', () => {
            navCollapseDiv.classList.toggle('showNavbar');
            navToggleBtn.classList.toggle('showNavbar-toggler');
        });
        
        let resizeTimer;
        window.addEventListener('resize', () => {
            document.body.classList.add('resize-animation-stopper');
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                document.body.classList.remove('resize-animation-stopper');
            }, 400);
        });
        }
    
    return <div className='container'>
        <nav className='navbar' onClick={toggle}>
            <Navigation />
            <Navbarcollapse />
        </nav>
        
        <div className='banner'>
            <Banner />
            <Bannerimage />
        </div>
  </div>;
}

export default Container;
