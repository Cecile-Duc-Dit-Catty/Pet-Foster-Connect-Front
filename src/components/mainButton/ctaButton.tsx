import React from 'react';
import styles from './ctaButton.module.css';

interface CtaButtonProps {
    // le ? signifie que la prop n'est pas obligatoire
    label?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ label, ...props }) => {
    // ... props capture toutes les propriétés restantes
    // d’un objet après que certaines propriétés spécifiques ont été extraites.
    // Transmet toutes les propriétés au composant enfant ou à un élément HTML sans avoir à les écrire explicitement
    return (
        <>
            <button className={styles.button} {...props}>
                {label}
            </button>
        </>
    );
};
export default CtaButton;
