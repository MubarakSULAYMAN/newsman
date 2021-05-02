module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 'import/extensions': ['error', 'always', "ignorePackages", {
    //   js: 'never',
    //   mjs: 'never',
    //   jsx: 'never',
    //   ts: 'never',
    //   tsx: 'never',
    //   vue: 'never'
    // }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  // "settings": {
  //   "import/resolver": {
  //     "import/extensions": [
  //       ".js",
  //       ".jsx",
  //       ".mjs",
  //       ".ts",
  //       ".tsx",
  //       ".vue"
  //     ]
  //   }
  // }
};
