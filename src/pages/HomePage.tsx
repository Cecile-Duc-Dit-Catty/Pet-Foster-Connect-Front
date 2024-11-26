import styles from './HomePage.module.css';
import Carousel from '../components/carouselAnimalCard/carouselAnimalCard.tsx';

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
            </main>
        </>
    );
};

export default HomePage;
