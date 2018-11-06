// 在 Node 中使用模块的正确姿势：
const log = require("./lib/util_for_node");
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

