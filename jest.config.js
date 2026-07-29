const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  // Coverage is enforced at 100% on the API, i18n, and preferences layer.
  // Page and interactive-component coverage is expanded incrementally; add
  // files here as their test suites land so the gate ratchets upward.
  collectCoverageFrom: [
    'apis/fetchApi.tsx',
    'components/i18n.ts',
    'components/appPreferences.tsx',
    'components/footerNav.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
