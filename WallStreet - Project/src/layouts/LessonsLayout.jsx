import { useContext, useState, useEffect } from "react"
import { Outlet } from 'react-router-dom'
import { UserContext } from "./RootLayout";


export default function LessonsLayout() {
    const { myUser } = useContext(UserContext)

    return (
        <section>
            {
                myUser ?
                    <>
                        <h2 className="welcome-message">Welcome to Trader's University {myUser.firstName} {myUser.lastName}</h2>
                        <Outlet/>
                    </>
                    :
                    <h2 className="login-prompt">Please Log In To Continue</h2>
            }
        </section>
    )
}