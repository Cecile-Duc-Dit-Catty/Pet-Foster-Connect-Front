import styles from './carouselAnimalCard.module.css';
import AnimalCard from '../animalCard/animalCard.tsx';
import CaretLeft from '../../assets/icons/caret-left-solid.svg';
import CaretRight from '../../assets/icons/caret-right-solid.svg';

const CarouselAnimalCard = () => {
    return (
        <>
            <section className={styles.carousel}>
                <button className={styles.carouselBtn}>
                    <img src={CaretLeft} alt="photo suivante" />
                </button>
                <AnimalCard />
                <button className={styles.carouselBtn}>
                    <img src={CaretRight} alt="photo précédente" />
                </button>
            </section>
        </>
    );
};

export default CarouselAnimalCard;
