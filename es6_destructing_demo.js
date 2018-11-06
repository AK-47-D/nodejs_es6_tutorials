const log = require('./lib/util_for_node')

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

/**

 With ES5, we have to assign each value to each variable. With ES6, we just put our values within curly brackets to get any property of the object.

 Note: if you assign a variable that is not identical to the name of property, it will return undefined. For example, if the name of the property is name and we assign it to a username variable, it will return undefined.

 We always have to name the variable the same as the name of the property. But in case we want to rename the variable, we can use the colon : instead.

 */


// For the array, we use the same syntax as the object. We have just to replace the curly brackets with square brackets.
const plArray = ['Kotlin', 'Java', 'JavaScript', 'Scala', 'Python', 'Lisp'] // array
let [v1, v2, v3, v4, v5, v6] = plArray // Attention: here is []
log(v1)
log(v2)
log(v3)
log(v4)
log(v5)
log(v6)