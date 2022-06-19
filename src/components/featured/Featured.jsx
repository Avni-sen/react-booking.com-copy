import React from 'react';
import './Featured.css';


const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
       <a href="#">
       <img className='featuredImage' src="https://t-cf.bstatic.com/xdata/images/city/540x270/613087.webp?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o=" alt="Paris" />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h1>7.567 tesis</h1>
        </div>
       </a>
      </div>
      <div className="featuredItem">
       <a href="#">
       <img className='featuredImage' src="https://t-cf.bstatic.com/xdata/images/city/540x270/613104.webp?k=6e9fa0c6cb25472c6a843ddc1a14d93cf7a7306a4111a74052af94d75c69b03e&o=" alt="Roma" />
        <div className="featuredTitles">
          <h1>Roma</h1>
          <h1>123 properties</h1>
        </div>
       </a>
      </div>
      <div className="featuredItem">
       <a href="#">
       <img className='featuredImage' src="https://t-cf.bstatic.com/xdata/images/city/540x270/976538.webp?k=19a2487e30f31349e54aaf32d509121d81e2e31eee5b820c7c98576a4426d997&o=" alt="Amsterdam" />
        <div className="featuredTitles">
          <h1>Amsterdam</h1>
          <h1>123 properties</h1>
        </div>
       </a>
      </div>
    </div>
  )
}

export default Featured