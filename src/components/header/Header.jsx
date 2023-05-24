import "./Header.scss";

//svg 

import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export default function Header(){

    const adress = "0x9D3256bd9404f3E86a7C5D1BACA69847cC77f62E"

    function getTitle(){
        const search = window.location.pathname.split('/').pop();
        if (search === "") return "dashboard";
        return search;
    }

    return (
        <div className="header-container">
            <button className="back" onClick={()=>{window.history.back()}}>
                <Arrow />
            </button>
            <h1>{getTitle().replace('-'," ")}</h1>
            <div className="coins-container desktop-only">
                <div>
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
                <div>
                    <p>
                        <strong>
                        {adress.slice(0,5)+"..."+adress.slice(-6,-1)}
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    )
}