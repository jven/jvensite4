module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "sort-imports-es6-autofix"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.6"
    }
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "React",
        argsIgnorePattern: "^_"
      }
    ],
    "react/prop-types": "off",
    "sort-imports-es6-autofix/sort-imports-es6": [
      "error",
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ["all", "single", "multiple", "none"]
      }
    ],
    "jsx-a11y/anchor-has-content": "off"
  }
};
