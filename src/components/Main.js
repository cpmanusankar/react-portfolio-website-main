import React from 'react'
import mainImage from '../assets/main-img.jpg'

const Main = () => {
  return (
    <div className='main-container' id='home'>

      <div className='main-flex'>
        <div className="small-txt">
          <h1>Hi, <span className='hash'>I'm </span>Manusankar <span className='hash'>Frontend Developer</span></h1>
          <a className='contact-btn' href='#contact'>contact</a>
        </div>
        <div>
          <img src={mainImage} alt='' className='main-img'></img>
        </div>
        
      </div>

      <div className='stolen-div'>
        <h1 className='stolen-txt'>" I design and code simple things, and I love what I do."</h1>
      </div>

    </div>
  )
}

export default Main