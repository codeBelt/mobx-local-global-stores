const { configure } = require('mobx')
const nextJest = require('next/jest')

configure({
  /**
   * By default, our stores use `makeAutoObservable` from the `mobx` library. This
   * turns the store instance into a readonly class, which prevents us from being
   * able to use stubs and spies under test.
   *
   * Setting this to false, allows us to use stubs and spies under test.
   *
   * @see https://mobx.js.org/configuration.html#safedescriptors-boolean
   */
  safeDescriptors: false,
});

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  roots: ["<rootDir>/src/"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/src/environments/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
