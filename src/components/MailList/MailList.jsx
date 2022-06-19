import React from 'react'
import './MailList.css'


const MailList = () => {


  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time , save money!</h1>
        <p className='mailDecs'>Sign up and we'll send the best deals to you</p>
        <div className="mailInputContainer">
            <input type="mail" placeholder='Your Mail'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList