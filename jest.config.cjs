module.exports = {
    preset:'ts-jest',
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
      },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^.+\\.(jpg|jpeg|png|gif|webp|svg|css)$': 'jest-transform-stub'
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/"], 
    testMatch: ['<rootDir>/tests/**/*.test.js'],
    setupFilesAfterEnv: ['<rootDir>/tests/setUpTests.js']
}