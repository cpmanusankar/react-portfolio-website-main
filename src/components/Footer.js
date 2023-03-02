import React from 'react'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <div className='section-head'>
            <h3><span className='hash'>#</span>Footer</h3>
            <div class='line-div'></div>
      </div>

     <div className='footer-container'>
      <div className='logo-txt'>
          <a><span className='hash'>#</span>manusankar</a>
          <p>I've been actively looking for opportunities to expand my knowledge of and develop my skills in a variety of technologies. </p>
            <p>I am willing to work :)</p>
        </div>

        <div >
            <h4>Media</h4>
            <div className='social-link-footer'>
            <a href='#' target='_blank'><BsLinkedin /></a>
            <a href='#' target='_blank'><BsLinkedin /></a>
            <a href='#' target='_blank'><BsLinkedin /></a>
            </div>

        </div>
     </div>

    </div>
  )
}

export default Footer