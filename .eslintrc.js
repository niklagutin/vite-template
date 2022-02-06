module.exports = {
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'vue/attribute-hyphenation': [
            'error',
            'always',
            {
                ignore: ['viewBox'],
            },
        ],
        'vue/no-v-html': 'off',
    },
};
