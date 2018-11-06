// 在 Node 中使用模块的正确姿势：
const log = require("./lib/util_for_node");

// ES5 string plus
function helloES5(name, age) {
    return 'Hello,' + name + ', My Age is ' + age;
}

log(helloES5('ES5', 10));

// ES6 template literals
const helloES6 = (name, age) => {
    return `Hello,${name}, My Age is ${age}`
};
log(helloES6('ES6', 5));


/** 输出：

 $ node es6_template_literals_demo.js
 Hello,ES5, My Age is 10
 Hello,ES6, My Age is 5

 */

