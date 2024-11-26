import styles from './HomePage.module.css';
import AnimalCard from '../components/animalCard/animalCard.tsx';

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
                    <AnimalCard />
                </section>
            </main>
        </>
    );
};

export default HomePage;
