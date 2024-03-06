import "./../Pokedex.css"

const Hydrapple = ({ setDexOpen, setPokemonName }) => {

    const handleOnClick = () => {
        setPokemonName("Hydrapple")
        setDexOpen(true)

    }
    return (
        <div className="square" style={{backgroundColor:"#6420AA"}}>
            <img src="../../public/img/Hydrapple.png" alt="Hydrapple" onClick={handleOnClick} draggable={false}/>
        </div>
    )
}

export default Hydrapple
