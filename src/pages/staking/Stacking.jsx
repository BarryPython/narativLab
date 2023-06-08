import { useState, useEffect } from "react";

//css
import "./Stacking.scss"

export default function Stacking() {

    const [stakeApy, setStakeApy] = useState(0);
    const [totalStaked, setTotalStaked] = useState(0);
    const [unlockingTime, setUnlockingTime] = useState("");
    const [pendingRewards, setPendingRewards] = useState(0);
    const [status, setStatus] = useState(false);
    const [investmentTickets, setInvestmentTickets] = useState(0);
    const [narativPass, setNarativPass] = useState(0);
    const [nextTierNrt, setnextTierNrt] = useState(0);

    useEffect(() => {
        //TODO web3 dev here you can set the values for the user
        //this function is called when the page is loaded
        setStakeApy(5);
        setTotalStaked(5489);
        setUnlockingTime("7d 20h 29mm");
        setPendingRewards(4.51);
        setStatus(true);
        setInvestmentTickets(3);
        setNarativPass(3);
        setnextTierNrt(9511);
    },[]);

    return (
        <div className="column w-100" style={{gap : "26px"}}>
            <div className="row max w-100">
                <div className="tile w-75 ">
                    <div className="title">
                        <h2>$NRT Staking</h2>
                    </div>
                    <div className="content tableau">
                        <span><p>Staking APY</p><p><strong>{stakeApy}%</strong></p></span>
                        <span><p>Total Staked</p><p><strong>{totalStaked}</strong></p></span>
                        <span><p>Unlocking time</p><p><strong>{unlockingTime}</strong></p></span>
                        <span><p>Pending rewards</p><p><strong>{pendingRewards}</strong></p></span>
                        <div className="footer">
                            <button className="primary">Stake / Unstake</button>
                            <button className="secondary">Claim Rewards</button>
                        </div>
                    </div>
                </div>
                <div className="tile w-40 ">
                    <div className="title">
                        <h2>Eligibility</h2>
                    </div>
                    <div className="content tableau">
                        <span><p>Status</p><p><strong>{status ? "Eligible" : "Ineligible"}</strong></p></span>
                        <span><p>Investment Tickets</p><p><strong>{investmentTickets}</strong></p></span>
                        <span><p>Narativ Pass</p><p><strong>{narativPass}</strong></p></span>
                        <span><p>Staked $NRT</p><p><strong>{totalStaked}</strong></p></span>
                        <div>
                            <button className="primary">Stake / Unstake</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row max w-100">
                <div className="tile w-75 ">
                    <div className="title">
                        <h2>Lottery Details</h2>
                    </div>
                    <div className="lottery-detail">
                        <p>125 NRT = <strong>5%</strong></p>
                        <p>500 NRT = <strong>15%</strong></p>
                        <p>1,500 NRT = <strong>30%</strong></p>
                        <p>5,000 NRT = <strong>50%</strong></p>
                        <p>15,000 NRT = <strong>75%</strong></p>
                        <p>Pass = <strong>100%</strong></p>
                    </div>
                </div>
                <div className="tile w-40 ">
                    <div className="title">
                        <h2>My Lottery Chances</h2>
                    </div>
                    <div className="content lottery-chances">
                        <h3>49.59%</h3>
                        <ul>
                            <li><strong>{totalStaked}</strong> Staked $NRT </li>
                            <li><strong>{nextTierNrt}</strong> $NRT for the next tier</li>
                        </ul>
                        <button className="primary">
                            Buy $NRT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}