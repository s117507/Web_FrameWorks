import styles from "./Root.module.css"
import {Outlet} from "react-router-dom";

const Root = () => {
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Pokemon</li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
    );
}

export default Root;