// export default {
//   rules: {
//     // 禁止使用 console 避免在生产代码中输出调试信息
//     "no-console": "error",
//     // 禁止未使用的变量，确保代码中所有声明的变量都有实际用途
//     "no-unused-vars": "error",
//     // 避免稀疏数组，防止不必要的空元素带来的潜在问题
//     "no-sparse-arrays": "error",
//     // 禁止使用未定义的变量，确保所有变量都是确定定义的
//     "no-undef": "error",
//     // 避免无法到达的代码，提升代码可读性
//     "no-unreachable": 'error',
//     // 禁止对象属性键重复，避免逻辑错误
//     "no-dupe-keys": 'error'
//   }
// }

import js from '@eslint/js'
export default [js.configs.recommended]