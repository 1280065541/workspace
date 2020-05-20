// class Person {
//     name: string;
//     id: number;
//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//         // console.log("myname is " + this.name, + "my id is " + this.id)
//     }
//     hello(): void {
//         console.log('hello ' + this.name)
//     }
// }
// let yanlu = new Person('yanlu', 2230)
// yanlu.hello()
// class Student {
//     fullName: string;
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//         console.log(this.fullName)
//     }
// }
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = new Student("Jane", "M.", "User");
// console.log(user)
// console.log(greeter(user));
//联合类型
// function getString(something: string | number): string {
//     // toString 是 string类型 和 number类型 的共有属性
//     return something.toString();
//   }
//   function getLength(something: string | number): number {
//     return something.length;
//     // => 编译报错: length 不是 string类型 和 number类型 的共有属性, 所以报错
//   }
//元祖类型
// let arr:[string,number] = ['name',20]
//never 类型
// function infiniteLoop(): never {
//     while (true) {
//     }
// }
// function error(message: string): never {
//     throw new Error(message)
// }
//字符串字面量类型
// type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sar" | "Sun"
// function sayHello(day: Day) {
//     return "hello, today is " + day
// }
// console.log(sayHello("Fri")) //hello, today is Fri
// console.log(sayHello("yanlu")) //Argument of type "yanlu" is not assignable to parameter of type 'Day'
//基础数据类型
// let num: number = 1
// let isTrue: boolean = true
// let str: string = 'name'
// let a: null = null
// let b: undefined = undefined
// let arr: number[] = [1,2,3]
// let arr1: Array<String> = ['1','2','3']
// let unusable: void = undefined
// num = a
// num = b
// num = unusable //Type 'void' is not assignable to type 'number'.
// let string = 'hello'
//let string:string = 'hello'
// string = 4
// Type '4' is not assignable to type 'string'.
//任意属性
// interface Person {
//     name: string;
//     age?: number;
//     [property: string]: any;
// }
// let yanlu: Person = {
//     id: '123',
//     name: 'yanlu',
//     age: 18
// }
function introduce(name, age, word) {
    if (word === void 0) { word = 'xxxx'; }
    var items = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        items[_i - 3] = arguments[_i];
    }
    if (!age)
        age = 18;
    return "my name is " + name + ", I'm " + age + " years old, my word is " + word;
}
console.log(introduce('yanlu'));
