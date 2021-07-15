import React from 'react'
import { useSelector } from 'react-redux';
import './TimerLayout.css'

function TimerLayout(props) {

  const minuteSecond = useSelector(state => state.minuteSecond);
  let minutes = Math.floor(minuteSecond / 60);
  let seconds = minuteSecond - minutes * 60;
    
  const interval = useSelector(state => state.interval)

  const radius = 150;
    const stroke = 5;
  const normalizedRadius = radius - stroke * 4;
  // console.log(normalizedRadius);
    const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - ( minuteSecond / 60 ) * circumference;
  // console.log(strokeDashoffset);
  
  return (
      <>
      <div className="TimeDisplay">
            <svg width="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
                <circle
                    stroke="#ddd"
                    fill="#fff"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="#D9534F"
                    fill="transparent"
                    strokeWidth={stroke}
                    // strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <div className="mainNumber">
          {minutes < 10 ? ("0" + minutes).slice(-2) : minutes} : {seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
          <p>Pomodoro Technique</p>
          <p>{interval}</p>
            </div>
        
        </div>
      </>
    )
}

export default TimerLayout
