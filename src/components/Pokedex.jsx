import "./Pokedex.css";
import Dhelmise from "./Pokemon/Dhelmise";
import Hydrapple from "./Pokemon/Hydrapple";
import Roserade from "./Pokemon/Roserade";
import Toxicroak from "./Pokemon/Toxicroak";
import Incineroar from "./Pokemon/Incineroar";
import Grimmsnarl from "./Pokemon/Grimmsnarl";
import { useState } from "react";
import ModalDex from "./Pokemon/Modal/ModalDex";

const Pokedex = () => {
    const [dexOpen, setDexOpen] = useState(false);

    const [pokemonName, setPokemonName] = useState(null)

    if (dexOpen) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    return (
        <div className="pokedex-container">
            <>
                <div className="row">
                    <Toxicroak setDexOpen={setDexOpen} setPokemonName={setPokemonName} />
                    <Hydrapple setDexOpen={setDexOpen} setPokemonName={setPokemonName} />
                    <Dhelmise setDexOpen={setDexOpen} setPokemonName={setPokemonName} />
                </div>
                <div className="row">
                    <Roserade setDexOpen={setDexOpen} setPokemonName={setPokemonName} />
                    <Incineroar setDexOpen={setDexOpen} setPokemonName={setPokemonName} />
                    <Grimmsnarl setDexOpen={setDexOpen} setPokemonName={setPokemonName} />
                </div>
            </>

            {dexOpen && (
                <ModalDex dexOpen={dexOpen} closeModal={() => setDexOpen(false)} pokemonName={pokemonName} />
            )}

        </div>
    );
}

export default Pokedex;
