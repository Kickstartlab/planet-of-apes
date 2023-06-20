import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import youtube from '../assets/youtube.png';




export default function Footer() {
  return (
    <div className="font-mulish pt-5">
      <footer data-aos="zoom-in" className='text-white-100 px-5'>

        <div className="flex flex-col items-center justify-center gap-y-8 mx-auto">

          <h2 className='md:text-4xl text-2xl font-mulish font-bold text-white-100'>
            Don't miss out, Stay updated
          </h2>

          <div className="py-1 pl-6 pr-1 lg:w-7/12 w-full lg:bg-white-50 lg:space-y-0 space-y-5 lg:flex items-center justify-between rounded-full">
            <input type="email" placeholder="Enter your email" id="email" required="" className="lg:p-0 p-5 lg:rounded-none rounded-full bg-white-50 focus:ring-0 focus:outline-none lg:w-7/12 w-full placeholder-black-50" />

            <button className='text-white-100 lg:px-16 px-3 lg:py-3 py-2 bg-green-100 rounded-full uppercase font-semibold'>
              Subcribe
            </button>
          </div>

          <div className='text-center'>
            <p>
              Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial<br></br> knowledge to become successful investors globally
            </p>

            {/* <p className='pt-2'>
              Get in touch: <a href='mailto:decentraprotocolteam@gmail.com' className='text-purple-100'>decentraprotocolteam@gmail.com</a>
            </p> */}
          </div>

          <div className='flex justify-center gap-6 items-center lg:mt-0 mt-6'>

            <a href='/'>
              <img src={twitter} alt="Twitter" className='' />
            </a>

            <a href='/'>
              <img src={telegram} alt="Facebook" className='' />
            </a>

            <a href='/'>
              <img src={youtube} alt="Vimeo" className='' />
            </a>

          </div>

        </div>

        <p className='pt-8 text-center'>© {new Date().getFullYear()} All rights reserved by Avitex.</p>
      </footer>
    </div>

  )
}
