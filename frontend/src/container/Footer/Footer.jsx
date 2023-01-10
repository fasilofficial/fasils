import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      '_type': 'contact',
      'name': name,
      'email': email,
      'message': message,
    }
    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }



  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='email'/>
          <a href='tel:+919207518879' className='p-text'>+91 92075-18879</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.email} alt='email'/>
          <a href='mailto:muhammedfasilofficial@gmail.com' className='p-text'>muhammedfasilofficial@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.coffee} alt='buy me a coffee'/>
          <a href='https://www.buymeacoffee.com/mfasilofficial' className='p-text coffee'>Buy me a coffee</a>
        </div>
      </div>
      {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your message'
            value={message}
            name='message'
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending...' : 'Send Message'}</button>
      </div>
      : <div><h3 className='head-text' style={{ marginTop: 20 }}>Thank you for getting in touch!</h3></div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
  )