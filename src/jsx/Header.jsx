import style from '../CSS/Header.module.css';
import {Link} from 'react-router-dom';
import Logo from '../img/viagens.jpg';
import lupa from '../img/lupa.png';

function Header(){
    return(
        <header>
            <Link to='/'>
                <img src={Logo} alt="" className={style.logo} />
            </Link>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/GrandCanyon'>GrandCanyon</Link></li>
                    <li><Link to='/Escocia'>Escócia</Link></li>
                    <li><Link to='/China'>China</Link></li>
                    <li><Link to='/Aruba'>Aruba</Link></li>
                </ul>
            </nav>
            <div className={style.buscar}>
                <input type="text" />
                <img src={lupa} alt="" className={style.lupa} />
            </div>
        </header>
    )
}

export default Header;