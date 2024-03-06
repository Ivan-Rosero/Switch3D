import "./../Pokedex.css"

const Roserade = ({ setDexOpen, setPokemonName }) => {

    const handleOnClick = () => {
        setPokemonName("Roserade")
        setDexOpen(true)

    }
    return (
        <div className="square" style={{backgroundColor:"#65B741"}}>
            <img src="../../public/img/Roserade.png" alt="Roserade" onClick={handleOnClick} draggable={false}/>
        </div>
    )
}

export default Roserade