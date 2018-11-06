// 在 Node 中使用模块的正确姿势：
const log = require("./lib/util_for_node");

// ES5
function helloES5(name, age) {
    return 'Hello,' + name + ', My Age is ' + age;
}

log(helloES5('ES5'));

// ES6
const helloES6 = (name, age = 10) => { // default age is 10
    return `Hello,${name}, My Age is ${age}`
};
log(helloES6('ES6')); // age is not set , will be default 10.


/** 输出：

 $ node es6_default_params_demo.js
 Hello,ES5, My Age is undefined
 Hello,ES6, My Age is 10


 */

