import { DEXENTRYDHELMISE, DEXENTRYGRIMMSNARL, DEXENTRYHYDRAPPLE, DEXENTRYINCINEROAR, DEXENTRYROSERADE, DEXENTRYTOXICROAK } from "../../../utils/Const"
import "./Modal.css"

const ModalDex = ({ dexOpen, closeModal, pokemonName }) => {

    if (!dexOpen) return null;

    let dexEntry;

    switch (pokemonName) {
        case "Dhelmise":
            dexEntry = DEXENTRYDHELMISE;
            break;
        case "Toxicroak":
            dexEntry = DEXENTRYTOXICROAK;
            break;
        case "Roserade":
            dexEntry = DEXENTRYROSERADE;
            break;
        case "Grimmsnarl":
            dexEntry = DEXENTRYGRIMMSNARL;
            break;
        case "Hydrapple":
            dexEntry = DEXENTRYHYDRAPPLE;
            break;
        case "Incineroar":
            dexEntry = DEXENTRYINCINEROAR;
            break;
        default:
            dexEntry = null;
    }

    return (
        <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <p>{dexEntry}</p>
                    <button className="button" onClick={closeModal}>Cerrar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDex;
