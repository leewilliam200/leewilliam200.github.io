const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const babelParser = require('@babel/eslint-parser');

module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
        },
        rules: {
            "no-unused-vars": "warn",
            'react/react-in-jsx-scope': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    }
];
