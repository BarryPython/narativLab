import "./Popup.scss"

export default function Popup({children,visible,setVisible,clickOutsideClose=true,closeButton=true}) {

    function handleSectionClick(e) {
        e.stopPropagation();
    }

    return(
        visible ?
        <div className="popup" onClick={()=>{clickOutsideClose && setVisible(false)}}>
            <div className="popup-content" onClick={handleSectionClick}>
                {children}
            </div>
        </div>
        :
        null
    )
}