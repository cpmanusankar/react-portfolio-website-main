import React from 'react'
import tenzieImg from '../assets/dice.jpg'
import quizImg from '../assets/quiz.png'
import haikyuuImg from '../assets/haikyuu.jpg'

const Projects = () => {
  return (
    <div>
      <div className='section-head' id='work'>
        <h3><span className='hash'>#</span>Projects</h3>
        <div class='line-div'></div>
      </div>

      <div className='project-container'>

        <div className='tenzie'>
          <img alt='' src={tenzieImg} ></img>
          <h4>Tenzie Game</h4>
          <p className='pro-para'>HTML | CSS |  REACT</p>
          <div className='project-btns'>
            <a>Live</a>
            <a>code</a>
          </div>
        </div>

        <div className='tenzie'>
          <img alt='' src={haikyuuImg} ></img>
          <h4>Anime Blog</h4>
          <p className='pro-para'>ROUTER | REACT | CONTEXT </p>
          <div className='project-btns'>
            <a>Live</a>
            <a>code</a>
          </div>
        </div>

        <div className='tenzie'>
          <img alt='' src={quizImg} ></img>
          <h4>Quiz King</h4>
          <p className='pro-para'>REDUX | REST |  REACT</p>
          <div className='project-btns'>
            <a>Live</a>
            <a>code</a>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Projects