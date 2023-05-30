import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Market.css'
import { RiSearchLine } from 'react-icons/ri';
import GREEN from '../assets/chart-green.png'
import RED from '../assets/chart-red.png'


const Market = () => {

  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  useEffect( ()=> {
    axios.get(url).then((response)=> {
      setData(response.data)
    }).catch((error)=> {
      console.log(error)
    })
  }, [])

  console.log(data)
  if (!data) return null


  return (
    <div className='market'>
      <div className='container'>
        <div className='market-update'>
          <h3>Market Update</h3>

            <div className='category'>
              <span>Cryptocurrency Categories</span>

              <div className='btn-search'>

                <div className='btn-family'>
                    <div className='btn-child'>Popular</div>
                    <div className='btn-child'>Metaverse</div>
                    <div className='btn-child'>Entertainment</div>
                    <div className='btn-child'>Energy</div>
                    <div className='btn-child'>Gaming</div>
                    <div className='btn-child'>Music</div>
                    <div className='btn-child'>See All 12+</div>
                </div>

                <div className='search'>
                  <div className="search-box">       
			                <div className="search-icon">
                        <RiSearchLine className="search-icon" style={{fontSize:"26px"}} />
			                </div>
			                <div className="search-input">
				                <input type="text" className="input" placeholder="Search Coin"/>
			                </div>
		              </div>
                </div>

              </div>
            </div>

          <main className="table">
       
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        <th> No </th>
                        <th> Name </th>
                        <th> Last Price </th>
                        <th> Change </th>
                        <th> Market Stats </th>
                        <th> Trade </th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className="gap"> {data[0].market_cap_rank} </td>
                        <td> <img src={data[0].image} alt=""/>{data[0].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[0].symbol}</span></td>
                        <td>${data[0].current_price.toLocaleString()}</td>
                        <td>{data[0].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[0].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>
                    <tr>
                        <td className="gap"> {data[1].market_cap_rank} </td>
                        <td> <img src={data[1].image} alt=""/>{data[1].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[1].symbol}</span></td>
                        <td>${data[1].current_price.toLocaleString()}</td>
                        <td>{data[1].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[1].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>
                    <tr>
                        <td className="gap"> {data[2].market_cap_rank} </td>
                        <td> <img src={data[2].image} alt=""/>{data[2].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[2].symbol}</span></td>
                        <td>${data[2].current_price.toLocaleString()}</td>
                        <td>{data[2].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[2].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>
                    <tr>
                        <td className="gap"> {data[3].market_cap_rank} </td>
                        <td> <img src={data[3].image} alt=""/>{data[3].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[3].symbol}</span></td>
                        <td>${data[3].current_price.toLocaleString()}</td>
                        <td>{data[3].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[3].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>
                    <tr>
                        <td className="gap"> {data[4].market_cap_rank} </td>
                        <td> <img src={data[4].image} alt=""/>{data[4].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[4].symbol}</span></td>
                        <td>${data[4].current_price.toLocaleString()}</td>
                        <td>{data[4].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[4].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>
                    <tr>
                        <td className="gap"> {data[5].market_cap_rank} </td>
                        <td> <img src={data[5].image} alt=""/>{data[5].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[5].symbol}</span></td>
                        <td>${data[5].current_price.toLocaleString()}</td>
                        <td>{data[5].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[5].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>
                    <tr>
                        <td className="gap"> {data[6].market_cap_rank} </td>
                        <td> <img src={data[6].image} alt=""/>{data[6].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[6].symbol}</span></td>
                        <td>${data[6].current_price.toLocaleString()}</td>
                        <td>{data[6].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[6].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>
                    <tr>
                        <td className="gap"> {data[7].market_cap_rank} </td>
                        <td> <img src={data[7].image} alt=""/>{data[7].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[7].symbol}</span></td>
                        <td>${data[7].current_price.toLocaleString()}</td>
                        <td>{data[7].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[7].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>
                    <tr>
                        <td className="gap"> {data[8].market_cap_rank} </td>
                        <td> <img src={data[8].image} alt=""/>{data[8].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[8].symbol}</span></td>
                        <td>${data[8].current_price.toLocaleString()}</td>
                        <td>{data[8].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[8].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>
                    <tr>
                        <td className="gap"> {data[9].market_cap_rank} </td>
                        <td> <img src={data[9].image} alt=""/>{data[9].name} <span>|</span> <span style={{textTransform: 'uppercase'}}>{data[9].symbol}</span></td>
                        <td>${data[9].current_price.toLocaleString()}</td>
                        <td>{data[9].price_change_percentage_24h.toFixed(2)}%</td>
                        <td>
                            {data[9].price_change_percentage_24h < 0 ?(
                               <img src={RED} className='chart' alt="/" />
                              ) : (
                                <img src={GREEN} className='chart' alt="/" />
                            )}
                        </td>
                        <td><div className="btn">Trade</div></td>
              
                    </tr>

                </tbody>


            </table>
        </section>
        <h6><a href='#'>See All Coin</a></h6>
    </main>

        </div>
      </div>
    </div>
  )
}

export default Market

