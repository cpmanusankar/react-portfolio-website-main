import React, {useRef} from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import {BsArrowDownRight} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm('service_uv45ckc', 'template_qb1skpx', form.current, 'Ild-I7E3VL2Spc6w1')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }
    

  return (
    <div>
        <div className='section-head' id='contact'>
            <h3><span className='hash'>#</span>Contact</h3>
            <div class='line-div'></div>
      </div>

      <div className='contact-container'>
        
        <div className='contact-para'>
            <p>I'm looking for a job. Contact Me: </p>
            <ul>
                <li>
                    <a href='https://www.linkedin.com/in/manusankar-c-p-6b0742223/' target='_blank'><BsLinkedin className='icon'/> Linkedin</a>
                </li>

                <li>
                    <a href='https://api.whatsapp.com/send?phone917012537477' target='_blank'><RiWhatsappFill className='icon'/> WhatsApp</a>
                </li>
            </ul>

            <p>or Send a Message <BsArrowDownRight className='icon'/></p>
        </div>
        
        <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>

                <div className='flex'>

                <input 
                type='text' 
                name='name' 
                placeholder='Name' required
                /> 

                <input 
                type='email' 
                name='email' 
                placeholder='Email' required
                /> 
                </div>
                

            <textarea
            name='message'
            rows='6'
            placeholder='Message' required
            ></textarea>

            <button 
            type='submit'
            className='form-btn'>Send Message</button>


            </form>
        </div>

      </div>
    </div>
  )
}

export default Contact