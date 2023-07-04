import React, { useState } from 'react'



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-mulish h-28">
        <a href="/" className="logo lg:my-12">
          <h1 className='text-3xl font-bold'>
            PLANET 2.0
          </h1>
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-x-24 items-center text-white-100">
            <li><a href="/" className="text-zinc-100">Home</a></li>
            <li><a href="#about" className="cursor-pointer">About</a></li>
            <li><a href="/" className="cursor-pointer">Features</a></li>
            <li><a href="#tokenomics" className="cursor-pointer">Tokenomics</a></li>
            <li><a href="#buy" className="cursor-pointer">How to Buy</a></li>
          </ul>
        </nav>

        <a href="/">
          <button className="border border-white-100 rounded-full py-3 lg:px-6 px-4 mt-5 font-semibold text-white-100 uppercase border-opacity-40 hover:text-white-100 hover:bg-green-100 duration-100">
            Whitepaper
          </button>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-mulish">
        <a href="/" className="text-white-100">
          <h1 className='text-2xl font-bold'>
            PLANET 2.0
          </h1>
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-mulish font-semibold bg-green-50 z-20" style={{ left: "0" }}>

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="text-white-100">
              <h1 className='text-2xl font-bold text-left'>
                PLANET 2.0
              </h1>
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer  text-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Home</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#about" className="text-lg ml-4 font-semibold">About</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#about" className="text-lg ml-4 font-semibold">Features</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#tokenomics" className="text-lg ml-4 font-semibold">Tokenomics</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#buy" className="text-lg ml-4 font-semibold">How to Buy</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-black-100 bg-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Whitepaper</a>
          </button>
        </div> : null
      }


    </header >
  )
}
