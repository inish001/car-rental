const OFF = 0;
const WARN = "warn";
const ERROR = 2;

module.exports = {
    // Stop ESLint from looking for a configuration file in parent folders
    root: true,

    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "eslint:recommended",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ["monorepo", "react", "react-hooks"],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
    },
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    rules: {
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["camelCase", "PascalCase", "UPPER_CASE"],
                leadingUnderscore: "allowSingleOrDouble",
                trailingUnderscore: "allowSingleOrDouble",
                filter: {
                    // you can expand this regex to add more allowed names
                    regex: "^(data-testid|process.env.*)$",
                    match: false,
                },
            },
            // disable naming convention for properties defined in quotes eg., "Content-Type"
            {
                selector: [
                    "classProperty",
                    "objectLiteralProperty",
                    "typeProperty",
                    "classMethod",
                    "objectLiteralMethod",
                    "typeMethod",
                    "accessor",
                    "enumMember",
                ],
                format: null,
                modifiers: ["requiresQuotes"],
            },
            {
                selector: "property",
                format: ["camelCase", "PascalCase", "UPPER_CASE"],
                filter: {
                    // you can expand this regex to add more allowed names
                    regex: "^(data-testid|process.env.*)$",
                    match: false,
                },
                leadingUnderscore: "allowSingleOrDouble",
                trailingUnderscore: "allowSingleOrDouble",
            },
        ],
        "react-hooks/rules-of-hooks": ERROR,
        "react-hooks/exhaustive-deps": WARN,
        "react/display-name": WARN,
        "react/no-unknown-property": ["error", { ignore: ["aria-model"] }],
        "monorepo/no-internal-import": ERROR,
        "monorepo/no-relative-import": ERROR,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            ERROR,
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: true,
                argsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/ban-types": [
            ERROR,
            {
                types: {
                    // un-ban a type that's banned by default
                    object: false,
                    "{}": false,
                    Function: false,
                },
                extendDefaults: true,
            },
        ],
        "react/prop-types": OFF,
        "no-nested-ternary": ERROR,
        "max-lines": [
            ERROR,
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        "no-cond-assign": ERROR,
        "no-constant-condition": ERROR,
        "no-unreachable": ERROR,
        "no-unused-expressions": [ERROR, { allowShortCircuit: true, allowTernary: true }],
        "no-sequences": ERROR,
        "max-params": [ERROR, { max: 4 }],
        "no-constant-binary-expression": ERROR,
    },
    overrides: [
        {
            files: ["**/*.test.ts", "**/*.test.js", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
            plugins: ["jest"],
            env: {
                jest: true,
            },
            rules: {
                // https://github.com/jest-community/eslint-plugin-jest
                "jest/no-focused-tests": ERROR,
                "jest/valid-expect": ERROR,
                "jest/valid-expect-in-promise": ERROR,
                "max-lines": OFF,
            },
        },
        {
            files: ["**/*.js"],
            rules: {
                "react-hooks/rules-of-hooks": OFF,
                "@typescript-eslint/no-var-requires": OFF,
                "@typescript-eslint/explicit-function-return-type": WARN,
            },
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: "module",
            },
        },
        {
            files: ["**/jest.config.js"],
            rules: {
                "@typescript-eslint/naming-convention": WARN,
            },
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: "module",
            },
        },
        {
            files: ["**/*.stories.tsx", "**/test-mocks/**", "**/mocks/**", "**/cypress/**", "**/__tests__/**"],
            rules: {
                "max-lines": OFF,
            },
        },
    ],
};
