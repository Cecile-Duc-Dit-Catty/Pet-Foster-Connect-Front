import { useState } from 'react';

// État de gestion ouverture fermeture pour le menu Burger
const useMenuToggle = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        // Inverse l'état du menu prev est l'état actuel donc false, passe à true et inversement
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return { menuOpen, toggleMenu, closeMenu };
};

export default useMenuToggle;

// Fermer le menu en cliquant en dehors
