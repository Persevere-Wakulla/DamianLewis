import { useContext } from "react"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../../layouts/RootLayout"

export default function LogIn() {

    const {myUser, setMyUser } = useContext(UserContext)
    const move = useNavigate()
    const [message, setMessage] = useState('')


    useEffect(() => {
        if (message === '' || message === 'User Not Found' || message === 'Please complete all fields') {
            document.querySelectorAll('input').forEach(ip => ip.value = '')
        } else {
            setTimeout(()=>{
                //  myUser.{myUser._id} === admin ? move('/admin') : move(`:/${myUser._id}`)
                move('/:id')
            }, 3000)
        }
    }, [message])

    const submit = async (e) => {
        e.preventDefault()
        let data = {}
        const inputs = document.querySelectorAll('input')
        inputs.forEach(ip => {
            data[ip.id] = ip.value
        })
        console.log(data);
        const request = await fetch('http://localhost:5500/log-in', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
        const response = await request.json()
        console.log(response);
        if (response.message) {
            setMessage(response.message)
        } else {
            sessionStorage.setItem('user', JSON.stringify(response))
            setMessage(`Welcome back ${response.lastname}`)
            setMyUser(response)
        }
    }

    return (
        <div>
            <div className="top">
                <div className="top-login">
                    <p>Log In</p>
                </div>
            </div>

            <div className="wrapper sign-up-info">
                <label htmlFor="first-name">
                    <input className="input-tag" type="text" name="username" id="username" placeholder="UserName" required style={{ color: "black" }} />
                </label>
                <label htmlFor="email">
                    <input className="input-tag" type="email" name="email" id="email" placeholder="Email" required style={{ color: "black" }} />
                </label>
                <label htmlFor="password">
                    <div className="eyes">
                        <input className="input-tag" type="password" name="password" id="password" placeholder="Password" required style={{ color: "black" }} />

                        {/* <i id="eye" className="bi bi-eye-fill" style={{ marginRight: -35, marginTop: 10 }}></i> */}
                      
                        <i className="bi bi-eye-slash-fill display" style={{marginRight: -35, marginTop: 10}}></i> 
                        
                    </div>
                </label>
                <div>{message}</div>
                <button className="login-btn hover-btn" onClick={submit}><i className='bi'></i>Enter</button>

            </div>
        </div>

    )
};

