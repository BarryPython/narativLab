import React from 'react'
import "./MyActivity.scss"

function Home() {

  let activities =[
    {
    action: "Claim Profits",
    amount: "950",
    status: "pending",
    type: "Mensual payments",
    date: "Sept 1, 2023"
    },
    {
    action: "Investment",
    amount: "600",
    status: "success",
    type: "Mensual payments",
    date: "Sept 1, 2023"
    },
    {
    action: "Claim Profits",
    amount: "2600",
    status: "success",
    type: "Lottery",
    date: "Sept 1, 2023"
    },
    {
    action: "Investment",
    amount: "600",
    status: "failed",
    type: "Lottery",
    date: "Sept 1, 2023"
    },
    {
    action: "Investment",
    amount: "600",
    status: "success",
    type: "DAO vote",
    date: "Sept 1, 2023"
    },
    {
    action: "Claim Profits",
    amount: "1200",
    status: "success",
    type: "Mensual payments",
    date: "Sept 2, 2023"
    },
    {
    action: "Investment",
    amount: "800",
    status: "pending",
    type: "DAO vote",
    date: "Sept 2, 2023"
    },
    {
    action: "Claim Profits",
    amount: "4000",
    status: "success",
    type: "Lottery",
    date: "Sept 2, 2023"
    },
    {
    action: "Investment",
    amount: "500",
    status: "failed",
    type: "Mensual payments",
    date: "Sept 2, 2023"
    },
    {
    action: "Investment",
    amount: "1000",
    status: "success",
    type: "DAO vote",
    date: "Sept 2, 2023"
    },
    {
    action: "Claim Profits",
    amount: "1500",
    status: "success",
    type: "Mensual payments",
    date: "Sept 3, 2023"
    },
    {
    action: "Investment",
    amount: "2000",
    status: "pending",
    type: "Lottery",
    date: "Sept 3, 2023"
    },
    {
    action: "Claim Profits",
    amount: "800",
    status: "success",
    type: "DAO vote",
    date: "Sept 3, 2023"
    },
    {
    action: "Investment",
    amount: "700",
    status: "failed",
    type: "Mensual payments",
    date: "Sept 3, 2023"
    },
    {
    action: "Investment",
    amount: "900",
    status: "success",
    type: "DAO vote",
    date: "Sept 3, 2023"
    }
    ]

  return (
    <section className='tile w-100'>
      <table className='content stat-content'>
          <thead>
            <tr>
              <th>Type</th>
              <th>Date</th>
              <th>Action</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity)=>{
              return (
                <tr key={Math.random()}>
                  <td>{activity.type}</td>
                  <td>{activity.date}</td>
                  <td>{activity.action}</td>
                  <td>${activity.amount}</td>
                  <td className={activity.status}>{activity.status}</td>
                </tr>
              )
            })}
          </tbody>
          </table>
    </section>
  )
}

export default Home
