import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import myImg from '../img/image.jpeg'

const Hero = () => {
    const [text] = useTypewriter({
        words:['i am Raj Kumar K ','i am a Python Full-Stack Developer'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80
    })
  return (
    <>
    {/* laptop screen */}
        <div className=' hide1 w-[80%] mx-[auto] my-[120px] flex gap-5 items-center'>
            <div >
                {/* <div className='font-heading text-5xl font-medium mb-5'>Hi  <span className='text-slate-400 font-heading font-bold'>{text}<Cursor/></span></div> */}
                <div className='text-justify font-para text-3xl text-[white]'>I am a Python Full Stack Developer specializing in responsive web applications. I have expertise in both front-end and back-end technologies. I enjoy solving complex problems and am dedicated to continuous learning in web development. Check out my portfolio to see how I turn ideas into impactful digital solutions.</div>
            </div>
            <img className='w-96 h-96 border rounded-[50%] object-cover' src={myImg} alt="" />
        </div>

    {/* Mobile Screen */}
        <div className=' hide2 w-[80%] mx-[auto] my-[120px] flex flex-col gap-5 items-center'>
            <img className='w-60 h-60 border rounded-[50%] object-cover' src={myImg} alt="" />

            <div >
                {/* <div className='font-heading text-5xl font-medium mb-5 max-[600px]:text-[22px]'>Hi i <span className='text-[green] font-heading font-bold'>{text}<Cursor/></span></div> */}
                <div className='text-justify font-para text-2xl max-[600px]:text-[24px] text-[white]'>I am a passionate Python Full Stack Developer with expertise in creating responsive web applications. With a strong foundation in both front-end and back-end technologies, I bring innovative solutions to life, ensuring seamless user experiences across all devices. My skill set includes HTML, CSS, JavaScript, React, Node.js, MongoDB, MySQL and Python among other modern web development tools and frameworks. I thrive on solving complex problems and am committed to continuous learning and improvement in the ever-evolving field of web development. Explore my portfolio to see how I can transform ideas into impactful digital solutions.</div>
            </div>
        </div>
        
    </>
  )
}

export default Hero