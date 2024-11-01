import { useRef, useState, useEffect } from "react"





export default function Lessons() {


    const bottomRef = useRef(null);
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            right: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="lesson-page">
           <h1>Welcome To Your First Lesson</h1>
           {/* Subjects */}
           <div className="subject">

           </div>

           {/* Questions */}
           <div className="question">

           </div>
           <div className="answer"><span>A.</span></div>
           <div className="answer"><span>B.</span></div>
           <div className="answer"><span>C.</span></div>
           <div className="answer"><span>D.</span></div>
            <button className="bottom-bnt" onClick={handleScrollToTop}><i className='bi bi-file-earmark-arrow-up'></i></button>
            <div ref={bottomRef}></div>


            <div className="rotate" style={{display: "inline-block"}}>
            <div className="thumbs-up">
           <i style={{color: "#003bfc"}} className="bi-hand-thumbs-down-fill"></i>
           <h4>YES</h4>
            </div>
            <div className="thumbs-down">
           <i style={{color: "#003bfc"}} className="bi-hand-thumbs-down-fill"></i>
           <h4>NO</h4>
            </div>
            </div>
        </div>
    )
}



