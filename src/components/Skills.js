import React from 'react'
import pattern from '../assets/pattern.png'
import patternTwo from '../assets/pattern-two.png'

const Skills = () => {
  return (
    <div>
      <div className='section-head'>
        <h3><span className='hash'>#</span>Skills</h3>
        <div class='line-div'></div>
      </div>

      <div className='sills-flex-container'>
        <div className='random-imgs'>
          <img className='pattern' src={pattern}></img>
          <img className='pattern-two' src={patternTwo}></img>
          <div className='square'></div>
          <img className='pattern-dup' src={patternTwo}></img>
          <div className='square-two'></div>

        </div>
        <div className='skills-list'>
          <div className='skill-box first-box'>
            <h4>Languages</h4>
            <p>Javascript</p>
            <p>C++</p>
          </div>
   

          <div className='skill-box second-box'>
            <h4>Others</h4>
            <p>Hmtl</p>
            <p>Css</p>
            <p>React</p>
          </div>
   
          <div className='skill-box third-box'>
            <h4>Tools</h4>
            <p>Figma</p>
            <p>Illustrator</p>
            <p>VS Code</p>
            <p>Netlify</p>
          </div>


        </div>
      </div>


    </div>

  )
}

export default Skills
