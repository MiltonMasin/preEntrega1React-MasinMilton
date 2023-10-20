import './styles.css';
import CartWidget from '../CartWidget/cartwidget';
const Navbar = ()=>{
    return(
        <div className="navbar">
            <div>
            <img alt="logo" src={"./img/logo.png"}width={'100px'}/>
            </div>


            <div>
            <ul className='listas'>
                <li><button className='btn'>Barba</button></li>
                <li><button className='btn'>Cabello</button></li>
                <li><button className='btn'>Afeitado</button></li>
            </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default Navbar;