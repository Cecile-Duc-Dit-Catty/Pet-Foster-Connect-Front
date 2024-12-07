import styles from "./pagination.module.css";
import ArrowLeft from "../../assets/icons/arrow-left-solid.svg";
import ArrowRight from "../../assets/icons/arrow-right-solid.svg";
import {Link} from "react-router-dom";

const Pagination = () => {
    return (
        <>
            <section className={styles.paginationContainer}>
                <button className={styles.paginationBtn}>
                    <img src={ArrowLeft} alt="photo suivante" />
                </button>
                <div className={styles.pagesContainer}>
                    <Link to="/" className={styles.btnNav}>
                        <p>Précédent </p>
                    </Link>
                    <Link to="/">
                        <p>1 </p>
                    </Link>
                    <div className={styles.paginationLine}></div>
                    <Link to="/">
                        <p> 2 </p>
                    </Link>
                    <div className={styles.paginationLine}></div>
                    <Link to="/">
                        <p> 3 </p>
                    </Link>
                    <div className={styles.paginationLine}></div>
                    <Link to="/">
                        <p> 4 </p>
                    </Link>
                    <div className={styles.paginationLine}></div>
                    <Link to="/" className={styles.btnNav}>
                        <p>Suivant </p>
                    </Link>
                </div>
                <button className={styles.paginationBtn}>
                    <img src={ArrowRight} alt="photo précédente" />
                </button>
            </section>
        </>
    );
};

export default Pagination;
