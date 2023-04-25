import style from '../CSS/Home.module.css';
import Mala from '../img/mala.jpg';

function Home(){
    return(
        <div>
            <section>
                <img src={Mala} alt="mala" />
                <div className={style.texto}>
                    <h1>Encontre aqui a viagem <br />dos seus sonhos!!</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cupiditate commodi quas dolores vitae sapiente numquam, eligendi reprehenderit obcaecati sed facere rerum quae debitis dicta optio aliquid cumque natus. Recusandae.
                    Reiciendis quos hic ipsam, maiores voluptatum numquam assumenda? Nemo ut provident, exercitationem ullam adipisci reprehenderit id debitis explicabo unde eaque consequuntur qui fugit accusantium laborum, molestias rerum nobis error autem?
                    Praesentium et assumenda exercitationem porro dicta est recusandae! Minima, temporibus, minus voluptatibus doloribus, rerum molestiae voluptate fuga nemo labore culpa sapiente.</p>
                    
                </div>
            </section>
        </div>
    )
}

export default Home;