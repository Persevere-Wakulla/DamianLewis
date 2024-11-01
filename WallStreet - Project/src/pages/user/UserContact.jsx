import { useState, useEffect } from "react"
// import Outlet from 'react-router-dom'


export default function UserContact() {


    return (
        <div>
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
            {/* <Outlet /> */}
        </div>
    )
};