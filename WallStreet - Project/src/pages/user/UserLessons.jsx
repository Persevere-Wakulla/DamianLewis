import React, { useContext, useState, useRef } from "react"
import { UserContext } from "../../layouts/RootLayout"
import UserLessonCard from "../../components/users/UserLessonCard"

// ! Display the completed lessons with scores && navigation to the rest of them
export default function UserLessons() {
    const [lessons, setLessons] = useState('')
    const { user, setUser } = useContext(UserContext)

    const bottomRef = useRef(null);
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            right: 0,
            behavior: "smooth",
        });
    }

    return (
        <section className="user-lessons">

            <div className="flex-test-lessons">
            <div className="">
                <h2 className="user-lessons">Lessons</h2>
                <ul className='choose-lessons'>
                    <li className="test">Options</li>
                    <li className="test">Order Types and Definitions</li>
                    <li className="test">Economic Report</li>
                    <li className="test">Market Definitions</li>
                    <li className="test">Money</li>
                </ul>
            </div>


            <div className="question">
            </div>
            <div className="answer"><span>A.</span></div>
            <div className="answer"><span>B.</span></div>
            <div className="answer"><span>C.</span></div>
            <div className="answer"><span>D.</span></div>
            </div>


            <button className="bottom-bnt" onClick={handleScrollToTop}><i className='bi bi-file-earmark-arrow-up'></i></button>
            <div ref={bottomRef}></div>


            <div className="rotate" style={{ display: "inline-block" }}>
                <div className="thumbs-up">
                    <i style={{ color: "#003bfc" }} className="bi-hand-thumbs-down-fill"></i>
                    <h4>YES</h4>
                </div>
                <div className="thumbs-down">
                    <i style={{ color: "#003bfc" }} className="bi-hand-thumbs-down-fill"></i>
                    <h4>NO</h4>
                </div>
            </div>




            {/* {lessons
     
            .map((les, index) => (
                <UserLessonCard lesson={les} key={index} />
            ))} */}
        </section>
    )
}

       // IF you do change schems to track completed lessons
            // not displaying completed
            // .filter(les => !user.lessons.includes(les))