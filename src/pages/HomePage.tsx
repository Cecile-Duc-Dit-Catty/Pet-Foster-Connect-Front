import styles from './HomePage.module.css';
import Carousel from '../components/carouselAnimalCard/carouselAnimalCard.tsx';
import DogImg from '../assets/images/dog-with-foster.png';
import CtaButton from '../components/mainButton/ctaButton.tsx';

const HomePage = () => {
    return (
        <>
            <main>
                <div className={styles.headerSection}>
                    <div className={styles.headerDescription}>
                        <p>Accueillez un animal, devenez famille d’accueil !</p>
                    </div>
                </div>
                <section className={styles.carouselSection}>
                    <div className={styles.titleContainer}>
                        <h2>Nouveaux amis en quête d'un foyer</h2>
                        <div className={styles.separator}></div>
                    </div>
                    <Carousel />
                </section>
                <section className={styles.ctaSection}>
                    <img
                        src={DogImg}
                        alt="Chien dans les bras de sa famille d'accueil"
                    />
                    <h3>Faisons la différence ensemble !</h3>
                    <div className={styles.ctaInformation}>
                        <p>
                            Pet Foster Connect aide les associations à trouver
                            des familles d’accueil sûres et aimante pour les
                            animaux en attente d’un foyer définitif
                        </p>
                        <p>
                            Inscrivez vous en tant que famille d’accueil et
                            faites profiter à une animal la chaleur de votre
                            foyer en attendant qu’il trouve sa famille d’accueil
                        </p>
                    </div>
                    <CtaButton label="S'inscrire" />
                </section>
            </main>
        </>
    );
};

export default HomePage;
