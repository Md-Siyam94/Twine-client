
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
                <WinterArrivalse title={'Winter Arrival'}  description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem blanditiis quibusdam eaque aperiam quis iste atque omnis, neque sapiente ut.'} image={WomanShoping} ></WinterArrivalse>
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
                <WinterArrivalse title={"Get What You Want"} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem blanditiis quibusdam eaque aperiam quis iste atque omnis, neque sapiente ut.'} image={ManShoping} reversClass='flex-row-reverse'></WinterArrivalse>
            </section>
            <section>
            <CategoryProducts category={"Pant"}></CategoryProducts>
            </section>
        </div>
    );
};

export default Home;