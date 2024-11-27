import styles from './animalCard.module.css';
import Button from '../mainButton/ctaButton.tsx';
import PhotoProfilExample from '../../assets/images/catExample.png';

const AnimalCard = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.photoProfileContainer}>
                    <img src={PhotoProfilExample} alt="image de l'animal" />
                </div>
                <div className={styles.informationsContainer}>
                    <div className={styles.animalName}>
                        <h2>Mystie</h2>
                    </div>
                    <div className={styles.animalInformations}>
                        <p>Race : Angora</p>
                        <p>Âge : 4 ans</p>
                    </div>
                    <div className={styles.buttonCard}>
                        <Button label="En savoir plus" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnimalCard;
