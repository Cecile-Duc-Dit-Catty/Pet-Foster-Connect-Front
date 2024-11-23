import { Link } from 'react-router-dom';
import styles from './header.module.css';

// Importation des icônes et logo
import logo from '../../assets/logoTabletVersion.png';
import mobileLogo from '../../assets/MobileLogo.png';
// Icônes de la version mobile
import userIcon from '../../assets/icons/user-solid.svg';
import houseIcon from '../../assets/icons/house-solid-primary-color.svg';
import pawIcon from '../../assets/icons/paw-solid-primary-color.svg';
import aIcon from '../../assets/icons/a-solid-primary-color.svg';
import addressIcon from '../../assets/icons/address-card-solid-primary-color.svg';

// Icônes de la version mobile
import userIconTablet from '../../assets/icons/account_circle-tablet.svg';
import houseIconTablet from '../../assets/icons/house-solid-secondary-color.svg';
import pawIconTablet from '../../assets/icons/paw-solid-secondary-color.svg';
import aIconTablet from '../../assets/icons/a-solid-secondary-color.svg';
import addressIconTablet from '../../assets/icons/address-card-solid-secondary-color.svg';

// Import du hook du menu burger
import useMenuToggle from '../../hooks/useMenuToggle.tsx';

const Header = () => {
    const { menuOpen, toggleMenu, closeMenu, buttonRef, menuRef } =
        useMenuToggle();

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <Link to="/">
                        <img
                            src={mobileLogo}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </Link>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className={styles.logoTabletVersion}
                        />
                    </Link>
                </div>
                <div className={styles.userBurgerContainer}>
                    <div className={styles.userIconContainer}>
                        <Link to="/mon-espace">
                            <img
                                src={userIcon}
                                alt="Mon espace"
                                className={styles.userIcon}
                            />
                        </Link>
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
                {/*Bouton de connexion tablet & desktop version */}
                <div className={styles.buttonTabletContainer}>
                    <div className={styles.userIconContainer}>
                        <Link to="/connexion">
                            <button>
                                <img
                                    src={userIconTablet}
                                    alt="Connexion"
                                    className={styles.userIcon}
                                />
                                Connexion
                            </button>
                        </Link>
                    </div>
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
                                alt="Accueil"
                                className={styles.icone}
                            />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/animaux" onClick={closeMenu}>
                            <img
                                src={pawIcon}
                                alt="Liste animaux"
                                className={styles.icone}
                            />
                            Animaux
                        </Link>
                    </li>
                    <li>
                        <Link to="/associations" onClick={closeMenu}>
                            <img
                                src={aIcon}
                                alt="Associations"
                                className={styles.icone}
                            />
                            Associations
                        </Link>
                    </li>
                    <li>
                        <Link to="/mon-espace" onClick={closeMenu}>
                            <img
                                src={addressIcon}
                                alt="Mon espace"
                                className={styles.icone}
                            />
                            Mon espace
                        </Link>
                    </li>
                </ul>
            </nav>

            {/*Nav TABLET & DESKTOP */}
            <nav className={styles.menuTabletVersion}>
                <li>
                    <Link to="/">
                        <img
                            src={houseIconTablet}
                            alt="Accueil"
                            className={styles.icone}
                        />
                        Home
                    </Link>
                </li>
                <div className={styles.separator}></div>
                <li>
                    <Link to="/animaux">
                        <img
                            src={pawIconTablet}
                            alt="Liste animaux"
                            className={styles.icone}
                        />
                        Animaux
                    </Link>
                </li>
                <div className={styles.separator}></div>
                <li>
                    <Link to="/associations">
                        <img
                            src={aIconTablet}
                            alt="Associations"
                            className={styles.icone}
                            id={styles.iconeA}
                        />
                        Associations
                    </Link>
                </li>
                <div className={styles.separator}></div>
                <li>
                    <Link to="/mon-espace">
                        <img
                            src={addressIconTablet}
                            alt="Mon espace"
                            className={styles.icone}
                        />
                        Mon espace
                    </Link>
                </li>
            </nav>
        </>
    );
};

export default Header;
