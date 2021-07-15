import React, {useState} from 'react'
import './Main.css'
import TimerLayout from '../TimerLayout/TimerLayout'
import Settings from '../Settings/Settings'
import Info from '../Info/Info'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrease_time, start_time, short_Break, switchSession, long_Break } from '../../store/action/action'
import { useEffect } from 'react'
// import AudioPlayer from 'react-audio-element';
// swal Alert
import Swal from 'sweetalert2'
// music
import sound from "../../ride.wav"
import StartStop from '../StartStop/StartStop'
// import pianino from '../../audio/pianino.mp3'


function Main() {
    // state
    const button = useSelector(state => state.button);
    const interval = useSelector(state => state.interval);
    const timerRunning = useSelector(state => state.timerRunning);
    const minuteSecond = useSelector(state => state.minuteSecond);
    const longBreak = useSelector(state => state.longBreak);
    const shortBreak = useSelector(state => state.shortBreak);
    const countFromStore = useSelector((state) => state.count); 

    const [count1, setCount1] = useState(countFromStore)
    const minutes = Math.floor(minuteSecond / 60);
    const [minute, setMinute] = useState(minutes);
    const [shortBreak1, setShortBreak1] = useState(shortBreak);
    const [longBreak1, setLongBreak1] = useState(longBreak);

    const dispatch = useDispatch()
    const audio = new Audio(sound);

    const ses = () => {
        Swal.fire('Time to Work!')
        audio.play()
    }
    const res = () => {
        Swal.fire('Time to Rest!')
    }
    // const les = () => {
    //     Swal.fire('Time to Rest!')
    // }

    useEffect(() => {
        let count = null;
        if (timerRunning && minuteSecond > 0) {
            count = setInterval(() => {
                dispatch(decrease_time())
        }, 1000)
        } else if (timerRunning && minuteSecond === 0) {
            audio.play();
        if (interval === 'Session') {
            dispatch(short_Break());
                res();
            
        }
        else if (interval === "Break" && minuteSecond===0) {
            setShortBreak1(shortBreak1 - 1)
            setCount1(count1 - 1)
            dispatch(switchSession());
                ses();
            if (shortBreak1 === 0) {
            setCount1(count1 - 1)
            }
            // else if (count1 === 0 && shortBreak1===0) {
            // dispatch(long_Break())
            // }
            
            // else {
            //     dispatch(switchSession())
            // }
        } 
        }
        else {
           clearInterval(count)
        }
        return ()=> clearInterval(count)
    },[audio, timerRunning, minuteSecond, interval, switchSession, decrease_time, short_Break, long_Break, count1, setCount1])


let obj = {
    shortBreak: shortBreak1,
    longBreak: longBreak1,
    minuteSecond: minute,
    sessionLength: minute,
    countFromStore: countFromStore,
  };

    return (
        <>
            <div>
                {/* <AudioPlayer src={pianino}
                    classNames={
                        {
                            controlButton: "custom-control",
                            playPause: "custom-play-pause",
                            timeText: "custom-time-text",
                            sliderTrack: "custom-slider-track"
                        }
                    } overrideStyles={true}
            /> */}
          </div>
        
        <div className="container">
            <div className="header">
                <div>
                    <span><Info/> </span>
                    <span><Settings
                        minuteSecond={minuteSecond}
                        longBreak={longBreak1}
                        setLongBreak1={setLongBreak1}
                        shortBreak={shortBreak1}
                        setShortBreak1={setShortBreak1}
                        minute={minute}
                        minutes={minutes}
                        setMinute={setMinute}
                        obj={obj}
                        setCount1={setCount1}
                            count1={count1}
                            
                            
                    /></span>
                </div>
            </div>
            <div>
                <TimerLayout minuteSecond={minuteSecond}/>
            </div>
            {!button ? (
            <button className="button" onClick={() => {
                dispatch(start_time())
            }}>start</button>
             ) : ( 
            <StartStop obj={obj}/>
              )} 
        </div>
        </>
    )
}

export default Main
