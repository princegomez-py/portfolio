import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='bg-black p-4 h-full w-full text-white sm:flex sm:justify-around sm:items-start about' id='about'>
  <div className='flex flex-col justify-start'>
    <div className='sm:px-16 px-2'>
      <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Overview.</h2>
      <p className='mt-3 mb-4 text-[17px] max-w-3xl leading-[30px]'>
          👨‍💻 Hi, I’m Prince Gomez, a passionate software engineer with over 5 years of experience crafting high-impact backend systems across diverse sectors including Energy, Media, Finance, Healthcare, and IT, where I’ve leveraged cutting-edge technologies to solve complex challenges and drive innovation.
      </p>
      <p className='mt-3 mb-4 text-[17px] max-w-3xl leading-[30px]'>
          🚀 I specialize in backend development with expertise in Python, Flask, FastAPI, Java, and Spring Boot. My proficiency in cloud computing platforms like Google Cloud Platform and AWS has allowed me to lead successful migrations, develop cloud functions and workflows.
      </p>
      <p className='mt-3 mb-4 text-[17px] max-w-3xl leading-[30px]'>
          👨‍🏫 Currently a Lead Software Engineer at Saasvaap Inc., I lead high-impact projects from concept to completion, mentor new team members, and play an active role in talent acquisition.
      </p>
      <p className='mt-3 mb-4 text-[17px] max-w-3xl leading-[30px]'>
          💡 In addition to my backend expertise, I am skilled in Robotic Process Automation (RPA), with certifications from Jiffy.ai. I am committed to staying ahead in the ever-evolving tech landscape, continuously expanding my knowledge and capabilities.
      </p>
      <p className='mt-3 mb-4 text-[17px] max-w-3xl leading-[30px]'>
          📸 Beyond coding, I have a variety of passions. Cricket and swimming keep me active and energized, while photography allows me to capture and appreciate the beauty of the world around me. Each photo I take tells a story and reflects my creative vision. Cooking is another passion of mine, where I enjoy experimenting with flavors and creating delicious meals that bring joy to those who share them.
      </p>
      <p className='mt-3 mb-7 text-[17px] max-w-3xl leading-[30px]'>
          🌟 Connect with me on <a className='text-green-200 hover:text-green-400 duration-300' href='https://www.linkedin.com/in/prince-gomez-py' target='_blank'>LinkedIn</a> to explore my professional journey.
      </p>
      <ButtonLink
        url='https://drive.google.com/file/d/1AzGRD7650P7sJzSAvVuA-VxPDuhfcSdn/view?usp=sharing'
        text='View Resume →'
        padding={`p-3`}
      />
    </div>
    <div className='mt-20 flex justify-center flex-wrap gap-7'>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  </div>
  <img src="DP.JPG" alt="prince-gomez" className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mt-4 sm:mt-0 object-contain transform scale-90" />
</div>

  )
}

export default About;
