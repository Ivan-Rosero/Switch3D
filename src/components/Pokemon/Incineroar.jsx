import "./../Pokedex.css"

const Incineroar = ({ setDexOpen, setPokemonName }) => {

    const handleOnClick = () => {
        setPokemonName("Incineroar")
        setDexOpen(true)

    }
    return (
        <div className="square" style={{backgroundColor:"#FF004D"}}>
            <img src="../../public/img/Incineroar.png" alt="Incineroar" onClick={handleOnClick} draggable={false}/>
        </div>
    )
}

export default Incineroar