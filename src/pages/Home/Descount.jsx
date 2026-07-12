import descount1 from "../../assets/descount-1.webp"
import descount2 from "../../assets/descount-2.webp"

const Descount = () => {
    return (
        <div className="flex justify-evenly">
            <img className="h-40 w-60 object-cover" src={descount1} alt="Descount image " />
            <img className="h-40 w-60 object-cover" src={descount2} alt="Descount image" />
        </div>
    );
};

export default Descount;