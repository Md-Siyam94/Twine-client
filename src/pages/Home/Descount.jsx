import descount1 from "../../assets/descount banner.webp"
import descount2 from "../../assets/descount-2.webp"

const Descount = () => {
    return (
        <div className="py-10 lg:py-20 max-w-7xl px-5 mx-auto  ">
            <img className="object-cover rounded-xl hidden md:block" src={descount1} alt="Descount image " />
            <img className="w-96 object-cover rounded-xl md:hidden" src={descount2} alt="Descount image" />
        </div>
    );
};

export default Descount;