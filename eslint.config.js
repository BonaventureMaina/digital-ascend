import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: ['.svelte-kit/**', 'dist/**', 'build/**', 'node_modules/**']
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn'
    }
  }
];
