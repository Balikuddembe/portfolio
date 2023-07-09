import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const PortfolioCard = ({ item }) => {
    return (

        <div className="bg-zinc-900 shadow relative">
            <img src={item.image} alt={item.title} className="w-full h-auto mb-2" />
            <div className='flex flex-col space-y-2'>
                <div className=' flex items-end absolute top-48 left-4 '>
                    <span className=' text-yellow-400 font-extrabold text-4xl h-full' >|</span>
                </div>
                <div className=' text-xs ml-8 flex space-x-2 text-gray-500'>
                    {item.technologies.map((technology, techIndex) => (
                        <p key={techIndex}>{technology}</p>
                    ))}
                </div>
            </div>
            <div className='p-4'>
                <h3 className="text-lg font-bold mb-2 text-yellow-300">{item.title}</h3>
                <p className="text-gray-500 italic">{item.content}</p>
                <div className=' flex space-x-2 text-gray-500 py-2'>
                    <Link href={`/portfolio/${item.title.toLowerCase().replace(/ /g, '-')}`}>
                        <button className="flex items-center">
                            SEE MORE
                            <FiArrowRight className='ml-2' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;
