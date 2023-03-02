import React, {useState} from 'react'
// import logo from '../assets/logonew.png'
import linkedinImg from '../assets/Linkedin.svg'
import githubImg from '../assets/Github.svg'
import emailimg from '../assets/Email.svg'


const Navbar = () => {

  const [navToggle, setNavToggle] = useState(false)
  console.log(navToggle)
    function toggle(){
      setNavToggle(prev => !prev)
      console.log("clicked")
    }
    console.log(navToggle)

  return (
    <header className='header' data-visibility={navToggle}>
      <div className='logo-txt'>
        <a><span className='hash'>#</span>manusankar</a>
      </div>

      <div className='hamburger' data-open={navToggle} onClick={toggle}></div>

      <nav>
        <ul className='primary-navigation' data-visibility={navToggle}>
            <li>
              <a onClick={toggle} href='#home'>
                <span className='hash'>#</span>Home
              </a>
            </li>

            <li>
              <a onClick={toggle} href='#work'>
                <span className='hash'>#</span>Work
              </a>
            </li>

            <li>
              <a onClick={toggle} href='#about'>
                <span className='hash'>#</span>About
              </a>
            </li>

            <li>
              <a onClick={toggle} href='#contact'>
                <span className='hash'>#</span>Contact
              </a>
            </li>

            <div className='social-link'>
              <a href='https://www.linkedin.com/in/manusankar-c-p-6b0742223/' target='_blank'>
                <img className='social-img' alt=' ' src={linkedinImg}></img>
              </a>
              <a href='https://github.com/cpmanusankar' target='_blank'>
                <img className='social-img' alt=' ' src={githubImg}></img>
              </a>
              <a href='mailto:manusankarcp06@gmail.com' target='_blank'>
                <img className='social-img' alt=' ' src={emailimg}></img>
              </a>
            </div>
        </ul>
       

      </nav>
        
    </header>
  )
}

export default Navbar