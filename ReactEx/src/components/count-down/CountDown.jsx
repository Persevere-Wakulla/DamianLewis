// # Countdown Timer with useEffect
// ## Create a CountdownTimer component that displays a 
// countdown timer starting from a given initial value, and stops at 0. 
// Use the useEffect hook to update the displayed time every second.
// ### Expectations
// * Display the countdown timer, starting from the given initial value.

// * Update the timer every second using useEffect.

// * Stop the timer when it reaches 0.

// * Display the following text as the timer counts down: "Time Remaining: X"

// * Start the timer when the component mounts.

// * Stop the timer when the component unmounts.





import { useEffect, useState } from "react";
import './count-down.css'

function Timer() {
    // let timerA = 30;
    const [timer, setTimer] = useState(10);
    const [flag, setFlag] = useState(false)
    // console.log(flag)

    useEffect(() => {
        if (flag && timer > 0) {
            // let myInA = setInterval(() => { timerA -= 1 }, 1000)
            let myInt = setInterval(() => { setTimer(timer - 1) }, 1000)
            return () => { clearInterval(myInt) }
        }

    }, [timer, flag]);
    function toggleTimer(ev) {
        if (ev.target.textContent == 'Reset Timer') {
            setTimer(10)
            setFlag(false)
        }
        else {
            setFlag(flag ? false : true)
        }
        // setTimer(timer - 1)
        // console.log(timer)
        // console.log(flag)
    }

    return (
        <div>
                    <img src="./public/.svg" alt="" />
              
            <div style={{
                backgroundColor: 'black', height:890,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    textAlign: 'center',
                    margin: 80, backgroundColor: 'blueviolet',
                    color: 'whitesmoke', borderRadius: 10,
                    padding: 25
                }}>
                    <h1>Count Down Timer</h1>
                    <h2>Time Remaining: <span>{timer}</span></h2>
                    <button className="btn" type="button" onClick={toggleTimer}>
                        {timer < 1 ? "Reset Timer" : flag ? 'Stop Timer' : 'Start Timer'}</button>
                </div>
            </div>
        </div>

    )


};
export default Timer;


