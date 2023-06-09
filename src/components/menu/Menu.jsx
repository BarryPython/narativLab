import "./Menu.scss";
import { useState } from "react";

//svg
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Category } from "../../assets/category.svg";
import { ReactComponent as Ticket } from "../../assets/ticket.svg";
import { ReactComponent as Wallet } from "../../assets/wallet.svg";
import { ReactComponent as Stat } from "../../assets/stat.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ReactComponent as Exit } from "../../assets/exit.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

//img
import arb from "../../assets/arb.png"

export default function Menu(){

    const [subMenu, setSubMenu] = useState(true);

    function getTitle(){
        const search = window.location.pathname.split('/').pop();
        if (search === "") return "dashboard";
        return search;
    }

    return(
        <>
        <div className="mobile-only topBar">
            <Logo className="logo"/>
            <button className="little" onClick={()=>{setSubMenu(!subMenu)}}>
                <MenuIcon />
            </button>
        </div>
        <nav className={subMenu ? "collapsed" : ""}>
            <Logo className="logo"/>
            <div className="link-list">
                <a className={"link " + (getTitle() === "dashboard" ? "active" : "")} href="/">
                    <Category />
                    <p>Dashboard</p>
                </a>
                <a className={"link " + (getTitle() === "staking-|-Tickets" ? "active" : "")} href="staking-|-Tickets">
                    <Ticket />
                    <p>Staking / Tickets</p>
                </a>
                <a className={"link " + ((getTitle() === "investment") || (getTitle() === "film-Investment") ? "active" : "")} href="investment">
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
            <div className="mobile-only coins-container">
                <p style={{marginLeft : "6px"}}>
                    <strong>
                    NRT / USDC
                    </strong>
                </p>
                <p style={{marginLeft : "56px"}}>
                    <strong>
                    $2.46
                    </strong>
                </p>
                <button style={{marginLeft : "31px", height : "37px"}} className="primary fit">Swap</button>
            </div>
        </nav>
        <button className={subMenu ? "open desktop-only" : "open active desktop-only"} onClick={()=>{setSubMenu(!subMenu)}}>
                <Arrow />
        </button>
        </>
    )
}