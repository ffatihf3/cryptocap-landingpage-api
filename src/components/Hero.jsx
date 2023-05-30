import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Hero.css'
import BTC from '../assets/bitcoin.png'
import GREEN from '../assets/chart-green.png'
import RED from '../assets/chart-red.png'
import more from '../assets/more-icon.svg'


const Hero = () => {
  
  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false'

  useEffect( ()=> {
    axios.get(url).then((response)=> {
      setData(response.data)
    }).catch((error)=> {
      console.log(error)
    })
  }, [])

  if (!data) return null


  return (
    <div className='hero'>
      <div className='container'>
        <h3>Start and Build Your Crypto Portfolio Here</h3>
        <p>Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.</p>
        <div className='btn-group'>
          <button className='btn'>Get Started</button>
        </div>
        <div className='market-trend'>
          <div className='market-trend-title'>
            <h5>Market Trend</h5>
          </div>

          <div className='market-trend-content'>

            <div className='coin-trend'>
              <div className='coin-info'>
                <div className='frame-info'>

                <div className='coin-icon'>
                      <img src={data[0].image} className="coin" alt="" />
                    </div>

                    <h5>{data[0].symbol}</h5>

                    <div className='coin-bg'>
                      <span>{data[0].name}</span>
                    </div>

                </div>
                    <div><img src={more} className='more-icon' alt="/" /></div>

       
              </div>
              
              <div className='divider'></div>

              <div className='coin-value'>
                <div className='frame-value'>
                    <h5>${data[0].current_price.toLocaleString()}</h5>
                    <span>{data[0].price_change_percentage_24h.toFixed(2)}%</span>
                </div>

                {data[0].price_change_percentage_24h < 0 ?(
                  <img src={RED} className='chart' alt="/" />
                ) : (
                  <img src={GREEN} className='chart' alt="/" />
                )}

              </div>
            </div>
            <div className='coin-trend'>
              <div className='coin-info'>
                <div className='frame-info'>

                <div className='coin-icon'>
                      <img src={data[1].image} className="coin" alt="" />
                    </div>

                    <h5>{data[1].symbol}</h5>

                    <div className='coin-bg'>
                      <span>{data[1].name}</span>
                    </div>

                </div>
                    <div><img src={more} className='more-icon' alt="/" /></div>

       
              </div>
              
              <div className='divider'></div>

              <div className='coin-value'>
                <div className='frame-value'>
                    <h5>${data[1].current_price.toLocaleString()}</h5>
                    <span>{data[1].price_change_percentage_24h.toFixed(2)}%</span>
                </div>

                {data[1].price_change_percentage_24h < 0 ?(
                  <img src={RED} className='chart' alt="/" />
                ) : (
                  <img src={GREEN} className='chart' alt="/" />
                )}

              </div>
            </div>
            <div className='coin-trend'>
              <div className='coin-info'>
                <div className='frame-info'>

                <div className='coin-icon'>
                      <img src={data[2].image} className="coin" alt="" />
                    </div>

                    <h5>{data[2].symbol}</h5>

                    <div className='coin-bg'>
                      <span>{data[2].name}</span>
                    </div>

                </div>
                    <div><img src={more} className='more-icon' alt="/" /></div>

       
              </div>
              
              <div className='divider'></div>

              <div className='coin-value'>
                <div className='frame-value'>
                    <h5>${data[2].current_price.toLocaleString()}</h5>
                    <span>{data[2].price_change_percentage_24h.toFixed(2)}%</span>
                </div>

                {data[2].price_change_percentage_24h < 0 ?(
                  <img src={RED} className='chart' alt="/" />
                ) : (
                  <img src={GREEN} className='chart' alt="/" />
                )}

              </div>
            </div>
             <div className='coin-trend'>
              <div className='coin-info'>
                <div className='frame-info'>

                <div className='coin-icon'>
                      <img src={data[3].image} className="coin" alt="" />
                    </div>

                    <h5>{data[3].symbol}</h5>

                    <div className='coin-bg'>
                      <span>{data[3].name}</span>
                    </div>

                </div>
                    <div><img src={more} className='more-icon' alt="/" /></div>

       
              </div>
              
              <div className='divider'></div>

              <div className='coin-value'>
                <div className='frame-value'>
                    <h5>${data[3].current_price.toLocaleString()}</h5>
                    <span>{data[3].price_change_percentage_24h.toFixed(2)}%</span>
                </div>

                {data[3].price_change_percentage_24h < 0 ?(
                  <img src={RED} className='chart' alt="/" />
                ) : (
                  <img src={GREEN} className='chart' alt="/" />
                )}

              </div>
            </div>

           
       
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
