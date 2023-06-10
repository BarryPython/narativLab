import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import movies from "../../assets/movies.json"

import "./Movie.scss"

export default function Movie() {
  const { title } = useParams();
  const movie = movies.find(MOVIE => MOVIE.title === title.replaceAll("-"," "));

  const [percentRaise, setPercentRaise] = useState(50)

  //investment
  const [ticketsInvest, setTicketsInvest] = useState(0)
  const [maxInvest, setMaxInvest] = useState(0)
  const [myInvestment, setMyInvestment] = useState(0)

  useEffect(() => {
    //TODO for web3 dev : get the real value of the movie
    //placeholder
    setTicketsInvest(3)
    setMaxInvest(1000)
    setMyInvestment(100)
  }, [])

  //ROI Calculator
  const [potentialInvest, setMyInvest] = useState(0)
  const [potentialROI, setPotentialROI] = useState(0)
  const [potentialEarnings, setPotentialEarnings] = useState(0)

  useEffect(() => {
    setPotentialEarnings(potentialInvest * (potentialROI/100))
  }, [potentialInvest, potentialROI])

  return (
    <div className='movie-container'>
      <div className='tile w-100'>
        <div className="title">
          <h1>{movie.title}</h1>
        </div>
        <div className="content tableau">
          <span><p>Author Name</p><p><strong>{movie.author}</strong></p></span>
          <span><p>Budget</p><p><strong>{movie.budget}</strong></p></span>
          <span><p>Production Time</p><p><strong>{movie.time}</strong></p></span>
          <span><p>Category</p><p><strong>{movie.category}</strong></p></span>
        </div>
        <img src={movie.thumbnail} alt={movie.title} />
        <h2>Synopsis</h2>
        <p>{movie.synopsis}</p>
      </div>
      <div className='tool-container'>
        <div className='tile'>
          <div className="title">
            <h2>Informations</h2>
          </div>
          <div className="content tableau">
            <span><p>Status</p><p><strong>{movie.author}</strong></p></span>
            <span><p>Raised</p><p><strong>{movie.budget}</strong></p></span>
            <span><p>Left</p><p><strong>{movie.time}</strong></p></span>
            <div className="progress-bar">
              <span style={{width : `${percentRaise}%`}}></span>
            </div>
            <span><p>Investors</p><p><strong>{movie.category}</strong></p></span>
          </div>
        </div>
        <div className='tile'>
          <div className="title">
            <h2>My Investment</h2>
          </div>
          <div className="content tableau">
            <span><p>Tickets Investment</p><p><strong>{ticketsInvest}</strong></p></span>
            <span><p>Max invest</p><p><strong>${maxInvest}</strong></p></span>
            <span><p>My investment</p><p><strong>${myInvestment}</strong></p></span>
            <div className="footer">
              <button className="primary">Invest Now</button>
            </div>
          </div>
        </div>
        <div className='tile'>
          <div className="title">
            <h2>ROI Calculator</h2>
          </div>
          <div className="content tool">
            <div>
              <label>My investment</label>
              <div className='input'>
                <span>$</span>
                <input type="number" placeholder='1 100' onChange={(e)=>{setMyInvest(e.target.value)}}/>
              </div>
            </div>
            <div>
              <label>Potential ROI</label>
              <div className='input'>
                <span>%</span>
                <input type="number" placeholder='600' onChange={(e)=>{setPotentialROI(e.target.value)}}/>
              </div>
            </div>
            <div>
              <label className='green'>Potential Earnings</label>
              <div className='input'>
                <span>$</span>
                <input type="number" placeholder='7 700' value={potentialEarnings} disabled/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}