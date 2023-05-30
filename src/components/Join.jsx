import React from 'react'
import './Join.css'
import account from '../assets/account.png'
import card from '../assets/card.png'
import cc from '../assets/cc.png'

const Join = () => {
  return (
    <div className='join'>
      <div className='container'>

        <div className="left">
            <h3>How To Get Started</h3>
            <p> Simple and easy way to start your investment <br />in cryptocurrency</p>
            <div class="btn-group-join">
               <div class="btn">Get Started</div>
            </div>
        </div>
      
        <div className="right">

          <div className="card-join">
            <img src={account} />
            <div>
              <div className="title">
                <h5>Create Your Account</h5>
              </div>
              <div className="description">
                <p>Your account and personal identity are guaranteed safe.</p> 
              </div>
            </div>
          </div>

          <div className="card-join">
            <img src={card} />
            <div>
              <div className="title">
                <h5>Connect Bank Account</h5>
              </div>
              <div className="description">
                <p>Connect the bank account to start transactions.</p> 
              </div>
            </div>
          </div>

          <div className="card-join">
            <img src={cc} />
            <div>
              <div className="title">
                <h5>Start Build Portfolio</h5>
              </div>
              <div className="description">
                <p>Buy and sell popular currencies and keep track of them.</p> 
              </div>
            </div>
          </div>
      
        </div>
    
      </div>
      
    </div>
  )
}

export default Join
