import {log} from "./lib/util_for_node_exp";

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

/**
 * 源码后缀 .mjs
 *
 命令行执行：

 $ node  --experimental-modules es6_const_let_node_exp_demo.mjs

 输出：
 (node:1402) ExperimentalWarning: The ESM module loader is experimental.
 2
 1
 2

 */

