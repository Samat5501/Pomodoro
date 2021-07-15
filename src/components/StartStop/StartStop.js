import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { start_time, stop_time, reset_time } from "../../store/action/action";

function StartStop(props) {
    const dispatch = useDispatch()
  const timerRunning = useSelector(state => state.timerRunning)
  
    return (
      <div>
        <button className="button"
          onClick={() => {
            timerRunning ? dispatch(stop_time()) : dispatch(start_time());
          }}
        >
          {timerRunning ? "stop" : "continue"}
        </button>
        <button className="button"
          onClick={() => {
            dispatch(reset_time(props.obj));
          }}
        >
          reset
        </button>
      </div>
    );
}

export default StartStop
