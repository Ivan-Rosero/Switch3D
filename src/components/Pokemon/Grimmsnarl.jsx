import "./../Pokedex.css"

const Grimmsnarl = ({ setDexOpen, setPokemonName }) => {

    const handleOnClick = () => {
        setPokemonName("Grimmsnarl")
        setDexOpen(true)
    }

    
    return (
        <div className="square" style={{backgroundColor:"#FF9BD2"}}>
            <img src="../../public/img/Grimmsnarl.png" alt="Grimmsnarl" onClick={handleOnClick} draggable={false} />
        </div>
    )
}

export default Grimmsnarl