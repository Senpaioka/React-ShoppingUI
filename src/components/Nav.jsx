import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

function NavBar({money}) {

    return(
    <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl"> <FontAwesomeIcon icon={faCoffee} />shoppingUI</a>
        </div>
        <div className="flex items-center gap-1 mr-5 font-bold">
            <p><FontAwesomeIcon icon={faCoins} /></p>
            <p>{money}<span>$</span></p>
        </div>
    </div>
    )
}

export default NavBar;