module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  // override/add rules settings here, such as:
  rules: {
    'no-undef': 'off',
    'no-plusplus': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/order-in-components': 'warn',
    'vue/attributes-order': 'warn',
  },
};
