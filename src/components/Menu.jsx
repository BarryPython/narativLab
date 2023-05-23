import { useEffect, useRef , useState} from "react";
import "./Menu.scss";

//svg
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Category } from "../assets/category.svg";
import { ReactComponent as Ticket } from "../assets/ticket.svg";
import { ReactComponent as Wallet } from "../assets/wallet.svg";
import { ReactComponent as Stat } from "../assets/stat.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as Exit } from "../assets/exit.svg";

//img
import arb from "../assets/arb.png"

export default function Menu(){

    const menu = useRef(null)
    const [entered, setEntered] = useState(false);

    function onEnter() {
        setEntered(true);
      }

    function onLeave(){
        menu.current.classList.add("collapsed");
        setEntered(false);
    }

    useEffect(()=>{
        setTimeout(() => {
            if (entered) {
                menu.current.classList.remove("collapsed");
            }
        }, 1000);
    },[entered])

    return(
        <nav className="collapsed" ref={menu}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <Logo className="logo"/>
            <div className="link-list">
                <a className="link active" href="/">
                    <Category />
                    <p>Dashboard</p>
                </a>
                <a className="link" href="/">
                    <Ticket />
                    <p>Staking / Tickets</p>
                </a>
                <a className="link" href="/">
                    <Wallet />
                    <p>Investment</p>
                </a>
                <a className="link" href="/">
                    <Stat />
                    <p>Statistics</p>
                </a>
            </div>
            <div className="foot">
                <button className="little">
                    <img src={arb} alt="web3 logo" />
                    <p>ARB</p>
                </button>
                <button className="little">
                    <Moon />
                </button>
                <button className="little">
                    <Exit />
                </button>
            </div>
        </nav>
    )
}