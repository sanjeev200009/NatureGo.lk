module.exports = {
    testEnvironment: "jsdom",  // good for React testing
    testMatch: [
        "**/tests/**/*.[jt]s?(x)", // or wherever your tests are
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    transform: {
        "^.+\\.[tj]sx?$": "ts-jest", // if using TypeScript, else use babel-jest
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
