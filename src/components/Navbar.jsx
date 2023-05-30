import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = ()=> setClick(!click)


  return (
    <div className='header'>
      <div className='container'>
      <h5>Crypto<span className='primary'>Cap</span></h5>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li><a href="/" className='active'>Home</a></li>
        <li><a href="/">Businesses</a></li>
        <li><a href="/">Trade</a></li>
        <li><a href="/">Market</a></li>
        <li><a href="/">Learn</a></li>
        <button className='btn'>Login</button>
      </ul>
        <div className='btn-group'>
          <button className='btn'>Login</button>
        </div>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: '#0FAE96'}}/>) : (<FaBars size={20} style={{color: '#0FAE96'}} />) }
        </div>
      </div>
      
    </div>
  )
}
 
export default Navbar

