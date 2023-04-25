import './Highlights.css'
import salad from '../../Assets/icons_assets/greek_salad.jpg'
import bruchetta from '../../Assets/icons_assets/bruchetta.svg'
import dessert from '../../Assets/icons_assets/lemon_dessert.jpg'
import {RiEBike2Fill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

function Highglights() {

    const navigate = useNavigate();
    return (
        <div className="highlights">
            <div className='highlights-container'>
            <div className="heading-container">
                <h2>Specials</h2>
                <button className = "btn" onClick={()=>{navigate('/menu')}}>
                    Online Menu
                </button>
            </div>

            <section className = "specials">
                <article className = "item-card">
                    <img src = {salad} ></img>
                    <div className='item-title'>
                    <h2>Greek Salad</h2>
                    <div className= "item-price">$12.99</div>
                    </div>
                    <div className = "item-description"><p>The famouse greek salad of crispy lettuce, peppers, olives and feta cheese, garnished with crunchy garlic.</p></div>
                    <strong >Order a delivery <RiEBike2Fill /> </strong>
                </article>
                
                <article className = "item-card">
                <img src = {bruchetta} ></img>
                    <div className='item-title'>
                    <h2>Bruchetta</h2>
                    <div className= "item-price">$5.99</div>
                    </div>
                    <div className = "item-description"><p>Our Bruchetta features grilled bread smeared with garlic, seasoned with salt and olive oil for a savory appetizer.</p></div>
                    <strong >Order a delivery <RiEBike2Fill /> </strong>
                </article>

                <article className = "item-card">
                <img src = {dessert} ></img>
                    <div className='item-title'>
                    <h2>Lemon Dessert</h2>
                    <div className= "item-price">$12.99</div>
                    </div>
                    <div className = "item-description"><p>Every ingredient in this recipe, sourced straight from grandma's book, is authentic and true to its origin.</p></div>
                    <strong >Order a delivery <RiEBike2Fill /> </strong>
                </article>
            </section>
            
            </div>
        </div>
    )

}


export default Highglights;