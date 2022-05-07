require("@rushstack/eslint-patch/modern-module-resolution");

/**
 * ESLint configuration
 *
 * @see https://eslint.org/docs/user-guide/configuring
 * @copyright 2022-present Arthur Saenko
 *
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["jest", "import", "unicorn", "sonarjs", "prettier"],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/extensions": [".js", ".mjs", ".jsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".mjs", ".jsx"],
      },
    },
    "import/core-modules": [],
    "import/ignore": ["\\.(coffee|scss|css|less|hbs|svg|json)$"],
    "import/internal-regex": "^@types/",
  },
  rules: {
    "import/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],
    "import/no-anonymous-default-export": [
      "error",
      {
        allowCallExpression: false,
      },
    ],
    "import/export": "error",
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: [
    //       'test/**', // tape, common npm pattern
    //       'tests/**', // also common npm pattern
    //       'spec/**', // mocha, rspec-like pattern
    //       '**/__tests__/**', // jest pattern
    //       '**/__mocks__/**', // jest pattern
    //       'test.{js,jsx}', // repos with a single test file
    //       'test-*.{js,jsx}', // repos with multiple top-level test files
    //       '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
    //       '**/jest.config.js', // jest config
    //       '**/jest.setup.js', // jest setup
    //       '**/vue.config.js', // vue-cli config
    //       '**/webpack.config.js', // webpack config
    //       '**/webpack.config.*.js', // webpack config
    //       '**/rollup.config.js', // rollup config
    //       '**/rollup.config.*.js', // rollup config
    //       '**/gulpfile.js', // gulp config
    //       '**/gulpfile.*.js', // gulp config
    //       '**/Gruntfile{,.js}', // grunt config
    //       '**/protractor.conf.js', // protractor config
    //       '**/protractor.conf.*.js', // protractor config
    //       '**/karma.conf.js', // karma config
    //     ],
    //     optionalDependencies: false,
    //   },
    // ],
    "import/no-mutable-exports": "error",
    "import/no-amd": "error",
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/extensions": [
      "warn",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
      },
    ],
    "import/newline-after-import": "warn",
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": ["error", { maxDepth: Number.POSITIVE_INFINITY }],
    "import/no-useless-path-segments": ["warn", { commonjs: true }],

    "prettier/prettier": "warn",

    // eslint error-check rules
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "warn",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "warn",
    "no-regex-spaces": "warn",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "require-atomic-updates": "error",
    "use-isnan": "error",

    // eslint best-practice rules
    "array-callback-return": "error",
    "default-case": "error",
    "dot-notation": "warn",
    eqeqeq: ["error", "smart"],
    "no-alert": "warn",
    "no-console": "off",
    "no-case-declarations": "warn",
    "no-constructor-return": "warn",
    "no-else-return": ["warn", { allowElseIf: false }],
    "no-empty-pattern": "error",
    "no-extend-native": "error",
    "no-fallthrough": "warn",
    "no-global-assign": "error",
    "no-implicit-coercion": "warn",
    "no-loop-func": "error",
    "no-new": "warn",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": ["warn", { props: false }],
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": "warn",
    "no-return-await": "off",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "warn",
    "no-unused-labels": "error",
    "no-useless-call": "warn",
    "no-useless-escape": "warn",
    "no-useless-return": "warn",
    "no-void": "warn",
    "no-with": "error",
    radix: "error",
    yoda: "warn",

    // eslint variable rules
    "no-delete-var": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "warn",
    "no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],

    // eslint stylistic rules
    "lines-between-class-members": [
      "warn",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "no-lonely-if": "warn",
    "no-bitwise": "warn",
    "no-array-constructor": "warn",
    "no-new-object": "warn",
    "no-unneeded-ternary": "warn",
    "operator-assignment": "warn",
    "prefer-exponentiation-operator": "warn",

    // eslint es6 rules
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "warn",
    "no-useless-constructor": "warn",
    "no-useless-rename": "warn",
    "no-var": "error",
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "require-yield": "error",

    // unicorn plugin
    "unicorn/catch-error-name": "warn",
    "unicorn/error-message": "warn",
    "unicorn/escape-case": "warn",
    "unicorn/explicit-length-check": "warn",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "warn",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-console-spaces": "warn",
    "unicorn/no-for-loop": "warn",
    "unicorn/no-hex-escape": "warn",
    "unicorn/no-nested-ternary": "warn",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-unreadable-array-destructuring": "warn",
    "unicorn/no-zero-fractions": "warn",
    "unicorn/number-literal-case": "warn",
    "unicorn/prefer-add-event-listener": "error",
    // rule does not exist but listed in docs
    // 'unicorn/prefer-array-find': 'error',
    "unicorn/prefer-dataset": "warn",
    "unicorn/prefer-event-key": "error",
    "unicorn/prefer-flat-map": "warn",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-negative-index": "warn",
    "unicorn/prefer-node-append": "error",
    "unicorn/prefer-node-remove": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-trim-start-end": "warn",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        extendDefaultReplacements: false,
        replacements: {
          /*
           * Ignore anything related to "event"
           * Since there is no option to ignore global "event" variable
           * (this variable forces to replace e/evt with "event_",
           *  but we don't want underscore there)
           */

          arr: {
            array: true,
          },
          // e: {
          //   event: true,
          //   error: true,
          // },
          err: {
            error: true,
          },
          cb: {
            callback: true,
          },
          ctx: {
            context: true,
          },
          curr: {
            current: true,
          },
          el: {
            element: true,
          },
          elem: {
            element: true,
          },
          // evt: {
          //   event: true,
          // },
          ext: {
            extension: true,
          },
          len: {
            length: true,
          },
          lib: {
            library: true,
          },
          msg: {
            message: true,
          },
          num: {
            number: true,
          },
          obj: {
            object: true,
          },
          opts: {
            options: true,
          },
          str: {
            string: true,
          },
          val: {
            value: true,
          },
        },
      },
    ],
    "unicorn/throw-new-error": "error",

    // 'sonarjs/generator-without-yield': 'error',
    "sonarjs/no-all-duplicated-branches": "warn",
    "sonarjs/no-element-overwrite": "warn",
    // 'sonarjs/no-empty-collection': 'warn',
    "sonarjs/no-identical-conditions": "warn",
    "sonarjs/no-identical-expressions": "warn",
    // 'sonarjs/no-ignored-return': 'warn',
    "sonarjs/no-one-iteration-loop": "warn",
    "sonarjs/no-use-of-empty-return-value": "warn",
    // 'sonarjs/non-existent-operator': 'error',
    "sonarjs/cognitive-complexity": ["warn", 20],
    "sonarjs/max-switch-cases": ["warn", 20],
    "sonarjs/no-collapsible-if": "warn",
    "sonarjs/no-collection-size-mischeck": "error",
    "sonarjs/no-duplicate-string": ["warn", 6],
    // 'sonarjs/no-gratuitous-expressions': 'error',
    "sonarjs/no-identical-functions": "warn",
    "sonarjs/no-inverted-boolean-check": "error",
    // 'sonarjs/no-nested-switch': 'error',
    // 'sonarjs/no-nested-template-literals': 'error',
    "sonarjs/no-redundant-boolean": "warn",
    "sonarjs/no-redundant-jump": "warn",
    "sonarjs/no-same-line-conditional": "error",
    "sonarjs/no-small-switch": "warn",
    "sonarjs/no-unused-collection": "error",
    "sonarjs/no-useless-catch": "warn",
    "sonarjs/prefer-object-literal": "warn",
    "sonarjs/prefer-single-boolean-return": "warn",
    "sonarjs/prefer-while": "warn",
  },
};
