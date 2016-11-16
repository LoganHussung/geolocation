// 1. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
// myvar has not been defined inside the function yet. So it will return undfined.
var myvar = 'my value';

(function() {
    console.assert(myvar === undefined)
    var myvar = 'local value';
})()


// 2. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
// var flag is defined as true outside of the function. Ask about this one. 
var flag = true

function test() {
    if(flag) {
        var flag = false
    }
    else {
        flag = true
    }
    console.assert(flag === true)
}
test()

// 3. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
// message has not been defined in the function yet so it will return undefined.
var message = 'Hello world'

function saySomething() {
    console.assert(message === undefined)
    var message = 'Foo bar'
}

saySomething()

// 4. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
//var is defined globally as Hello World
var message = 'Hello world'

function saySomething() {
    console.assert(message === 'Hello world')
    message = 'Foo bar'
}
saySomething()

// 5. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
// a is not defined by the time it is in the assertion.
// foo is returned 2 in the function.
function test() {
    console.assert(a === undefined)
    console.assert(foo() === 2)

    var a = 1
    function foo() {
        return 2
    }
}
test();

// 6. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
//bar is not dfined in the function
//foo concats bar which is undefined with the string that it is adding.
(function() {
    console.assert(bar === undefined)
    console.assert(foo() === 'undefined - :)')

    function foo() {
        return bar+' - :)'
    }
    var bar = 1
})()
