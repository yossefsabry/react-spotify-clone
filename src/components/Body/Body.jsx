import React from 'react'
import DescoverWeekly from '../DescoverWeekly'
import Header from '../Header'
import './Body.css'

const Body = () => {
  return (
    <div className="body__container">
      <Header />
      <DescoverWeekly />
    </div>
  )
}

export default Body

