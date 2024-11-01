import { useState, useEffect, useRef } from "react"

export default function Home() {
    const bottomRef = useRef(null);

    const [stocks, setStocks] = useState({
        dow: 48756,
        dChange: 0,
        nasdaq: 18258,
        nChange: 0,
        sNp: 5586,
        sChange: 0
    })
    console.log(stocks);

    useEffect(() => {
        const dowArr = [-23, -20, -18, -15, -13, -5, -1, 0, 74, 83, 100, 120, 134, 209, 279];
        const nasdaq = [-10, -7, -5, -2, 0, 23, 32, 43, 54, 66, 87, 102, 122];
        const snp = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, -6, 8, 12, 13, 23, 25, 26, 30, 32];
        const arrays = [dowArr, nasdaq, snp]
        const deltaOne = document.getElementsByClassName("dow")[0];
        const random = arrays.map((arr, index) => {
            const number = Math.floor(Math.random() * arr.length)
            console.log(deltaOne);
            return arr[number]
        });
        const interval = setInterval(() => {
            setStocks({
                dow: stocks.dow + random[0],
                dChange: random[0],
                nasdaq: stocks.nasdaq + random[1],
                nChange: random[1],
                sNp: stocks.sNp + random[2],
                sChange: random[2]
            })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [stocks])

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <div id="home" className="home-container">
            <div className="indexes">
                <div>
                    <h3 className="index-name">Dow Jones</h3>
                    <div>
                        <h4 className="big-basket">{stocks.dow}</h4>
                        <span className="delta" style={stocks.dChange >= 0 ? { color: '#00fc0d' } : { color: 'red' }}>{stocks.dChange} </span>
                        <i className={`bi ${stocks.dChange >= 0 ? 'bi-graph-up-arrow' : 'bi-graph-down-arrow'}`}></i>
                    </div>
                </div>
                <div>
                    <h3 className="index-name">NASDAQ</h3>
                    <h4 className="big-basket">{stocks.nasdaq}</h4>
                    <span className="delta" style={stocks.nChange >= 0 ? { color: '#00fc0d' } : { color: 'red' }}>{stocks.nChange} </span>
                    <i className={`bi ${stocks.nChange >= 0 ? 'bi-graph-up-arrow' : 'bi-graph-down-arrow'}`}></i>
                </div>
                <div>
                    <h3 className="index-name">S&P500</h3>
                    <h4 className="big-basket">{stocks.sNp}</h4>
                    <span className="delta" style={stocks.sChange >= 0 ? { color: '#00fc0d' } : { color: 'red' }}>{stocks.sChange} </span>
                    <i className={`bi ${stocks.sChange >= 0 ? 'bi-graph-up-arrow' : 'bi-graph-down-arrow'}`}></i>
                </div>
            </div>
            <h2 className="head-text">Welcome To The Trader's University</h2>
            <div className="home-cards">
                <div className="left-side-div">
                    <p className="lessons">Lessons</p>
                    <ol>
                        <li className="list">Initial Public Offering</li>
                        <li className="list">Futures</li>
                        <li className="list">Put Options</li>
                        <li className="list">Call Options</li>
                        <li className="list">ETF</li>
                        <li className="list">Producer Price Index</li>
                        <li className="list">Institute for Supply Management</li>
                        <li className="list">DRIP</li>
                        <li className="list">Dividend</li>
                        <li className="list">Float</li>
                        <li className="list">Short Interest</li>
                        <li className="list">Price Earning Ratio</li>
                        <li className="list">Consumer Price Index</li>
                        <li className="list">Employment Report</li>
                        <li className="list">Housing Market</li>
                        <li className="list">FOREX</li>
                        <li className="list">Bitcoin</li>
                        <li className="list">Gold</li>
                        <li className="list">RSI</li>
                        <li className="list">MACD</li>
                        <li className="list">Candle Sticks</li>
                        <li className="list">Your Trading Plan</li>
                        <li className="list"></li>
                        <li className="list"></li>
                    </ol>
                </div>
                <div className="center-div">
                    <img className="graph-pic" src="/line-graph2.png" alt="graph" />
                    <p className="text">When it comes to time, we are born rich and then spend down
                        our fortunes over the years. It may not grow like money in
                        a bank account, but there are ways to get time to pay out a
                        similar kind of interest.
                        The go-to verb for what we do with time is spend it; however,
                        some of us not only spen time, we also waste time and burn time!
                        And if we compare time to money, which the old adage says,
                        "Time Is Money", we'll realize that as we waste time, we are
                        wasting money!
                        Researchers say it might be better to think of time as something
                        we invest, using our precious hours to accumulate a wealth of
                        fulfillment and meaning that our future selves can draw on.
                        This shift in thinking is particular important because
                        it might help you think longer term.
                        <span className="quote">And if we compare time to money, which the old adage says,
                            "Time Is Money", we'll realize that as we waste time, we are
                            wasting money!</span>
                        If we start thinking about investment of time, rather than expenditures, maybe
                        we'll start focusing on allocating time toward the things that are
                        most closely linked to our longer-term well-being.
                        When we invest money, we tie up our present resource in exchange
                        for future gains. Having a time-investing mind-set means being proavtive.
                        A proactive move is to block off time time on your calendar for investments
                        that are important to you, just as you would a business meeting. Even highly
                        time-chrunched people can benefit from investing mind-set, because
                        the value of small time commitments can compound.
                        When choosing between different ways you could allocate your time,
                        it can also help to imagine what your future self might hope you choose.
                        "Who am I, what am I going to be doing in five years, ten years?...When
                        we look back, we don't want to regret that our time slipped through our
                        fingers, being spent on stuff that tured out not to be all that meaningful!"
                        So my question to youn is this; "what will you do with your time?"
                        Invest your time in Trader's University and learn how to use the world's
                        greatest oppotunity machine to make you wealty!
                    </p>
                    <div className="canvas">
                        <p className="sub-title">The worlds greatest opportunity machine.</p>
                    </div>
                    <div className="text-n-pic">
                        <div>
                            <img className="trade-platform" src="/trading-platform.webp" alt="cake" />
                        </div>
                        <div className="oppertunity">
                            <ol className="list-2">
                                <li>I believe that everyone should have access to the Stock Market
                                    not only the rich and privilaged.</li>
                                <li>There is place for everyone and every strategy in the stock market.
                                    You can invest in stocks, holding them for many years and pocket the
                                    dividens.</li>
                                <li>You can also trade stocks. You can day trade them, swing trade them,
                                    or short them (bet that a stock is going down instead of up).  After completing this
                                    course, you may even come up with your own original way of profiting
                                    from teh stock market that no one ever used before.</li>
                                <li>With this course, you will get an overview of many different approches
                                    to the stock market. When you are first getting started, you should try
                                    out many different trading and investment stategies and see what works for you.</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="right-side-div">
                    <div className="pic-container">
                        <h3 className="h3-heading">Candle Sticks</h3>
                        <div className="center-pics">
                            <img className="pics-size" src="/Platform-Charting-1024x576.jpg" alt="trading-platform" />
                        </div>
                    </div>

                    <div className="pic-container">
                        <h3 className="h3-heading">Bitcoin</h3>
                        <div className="center-pics">
                            <img className="pics-size" src="/what-is-bitcoin.webp" alt="" />
                        </div>
                    </div>

                    <div className="pic-container">
                        <h3 className="h3-heading">Gold</h3>
                        <div className="center-pics">
                            <img className="pics-size" src="/wp10073746.png" alt="" />
                        </div>
                    </div>

                    <div className="pic-container">
                        <h3 className="h3-heading">Discovering How Money Works</h3>
                        <div className="center-pics">
                            <img className="pics-size" src="/stack-one-hundred-dollar-bills.png" alt="" />
                        </div>
                    </div>
                    <div className="pic-container">
                        <h3 className="h3-heading">Your Trading Plan</h3>
                        <div className="center-pics">
                            <img className="pics-size" src="/pointing-out-the-details.jpg" alt="" />
                        </div>
                    </div>

                    <div className="pic-container">
                        <h3 className="h3-heading">The Housing Market</h3>
                        <div className="center-pics">
                            <img className="pics-size" src="/For sale.jpg" alt="" />
                        </div>
                    </div>

                    <div className="pic-container">
                        <h3 className="h3-heading">Fundamental Analysis</h3>
                        <div className="center-pics">
                            <img className="pics-size" src="/fundamental.jpg" alt="" />
                        </div>
                    </div>
                    
                    <div className="pic-container">
                        <h3 className="h3-heading">Technical Analysis</h3>
                        <div className="center-pics">
                            <img className="pics-size" src="/95248027-compass-rose-for-marine-or-nautical-navigation-on-a-white-background.jpg" alt="trading-platform" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="center-btn">
                <button className="bottom-btn" onClick={handleScrollToTop}><i className='bi bi-file-earmark-arrow-up'></i></button>
            </div>
        </div>
    )
};


