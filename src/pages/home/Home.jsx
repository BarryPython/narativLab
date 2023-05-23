import React from 'react'
import "./Home.scss"

//svg
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as LogoInversed } from "../../assets/logo_inversed.svg";

//images
import card from "../../assets/card.png";

function Home() {

  let nrtSold = 5489.74
  let equivalent = 13504
  let narativPassOwned = 3
  let floorPrice = 1.44
  let holders = 289

  return (
    <section className='tile w-100'>
      <div className='title'>
        <h2>Wallet</h2>
        <Info />
      </div>
      <div className='row'>
        <div className='content w-100 solde'>
          <div className='text'>
            <span>
              <LogoInversed />
            </span>
            <div>
              <div>
                <p>{nrtSold}</p><p>$NRT</p>
              </div>
              <p>${equivalent}</p>
            </div>
          </div>
        <div>
        <div className='btn-grp'>
           <button className='primary'>Stake</button>
          <button className='secondary'>Buy $NRT</button>
        </div>
      </div>
        </div>
        <div className='content w-100 buy'>
          <img src={card} alt='card' />
          <div>
            <span>
              <p>Narativ Pass owned</p><p><strong>{narativPassOwned}</strong></p>
            </span>
            <span>
              <p>Floor Price (ETH)</p><p><strong>{floorPrice}</strong></p>
            </span>
            <span>
              <p>Holders</p><p><strong>{holders}</strong></p>
            </span>
            <button className='primary'>Buy Narativ Pass</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
