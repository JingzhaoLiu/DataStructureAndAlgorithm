// console.log("hello world1")



// Array

// creat
let animal = []
console.log(animal)
let number = new Array()
console.log(number)


let animals = ["cat", "dog"]
console.log(animals)
let numbers = new Array(1, 2, 4)
console.log(numbers)

// 属性 len
console.log(numbers.length);
console.log(numbers)

// methods

// add
numbers[4] = 5
console.log(numbers)
console.log("-----")

console.log(numbers.unshift(9, 10))
console.log("-----")
// 向数组的开头添加一个或者多个元素
console.log(numbers)

numbers.push(12, 13)
// 向数组的结尾添加一个或者多个元素
console.log(numbers)

console.log("-----")
console.log(numbers.splice(5, 0, 21))
console.log("-----")
// 方法向数组中添加项目，然后返回`空数组`
console.log(numbers)

// false add
// concat方法用于连接两个或者多个数组。
console.log(numbers.concat(100, 101))
console.log(numbers.concat([102, 103]))
console.log(numbers.concat([102, 103], [104, 105]))


// del
console.log(numbers.shift())
//直接改变数组 删除并返回数组的第一个`元素`  数组为空时 返回 undefind
console.log(numbers)

console.log(numbers.pop())
//直接改变数组 删除并返回数组的最后一个`元素`   数组为空时 返回 undefind
console.log(numbers)


console.log(numbers.splice(5, 2))
// 方法向数组中删除项目，然后返回被删除的`元素数组`  
console.log(numbers)


// false del
console.log(numbers.slice(3))
console.log(numbers.slice(3, 6))
// slice 从哪截取到哪里  索引可以为负数
// splice 拼接  索引可以为负数

// change
numbers[4] = 15
console.log(numbers)

console.log(numbers.splice(4, 1, 20))
// 方法向/从数组中添加/删除项目，然后返回被删除的`元素数组`
console.log(numbers)



// find

// indexOf()和lastIndexOf()  找不到返回-1
console.log(numbers.indexOf(20))
console.log(numbers.lastIndexOf(20))


// es6 中新增的 用学过的 怎么实现