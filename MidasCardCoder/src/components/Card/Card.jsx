import './card.css'

function Card() {
    return (
        <div>
            <div className='body'>
                <div className="card">
                    <img className='card-img' src="cyber-cat.webp" alt="profile picture"></img>
                    <h2 className='card-title'>The Midas Coder</h2>
                    <p className='card-text'>I make Youtube videos and play video games.</p>
                </div>
            </div>

        </div>
    )
}

export default Card;