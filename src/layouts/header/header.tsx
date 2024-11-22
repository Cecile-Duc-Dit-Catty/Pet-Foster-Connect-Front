import React from 'react';
import styles from './header.module.css';
// import logo from '../../assets/logo.svg';
import mobileLogo from '../../assets/MobileLogo.png';
import userIcon from '../../assets/icons/user-solid.svg';

const Header = () => {
    // Etat de gestion pour le menu Burger
    const [menuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Inverse l'état du menu
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={mobileLogo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.userBurgerContainer}>
                <div className={styles.userIconContainer}>
                    <img
                        src={userIcon}
                        alt="Mon compte"
                        className={styles.userIcon}
                    />
                </div>
                <div className={styles.burgerMenu} onClick={toggleMenu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
