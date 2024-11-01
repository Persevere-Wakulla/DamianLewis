import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../../layouts/RootLayout"


// ! Dashboard to give the User navigation
//  Edit Account
//  My Lessons
//? Marketplace
export default function UserHome() {

    const { myUser, setMyUser } = useContext(UserContext)

    const handleScrollToTop = () => { }

    const bottomRef = () => { }
    return (
        <>

            <div className="user-home">

                {/* <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Lessons</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Options</a>
    <a href="#">Order Types and Definitions</a>
    <a href="#"></a>
  </div>
</div> */}

                <p className='user-home-text'>Trader's University is inhabited  by the sharpest minds in the world, all intent on grabbing other trader's money as fast as possible. It's a greed-against-greed, fear-versus-fear, trader-battling-trader, if-you-die-I-win-world.
                    Everyday. No mercy. The more you lose, the harder I laugh. Supply & Demand: Supply and demand manipulate human emotions, which turns full circle to manipulate suply and demand.</p>
                <div className='class-pics'>
                    <img className='platform' src="public/pexels-rdne-7947742.jpg" alt="" />
                    <img src="public/video-futurama.jpg" alt="" />
                    <img className='platform' src="public/pexels-energepic-com-27411-159888.jpg" alt="bitcoin" />
                </div>

                {/* My Scroll To Top Btn */}
                <button className="bottom-btn" onClick={handleScrollToTop}><i className='bi bi-file-earmark-arrow-up bottom-btn'></i></button>
                <div ref={bottomRef}></div>
            </div>
        </>
    )
}