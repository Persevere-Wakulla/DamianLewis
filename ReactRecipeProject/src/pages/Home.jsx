import { useRef } from "react"
export default function Home() {

    const bottomRef = useRef(null);

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

    }

    return (
        <div className="container">
            <ul className="stars">
                <li className="star">&#10029;</li>
                <li className="star">&#10029;</li>
                <li className="star">&#10029;</li>
                <li className="star">&#10029;</li>
                <li className="star">&#10029;</li>
            </ul>
            <h2 className="head-text">Welcome To The World's Greatest Cuisines</h2>
            <div className="home-cards">
                <img className="main-pic" src="pexels-rene-asmussen-2544829.jpg" alt="man-cooking" />
                <p className="text">Henri de Toulouse-Lautrec was convinced that cookery is an art.
                    In fact, the art of painting was to him, first of all, an art of living. Thus, even after his
                    withdrawal from society and his family's sporting life, which is illness caused, he became
                    an artist without having to give up all pleasures.
                    <span className="quote">Henri de Toulouse-Lautrec was convinced that cookery is an art.
                        In fact, the art of painting was to him, first of all, an art of living.</span>
                    Being exceedingly fond of women his
                    drwings of them were vibranting and thrilling, he painted horses with equestrian fervor
                    and exactitude and as he adored good food he invented recipes with as much zest and
                    unerring technique as he would put in decorating a menu card or painting a picture.
                    He imagined a dish as an artistic creation, like a poem or dancing a ballet.
                </p>
                <div className="canvas">
                    <p className="artist-at-work">The Artist At Work</p>
                    <img className="first-img" src="pexels-life-of-pix-9095.jpg" alt="" />
                </div>

                <p className="the-final-master">The Masterpiece</p>
                <div className="master-piece">
                    <div>
                        <img className="second-img" src="pexels-abhinav-goswami-291528.jpg" alt="cake" />
                    </div>
                    <div>
                        <img className="third-img" src="pexels-quang-nguyen-vinh-2144200.jpg" alt="cake" />
                    </div>
                </div>
            </div>
            <button className="bottom-bnt" onClick={handleScrollToTop}>Click To Scroll</button>
            <div ref={bottomRef}></div>
        </div>
    )
}