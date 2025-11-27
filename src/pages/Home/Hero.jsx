import Backgound from '../../assets/creative-rounded-lines-edge-place-text-business-brochure-banner-poster-template-background.png'
import Photo from '../../assets/handsome-confident-young-curly-haired-man-drinking-coffee-standing-infront-isolated-white-wall.png'
import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className='max-h-[calc(100vh-20vh)] lg:px-30 px-10 flex py-10 lg:py-0  items-center'>
            <div className='flex-1  mt-0 '>
                <h1 className='lg:text-7xl md:text-5xl text-5xl font-semibold '>Twine Were House</h1>
                <p className='mt-6 mb-9 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum non explicabo corrupti provident, recusandae modi debitis placeat quibusdam minus!</p>
                <Link to={"/products"} className='flex items-center hover:bg-teal-700 gap-2 w-48 px-10 py-4 mt-3  text-white text-lg rounded-full bg-teal-600'>Let's Shop <FaShopify className='text-xl' /></Link>
            </div>
            <div className='flex-1  hidden lg:block '>
                <img className='h-96 absolute ml-40 -z-40' src={Backgound} alt="" />
                <img className='h-[580px] ml-35 ' src={Photo} alt="" />
            </div>
        </div>
    );
};

export default Hero;