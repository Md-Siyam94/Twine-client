import Backgound from '../../assets/creative-rounded-lines-edge-place-text-business-brochure-banner-poster-template-background.png'
import Photo from '../../assets/handsome-confident-young-curly-haired-man-drinking-coffee-standing-infront-isolated-white-wall.png'
import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa6';
import * as motion from "motion/react-client"

const Hero = () => {
    return (
        <div className='max-h-[calc(100vh-20vh)] lg:px-30 px-6 grid lg:grid-cols-5 grid-cols-1   items-center'>
            <div className='col-span-3 '>
                <h1 className='lg:text-7xl md:text-5xl text-3xl font-semibold '>Twine Were House</h1>
                <p className='my-4 '>Your trusted destination for quality products. We bring you carefully selected items, secure payments, and reliable delivery—so you can shop with confidence every time.</p>
               
                <motion.div whileHover={{scale: 1.03}} className='lg:w-48 w-40'>
                <Link to={"/products"} className='bg-teal-600 flex  justify-center gap-2 items-center py-4 rounded-full text-white bg-linear-80 from-teal-500 to-gray-500'>Let's Shop <FaShopify className='text-xl' /></Link>
                </motion.div>
               
            </div>
            <div className='col-span-2  hidden lg:block '>
                <img className='h-96 absolute ml-40 -z-40' src={Backgound} alt="" />
                <img className='h-[580px] ml-35 ' src={Photo} alt="" />
            </div>
        </div>
    );
};

export default Hero;