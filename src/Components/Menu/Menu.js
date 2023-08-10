import MenuImg from '../../Assets/1.png';

import './Menu.css'

function Menu(){
    return (
        <main className='menu'>
            <div>
                <h2 className='menu-heading'>MENU</h2>
                <div style={ {display:'flex', justifyContent:'center' }}>
                    <img src={MenuImg} alt='menu'/>   

                </div>    
            </div>
            
        </main>
    )
}

export default Menu;