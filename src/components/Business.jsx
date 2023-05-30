import React from 'react'
import './Business.css'
import coin from '../assets/coin.png'
import verify from '../assets/verify.png'
import bitcoin from '../assets/bitcoin.png'
import ebook from '../assets/ebook.png'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Business = () => {
  
  return (
    <div className='business'>
        <div className='container'>
          <div className='cryptocap-features'>

            <div className='top'>
              <h3>CryptoCap Amazing Faetures</h3>
              <p>Explore sensational features to prepare your best investment in cryptocurrency</p>
            </div>

            <div className='cards-features'>

              <div className='card-1'>
                <div className='content'>

                  <div className='card-item'>
                    <img src={coin}  className="image" alt="" />
                    <div className='card-text'>
                      <h6>Manage Portfolio</h6>
                      <p>Buy and sell popular digital currencies, keep track of them in theone place.</p>
                    </div>
                  </div>

                  <div className='card-link'>
                    <span>See Explained</span>
                    <AiOutlineArrowRight/>
                  </div>

                </div>
              </div>
              <div className='card-1'>
                <div className='content'>

                  <div className='card-item'>
                    <img src={verify}  className="image" alt="" />
                    <div className='card-text'>
                      <h6>Protected Securely</h6>
                      <p>All cash balances are covered by FDIC insurance, up to a maximum of $250,000.</p>
                    </div>
                  </div>

                  <div className='card-link'>
                    <span>See Explained</span>
                    <AiOutlineArrowRight/>
                  </div>

                </div>
              </div>
              <div className='card-1'>
                <div className='content'>

                  <div className='card-item'>
                    <img src={bitcoin}  className="image" alt="" />
                    <div className='card-text'>
                      <h6>Cryptocurrency Variety</h6>
                      <p>Supports a variety of the most popular digital currencies and always uptodate.</p>
                    </div>
                  </div>

                  <div className='card-link'>
                    <span>See Explained</span>
                    <AiOutlineArrowRight/>
                  </div>

                </div>
              </div>
              <div className='card-1'>
                <div className='content'>

                  <div className='card-item'>
                    <img src={ebook}  className="image" alt="" />
                    <div className='card-text'>
                      <h6>Learn Best Practice</h6>
                      <p>Easy to know how to cryptocurrency works and friendly to newbie.</p>
                    </div>
                  </div>

                  <div className='card-link'>
                    <span>See Explained</span>
                    <AiOutlineArrowRight/>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
    </div>
  )
}

export default Business
