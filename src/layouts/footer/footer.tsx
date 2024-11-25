import styles from './footer.module.css';

// import des icones
import instaIcon from '../../assets/instagram-logo.png';
import fbIcon from '../../assets/facebook-logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.footNav}>
                    <Link to="#">À PROPOS</Link>
                    <Link to="#">CONTACT</Link>
                    <Link to="#">MENTIONS LÉGALES</Link>
                    <Link to="#">COOKIES</Link>
                </div>
                <div className={styles.footMentionsRs}>
                    <p>Pet Foster Connect © 2024</p>
                    <div className={styles.rsIcons}>
                        <Link to="#">
                            <img src={instaIcon} alt="Instagram" />
                        </Link>
                        <Link to="#">
                            <img src={fbIcon} alt="Facebook" />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
