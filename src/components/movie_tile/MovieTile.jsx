import {useEffect, useState} from "react";

//css
import "./MovieTile.scss"

export default function MovieTile({movie, width=25}){

    const [investor, setInvestor] = useState(0)
    const [totalInvested, setTotalInvested] = useState(0)
    const [percentRaise, setPercentRaise] = useState(0)

    useEffect(()=>{
        //TODO : fetch data from backend using adress
        //the following are placeholders
        //the ether address of the movie is movie.address
        setInvestor(1000)
        var newtotalInvested = 1000000
        setTotalInvested(newtotalInvested)
        // set percent raise as the percentage of total raised from totalInvested
        setPercentRaise(100*newtotalInvested/movie.total_raise)
    }, [])

    return(
        <div className={"movie-tile tile w-"+width+(percentRaise === 100 ? " sold-out" : "")}>
            <img src={movie.thumbnail} alt={movie.title}/>
            <div className="detail">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <div>
                    <div>
                        <div>
                            <p><strong>$ {totalInvested}</strong></p>
                            <p>Raised out of ${movie.total_raise}</p>
                        </div>
                        <div>
                            <p><strong>{investor}</strong></p>
                            <p>Investors</p>
                        </div>
                        <button className="primary fit desktop-only">
                            {percentRaise === 100 ? " sold-out" : "Invest Now"}
                        </button>
                    </div>
                    <div className="progress-bar">
                        <span style={{width : `${percentRaise}%`}}></span>
                    </div>
                    <button className="primary mobile-only">
                            {percentRaise === 100 ? " sold-out" : "Invest Now"}
                    </button>
                </div>
            </div>
        </div>
    )
}