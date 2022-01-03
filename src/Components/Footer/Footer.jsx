import React from 'react';
import './Footer.css'
const footer = ({arr}) => {
    console.log(arr)
    return (
    <div>
        

        <footer class="footer-distributed">
    
          <div class="footer-right">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
          </div>
    
          <div class="footer-left">
    
            <p class="footer-links">
              <a class="link-1" href="#">Home</a>
                
              <a href="#">AboutMyCats</a>
    
              <a href="#">Meow</a>
    
              <a href="#">Contact</a>
            </p>
    
            <p>Sezim Ydyrysova &copy; 2022</p>
          </div>
    
        </footer>
    </div>
    
 
    );
};

export default footer;