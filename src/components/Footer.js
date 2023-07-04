import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';




export default function Footer() {
  return (
    <div className="font-mulish pt-5">
      <footer className='text-white-100 px-5'>

        <div className="flex flex-col items-center justify-center gap-y-6 mx-auto">

          <div className='flex justify-center gap-6 items-center lg:mt-0 mt-6'>

            <a href='https://twitter.com/joinplanet2_eth'>
              <img src={twitter} alt="Twitter" className='' />
            </a>

            <a href='https://t.me/Apesplanetcoin'>
              <img src={telegram} alt="Facebook" className='' />
            </a>

          </div>

          <a href='mailto:planet2team@gmail.com' className='text-green-100'>
           Email: planet2team@gmail.com
          </a>
        </div>

        <p className='pt-8 text-center'>© {new Date().getFullYear()} All rights reserved by <a href='http://joinourplanet2.xyz/' className='text-green-100'>joinourplanet2.xyz</a></p>
      </footer>
    </div>

  )
}
