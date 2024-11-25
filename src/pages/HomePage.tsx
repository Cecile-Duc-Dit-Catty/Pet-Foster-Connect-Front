import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <main>
                <div className={styles.headerSection}>
                    <div className={styles.headerDescription}>
                        <p>Accueillez un animal, devenez famille d’accueil !</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;
