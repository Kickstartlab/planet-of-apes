import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import about from '../assets/about.png';
import bg_join from '../assets/bg_join.png';
import top from '../assets/top.png';
import top_1 from '../assets/top_1.png';
import top_2 from '../assets/top_2.png';
import clouds from '../assets/clouds.png';
import leaves from '../assets/leaves.png';
import buy_1 from '../assets/buy_1.png';
import buy_2 from '../assets/buy_2.png';
import buy_3 from '../assets/buy_3.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Particle from './Particle';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 500,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="font-mulish overflow-hidden text-white-100">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-top">
                <div className='container mx-auto relative z-20'>

                    <Menu />
                    <Particle />

                    <div className="flex flex-col items-center lg:pt-28 py-20 lg:py-64">
                        <div className="lg:w-9/12 space-y-4">

                            <h2 data-aos='slide-right' className='font-mulish md:text-6xl text-3xl font-extrabold text-white-100'>
                                PLANET 2.0
                            </h2>

                            <p data-aos='fade-up' className='py-5 text-lg'>
                                created by apes to combat scam <br></br>and rugs in the cryptocurrency space
                            </p>

                            <div className='flex items-center gap-x-6'>
                                <button data-aos='slide-right' className='bg-green-100 lg:px-12 px-6 py-3 uppercase font-semibold rounded-full border-2 border-green-100 hover-bg-transparent'>
                                    chart
                                </button>

                                {/* <button data-aos='slide-left' className='hover:bg-green-100 border-2 border-green-100 lg:px-12 px-6 py-3 uppercase font-semibold rounded-full'>
                                    audit
                                </button> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <img src={top} alt='wave' className='w-full lg:-mt-3 -mt-1 absolute'></img>

            {/* about us section */}

            <div id='about' className="lg:px-20 lg:py-20 py-6 px-5 bg-about">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-12 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full space-y-6">

                            <h2 className='md:text-5xl text-3xl font-extrabold text-white-100'>
                                Welcome To The PLANET 2.0
                            </h2>

                            <p className='lg:leading-loose'>
                                How many people feel sad when they miss out on a token that skyrockets in value, how many people sell a token early that eventually reaches a multimillion market capitalization, and how many people have regretted not having a second chance is subjective and difficult to quantify.
                            </p>
                            <p className='lg:leading-loose'>
                                We are offering you a second chance with our token, "PLANET 2.0," Main PLANET 2.0 token which currently has a market capitalization of 75 million. Don't miss this second, or you may remain financially disadvantaged for a lifetime.
                            </p>

                            <button className='bg-black-50 hover:bg-green-100 px-6 py-3 uppercase font-semibold rounded-full'>
                                LEARN MORE
                            </button>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className=" md:mt-0 mt-12">
                            <img src={about} alt="Logo" className='w-8/12 lg:float-right sm:flex mx-auto border-4 border-green-50 rounded-full rotate' />
                        </div>

                    </div>
                </div>
            </div>

            <img src={top_1} alt='wave' className='w-full lg:-mt-3 -mt-1 absolute'></img>

            {/* tokenomics section */}

            <div id='tokenomics' className="lg:px-20 px-5 bg-token lg:py-52 py-8">
                <div className='container mx-auto'>

                    <div className='flex flex-col items-center lg:gap-y-12 gap-y-6 justify-center'>

                        <h2 data-aos='fade-up' className='md:text-5xl text-3xl font-extrabold text-white-100'>
                            TOKENOMICS
                        </h2>

                        <div className='lg:flex items-center justify-center gap-x-6'>
                            <h3 data-aos='fade-right' className='md:text-3xl text-xl font-extrabold text-green-100'>
                                Token name
                            </h3>

                            <h3 data-aos='fade-left' className='md:text-3xl text-xl font-extrabold text-white-100'>
                                PLANET 2.0
                            </h3>
                        </div>

                        <div className='lg:flex items-center justify-center gap-x-6 mt-6 lg:space-y-0 space-y-6'>

                            <div data-aos='zoom-in' className='py-3 lg:px-12 px-6 text-center bg-green-100 rounded-xl lg:w-96'>
                                <img src={leaves} alt='leaves' className='absolute lg:ml-64 -ml-16 -mt-6 w-20'></img>
                                <h4 className='md:text-2xl text-lg font-extrabold text-green-50'>
                                    Total Supply
                                </h4>

                                <h4 className='md:text-2xl text-lg font-extrabold text-white-100'>
                                    1,000,000,000,010
                                </h4>
                            </div>

                            <div data-aos='zoom-in' className='py-3 lg:px-12 px-6 text-center bg-green-100 rounded-xl lg:w-96'>
                                <img src={leaves} alt='leaves' className='absolute lg:ml-64 -ml-16 -mt-6 w-20'></img>
                                <h4 className='md:text-2xl text-lg font-extrabold text-green-50'>
                                    TAX
                                </h4>

                                <h4 className='md:text-2xl text-lg font-extrabold text-white-100'>
                                    BUY AND SELL Tax 2/2
                                </h4>
                            </div>

                        </div>

                        <div className='lg:flex items-center justify-center gap-x-6 mt-6 lg:space-y-0 space-y-6'>

                            <div data-aos='zoom-in' className='py-3 lg:px-12 px-5 text-center bg-green-100 rounded-xl lg:w-96'>
                                <img src={leaves} alt='leaves' className='absolute -ml-16 -mt-6 w-20'></img>
                                <h4 className='md:text-2xl text-lg font-extrabold text-green-50'>
                                    Max wallet
                                </h4>

                                <h4 className='md:text-2xl text-lg font-extrabold text-white-100'>
                                    3%
                                </h4>
                            </div>

                            <div data-aos='zoom-in' className='py-3 lg:px-12 px-5 text-center bg-green-100 rounded-xl'>
                                <img src={leaves} alt='leaves' className='absolute -ml-16 -mt-6 w-20'></img>
                                <h4 className='md:text-2xl text-lg font-extrabold text-green-50'>
                                    PRESALE
                                </h4>

                                <h4 className='md:text-2xl text-lg font-extrabold text-white-100'>
                                    NO PRIVATE OR PRESALE
                                </h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <img src={top_2} alt='wave' className='w-full lg:-mt-3 -mt-1 absolute'></img>

            {/* how to buy section */}

            <div id='buy' className="lg:px-20 px-5 bg-buy lg:py-32 py-8">
                <div className='container mx-auto'>

                    <div className='flex flex-col items-center gap-y-12 justify-center'>

                        <h2 data-aos='fade-up' className='md:text-5xl text-3xl font-extrabold text-white-100'>
                            How to Buy?
                        </h2>

                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-baseline justify-center gap-8 mt-8'>

                            <div data-aos='slide-up' className='flex flex-col items-center text-center gap-y-4'>
                                <img src={buy_1} alt='buy'></img>
                                <h5 className='text-2xl font-mulish font-extrabold'>Grab A Wallet</h5>
                                <p className='text-white-100 opacity-50 lg:leading-loose'>
                                    Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.
                                </p>

                                <button className='px-6 py-3 border-4 border-white-100 bg-green-50 hover-bg-transparent text-white-100 rounded-full mt-12'>
                                    Contract Address
                                </button>
                            </div>

                            <div data-aos='slide-up' className='flex flex-col items-center text-center gap-y-4'>
                                <img src={buy_2} alt='buy'></img>
                                <h5 className='text-2xl font-mulish font-extrabold'>Obtain Some Eth</h5>
                                <p className='text-white-100 opacity-50 lg:leading-loose'>
                                    Have ETH in your wallet to switch to $PLANET 2.0. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
                                </p>
                            </div>

                            <div data-aos='slide-up' className='flex flex-col items-center text-center gap-y-4'>
                                <img src={buy_3} alt='buy'></img>
                                <h5 className='text-2xl font-mulish font-extrabold'>Choose an Exchange</h5>
                                <p className='text-white-100 opacity-50 lg:leading-loose'>
                                    Connect to an exchange of your choice. For example, go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PLANET 2.0 token address into Uniswap, select PLANET 2.0, and confirm. When Metamask prompts you for a wallet signature, sign.
                                </p>
                            </div>

                            <div data-aos='slide-up' className='flex flex-col items-center text-center gap-y-4'>
                                <h3 className='lg:text-5xl text-4xl font-extrabold'>$PLANET 2.0</h3>
                                <h5 className='text-2xl font-mulish font-extrabold'>Switch Eth for Ape</h5>
                                <p className='text-white-100 opacity-50 lg:leading-loose'>
                                    Connect to an exchange of your choice. For example, go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the PLANET 2.0  token address into Uniswap, select PLANET 2.0, and confirm. When Metamask prompts you for a wallet signature, sign.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <img src={top_2} alt='wave' className='w-full lg:-mt-3 -mt-1 absolute'></img>

            {/* roadmap */}

            <img src={clouds} alt='cloud' className='box w-full lg:-mt-28 absolute'></img>
            <img src={clouds} alt='cloud' className='lg:-mt-24 opacity-50 absolute box w-full'></img>


            <div className='bg-roadmap lg:pt-24'>
                <div
                    id="roadmap"
                    className="lg:pt-20 py-6 lg:px-8 px-5 container mx-auto sapce-y-8"
                >

                    <div className='text-center'>
                        <h2 data-aos='fade-up' className='md:text-5xl text-3xl font-extrabold text-white-100'>
                            ROADMAP
                        </h2>
                    </div>


                    <div>
                        <div className='lg:hidden block pt-8'>
                            <div className='flex flex-col gap-y-8'>

                                <div data-aos="fade-right" className='border-b-2'>
                                    <p>
                                        🐵 Ape Community Building: We prioritize building a strong and united ape community, bringing together individuals from diverse backgrounds to foster collaboration and support.
                                    </p>
                                </div>

                                <div data-aos="fade-right" className='border-b-2'>
                                    <p>
                                        🐵 Contract Audit: We conduct a thorough audit of the PLANET 2.0 smart contract, ensuring its integrity and providing a safe environment for our community members.
                                    </p>
                                </div>

                                <div data-aos="fade-right" className='border-b-2'>
                                    <p>
                                        🐵 Liquidity Lock and Launch: We implement a liquidity lock mechanism to protect the liquidity pool and successfully launch PLANET 2.0, enabling secure transactions.
                                    </p>
                                </div>

                                <div data-aos="fade-right" className='border-b-2'>
                                    <p>
                                        🐵 Dextool Updates and Social Media Marketing: Employ effective social media marketing strategies to increase visibility and attract new apes.
                                    </p>
                                </div>

                                <div data-aos="fade-right" className='border-b-2'>
                                    <p>
                                        🐵 CG and CMC Listing: We aim to list PLANET 2.0 on prominent cryptocurrency data platforms such as CoinGecko (CG) and CoinMarketCap (CMC) to enhance credibility and accessibility.
                                    </p>
                                </div>

                                <div data-aos="fade-right" className='border-b-2'>
                                    <p>
                                        🐵 Whitepaper Release: We release a comprehensive whitepaper that outlines the vision, technology, and roadmap of PLANET 2.0, promoting transparency and understanding.
                                    </p>
                                </div>

                                <div data-aos="fade-right" className='border-b-2'>
                                    <p>
                                        🐵 Increasing Holders and Liquidity for CEX Listing: We focus on growing our community and increasing liquidity to prepare for listing on centralized exchanges (CEX), expanding market reach.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className='lg:my-24 my-6 lg:block hidden'>

                            <div className='flex items-end justify-center gap-x-16 translate-y-5'>

                                <div data-aos='fade-down' className='flex items-end gap-x-0'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                        </svg>

                                        <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#66BA45" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#66BA45" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div className='w-64 -translate-y-12'>
                                            <p>
                                                🐵 Contract Audit: We conduct a thorough audit of the PLANET 2.0 smart contract, ensuring its integrity and providing a safe environment for our community members.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div data-aos='fade-down' className='flex items-end gap-x-0'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                        </svg>

                                        <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#66BA45" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#66BA45" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div className='w-64 -translate-y-12'>
                                            <p>
                                                🐵 Contract Audit: We conduct a thorough audit of the PLANET 2.0 smart contract, ensuring its integrity and providing a safe environment for our community members.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div data-aos='fade-down' className='flex items-end gap-x-0'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                        </svg>

                                        <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#66BA45" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#66BA45" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div className='w-64 -translate-y-12'>
                                            <p>
                                                🐵 Dextool Updates and Social Media Marketing: Employ effective social media marketing strategies to increase visibility and attract new apes.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className='lg:block hidden'>
                                <div className='h-1.5 bg-white-50'>
                                </div>
                                <div className='-mt-1.5 h-1.5 bg-yellow-100 line'>
                                </div>
                            </div>

                            <div className='flex items-center justify-center gap-x-16 -mt-5'>

                                <div data-aos='slide-up' className='flex items-end gap-x-0'>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#66BA45" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#66BA45" />
                                        </svg>

                                        <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                        </svg>
                                    </div>

                                    <div className='w-64'>
                                        <p>
                                            🐵 Ape Community Building: We prioritize building a strong and united ape community, bringing together individuals from diverse backgrounds to foster collaboration and support.
                                        </p>
                                    </div>

                                </div>

                                <div data-aos='slide-up' className='flex items-end gap-x-0'>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#66BA45" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#66BA45" />
                                        </svg>

                                        <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                        </svg>
                                    </div>

                                    <div className='w-64'>
                                        <p>
                                            🐵 Liquidity Lock and Launch: We implement a liquidity lock mechanism to protect the liquidity pool and successfully launch PLANET 2.0, enabling secure transactions
                                        </p>
                                    </div>

                                </div>

                                <div data-aos='slide-up' className='flex items-end gap-x-0'>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#66BA45" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#66BA45" />
                                        </svg>

                                        <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                        </svg>
                                    </div>

                                    <div className='w-64'>
                                        <p>
                                            🐵 CG and CMC Listing: We aim to list PLANET 2.0 on prominent cryptocurrency data platforms such as CoinGecko (CG) and CoinMarketCap (CMC) to enhance credibility and accessibility.
                                        </p>
                                    </div>

                                </div>

                                <div data-aos='slide-up' className='flex items-end gap-x-0'>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#66BA45" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#66BA45" />
                                        </svg>

                                        <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                        </svg>
                                    </div>

                                    <div className='w-64'>
                                        <p>
                                            🐵 Increasing Holders and Liquidity for CEX Listing: We focus on growing our community and increasing liquidity to prepare for listing on centralized exchanges (CEX), expanding market reach.
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div>

                        </div>
                    </div>

                    <img src={bg_join} alt='join' className='mix-blend-color-dodge absolute lg:block hidden'></img>
                    <div className='lg:p-20 pt-8 relative z-20 lg:mb-48 lg:translate-y-16'>
                        <div data-aos='slide-right' className='space-y-6'>
                            <p className='lg:text-lg font-oswald uppercase mb-6'>PLANET 2.0</p>

                            <h2 className='md:text-5xl text-3xl font-extrabold text-white-100'>
                                Join us for an<br></br>
                                Experience of Life time
                            </h2>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div >
        </div>

    )
}
