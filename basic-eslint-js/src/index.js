/**
 * 以下代码都会报错，匹配了 eslint 配置中定义的错误行为
 */
const name = "lhq"

console.log('禁止console打印');

const person = {
  name: 'zhangsan',
  name: 'zhangsan'
}

const arr = [10,,20]

console.log(arr);


console.log(age);


function foo(data) {
  return Date.now()
  
  data+ 1
  
}




