// 单例模式
// 特点：唯一、全局访问
let proxyCreateSingleTon = (function () {
    let instance = null
    return function (name) {
        if (instance)
            return instance
        return instance = new SingleTon(name)
    }
})()

let SingleTon = function (name) {
    this.name = name
}

SingleTon.prototype.getName = function () {
    console.log(this.name)
}

let winner = new proxyCreateSingleTon('aaa')
console.log("winner", winner.getName())
let loser = new proxyCreateSingleTon('bbb')
console.log("loser", loser.getName())
