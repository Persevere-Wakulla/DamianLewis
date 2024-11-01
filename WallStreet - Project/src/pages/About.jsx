import { Navigate } from "react-router-dom"
import { useState, useRef } from 'react'

export default function About() {
    const bottomRef = useRef(null);

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    const [user, setUser] = useState('wayne');

    if (!user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="about-container">
            <div className="about-container-background"></div>
            <section className="trading-class">
                <h1 className="invest-time">Invest Your Time With <span className="univer"> The Trader's University</span></h1>
                <h2 className="invest-time-2">The Number One Trading School In North America</h2>
            </section>
            <div className="about-file col-container">

                <div className="col">
                    <div className="side-by-side">
                        <h2 className="about-title">The Birth Of Wall Street</h2>
                        <img className="sign-1" src="public/wallstreet-bull.jpg" alt="wall-street-bull" />
                    </div>
                    <p className="about-text abt para-one">Fast-forward a million years or so to a more civilized world. In 1644, the Dutch West India Company in New Amsterdam (latter named New York City) decided too many cows wandered around in the island of Manhattan. The company decided, "Resolved, that a fence shall be made, and all area to repair thither on Monday, 4th April, with tools to build a fence." The resulting barricade was an earthen embankment, studded with uprooted tree trunks, at the southern tip of Manhattan.
                        A few years later, in 1653, Governor Peter Stuyvesant knew that the British were about to attack and guess they would arrive by land. He ordered local residents, mostly soldiers and Dutch colonists, to raise the fence and dig a moat the length of it.
                        But Stuyvesant missed the boat. The British didn't attack by land. They came by sea in 1664, anchored off Cony Island, and captured the settlement without firing a shot. Later, they burned the wall. The street that run  alongside survived, though, and retained its name--Wall Street.
                        The New York Stock Exchange was born in New York City, when the first Congress met in Federal Hall in 1789 to assume the debts of the new colonies and government. The Congress issued about $80 million in government notes, creating an exciting new market in
                        <span>
                            <img className="wall-street-pic" src="public/wall-street-sign.jpg" alt="wall-street-sign" />
                        </span>securities. These securities, along with additional stocks, bonds, orders for commodities, and wearhouse receipts, were put up for sale to the pulic. Traders gathered each day under the sycamore tree at 68-70 Wall Street to buy and sell.
                        To participate in this market, many investors helped fund American companies by buying shares of ownership. The investors had eqity and could prove so by the certificates of stock issued by the company,  in exchange for the equity capital given by the investors. That stock provide the investor's participation, and so secured the debt. That's why shares of stock are alternately called <i className="color">stocks, equities</i>, and <i className="color">securities.</i>
                        In 1827, a new Merchants Exchanged building, erected at Wall and Honover streets, housed the New York Stock and Exchange Board. By 1842, the American Stock Exchange open its doors. Both exchanges enforced strict rules governing the sale of stocks, and Wall Street began its evolution as one of the world's most important financial centers.</p>
                </div>

                <div className="col">
                    <div className="side-by-side">
                        <h2 className="about-title">About Us</h2>
                        <img className="sign" src="public/pexels-karolina-grabowska-7876498.jpg" alt="chart-pic" />
                    </div>
                    <p className="about-text abt para-one">Trader's University is inhabited  by the sharpest minds in the world, all intent on grabbing other trader's money as fast as possible. It's a greed-against-greed, fear-versus-fear, trader-battling-trader, if-you-die-I-win-world. 
                    Every day. No mercy. The more you lose, the harder I laugh. Supply & Demand: Supply and demand manipulate human emotions, which turns full circle to manipulate suply and demand. Fast-forward a million years or so to a more civilized world. In 1644, the Dutch West India Company in New Amsterdam (latter named New York City) decided too many cows wandered around in the island of 
                    Manhattan. The company decided, "Resolved, that a fence shall be made, and all area to repair thither on Monday, 4th April, with tools to build a fence." The resulting barricade was an earthen embankment, studded with uprooted tree trunks, at the southern tip of Manhattan.
                        A few years later, in 1653, Governor Peter Stuyvesant knew that the British were about to attack and guess they would arrive by land. He ordered local residents, mostly soldiers and Dutch colonists, to raise the fence and dig a moat the length of it.
                        But Stuyvesant missed the boat. The British didn't attack by land. They came by sea in 1664, anchored off Cony Island, and captured the settlement without firing a shot. Later, they burned the wall. The street that run  alongside survived, though, and retained its name--Wall Street.
                        The New York Stock Exchange was born in New York City, when the first Congress met in Federal Hall in 1789 to assume the debts of the new colonies and government. The Congress issued about $80 million in government notes, creating an exciting new market in
                        <span>
                            <img className="chart-pic" src="public/pexels-anna-nekrashevich-6802042.jpg" alt="" />
                        </span>securities. These securities, along with additional stocks, bonds, orders for commodities, and wearhouse receipts, were put up for sale to the pulic. Traders gathered each day under the sycamore tree at 68-70 Wall Street to buy and sell.
                        To participate in this market, many investors helped fund American companies by buying shares of ownership. The investors had eqity and could prove so by the certificates of stock issued by the company,  in exchange for the equity capital given by the investors. That stock provide the investor's participation, and so secured the debt. That's why shares of stock are alternately called <i>stocks, equities</i>, and <i>securities.</i>
                        Both exchanges enforced strict rules governing the sale of stocks, and Wall Street began its evolution as one of the world's most important financial centers.</p>
                </div>

                <div className="col">
                    <div className="side-by-side">
                        <h2 className="about-title">Your Oppertunity Is Now </h2>
                        <img className="sign" src="public/pexels-leeloothefirst-8919508.jpg" alt="" />
                    </div>
                    <p className="about-text abt para-one">In early 2009, the U.S. economy was still in a bad shape. Everyone was losing their their homes and jobs. Even so, the stock market began to move up off its lows. Then it really began to rally. This confuse a lot of people who were looking out their windows and still seeing bad economic conditions. But what the stock market was doing was pricing in and an economic recovery, which turned out to be correct. The same thing can happen to an individual stock. Sometimes a stock will report great earnings (i.e. tell everyone that it had a great quarter and made a lot of money), but still fall sharply the next day. It does this because traders are reacting to something else in the earnings call or in management's forward-looking statements. The stock is skating to where the company is going to be in a few months. An inexperienced trader will be tempted to buy a stock like this when it is down, but this is almost a bad idea. It could take time for new information to get priced into a stock, which means that this stock could continue to move lower for days or even weeks.
                        <span>
                            <img className="bull-pic" src="public/pexels-tima-miroshnichenko-7567441.jpg" alt="wall-street-bull" />
                        </span>
                        To participate in this market, many investors helped fund American companies by buying shares of ownership. The investors had eqity and could prove so by the certificates of stock issued by the company,  in exchange for the equity capital given by the investors. That stock provide the investor's participation, and so secured the debt. That's why shares of stock are alternately
                        To participate in this market, many investors helped fund American companies by buying shares of ownership. The investors had eqity and could prove so by the certificates of stock issued by the company,  in exchange for the equity capital given by the investors. That stock provide the investor's participation, and so secured the debt. That's why shares of stock are alternately called <i>stocks, equities</i>, and <i>securities.</i>
                        In 1827, a new Merchants Exchanged building, erected at Wall and Honover streets, housed the New York Stock and Exchange Board. By 1842, the American Stock Exchange open its  and wearhouse receipts, were put up for sale to the pulic. Traders gathered each day under the sycamore tree at 68-70 Wall Street to buy and sell. To participate in this market, many investors helped fund American companies by buying shares of ownership.investors. That stock provide the investor's participation, and so secured the debt. That's why shares of stock are alternately called stocks, equities, and securities.Both exchanges enforced strict rules governing the sale of stocks, and Wall Street began its evolution as one of the world's most important financial centers of the world's most important financial centers. doors. Both exchanges enforced strict rules governing the sale.</p>
                </div>
            </div>

            <div className="center-btn flex-btn">
                <button className="bottom-btn" onClick={handleScrollToTop}><i className='bi bi-file-earmark-arrow-up'></i></button>
                <button className="bottom-btn" onClick={() => setUser(null)}><span><i className="bi bi-house-fill"></i></span></button>
            </div>
        </div>
    )
}