import "./../Pokedex.css";

const Dhelmise = ({ setDexOpen, setPokemonName }) => {

    const handleOnClick = () => {
        setPokemonName("Dhelmise")
        setDexOpen(true)

    }

    return (
        <div className="square" style={{ backgroundColor: "#3E3232" }}>
            <img src="../../public/img/Dhelmise.png" alt={"Dhelmise"} onClick={handleOnClick} draggable={false} />
        </div>
    );

};

export default Dhelmise;
