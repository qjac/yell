module.exports = {






    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    extends: ['eslint:recommended', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
    plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    // parser: 'babel-eslint', // class properties
    "rules": {
        'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
            'error',
            {
                singleQuote: true,
                trailingComma: 'es5',
                bracketSpacing: true
            },
        ],
        eqeqeq: ['error', 'always'],
        "no-console": 'warn', //warn if console.log,
        "no-unused-vars": "warn",
        "no-undef": "warn"
    }

};