import Hero from '../Hero/Hero';
import Highglights from '../Highlights/Highlights';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';
import {Routes, Route} from 'react-router-dom';
import BookingPage from '../BookingPage/Bookingpage';

function Main(){
    return(
        <main>
            <Routes>
                <Route path='/' element = { <><Hero /> <Highglights /></>} />
                <Route path = '/about' element = {<>   <Testimonials /> <About /></>} />
                <Route path = '/booking' element = { <BookingPage /> } />
            </Routes>
        </main>
    )
}


export default Main;