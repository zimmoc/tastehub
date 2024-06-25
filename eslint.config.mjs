import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest, // Add Jest globals here
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];
