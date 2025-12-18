
import Hero from './Hero';
import CategoryProducts from '../../components/CategoryProducts';
import TargetAudiance from './TargetAudiance';
import WinterArrivalse from './WinterArrivalse';
import Facilities from './Facilities';
import WomanShoping from '../../assets/woman-shopping-street-smiling-winter.jpg'
import ManShoping from '../../assets/man with cloth.jpg'




const Home = () => {

        return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            {/* <section className='w-11/12 px-16 mx-auto py-24'>
                <TargetAudiance></TargetAudiance>
            </section> */}
            <section>
            <CategoryProducts category={"T-shirt"}></CategoryProducts>
            </section>
            <section className=' '>
                <WinterArrivalse title={'Winter Arrival'}  description={'From soft fabrics to timeless designs, winter fashion meets everyday elegance.Stay warm, stay stylish, and make every winter moment feel special. This season is all about comfort, confidence, and effortless charm.'} image={WomanShoping} ></WinterArrivalse>
            </section>
            <section>
            <CategoryProducts category={"Saree"}></CategoryProducts>
            </section>
            <section>
                <Facilities></Facilities>
            </section>
            <section>
            <CategoryProducts category={"Panjabi"}></CategoryProducts>
            </section>
            <section>
                <WinterArrivalse title={"Get What You Want"} description={'Discover pieces designed for comfort, warmth, and everyday elegance.From casual wear to standout looks, find styles that match your mood and moments.Crafted with quality fabrics to keep you comfortable all season long.'} image={ManShoping} reversClass='flex-row-reverse'></WinterArrivalse>
            </section>
            <section>
            <CategoryProducts category={"Pant"}></CategoryProducts>
            </section>
        </div>
    );
};

export default Home;