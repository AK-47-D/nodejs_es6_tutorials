// 在 Node 中使用模块的正确姿势：
const log = require("./lib/util_for_node");

const plArray = ['Java', 'Kotlin', 'JavaScript', 'Python', 'Go'];

// ES5 fun

var iter = plArray.map(function (e) {
    return 'Hi,' + e;
})

log(iter);

// ES6 arrow fun
const iterArrow = plArray.map(e => `Hi, ${e}`)
log(iterArrow);

/**
 * The map function with arrows looks more clear and readable than map in ES5.
 * With ES6 you can write shorter and smarter code.
 * You can use the same with filter and reduce.
 */

/** 输出：

 $ node es6_arrow_fun_using_map_demo.js

 [ 'Hi,Java', 'Hi,Kotlin', 'Hi,JavaScript', 'Hi,Python', 'Hi,Go' ]
 [ 'Hi, Java',
 'Hi, Kotlin',
 'Hi, JavaScript',
 'Hi, Python',
 'Hi, Go' ]

 */

