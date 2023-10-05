import React from 'react'
import { Line } from "react-chartjs-2"
import {Chart as ChartJs} from 'chart.js/auto'
export default function LineChart({cahrtData}) {
  return (
    <Line data={cahrtData}/>
  )
}