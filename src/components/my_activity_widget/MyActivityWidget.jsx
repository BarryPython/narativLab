import { useState, useEffect } from 'react';

export default function MyActivityWidget ({width=100}){

    const [activities, setActivities] = useState([])

    let placeholder_activities = [
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

    useEffect(()=>{
        //TODO : fetch activities from backend
        setActivities(placeholder_activities)
    }, [])

    return (
        <div className={'tile w-'+width} style={{flexGrow: 1}}>
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
    )
}