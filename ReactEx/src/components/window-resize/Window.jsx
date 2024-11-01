

// # Window Resize Listener using useEffect
// ## Create a WindowSize component that listens to the 
// window's resize event and displays the current window size. 
// Use the useEffect hook to add and remove the event listener on mount 
// and unmount, respectively. This exercise will help you understand how 
// to use the useEffect hook for managing side effects like event listeners 
// and the importance of cleanup functions.
// ### Expectations

// * Listen to the window's resize event.

// * Display the current window size.

// * Add the event listener when the component mounts.

// * Remove the event listener when the component unmounts.

import { useEffect } from "react";
import { useState } from "react";
import './Window.css'

export default function WindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });


    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return windowSize;
}