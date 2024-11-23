import { Link } from 'react-router-dom';
import styles from './header.module.css';

// Importation des icônes et logo
// import logo from '../../assets/logo.svg';
import mobileLogo from '../../assets/MobileLogo.png';
import userIcon from '../../assets/icons/user-solid.svg';
import houseIcon from '../../assets/icons/house-solid-primary-color.svg';
import pawIcon from '../../assets/icons/paw-solid-primary-color.svg';
import aIcon from '../../assets/icons/a-solid-primary-color.svg';
import addressIcon from '../../assets/icons/address-card-solid-primary-color.svg';

// Import du hook du menu burger
import useMenuToggle from '../../hooks/useMenuToggle.tsx';

const Header = () => {
    const { menuOpen, toggleMenu, closeMenu, buttonRef, menuRef } =
        useMenuToggle();

    return (
        <>
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

                    {/*style menu burger */}
                    <button
                        ref={buttonRef}
                        className={styles.burgerMenuButton}
                        onClick={toggleMenu}
                    >
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </button>
                </div>
            </header>
            {/*Menu burger */}
            <nav
                ref={menuRef} // Attacher menuRef au conteneur du menu
                className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}
            >
                <ul>
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            <img
                                src={houseIcon}
                                alt="Logo"
                                className={styles.icone}
                            />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/animaux" onClick={closeMenu}>
                            <img
                                src={pawIcon}
                                alt="Logo"
                                className={styles.icone}
                            />
                            Animaux
                        </Link>
                    </li>
                    <li>
                        <Link to="/associations" onClick={closeMenu}>
                            <img
                                src={aIcon}
                                alt="Logo"
                                className={styles.icone}
                            />
                            Associations
                        </Link>
                    </li>
                    <li>
                        <Link to="/mon-espace" onClick={closeMenu}>
                            <img
                                src={addressIcon}
                                alt="Logo"
                                className={styles.icone}
                            />
                            Mon espace
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
