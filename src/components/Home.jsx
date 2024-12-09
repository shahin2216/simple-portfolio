import React from 'react'
import image from '../../public/img3.png';
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi';

const Home = () => {
  return (
    <div id="home" className='flex min-h-screen w-full items-center justify-center'>
<div className='flex flex-col items-center justify-center gap-8 p-5 text-center'>
  <img src={image} alt="myimage" className='w-[250px] sm:w[300px] rounded-full' />
  <div className='space-y-1 sm:space-y-3'>
    <h1 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Zeba Shahin</h1>
    <h3 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>Web Developer</h3>
    <p className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text  text-transparent'>shahinzeb16@gmail.com</p>
    <p className='max-w-[500px] text-sm text-gray-500'>Dynamic and detail-oriented Junior Web Developer with 1.5+ years of experience in building and optimizing web applications using modern technologies like PHP, Laravel, MySQL, and JavaScript.
Proven ability to handle end-to-end project development.
Passionate about learning new technologies and a challenging position which will help enhancing my knowledge and skills.</p>
  </div>
  <div className='flex gap-3'>
    <a href="https://github.com/shahin2216"><BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:bprder-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/></a>
    <a href="https://www.linkedin.com/in/shahinzeb/"><BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:bprder-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/></a>
    <a href="https://www.gmail.com"><BiLogoGmail className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:bprder-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/></a>

  </div>
</div>
    </div>
  )
}

export default Home
