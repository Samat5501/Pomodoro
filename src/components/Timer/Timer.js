// import React, { useState } from 'react'

// function Timer() {
//     const [breakLength, setBreakLength] = useState(300)
  
//     const funcDecreament = () => {
//         const newBreakLength = breakLength - 60;
//     }

//     
//         setBreakLength(0)
//     } else {
//        
//     }

//     const funcIncreament = () => {
//         setBreakLength(breakLength + 60)
//     }
//     return (
//         <div>
//             <p className="break-label">break</p>
//             <p className="break-length">{breakLength}</p>
//         </div>
//     )
// }

// export default Timer
// // import { useRef, useState, useEffect } from 'react';

// // function Stopwatch() {

// //     const minute = Math.floor()
// //     // minute.setMinutes(minute.getMinutes() + );
// //   const timerIdRef = useRef(minute);
// //   const [count, setCount] = useState(minute);

// //   const startHandler = () => {
// //     if (timerIdRef.current) { return; }
// //     timerIdRef.current = setInterval(() => setCount(c => c-1), 1000);
// //   };

// //   const stopHandler = () => {
// //     clearInterval(timerIdRef.current);
// //     timerIdRef.current = 0;
// //   };

// //   useEffect(() => {
// //     return () => clearInterval(timerIdRef.current);
// //   }, []);

// //   return (
// //     <div>
// //       <div>Timer: {count}s</div>
// //       <div>
// //         <button onClick={startHandler}>Start</button>
// //         <button onClick={stopHandler}>Stop</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Stopwatch

// // function getFormattedTime(seconds) {
// //   return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
// //     seconds % 60
// //   ).padStart(2, "0")}`;
// // }
