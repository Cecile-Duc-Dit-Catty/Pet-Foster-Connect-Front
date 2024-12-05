import styles from './AnimalsPage.module.css';
import PawsHeader from '../../components/pawsHeader/pawsHeader.tsx';
import CtaButton from '../../components/mainButton/ctaButton.tsx';
import Reinit from '../../assets/icons/rotate-left-solid.svg';
import AnimalCard from '../../components/animalCard/AnimalCard';

const AnimalsPage = () => {
    return (
        <>
            <main>
                <PawsHeader />
                <section className={styles.formDesktop}>
                    <div className={styles.formContainer}>
                        <form action="">
                            <div className={styles.alignForm}>
                                <div>
                                    <select name="species" id="species">
                                        <option value="none">Espèce</option>
                                        <option value="dog">Chien</option>
                                        <option value="cat">Chat</option>
                                    </select>
                                    <select name="size" id="size">
                                        <option value="none">Taille</option>
                                        <option value="small">Petit</option>
                                        <option value="medium">Moyen</option>
                                        <option value="tall">Grand</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="gender" id="gender">
                                        <option value="none">Genre</option>
                                        <option value="">Mâle</option>
                                        <option value="">Femelle</option>
                                    </select>
                                    <select name="age" id="age">
                                        <option value="none">Âge</option>
                                        <option value="0-3"> 0 à 3 ans</option>
                                        <option value="3-6">3 à 6 ans</option>
                                        <option value="6-plus">
                                            6 ans et +
                                        </option>
                                    </select>
                                </div>
                                <CtaButton label={'Rechercher'} />
                                <button></button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className={styles.formMobile}>
                    <div className={styles.formContainerMobile}>
                        <form action="">
                            <div>
                                <select name="species" id="species">
                                    <option value="none">Espèce</option>
                                    <option value="dog">Chien</option>
                                    <option value="cat">Chat</option>
                                </select>
                            </div>
                            <div>
                                <select name="size" id="size">
                                    <option value="none">Taille</option>
                                    <option value="small">Petit</option>
                                    <option value="medium">Moyen</option>
                                    <option value="tall">Grand</option>
                                </select>
                            </div>
                            <div>
                                <select name="gender" id="gender">
                                    <option value="none">Genre</option>
                                    <option value="">Mâle</option>
                                    <option value="">Femelle</option>
                                </select>
                            </div>
                            <div>
                                <select name="age" id="age">
                                    <option value="none">Âge</option>
                                    <option value="0-3"> 0 à 3 ans</option>
                                    <option value="3-6">3 à 6 ans</option>
                                    <option value="6-plus">6 ans et +</option>
                                </select>
                            </div>
                            <div className={styles.buttonsContainerMobile}>
                                <CtaButton label={'Rechercher'} />
                                <button className={styles.reinit}>
                                    <img src={Reinit} alt="Réinitialiser" />
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className={styles.animalsCardContainer}>
                    <AnimalCard />
                    <AnimalCard />
                    <AnimalCard />
                </section>
            </main>
        </>
    );
};

export default AnimalsPage;
