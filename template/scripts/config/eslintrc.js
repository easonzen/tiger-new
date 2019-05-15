const paths = require('./paths');

/**
 * 0: off
 * 1: warn
 * 2: error
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended'],
    globals: {
        __: true
    },
    parserOptions: {
        // project: paths.appTsConfig,
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    rules: {
        'react/jsx-no-target-blank': 0,
        'jsx-a11y/anchor-is-valid': 0,
        eqeqeq: [1, 'smart'],
        radix: 0,
        'no-script-url': 0,
        'no-mixed-operators': 0,
        'linebreak-style': [1, 'unix'],
        indent: 0,
        'no-whitespace-before-property': 2,
        'padded-blocks': [1, 'never'],
        'one-var-declaration-per-line': [1, 'initializations'],
        'spaced-comment': [1, 'always'],
        'space-in-parens': [1, 'never'],
        'space-before-function-paren': [
            1,
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-unary-ops': 1,
        'space-infix-ops': 1,
        'space-before-blocks': 1,
        'no-trailing-spaces': [1, { ignoreComments: true }],
        'key-spacing': [1, { mode: 'strict' }],
        'switch-colon-spacing': 1,
        'func-call-spacing': [1, 'never'],
        'keyword-spacing': 1,
        'no-multiple-empty-lines': [
            1,
            {
                max: 2,
                maxEOF: 1,
                maxBOF: 1
            }
        ],
        semi: 0,
        'array-callback-return': 2,
        // "complexity": [2, 20],
        'default-case': 1,
        curly: 2,
        'dot-location': [1, 'property'],
        'dot-notation': 1,
        'no-else-return': 2,
        'guard-for-in': 2,
        'no-empty-pattern': 2,
        'no-implied-eval': 2,
        // "no-invalid-this": 1,
        'no-global-assign': 2,
        'no-multi-spaces': [
            1,
            {
                ignoreEOLComments: true,
                exceptions: {
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ],
        'no-lone-blocks': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        yoda: 1,
        'no-with': 2,
        'no-useless-escape': 2,
        'no-useless-concat': 2,
        'no-unused-expressions': [
            2,
            {
                allowTernary: true,
                allowShortCircuit: true
            }
        ],
        'no-unused-vars': 0,
        'no-unmodified-loop-condition': 2,
        'wrap-iife': [2, 'inside'],
        'lines-between-class-members': [1, 'always', { exceptAfterSingleLine: true }],
        'padding-line-between-statements': [
            1,
            {
                blankLine: 'always',
                prev: ['multiline-block-like', 'const', 'let', 'var', 'cjs-import', 'import', 'export', 'cjs-export'],
                next: '*'
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['multiline-block-like', 'const', 'let', 'var', 'cjs-import', 'import', 'export', 'cjs-export']
            },
            { blankLine: 'any', prev: ['cjs-import', 'import'], next: ['cjs-import', 'import'] },
            { blankLine: 'any', prev: ['export', 'cjs-export'], next: ['export', 'cjs-export'] },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
        ],

        // typescript
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-use-before-define': [2, { functions: false, classes: false }],
        '@typescript-eslint/unified-signatures': 1,
        // '@typescript-eslint/await-thenable': 2,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unused-vars': [
            1,
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_|^err|^ev' // _xxx, err, error, ev, event
            }
        ]
    }
};
