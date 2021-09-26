module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:@next/next/recommended"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        module: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "prefer-const": ["error"],
        "curly": ["error", "all"],
        "semi": ["error", "always"],
        "prettier/prettier": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": [
            "error",
            {
                allowArgumentsExplicitlyTypedAsAny: true
            }
        ],
        "@typescript-eslint/ban-types": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": [
            "warn",
            {
                additionalHooks: "(useUpdateEffect)"
            }
        ]
    }
};
