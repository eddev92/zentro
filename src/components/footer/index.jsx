import React, { Component } from 'react';
import './../../styles/footer.css';

const Footer = () => {
    return (
      <footer id="copyright" className="wow fadeIn BGprime" data-wow-offset="10" data-wow-delay="10ms">
        <div className="container text-center"> 
          <div className="row">
          
            <p style={{margin: 'auto', fontSize: 13}}>zentro.pe &copy; 2018. Todo los derechos reservados. Realizado por <a target="_blank"><strong style={{color: 'black', fontWeight: 700}}>E.Llanca</strong></a></p>
            
          </div>
        </div>
      </footer>
    )
}
export default Footer;
