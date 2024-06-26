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
        ...globals.jest,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    overrides: [
      {
        files: ['**/*.test.js', '**/*.spec.js'],
        rules: {
          'react/react-in-jsx-scope': 'off',
        },
      },
    ],
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];
