import React from 'react';
import PortfolioCard from './PortfolioCard';
import CardDetails from './CardDetails';
import { Route, Switch } from 'react-router-dom';

const Portfolio = () => {
    const portfolioItems = [
        {
            image: 'neutral.jpg',
            title: 'Neutral',
            content: 'Neutral is a digital agency...',
            technologies: ['React', 'Tailwind', 'Nextjs'],
            demoLink: 'https://balikuddembe.github.io/ToDo-List-using-ES6-and-Webpack/dist/index.html',
            sourceCodeLink: 'https://github.com/Balikuddembe/ToDo-List-using-ES6-and-Webpack',
        },
        {
            image: 'neutral.jpg',
            title: 'Card 2',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            technologies: ['Ruby on Rails', 'PostgreSQL', 'Heroku'],
            demoLink: 'https://balikuddembe.github.io/ToDo-List-using-ES6-and-Webpack/dist/index.html',
            sourceCodeLink: 'https://github.com/Balikuddembe/ToDo-List-using-ES6-and-Webpack',
        },
        {
            image: 'neutral.jpg',
            title: 'Card 3',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
            technologies: ['Vue.js', 'Node.js', 'MongoDB'],
            demoLink: 'https://balikuddembe.github.io/ToDo-List-using-ES6-and-Webpack/dist/index.html',
            sourceCodeLink: 'https://github.com/Balikuddembe/ToDo-List-using-ES6-and-Webpack',
        },
        {
            image: 'neutral.jpg',
            title: 'Card 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: ['Angular', 'Express.js', 'MySQL'],
            demoLink: 'https://balikuddembe.github.io/ToDo-List-using-ES6-and-Webpack/dist/index.html',
            sourceCodeLink: 'https://github.com/Balikuddembe/ToDo-List-using-ES6-and-Webpack',
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
                        <PortfolioCard key={index} item={item} />
                    ))}            
            </div>
            </div>
        
         
        
                    
        </div>
    );
};

export default Portfolio;
