// # Create a UserPosts component that fetches and displays a 
// list of posts for a given user ID using the [DummyJson  API]
// (https://dummyjson.com/docs/users). 
// ## The component should fetch data when it mounts and 
// update the data when the user ID prop changes. This exercise 
// will help you understand how to use the useEffect hook for data 
// fetching and the importance of the dependency array.

// ### Expectations

// * Fetch data from the DummyJson API.
// * Display a list of posts for the given user ID.
// * Refetch data when the user ID prop changes.


import { useEffect, useState } from "react";
import './userPost.css'

export default function UserPost() {

    const [data, setData] = useState(null)
    const [message, setMessage] = useState(false);
    const [userId, setUserId] = useState('')

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            if (userId !== '') {
                const res = await fetch(`https://dummyjson.com/users/${userId}/posts`);
                const resData = await res.json()

                setData(resData);
            } else {
                setData(null);
            }
        }

        if (!ignore) {
            fetchData()
        }

        return () => {
            ignore = true
        }

    }, [userId]);


    function handleClick() {

        if (data) {
            setMessage(true)
        }

    }

    // const noData = (<div className="noData">
    //     <h1>No Data</h1>
    // </div>)
    // const welcome = (<div className="welcome">
    //     <h1>Welcome</h1>
    // </div>)
    // const userMessage = (<di></di>)
    // let dispaly = data.posts ? userMessage : noData;

    // ! Nate says: I would first setMessage as boolean
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <input placeholder="Enter Info..." type="text" value={userId} onChange={(e) =>
                    setUserId(e.target.value)}
                />
            </div>

            {/* //  ? how do you want to display it
                   // ! use a data.posts.map() in the return to display my stuff
                   // body = p , reactions ={like, dislike}, tags =[] , title = h2 */}
            {data?.posts && data.posts.map((item, index) => (
                <div className="main-container">
                    <div className="container2">
                        <div className="container" key={index}>
                            <h3 className="h3">{item.title}</h3>
                            <p className="body">{item.body}</p>
                            <p className="tag">{item.tags.map((tag, index) =>
                                (<span key={index}> #{tag}</span>))}</p>
                            <div className="likes">
                                <p>Likes: <span>{item.reactions.likes}</span></p>
                                <p>Dislikes: <span>{item.reactions.dislikes}</span></p>
                                <p>Total Views: <span>{item.views}</ span></p >
                            </div >
                        </div>
                    </div >
                </div>
            ))
            }


            {(!data?.posts || data.posts.length > 0) &&
                <div className="data">
                    <div className="welcome">
                        <h1>Welcome!</h1>
                    </div>
                </div>}


            {(!data?.posts || data.posts.length <= 0) &&
                <div className="data">
                    <div className="noData">
                        <h1>No Data!</h1>
                    </div>
                </div>}
        </>

    )
}

