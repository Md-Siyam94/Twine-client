import descount1 from "../../assets/descount-1.webp"
import descount2 from "../../assets/descount-2.webp"

const Descount = () => {
    return (
        <div className="py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 justify-end items-center ">
            <img className="w-96 object-cover" src={descount1} alt="Descount image " />
            <img className="w-96 object-cover" src={descount2} alt="Descount image" />
        </div>
    );
};

export default Descount;