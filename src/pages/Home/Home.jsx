
import Hero from './Hero';

import CategoryProducts from '../../components/CategoryProducts';
import TargetAudiance from './TargetAudiance';




const Home = () => {

        return (
        <div>
          
            <section>
                <Hero></Hero>
            </section>
            <section className='w-11/12 px-30 mx-auto py-24'>
                <TargetAudiance></TargetAudiance>
            </section>
            <section>
            <CategoryProducts category={"T-shirt"}></CategoryProducts>
            </section>
        </div>
    );
};

export default Home;