const log = require('./lib/util_for_node')

function testRandom(resolve, reject) {
    var timeOut = Math.random() * 3;

    log(`timeOut = ${timeOut}s`);
    log('Start Processing')
    setTimeout(() => {
        process(timeOut, resolve, reject);
    }, timeOut * 1000);
    log('Pro...')

}

function process(timeOut, resolve, reject) {
    log('processing...')

    if (timeOut < 1.5) {
        log('call resolve()...');
        resolve('200 OK') // onFulfilled
    } else {
        log('call reject()...');
        reject(`timeout in ${timeOut} seconds`); // onRejected
    }
    log('Process End')
}

log('Before Promise')
const p = new Promise(testRandom);
p
    .then((onFulfilled, onRejected) => {
        log(onFulfilled)
    })
    .catch((onRejected) => {
        log(onRejected)
    })

log('After Promise')

/**

 Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离

 Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。

 要串行执行这样的异步任务，不用Promise需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：

 job1.then(job2).then(job3).catch(handleError);

 其中，job1、job2和job3都是Promise对象。

 输出：


 jack@jacks-MacBook-Air:~/WebstormProject/node-tutorials/hello-node$ node es6_promise_demo.js
 before setTimeout()
 after setTimeout()
 timeOut = 1.199983997727109s
 Done
 call reject()...
 timeout in 1.199983997727109 seconds


 jack@jacks-MacBook-Air:~/WebstormProject/node-tutorials/hello-node$ node es6_promise_demo.js
 before setTimeout()
 after setTimeout()
 timeOut = 0.557160846984075s
 call resolve()...
 200 OK
 Done



 */

// 如果我们不加上resolve,reject 的处理函数，执行 js 会报错： UnhandledPromiseRejectionWarning

/**
 $ node es6_promise_demo.js
 Before Promise
 timeOut = 2.3805466955559487s
 Start Processing
 Pro...
 After Promise
 processing...
 call reject()...
 Process End
 (node:7525) UnhandledPromiseRejectionWarning: timeout in 2.3805466955559487 seconds
 (node:7525) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
 (node:7525) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

 */