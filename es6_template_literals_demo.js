// 在 Node 中使用模块的正确姿势：
const log = require("./lib/util_for_node");

// ES5 fun
function helloES5(name) {
    return 'Hello,' + name;
}

log(helloES5('ES5'));

// ES6 arrow fun
const helloES6 = (name) => {
    return `Hello,${name}`
};
log(helloES6('ES6'));

// OR

const helloES6Simple = name => `Hello,${name}`;
log(helloES6Simple('ES6Simple'));

/** 输出：

 $ node es6_arrow_fun_demo.js
 Hello,ES5
 Hello,ES6
 Hello,ES6Simple

 */

