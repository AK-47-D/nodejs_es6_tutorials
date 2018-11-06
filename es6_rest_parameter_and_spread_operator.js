const log = require('./lib/util_for_node')

const plArray = ['Kotlin', 'Java', 'JavaScript', 'Scala', 'Python', 'Lisp']
const [v1, v2, v3, ...rest] = plArray
log(rest)


// 扩展运算符（ spread ）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

let spread = (...arr) => {
    console.log(arr)
    return arr
}

spread(plArray)

console.log(...[1, 2, 3])
// 1 2 3
console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

log(...[1, 2, 3]) // 这里用 log()函数有问题，会输出 1
// 1 2 3
log(1, ...[2, 3, 4], 5) // 这里用 log()函数有问题，会输出 1
// 1 2 3 4 5

/**

 $ node es6_rest_parameter_and_spread_operator.js
 [ 'Scala', 'Python', 'Lisp' ]
 [ [ 'Kotlin', 'Java', 'JavaScript', 'Scala', 'Python', 'Lisp' ] ]
 1 2 3
 1 2 3 4 5


 */