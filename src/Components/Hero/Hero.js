import './Hero.css'
import food from '../../Assets/icons_assets/restauranfood.jpg'
function Hero(){
    return(
        <div className="hero-section">
            <div className="hero-text">
                <h2>
                    Little Lemon
                </h2>
                <h4>
                    Chicago
                </h4>
                <p>
                As a family-owned establishment, our Mediterranean restaurant prides itself on serving up traditional recipes with a touch of modern flair.
                </p>
                <button className="btn">
                    Reserve a Table
                </button>
            </div>
            <div className="hero-image">
                <img src = {food}></img>
            </div> 
            
        </div>
    )
}


export default Hero