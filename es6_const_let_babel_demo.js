import {log} from "./lib/util_for_babel";

/**

 node： module.exports和require
 es6：export和import

 nodejs仍未支持import/export语法，需要安装必要的npm包–babel，使用babel将js文件编译成node.js支持的commonjs格式的代码。
 因为一些历史原因，虽然 Node.js 已经实现了 99% 的 ES6 新特性，不过截止 2018.8.10，How To Enable ES6 Imports in Node.JS 仍然是老大难问题

 借助 Babel
 1.下载必须的包

 npm install babel-register babel-preset-env --D

 2.命令行执行：

 babel-node es6_const_let_babel_demo.js

 *
 * @type {number}
 */


// ES5
var a = 1;
a = a + 1;
log(a); // 2

// ES6
const b = 1;
// b = b + 1; // error : TypeError: Assignment to constant variable.
log(b);

// ES6
let c = 1;
c = c + 1;
log(c);

