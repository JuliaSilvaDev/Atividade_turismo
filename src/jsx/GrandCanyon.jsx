import style from '../CSS/GrandCanyon.module.css';
import Logo from '../img/viagens.jpg';

function GrandCanyon(){
    return(
        <div>
            <section className={style.canyon}>
                <div className={style.card}>
                    <h2>Venha explorar esse lugar incrível GrandCanyon!</h2>
                    <p>O GrandCanyon fica no estado do arizona e é cortado pelo não tão tímido assim Rio Colorado, e forma uma paisagem mais imponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é o passeio mais procurado por quem visita Las Vegas, que fica no estado vizinho, Nevada.</p>
                    <img src={Logo} alt="Logo" />
                </div>
            </section>
        </div>
    )
}

export default GrandCanyon;