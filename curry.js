function curry(func) {
    let globalArgs = [];

    let resultFunc = function curryFunc(...args) {
        globalArgs.push(...args);
        return curryFunc;
    };

    resultFunc[Symbol.toPrimitive] = function () {
        return func(...globalArgs);
    };

    return resultFunc;
}

function sum(a, b, c) {
    return a + b + c;
}

let currySum = curry(sum);

console.log( sum(10, 20, 30) );
console.log( currySum(10)(20, 30) );
