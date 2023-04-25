import style from '../CSS/Footer.module.css';
import Insta from '../img/insta.jpg';
import Tiktok from '../img/tiktok.png';
import Face from '../img/facebook.jpg';
import Whats from '../img/whtas.png';

function Footer(){
    return(
        <footer>
            <p>Siga-nos em nossas redes sociais</p>
            <div className={style.redes}>
                <img src={Insta} alt="Instagram" />
                <img src={Face} alt="Facebook" />
                <img src={Tiktok} alt="TikTok" />
                <img src={Whats} alt="WhatsApp" />
            </div>
            <p>Telefone de contato: (11) 98888-8888</p>
        </footer>
    )
}

export default Footer;