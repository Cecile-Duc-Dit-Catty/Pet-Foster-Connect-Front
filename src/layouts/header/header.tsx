// import React from 'react';
import styles from './header.module.css';
// import logo from '../../assets/logo.svg';
import mobileLogo from '../../assets/MobileLogo.svg';
import userIcon from '../../assets/icons/user-solid.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={mobileLogo} alt="Logo" className="logo" />
            <img src={userIcon} alt="Mon compte" className="userIcon" />
            <div className="burger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    );
};

export default Header;
