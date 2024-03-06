import "./../Pokedex.css"

const Toxicroak = ({ setDexOpen, setPokemonName }) => {

    const handleOnClick = () => {
        setPokemonName("Toxicroak")
        setDexOpen(true)

    }


    return (
        <div className="square" style={{backgroundColor:"#5E1675"}}>
            <img src="../../public/img/Toxicroak.png" alt="Toxicroak" onClick={handleOnClick} draggable={false}/>
        </div>
    )
}

export default Toxicroak