import tsParser from "@typescript-eslint/parser"
import vueEslintParser from "vue-eslint-parser"
export default {
  // eslint 检查作用的文件
  files: ["src/**/*.ts", "src/**/*.vue"],
  // 忽略文件
  ignores: ['eslint.config.js'],
  rules: {
    // 禁止使用 console 避免在生产代码中输出调试信息
    "no-console": "warn",
    // 禁止未使用的变量，确保代码中所有声明的变量都有实际用途
    "no-unused-vars": "error",
    // 避免稀疏数组，防止不必要的空元素带来的潜在问题
    "no-sparse-arrays": "error",
    // 禁止使用未定义的变量，确保所有变量都是确定定义的
    "no-undef": "off",
    // 避免无法到达的代码，提升代码可读性
    "no-unreachable": 'error',
    // 禁止对象属性键重复，避免逻辑错误
    "no-dupe-keys": 'error'
  },
  languageOptions: {
    // 解析 vue 语法
    parser: vueEslintParser,
    parserOptions: {
      extraFileExtensions: ['.vue'],
      ecmaFeatures: {
        jsx: true
      },
      parser: tsParser,
      sourceType: "module"
    }
  }
}
