
# ES6 极简教程（ES6 Tutorial） 
文 / 东海陈光剑
## ECMAScript简介
JavaScript是ECMAScript的实现和扩展，由ECMA（一个类似W3C的标准组织）参与进行标准化。ECMAScript定义了：
* 语言语法 – 语法解析规则、关键字、语句、声明、运算符等。
* 类型 – 布尔型、数字、字符串、对象等。
* 原型和继承
* 内建对象和函数的标准库 – JSON、Math、数组方法、对象自省方法等。

ECMAScript标准不定义HTML或CSS的相关功能，也不定义类似DOM（文档对象模型）的Web API，这些都在独立的标准中进行定义。ECMAScript涵盖了各种环境中JS的使用场景，无论是浏览器环境还是类似node.js的非浏览器环境。
### 版本号6
* ECMAScript标准的历史版本分别是1、2、3、5。

那么为什么没有第4版？其实，在过去确实曾计划发布提出巨量新特性的第4版，但最终却因想法太过激进而惨遭废除（这一版标准中曾经有一个极其复杂的支持泛型和类型推断的内建静态类型系统）。

ES4饱受争议，当标准委员会最终停止开发ES4时，其成员同意发布一个相对谦和的ES5版本，随后继续制定一些更具实质性的新特性。这一明确的协商协议最终命名为“Harmony”，因此，ES5规范中包含这样两句话：

ECMAScript是一门充满活力的语言，并在不断进化中。

未来版本的规范中将持续进行重要的技术改进。
### ES5
* 2009年发布的改进版本ES5，引入了Object.create()、Object.defineProperty()、getters和setters、严格模式以及JSON对象。常用的数组方法：.map()、. filter()这些。
### ES6
* 箭头函数（arrow functions）
* 字符串插值（string interpolation）
* 代理（proxies）
* 生成器（generators）
* 类
* 模块
### TypeScript
* 相对于ES6，TypeScript最大的改善是增加了类型系统（Type System）。
* ES5, ES6, TypeScript 发展关系
## const and let
### const (val)
* const is a new keyword in ES6 for declaring variables. const is more powerful than var. Once used, the variable can’t be reassigned. In other words, it’s an immutable variable except when it used with objects.
* 怎样使用
    * This is really useful for targeting the selectors. For example, when we have a single button that fires an event, or when you want to select an HTML element in JavaScript, use const instead of var. This is because var is ‘hoisted’. It’s always preferable to use const when don’t want to reassign the variable .
```
    * // ES5
var a = 1;
a = a + 1;
console.log(a); // 2

// ES 6
const b = 1;
b = b + 1; // error
console.log(b);

```
### let (var)
* let can be reassigned and take new value. It creates a mutable variable.

let is the same as const in that both are blocked-scope. It means that the variable is only available within its scope.
* 怎样使用
    * This is really useful for targeting the selectors. For example, when we have a single button that fires an event, or when you want to select an HTML element in JavaScript, use const instead of var. This is because var is ‘hoisted’. It’s always preferable to use const when don’t want to reassign the variable .
    
```
* // ES5
var a = 1;
a = a + 1;
console.log(a); // 2

// ES 6
let b = 1;
b = b + 1;
console.log(b); //2
```

## Arrow functions ()=>{}
The arrow function seems more readable and clean! You won’t need to use the old syntax anymore.

Also, you can use Arrow function with map, filter, and reduce built-in functions.   With ES6 you can write shorter and smarter code. You can use the same with filter and reduce. 
The arrow function is really awesome, and makes your code more readable, more structured, and look like modern code. Instead of using this:

### 怎样使用
```
* // 在 Node 中使用模块的正确姿势：
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
```

 输出：
```
 $ node es6_arrow_fun_demo.js
 Hello,ES5
 Hello,ES6
 Hello,ES6Simple

```


* As you see, the arrow function seems more readable and clean! You won’t need to use the old syntax anymore.

Also, you can use Arrow function with map, filter, and reduce built-in functions.

```
* // 在 Node 中使用模块的正确姿势：
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
```
输出：
```
 $ node es6_arrow_fun_using_map_demo.js

 [ 'Hi,Java', 'Hi,Kotlin', 'Hi,JavaScript', 'Hi,Python', 'Hi,Go' ]
 [ 'Hi, Java',
 'Hi, Kotlin',
 'Hi, JavaScript',
 'Hi, Python',
 'Hi, Go' ]

```

参考资料：http://es6-features.org/#Lexicalthis

## Template Literals
### 是什么
* Template literals or template strings are pretty cool. We don’t have to use the plus (+) operator to concatenate strings, or when we want to use a variable inside a string.
### 怎样使用
```
* // 在 Node 中使用模块的正确姿势：
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
```

* So simple! It’s a really huge difference between the old syntax and ES6. When playing with strings, the literal string in ES6 looks more organized and well structured than ES5.
## Default parameters
### 闲话休叙，直接上代码
```* // 在 Node 中使用模块的正确姿势：
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
log(helloES6('ES6')); // age is not set , will be default 10


/** 输出：

 $ node es6_default_params_demo.js
 Hello,ES5, My Age is undefined
 Hello,ES6, My Age is 10


 */

```
## Array and object destructing
### What is it ?
* Destruction makes the assignment of the values of an array or object to the new variable easier.
### 实操
```
* const log = require('./lib/util_for_node')

// ES5
var pl = {
    name: 'Kotlin',
    typeSystem: 'Static Type',
    platform: 'JVM,JS,Android,Native'
}

var name = pl.name
var typeSystem = pl.typeSystem
var platform = pl.platform
log(name)
log(typeSystem)
log(platform)

const scope = () => { // avoid 上面的 var 变量声明的作用域冲突
    // ES6
    const pll = {
        name: 'Kotlin',
        typeSystem: 'Static Type',
        platform: 'JVM,JS,Android,Native'
    }

    let {name, typeSystem, platform} = pll // destructing
    log(name)
    log(typeSystem)
    log(platform)
}

scope()
```

 With ES5, we have to assign each value to each variable. With ES6, we just put our values within curly brackets to get any property of the object.

 Note: if you assign a variable that is not identical to the name of property, it will return undefined. For example, if the name of the property is name and we assign it to a username variable, it will return undefined.

 We always have to name the variable the same as the name of the property. But in case we want to rename the variable, we can use the colon : instead.

 


// For the array, we use the same syntax as the object. We have just to replace the curly brackets with square brackets.
```
const plArray = ['Kotlin', 'Java', 'JavaScript', 'Scala', 'Python', 'Lisp'] // array
let [v1, v2, v3, v4, v5, v6] = plArray // Attention: here is []
log(v1)
log(v2)
log(v3)
log(v4)
log(v5)
log(v6)
```
## Import and export
### What is it ?
* Using import and export in your JavaScript application makes it more powerful. They allow you to create separate and reusable components.

If you are familiar with any JavaScript MVC framework, you will see that they use import and export to handle the components most of the time. So how do they really work?

It is simple! export allows you to export a module to be used in another JavaScript component. We use import to import that module to use it in our component.

If we want to import more than one module, we just put them within curly brackets.
## Node中使用 import/export :
#### 参考：[《Node.js 中使用 ES6 中的 import / export 的方法大全》](https://www.jianshu.com/p/ce92a09ad6eb)

## Promises
### 是什么
```
new Promise(function(resolve, reject) {
    if(true) { resolve() };
    if(false) { reject() };
}) 
```
* Promise对象有三种状态，他们分别是：

pending: 等待中，或者进行中，表示还没有得到结果
resolved(Fulfilled): 已经完成，表示得到了我们想要的结果，可以继续往下执行
rejected: 也表示得到结果，但是由于结果并非我们所愿，因此拒绝执行
这三种状态不受外界影响，而且状态只能从pending改变为resolved或者rejected，并且不可逆。在Promise对象的构造函数中，将一个函数作为第一个参数。而这个函数，就是用来处理Promise的状态变化。
```
/**
@param {*} [r]
@static
@return {Promise.<*>}
*/
Promise.reject = function(r) {};
/**
@param {(T | Promise.<T>)} [x]
@static
@return {Promise.<T>}
@template T
*/
Promise.resolve = function(x) {};
/**
@constructor
@template T
*/
function Promise(executor) {}
/**
@param {function(*): (Promise.<T> | T)} [onRejected]
@return {Promise.<T>}
*/
Promise.prototype.catch = function(onRejected) {};
/**
@param {function(T): (Promise.<TResult> | TResult)} [onFulfilled]
@param {function(*): (Promise.<TResult> | TResult)} [onRejected]
@return {Promise.<TResult>}
@template TResult
*/
Promise.prototype.then = function(onFulfilled,onRejected) {};
```

>resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去； 
reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。


Promise 实例生成以后，可以用then 方法分别指定resolved状态和rejected状态的回调函数。
* Promise 的含义
Promise 是异步编程的一种解决方案，比传统的解决方案–回调函数和事件－－更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了语法，原生提供了Promise

所谓Promise ，简单说就是一个容器，里面保存着某个未来才回结束的事件(通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。 
Promise 对象的状态不受外界影响

三种状态:

>pending：进行中
fulfilled :已经成功
rejected 已经失败

状态改变： 
Promise对象的状态改变，只有两种可能：

从pending变为fulfilled
从pending变为rejected。
这两种情况只要发生，状态就凝固了，不会再变了，这时就称为resolved（已定型）
## Rest parameter and Spread operator
- The rest parameters are used to get the argument of an array, and return a new array.
- The spread operator has the same syntax as the rest parameter, but the spread operator takes the Array itself and not just the arguments. We can use the Spread parameter to get the values of an Array, instead of using a for loop or any other method.
### 代码实操
```
const log = require('./lib/util_for_node')

const plArray = ['Kotlin', 'Java', 'JavaScript', 'Scala', 'Python', 'Lisp']
const [v1, v2, v3, ...rest] = plArray
log(rest)
```

// 扩展运算符（ spread ）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
```
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


```


## Class of OOP

### Classes
* Classes are the core of object oriented programming (OOP). They make your code more secure and encapsulated. Using classes gives your code a nice structure and keeps it oriented.


### Code实例讲解

#### 类的声明与构造

```
// 在 Node 中使用模块的正确姿势：
const log = require("./lib/util_for_node");

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    list() {
        return [
            new Product("iPad Pro 2018", 10000),
            new Product('iPhone XMax', 9000)
        ]
    }
}

const main = () => {
    const p = new Product()
    const list = p.list()
    log(list)
}

main();

/**
 * 输出：
 $ node es6_class_demo.js

 [ Product { name: 'iPad Pro 2018', price: 10000 },
 Product { name: 'iPhone XMax', price: 9000 } ]

 */
```

* 继承 extends
      

```
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

## 源代码：

https://github.com/AK-47-D/nodejs_es6_tutorials

## 文章可视化大纲：

![ES6 极简教程（ES6 Tutorial） .png](https://upload-images.jianshu.io/upload_images/1233356-9f23253560c0d88b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

