import React from 'react'
import '../../assets/sass/style.scss'
import { IoLocationSharp } from "react-icons/io5";
import {AiFillPhone} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"
import {TbNetwork} from "react-icons/tb"

const Contact = () => {
  return (
    <section className='contact mt-5 '>

      <div className='container'>
        <div className='row g-5'>
        <h3 className='mb-2'>Contact Information</h3>
        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
          <span><IoLocationSharp/></span>
          <span className='text-secondary'> 198 West 21th Street,Suite 721 New York NY 10016</span>
      </div>
      <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                  <span><AiFillPhone/></span>
          <span className='text-secondary'>  + 1235 2355 98</span>
      </div>
      <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                  <span><FaTelegramPlane/></span>
          <span className='text-secondary'> info@yoursite.com</span>
      </div>
      <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                  <span><TbNetwork/></span>
          <span className='text-secondary'> yoursite.com</span>
      </div>

      </div>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
            <form className='p-3 text-secondary' >
            <h3 className='text-dark'>Get In Touch</h3>
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                  <label htmlFor="fname">Firstname</label>

                </div>
                  <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                  <label htmlFor="lname">Lastname</label>

                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6'>

                  <input type="text" id='fname' placeholder='Your firstname'  className='border-0 shadow-lg p-2 my-2 bg-body-tertiary rounded'/>
                </div>
                  <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                <input type="text" id='lname' placeholder='Your lastname' className='border-0 shadow-lg p-2 my-2 bg-body-tertiary rounded' />
                </div>
              </div>

              <label htmlFor="email" className='mt-3'>Email</label>
              <input type="email" id='email' placeholder='Your email adress'  className='border-0 shadow-lg p-2 my-2 bg-body-tertiary rounded w-100'/>

              <label htmlFor="subject" className='mt-3'>Subject</label>
              <input type="text" id='subject' placeholder='Your subject is this message'  className='border-0 shadow-lg p-2 my-2 bg-body-tertiary rounded w-100'/>

              <label htmlFor="message" className='mt-3'>Message</label>
              <textarea id="message" cols="30" rows="10"  placeholder='Say somthing about us' className='border-0 shadow-lg p-2 my-2 bg-body-tertiary rounded w-100' ></textarea>

              <input type="submit" value='Send a message' className='bg-secondary text-white px-3 py-2 border-0 rounded-pill'/>
            </form>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48625.56009293346!2d49.769825722597545!3d40.384531519553235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8c33c62a3f%3A0x77807ca915edd570!2zWWFzYW1hbCwgQmFrxLE!5e0!3m2!1saz!2saz!4v1686207650312!5m2!1saz!2saz" width={600}  style={{border: 0,height:'100%'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
