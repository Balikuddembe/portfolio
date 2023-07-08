import React from 'react';
import { FiArrowRight } from "react-icons/fi";

const Portfolio = () => {
  const portfolioItems = [
    {
      image: 'neutral.jpg',
      title: 'Neutral',
      content: 'Neutral is a digital agency...',
    },
    {
      image: 'image2.jpg',
      title: 'Card 2',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
      image: 'image3.jpg',
      title: 'Card 3',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        image: 'image1.jpg',
        title: 'Card 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
  ];

  return (
    <div className="bg-black p-4" id='portfolio'>
      <div className="max-w-6xl mx-auto ml-72">
      <div className=' text-white pt-24 flex font-semibold space-x-2'>
                    <span className="text-rose-700 text-3xl">|</span>
                    <h2 className='text-3xl'>Portfolio</h2>
                </div>
                <p className=' text-white py-4'>Some of my best works</p>
        <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-zinc-900 p-4 shadow">
              <img src={item.image} alt={item.title} className="w-full h-auto mb-4 text-ye" />
              <div className=' flex space-x-2 text-gray-500'>
              <p>React</p>
              <p>Rails</p>
              <p>Scss</p>
              <p>Tailwind</p>
              </div>  
              <h3 className="text-lg font-bold mb-2 text-yellow-300">{item.title}</h3>
              <p className="text-gray-500 italic">{item.content}</p>
              <div className=' flex space-x-2 text-gray-500 py-2'>
              <button className="flex items-center">
                SEE MORE
                <FiArrowRight className='ml-2'/>
              </button>
              

              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
