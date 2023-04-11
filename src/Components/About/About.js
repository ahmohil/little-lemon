
import './About.css'
import picB from '../../Assets/icons_assets/Mario and Adrian b.jpg'
import picA from '../../Assets/icons_assets/restaurant chef B.jpg'
function About(){
     return(
        <div className='about'>
            <div className='about-text'>
               <h2>
                  Little Lemon
               </h2>
               <h4>
                 Chicago
               </h4>
               <p>
               Little Lemon is a Chicago-based fast-casual eatery that specializes in fresh, healthy cuisine made from locally sourced ingredients. Their menu boasts an array of customizable grain bowls, salads, wraps, and smoothies, all designed to cater to different dietary needs and preferences. Little Lemon's focus is on providing accessible, nutritious meals to everyone, without sacrificing taste or convenience. Whether you're looking for a quick bite on the go or a satisfying meal to fuel your day, Little Lemon has got you covered with their flavorful, made-from-scratch dishes.
               </p>
            </div>
            <div className='about-image'>
                <img src={picA} className='img1' alt='chef'>

                </img>
                <img src={picB} className='img2' alt='two Chefs making food'>

                </img>
            </div>
        </div>
     )

}


export default About;