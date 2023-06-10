import { useState, useEffect } from "react"
import MyActivityWidget from "../../components/my_activity_widget/MyActivityWidget"

import movies from "../../assets/movies.json"

//css
import './Investment.scss'
import MovieTile from "../../components/movie_tile/MovieTile"

export default function Investment() {

    const [totalInvested, setTotalInvested] = useState(0)
    const [totalProfit, setTotalProfit] = useState(0)
    const [pendingProfits, setPendingProfits] = useState(0)

    useEffect(()=>{
        //TODO : fetch data from backend
        //the following are placeholders
        setTotalInvested(5000)
        setTotalProfit(20000)
        setPendingProfits(10000)
    }, [])

    return (
        <div className="column w-100" style={{gap : "26px"}}>
            <div className="row max w-100">
                <div className="tile w-50 ">
                    <div className="title">
                        <h2>Investment Portfolio</h2>
                    </div>
                    <div className="content tableau">
                        <span><p>Total Invested</p><p><strong>${totalInvested}</strong></p></span>
                        <span><p>Total Profits</p><p><strong>${totalProfit}</strong></p></span>
                        <span><p>Pending profits</p><p><strong>${pendingProfits}</strong></p></span>
                        <div className="footer">
                            <button className="primary">Claim Profits</button>
                        </div>
                    </div>
                </div>
                <MyActivityWidget width="50"/>
            </div>
            <div className="row max w-100">
                <div className="tile w-100 split">
                    <div className="title large" style={{margin : "0px"}}>
                        <h2>Film Investment</h2>
                        <a href='/film-Investment'>See all</a>
                    </div>
                </div>
            </div>
            <div className="movies-container">
                {movies.map((movie, index)=>{
                    if(index > 1) return null;
                    return(
                        <MovieTile key={index} movie={movie} width={100} url={movie.title.replaceAll(" ","-")}/>
                    )
                })}
            </div>
        </div>
    )
}