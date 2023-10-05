import React from 'react'
import {Bar} from "react-chartjs-2"
import {Chart as ChartJs} from 'chart.js/auto'
export default function BarChat({cahrtData}) {
  return (
    <Bar data={cahrtData}/>
  )
}
