module.exports = {
    collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
    moduleNameMapper: {
        /* Handle CSS imports (with CSS modules)
           https://jestjs.io/docs/webpack#mocking-css-modules */
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

        // Handle CSS imports (without CSS modules)
        "^.+\\.(css|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js",

        // Handle react components provided by svgr
        "^!svg-react!.*$": "<rootDir>/src/__mocks__/reactSvgMock.jsx",

        /* Handle image imports
           https://jestjs.io/docs/webpack#handling-static-assets */
        "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/__mocks__/fileMock.js",

        // Keep in sync with tsconfig paths
        "^@src/(.*)$": ["<rootDir>/src/$1"],
        "^@assets/(.*)$": ["<rootDir>/src/assets/$1"],
        "^@components/(.*)$": ["<rootDir>/src/components/$1"],
        "^@styles/(.*)$": ["<rootDir>/src/styles/$1"],
        "^@docs/(.*)$": ["<rootDir>/docs/$1"]
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    testEnvironment: "jsdom",
    transform: {
        /* Use babel-jest to transpile tests with the next/babel preset
           https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }]
    },
    transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"]
};