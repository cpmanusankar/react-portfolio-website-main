import React from 'react'
import aboutImg from '../assets/second-img.jpg'

const About = () => {
  return (
    <div>
      <div className='section-head about-head' id='about'>
        <h3><span className='hash'>#</span>About</h3>
        <div class='line-div'></div>
      </div>

      <div className='about-flex-container'>

        
          <img className='about-img' src={aboutImg} alt='' ></img>
        

        <div className='about-details'>
            <h4>Hello. I'm Manu!</h4>

              <p>I enjoy creating things.
              I've been actively looking for opportunities to expand my knowledge of and develop my skills in a variety of technologies.</p>

              <p>I'm a self-taught front-end developer.

              I can create responsive websites from the scratch and upgrade them to modern user-friendly web experiences.
              </p>
            <a>Read More</a>
        </div>

        

      </div>

    </div>
  )
}

export default About