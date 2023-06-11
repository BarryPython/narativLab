import UseSessionStorage from "../../hook/UseSessionStorage";
import Popup from "./popup/Popup";
import "./PopupManager.scss"

//svg
import { ReactComponent as LogoInversed } from "../../assets/logo_inversed.svg";
import { ReactComponent as GrowArrow } from "../../assets/grow_arrow.svg";

export default function PopupManager() {
    
    const [betaPopup, setBetaPopup] = UseSessionStorage("betaPopup", true)
    
    return(
        <div>
            <Popup visible={betaPopup} setVisible={setBetaPopup} clickOutsideClose={false} closeButton={false}>
                <div className="beta-popup">
                    <span>
                        <LogoInversed/>
                    </span>
                    <p>
                    The dashboard you are about to see is under development.
                    <br/><br/> The current version is the BETA, to know what it corresponds consult the documentation below.
                    </p>
                    <div>
                        <button className="primary" onClick={()=>{setBetaPopup(false)}}>
                            I understand
                        </button>
                        <button className="secondary" onClick={()=>{window.location = "/"}}>
                            Read Documentation
                            <GrowArrow style={{marginLeft : "10px"}}/>
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}