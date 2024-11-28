import styles from './HomePage.module.css';
import Carousel from '../components/carouselAnimalCard/carouselAnimalCard.tsx';
import DogImg from '../assets/images/dog-with-foster.png';
import CtaButton from '../components/mainButton/ctaButton.tsx';
import AnimalCard from '../components/animalCard/animalCard.tsx';

const HomePage = () => {
    return (
        <>
            <main>
                <div className={styles.headerSection}>
                    <div className={styles.headerDescription}>
                        <p>Accueillez un animal, devenez famille d’accueil !</p>
                    </div>
                    <div className={styles.headerDescriptionTablet}>
                        <p>
                            Accueillez un animal dans le besoin, devenez famille
                            d’accueil !
                        </p>
                    </div>
                </div>
                <section className={styles.carouselSection}>
                    <div className={styles.titleContainer}>
                        <h2>Nouveaux amis en quête d'un foyer</h2>
                        <div className={styles.separator}></div>
                    </div>
                    <div className={styles.carouselMobileVersion}>
                        <Carousel />
                    </div>
                    <div className={styles.carouselDesktopVersion}>
                        <AnimalCard />
                        <AnimalCard />
                        <AnimalCard />
                    </div>
                </section>
                <section className={styles.ctaSection}>
                    <div className={styles.ctaSectionContainer}>
                        <div className={styles.leftSide}>
                            <img
                                src={DogImg}
                                alt="Chien dans les bras de sa famille d'accueil"
                            />
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.informationContainer}>
                                <h3>Faisons la différence ensemble !</h3>
                                <div className={styles.ctaInformation}>
                                    <p>
                                        Pet Foster Connect aide les associations
                                        à trouver des familles d’accueil sûres
                                        et aimante pour les animaux en attente
                                        d’un foyer définitif
                                    </p>
                                    <p>
                                        Inscrivez vous en tant que famille
                                        d’accueil et faites profiter à une
                                        animal la chaleur de votre foyer en
                                        attendant qu’il trouve sa famille
                                        d’accueil
                                    </p>
                                </div>
                            </div>
                            <div className={styles.buttonSection}>
                                <CtaButton label="S'inscrire" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.ctaSectionDesktop}>
                    <div className={styles.ctaContainer}>
                        <div className={styles.leftSection}>
                            <img
                                src={DogImg}
                                alt="Chien dans les bras de sa famille d'accueil"
                            />
                        </div>
                        <div className={styles.rightSection}>
                            <h3>Faisons la différence ensemble !</h3>
                            <div className={styles.ctaInformation}>
                                <p>
                                    Pet Foster Connect aide les associations à
                                    trouver des familles d’accueil sûres et
                                    aimante pour les animaux en attente d’un
                                    foyer définitif
                                </p>
                                <p>
                                    Inscrivez vous en tant que famille d’accueil
                                    et faites profiter à une animal la chaleur
                                    de votre foyer en attendant qu’il trouve sa
                                    famille d’accueil
                                </p>
                            </div>
                        </div>
                    </div>
                    <CtaButton label="S'inscrire" />
                </section>
            </main>
        </>
    );
};

export default HomePage;
