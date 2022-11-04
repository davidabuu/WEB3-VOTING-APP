import React from 'react'
import {ConnectButton} from 'web3uikit'
const NavBar = () => {
  return (
    <div className='nav-bar'>
        <img src='./nuesa.jpg' className='img' alt='Nuesa'/>
        <ConnectButton moralisAuth={false}/>
    </div>
  )
}

export default NavBar