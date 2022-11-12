import React from 'react'
import '../styles/dashboard.css'

import MileChart from '../charts/MileChart'
import CarStatsChart from '../charts/CarStatsChart'
import SingleCar from '../components/reuseable/SingleCar'
import RecommendCarCard from '../components/Ui/RecommendCarCard'
import recommendCarsData from '../assets/dummy-data/recommendCars'

const carObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
}

const tripObj = {
  title: "Daily Trips",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
}

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
}

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
}

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="dashboard_wrapper">
        <div className="dashboard_cards">
          <SingleCar item={carObj} />
          <SingleCar item={tripObj} />
          <SingleCar item={clientObj} />
          <SingleCar item={distanceObj} />
        </div>
        <div className="statics">
          <div className="starts">
            <h3 className='stats__title'>Miles Statistics</h3>
            <MileChart/>
          </div>

          <div className="starts">
            <h3 className='stats__title'>Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>
        <div className="recommend__car-wrapper">
          {
            recommendCarsData.map(item=> <RecommendCarCard item={item} key={item.id} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard