
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../lessons/data'



// import { useContext } from "react"
// import { UserContext } from "../../layouts/RootLayout"

export default function Guest() {

    // const setMyUser = useContext(UserContext)
    const move = useNavigate()
    const [myNewUser, setMyNewUser] = useState("")


    useEffect(() => {
        if (myNewUser === '' || myNewUser === 'User Not Found' || myNewUser === 'Please complete all fields') {
            document.querySelectorAll('input').forEach(ip => ip.value = '')
        } else {
            move('/lessons')
        }
    }, [myNewUser])
    
    
    const enter = async () =>{
        let newUser ={}
        const inputs = document.querySelectorAll('input')
        inputs.forEach(ip => {
            newUser[ip.id] = ip.value
        })
        console.log(inputs)
        const register = await fetch('http://localhost:5500/sign-up', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newUser),
            headers: { "Content-Type": "application/json" }
        })
        if (register){
            sessionStorage.setItem('user', JSON.stringify(newUser))
            setMyNewUser(newUser)
        }
    }

    return (
        <div>
            <div className="top">
                <div className="top-login">
                    <p>Guest</p>
                </div>
            </div>
            <div className="wrapper">
                <div className="sign-up-info">
                    <label htmlFor="first-name">
                        <input className="input-tag" type="text" name="name" id="first-name" placeholder="First Name" required style={{ color: "black" }} />
                    </label>
                    <label htmlFor="last-name">
                        <input className="input-tag" type="text" name="name" id="last-name" placeholder="Last Name" required style={{ color: "black" }} />
                    </label>
                    <label htmlFor="password">
                        <input className="input-tag" type="email" name="email" id="email" placeholder="Email" required style={{ color: "black" }} />
                    </label>
                </div>
                <button className="guest-btn hover-btn" onClick={enter}>Enter</button>
            </div>
        </div>
    );

};