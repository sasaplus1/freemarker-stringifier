module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:recommended-script', 'prettier'],
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:node/recommended-module',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint'
      ],
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint']
    }
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  root: true
};
