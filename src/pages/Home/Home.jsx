
import Hero from './Hero';

import CategoryProducts from '../../components/CategoryProducts';
import TargetAudiance from './TargetAudiance';
import WinterArrivalse from './WinterArrivalse';
import Facilities from './Facilities';




const Home = () => {

        return (
        <div>
          
            <section>
                <Hero></Hero>
            </section>
            <section className='w-11/12 px-16 mx-auto py-24'>
                <TargetAudiance></TargetAudiance>
            </section>
            <section>
            <CategoryProducts category={"T-shirt"}></CategoryProducts>
            </section>
            <section className='py-20 '>
                <WinterArrivalse></WinterArrivalse>
            </section>
            <section>
            <CategoryProducts category={"Saree"}></CategoryProducts>
            </section>
            <section>
            <CategoryProducts category={"Panjabi"}></CategoryProducts>
            </section>
            <section>
                <Facilities></Facilities>
            </section>
            <section>
            <CategoryProducts category={"Pant"}></CategoryProducts>
            </section>
        </div>
    );
};

export default Home;