
import './Testimonials.css'
import {reviews} from './reviews'
import {AiFillStar} from 'react-icons/ai'
function Testimonials(){
    return(
        <div className="testimonials">
            <h2>Testimonials</h2>

            <section className='testimonial-section'>
                
                   { reviews.map((data,key) =>{
                    return(
                        <article className='testimonial-card'>  
                        <span><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
                        <div className = "name">{data.name}</div>
                        <div className='email'> {data.email}</div>
                        <div className='review'>{data.review}</div>
                        <div></div>
                        </article>

                    )
                   }
                   )
                   
                    
                    }
                
            </section>
        </div>
    )

}

export default Testimonials;