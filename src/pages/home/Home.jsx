import React from 'react'
import "./Home.scss"
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';

//svg
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as LogoInversed } from "../../assets/logo_inversed.svg";
import { ReactComponent as Unicorn } from "../../assets/unicorn.svg";

//images
import card from "../../assets/card.png";

function Home() {

  let nrtSold = 5489.74
  let equivalent = 13504
  let narativPassOwned = 3
  let floorPrice = 1.44
  let holders = 289

  let activities = [
    {
      action : "Claim Profits",
      amount : "950",
      status : "pending"
    },
    {
      action : "Claim Profits",
      amount : "2600",
      status : "success"
    },
    {
      action : "Investment",
      amount : "600",
      status : "success"
    },
    {
      action : "Investment",
      amount : "600",
      status : "success"
    }
  ]

  let options = {
    maintainAspectRatio : false,
    responsive: true,
    plugins: {
      legend: {
          display : false,
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0,
        to: 0.3,
        loop: false
      }
    },
    scales: {
      y : {
          display : false,
      }, 
      x : {
          display : false,
      }
    }
  }

  let data = {
    labels : [0,1,2,3,4,5,6,7,8,9,10,11,12],
    datasets : [
      {
        fill : true,
        borderColor : "#7ee48c",
        backgroundColor : "#c9f7d0",
        label : "lala",
        data : [1,2,4,8,5,5,6,7,5,8,2,0,4,6,11]
      },
    ]
  }

  return (
    <>
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
      <div className='row' style={{width : "100%", gap : "30px", alignItems: "stretch"}}>
        <div className='tile w-100' style={{flexGrow: 1}}>
          <div className='title' style={{width : "100%", justifyContent : "flex-start"}}>
              <span className='logo-inversed'>
                <LogoInversed />
              </span>
            <h2>NRT - $2.46</h2>
            <button className='' style={{marginLeft : "auto", padding : "10px", width: "fit-content"}}>
              <Unicorn />
            </button>
          </div>
          <div className='content'>
            <div className='chart-content'>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
        <div className='tile w-100' style={{flexGrow: 1}}>
          <div className='title large'>
            <h2>My Activity</h2>
            <a href='/My-activity'>See all</a>
          </div>
          <table className='content stat-content'>
          <thead>
            <tr>
              <th>Action</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.slice(0,3).map((activity)=>{
              return (
                <tr key={Math.random()}>
                  <td>{activity.action}</td>
                  <td>${activity.amount}</td>
                  <td className={activity.status}>{activity.status}</td>
                </tr>
              )
            })}
          </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home
