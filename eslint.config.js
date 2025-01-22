export default [
    {
        files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            'react/prop-types': 'off'
        }
    }
];