// eslint-config/eslint-config.js

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // 其他共享的扩展配置
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // 共享的自定义规则
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    // 其他共享的规则
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
