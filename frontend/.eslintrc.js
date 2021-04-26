module.exports = {
  env: {
    browser: true,
<<<<<<< HEAD
    es2021: true
  },

  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },

  plugins: [
    'react'
  ],

  rules: {
  },

  parser: 'babel-eslint'
}
=======
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
>>>>>>> 359b16c67649531d7e93c7c0f729432984f25e45
