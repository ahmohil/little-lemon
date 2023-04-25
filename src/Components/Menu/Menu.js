import MenuImg from '../../Assets/1.png';

import './Menu.css'

function Menu(){
    return (
        <main className='menu'>
            <div>
                <h2 className='menu-heading'>MENU</h2>
                <img src={MenuImg} />   
            </div>
            
        </main>
    )
}

export default Menu;