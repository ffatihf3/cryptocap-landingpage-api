import React from 'react'
import './Footer.css'
import {FaInstagram, FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>

        <div className="footer-main">

          <div className="left">
            
              <h5>Crypto<span className='primary'>Cap</span></h5>

              <div className="copyright">
                <div className="social-media">
                  <div className="icon">
                    <FaInstagram size={25} style={{color: '#b6b6b6'}}/>
                  </div>

                  <div class="icon">
                    <FaFacebook size={25} style={{color: '#b6b6b6'}}/>
                  </div>

                  <div class="icon">
                    <FaTwitter size={25} style={{color: '#b6b6b6'}}/>
                  </div>

                  <div class="icon">
                    <FaYoutube size={25} style={{color: '#b6b6b6'}}/>
                  </div>
                </div>
                <p>2023 CoinMarketCap. All rights reserved</p> 
              </div>

          </div>

          <div className="right1">
            <div class="title">

              <span>About Us</span>
  

              <div class="menu">
                <p>About</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Legal & privacy</p>
              </div>

            </div>

            <div class="title">

              <span>Services</span>
  

              <div class="menu">
                <p>Aplications</p>
                <p>Buy Crypto</p>
                <p>Affilliate</p>
                <p>Institutional Services</p>
              </div>

            </div>

            <div class="title">

              <span>Learn</span>
  

              <div class="menu">
                <p>What is Cryptocurency?</p>
                <p>Crypto Basic</p>
                <p>Tips and Tutorials</p>
                <p>Market Update</p>
              </div>

            </div>
          </div>

        </div>
        <div class="garis"></div>

      </div>
    </div>
  )
}

export default Footer
