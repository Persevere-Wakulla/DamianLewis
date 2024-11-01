import { useContext } from "react"
import { useOutletContext } from "react-router-dom"
import { UserContext } from "../../layouts/RootLayout"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"

export default function SignUp() {

    const setMyUser = useContext(UserContext)
    const move = useNavigate()
    const [message, setMessage] = useState("")
    // const [myUser, setMyNewUser] = useState()


    useEffect(() => {
        if (message === '' || message === 'User Not Found' || message === 'Please complete all fields') {
            document.querySelectorAll('input').forEach(ip => ip.value = '')
        } else {
            move('/guest')
        }
    }, [message])

    const register = async () =>{
        let newUser ={}
        const inputs = document.querySelectorAll('input')
        inputs.forEach(ip => {
            newUser[ip.id] = ip.value
        })
        console.log(inputs)
        const registration = await fetch('http://localhost:5500/sign-up', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newUser),
            headers: { "Content-Type": "application/json" }
        })
        if (registration){
            sessionStorage.setItem('user', JSON.stringify(newUser))
            setMyUser(newUser)
        }
    }

    return (
        <div>
            <div className="top">
                <div className="top-login">
                    <p>Sign Up</p>
                </div>
            </div>
            <div className="wrapper">
                <form>
                    <div className="sign-up-flex">

                        <div className="sign-up-info">
                            <label htmlFor="first-name">
                                <input className="input-tag" type="text" name="name" id="firstName" placeholder="First Name" required style={{ color: "black" }} />
                            </label>
                            <label htmlFor="last-name">
                                <input className="input-tag" type="text" name="name" id="lastName" placeholder="Last Name" required style={{ color: "black" }} />
                            </label>
                            <label htmlFor="email">
                                <input className="input-tag" type="email" name="email" id="email" placeholder="Email" required style={{ color: "black" }} />
                            </label>
                            <label htmlFor="username">
                                <input className="input-tag" type="text" name="username" id="username" placeholder="UserName" required style={{ color: "black" }} />
                            </label>
                            <label htmlFor="password">
                                <input className="input-tag" type="password" name="password" id="password" placeholder="Enter Password" required style={{ color: "balck" }} />
                            </label>
                   
                        <button className="submit-btn hover-btn" onClick={register}>Submit</button>

                        </div>

                        <div className="billing">
                            {/* <label htmlFor="address">
                            <input className="input-tag" type="text" name="address" id="address" placeholder="Address" required style={{ color: "black" }} />
                        </label>
                        <label htmlFor="city">
                            <input className="input-tag" type="text" name="city" id="city" placeholder="City" required style={{ color: "black" }} />
                        </label> */}
                            {/* <div className="address-flex">
                        <label htmlFor="state">
                            <input className="input-state" type="text" name="state" id="state" placeholder="State" required style={{ color: "black" }} />
                        </label>
                        <label htmlFor="zip">
                            <input className="input-zip" type="number" name="zip" id="zip" placeholder="Zip" required style={{ color: "black" }} />
                        </label>
                        </div> */}

                            {/* <label htmlFor="first-name">
                            <input className="input-tag" type="text" name="name" id="first-name" placeholder="Name on Card" required style={{ color: "black" }} />
                        </label>
                        <label htmlFor="last-name">
                            <input className="input-tag" type="text" name="name" id="last-name" placeholder="Credit card number" required style={{ color: "black" }} />
                        </label>
                        <div className="address-flex">
                        <label htmlFor="year">
                            <input className="input-state" type="year" name="year" id="year" placeholder="Exp Year" required style={{ color: "black" }} />
                        </label>
                        <label htmlFor="cvv">
                            <input className="input-zip" type="number" name="cvv" id="cvv" placeholder="CVV" required style={{ color: "black" }} />
                        </label>
                        </div> */}

                                 {/* <div className="cards">
                                <img src="../public/1933702_charge_credit card_debit_payment_visa_icon.png" alt="" />
                            <img src="../public/1933704_american express_amex_charge_credit card_payment_icon.png" alt="" />
                            <img src="../public/2908223_bank_card_credit_debit_mastercard_icon.png" alt="" />
                            </div> */}
                        </div>
                    </div>

                    {/* {data && data.error && <p>{data.error}</p>} */}
                </form>
            </div>

        </div>
    )
}
// export const contactAction = async ({ request }) => {
//     console.log(request)
//     const data = await request.formData()

//     const submission = {
//         email: data.get('email'),
//         message: data.get('message')
//     }


    // send post request 
    // if (submission.message.length < 10) {
    //     return { error: "Message must be over 10 chars long" }
    // }
    // console.log(submission)

    // redirect the use
//     return redirect('/')

// }

{/* <img className="visa-card" src="../public/visa.svg" alt="" />
                        <img className="master-card" src="../public/mastercard.svg" alt="" /> */}
{/* <i className="bi bi-eye-slash-fill"></i> */ }