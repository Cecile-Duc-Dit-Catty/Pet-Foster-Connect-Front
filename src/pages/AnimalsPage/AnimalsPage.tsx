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
                    <div className={styles.formContainerDesktop}>
                        <form action="">
                            <div className={styles.alignFormDesktop}>
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
                                <div className={styles.buttonsContainerDesktop}>
                                    <CtaButton label={'Rechercher'} />
                                    <button className={styles.reinit}>
                                        <img src={Reinit} alt="Réinitialiser" />
                                    </button>
                                </div>
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
                <div className={styles.alignDesktop}>
                    <section className={styles.animalsCardContainer}>
                        <AnimalCard />
                        <AnimalCard />
                        <AnimalCard />
                        <AnimalCard />
                        <AnimalCard />
                        <AnimalCard />
                    </section>
                </div>
                <div className={styles.asideContainer}>
                    <div className={styles.titleContainer}>
                        <h2>POUR UN ACCUEIL TEMPORAIRE ENGAGÉ</h2>
                        <div className={styles.lineHeader}></div>
                    </div>
                    <div className={styles.textContainer}>
                        <p>
                            Accueillir un animal temporairement, c’est lui
                            offrir un refuge chaleureux et une chance de trouver
                            un foyer définiti
                        </p>
                        <p>
                            Ce geste solidaire est essentiel pour aider les
                            associations à prendre soin des animaux en attente
                            d’adoption.
                        </p>
                        <p>
                            Avant de devenir famille d’accueil, posez-vous les
                            bonnes questions:
                        </p>
                        <ul>
                            <li>
                                Ai-je le temps et l’espace nécessaires pour
                                m’occuper d’un animal ?{' '}
                            </li>
                            <li>
                                Suis-je prêt à m’investir émotionnellement pour
                                un accueil temporaire ?
                            </li>
                        </ul>
                        <p>
                            Les associations partenaires vous accompagnent à
                            chaque étape, vous apportant des conseils et un
                            suivi adapté. Elles vous guideront pour trouver
                            l’animal qui correspond à votre mode de vie et vos
                            capacités.
                        </p>
                        <p>
                            En devenant famille d’accueil, vous devenez un
                            maillon clé dans leur parcours vers une nouvelle
                            vie. Ensemble, changeons leur destin.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AnimalsPage;
