import React from 'react'
import "./Home.scss"
import ReactEcharts from "echarts-for-react"; 

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

  let activities = [
    {
      action : "Claim Profits",
      amount : "950",
      status : "/"
    },
    {
      action : "Claim Profits",
      amount : "2600",
      status : "Success"
    },
    {
      action : "Investment",
      amount : "600",
      status : "Success"
    },
    {
      action : "Investment",
      amount : "600",
      status : "Success"
    }
  ]

  const option = {
    /*tooltip: {
      triggerOn : "mousemove",
      trigger: 'axis',
      backgroundColor : "#7EE48C",
      position: function (pt) {
        return [pt[0], '10%'];
      },
      formatter: '{c0}'
    },*/
    color: "#7EE48C",
    grid : {
      width : "100%",
      height: "140px",
      left: 0,
    },
    xAxis: {
      type: 'value',
      show : false,
      min: function (value) {
        return value.min;
      },
      max: function (value) {
        return value.max;
      }
    },
    yAxis: {
      show : false,
      type: 'value',
      min: function (value) {
        return value.min;
      },
      max: function (value) {
        return value.max;
      }
    },
    series: [
      {
        data: [[0, 12], [1, 13], [2, 0], [4, 15], [5, 7], [6, 22], [8, 10], [9, 1], [11, 14], [16, 20], [17, 18], [19, 25], [21, 26], [23, 27]],
        type: 'line',
        animation : false,
        areaStyle: {
          color : "#7EE48C"
        }
      }
    ]
  }; 

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
          <div className='title'>
              <span className='logo-inversed'>
                <LogoInversed />
              </span>
            <h2>NRT - $2.46</h2>
          </div>
          <div className='content stat-content'>
            <ReactEcharts option={option} />
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
                  <td>{activity.status}</td>
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
