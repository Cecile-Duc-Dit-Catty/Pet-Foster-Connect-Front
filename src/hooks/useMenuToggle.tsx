import { useEffect, useState, useRef } from 'react';

// État de gestion ouverture/fermeture pour le menu Burger
const useMenuToggle = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null); // Référence pour le bouton
    const menuRef = useRef<HTMLDivElement | null>(null); // Référence pour le menu

    const toggleMenu = () => {
        // Inverse l'état du menu prev est l'état actuel donc false, passe à true et inversement
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    // État de gestion ouverture/fermeture pour le menu Burger lors du clique
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };
        // Ajouter l'écouteur sur le document
        document.addEventListener('mousedown', handleClickOutside);
        // déclenché lorsqu'un utilisateur appuie sur un bouton de la souris

        // Nettoyer l'écouteur lorsqu'on démonte le composant
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeMenu]);

    return { menuOpen, toggleMenu, closeMenu, buttonRef, menuRef };
};

export default useMenuToggle;

// Fermer le menu en cliquant en dehors
