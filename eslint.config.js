import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:react/recommended',
            prettier, // désactive les règles conflictuelles avec Prettier
        ],
        plugins: ['typescript-eslint', 'react', prettierPlugin],
        rules: {
            'prettier/prettier': 'error', // Exécute Prettier comme une règle ESLint
            'no-console': 'off', // Avertissement pour les consoles
        },
    },
    // Configuration pour les fichiers de tests
    {
        files: ['**/*.test.{js,ts,jsx,tsx}'],
        env: {
            jest: true,
        },
        rules: {
            'no-console': 'off', // Autoriser les consoles dans les tests
        },
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
];
