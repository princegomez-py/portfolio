import React from 'react';
import { projects } from '../constants';
import Card from './Card';

const Works = () => {
  return (
    <div className="projects bg-black px-4 py-16" id='works'>
      <div className='text-white w-full sm:px-16 px-2'>
        <p className='font-light'>MY WORK</p>
        <h2 className='text-5xl font-extrabold mt-4'>Projects.</h2>
        <p className='mt-3 text-[17px] max-w-3xl leading-[30px]'>I love learning by experimenting on things. I have built a couple of projects with some incredible people in this journey. Here are some of them</p>
      </div>

      <div className='mt-20 flex justify-center flex-wrap gap-10'>
        {projects.map((project) => (
          <Card project={project} />
        ))}
      </div>
    </div>
  );
};

export default Works;