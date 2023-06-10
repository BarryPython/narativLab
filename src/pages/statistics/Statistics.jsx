import { useState, useEffect } from "react";

//css 
import "./Statistics.scss"

export default function Statistics() {

    //narativ pass
    const [floorPrice, setFloorPrice] = useState(0)
    const [nrtHolders, setNrtHolders] = useState(0)
    const [volume, setVolume] = useState(0)
    const [listed, setListed] = useState(0)

    //nrt
    const [price , setPrice] = useState(0)
    const [stakes, setStakes] = useState(0)
    const [passHolders, setPassHolders] = useState(0)
    const [marketCap, setMarketCap] = useState(0)

    useEffect(() => {
        //TODO web3 dev here fetch data from blockchain
        //placeholder data
        setFloorPrice(1.44)
        setNrtHolders(289)
        setVolume(2122)
        setListed(3)

        setPrice(2.46)
        setStakes(67.9)
        setPassHolders(14211)
        setMarketCap("56.7M")
    }, [])

    return (
        <div className="column max w-100 stat-container">
            <div className="tile w-100">
                <div className="title">
                    <h2>Narativ Pass</h2>
                </div>
                <div className="number-container">
                    <div className="content number w-25">
                        <h2>
                            {floorPrice}
                        </h2>
                        <h3>
                            Floor Price ($ETH)
                        </h3>
                    </div>
                    <div className="content number w-25">
                        <h2>
                            {passHolders}
                        </h2>
                        <h3>
                            Holders
                        </h3>
                    </div>
                    <div className="content number w-25">
                        <h2>
                            {volume}
                        </h2>
                        <h3>
                            Total Volume ($ETH)
                        </h3>
                    </div>
                    <div className="content number w-25">
                        <h2>
                            {listed}%
                        </h2>
                        <h3>
                            Listed
                        </h3>
                    </div>
                </div>
            </div>
            <div className="tile w-100">
                <div className="title">
                    <h2>$NRT</h2>
                </div>
                <div className="number-container">
                    <div className="content number w-25">
                        <h2>
                            ${price}
                        </h2>
                        <h3>
                            Price
                        </h3>
                    </div>
                    <div className="content number w-25">
                        <h2>
                            {stakes}%
                        </h2>
                        <h3>
                            $NRT Stake
                        </h3>
                    </div>
                    <div className="content number w-25">
                        <h2>
                            {nrtHolders}
                        </h2>
                        <h3>
                            Holders
                        </h3>
                    </div>
                    <div className="content number w-25">
                        <h2>
                            ${marketCap}
                        </h2>
                        <h3>
                            Market Cap
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row w-100">
                <div className="tile w-50">
                    <div className="title">
                        <h2>Socials</h2>
                    </div>
                    <div className="content soon">
                        <h2>
                            Coming Soon
                        </h2>
                    </div>
                </div>
                <div className="tile w-50">
                    <div className="title">
                        <h2>Funded Films Stats</h2>
                    </div>
                    <div className="content soon">
                        <h2>
                            Coming Soon
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}