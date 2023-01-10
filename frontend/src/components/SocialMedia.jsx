import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa'
import './SocialMedia.scss'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a className='social-icon' href="http://www.github.com/fasilofficial"><FaGithub /></a>
        </div>
        <div>
            <a className='social-icon' href="https://www.linkedin.com/in/mfasilofficial/"><FaLinkedin /></a>
        </div>
        <div>
            <a className='social-icon' href="https://twitter.com/mfasilofficial"><BsTwitter /></a>   
        </div>
        <div>
            <a className='social-icon' href="http://www.instagram.com/fasil.jpeg"><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia