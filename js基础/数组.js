
//forEach循环
// var arr = [1, 2, 3]
// var obj = { a: 1 }
// arr.forEach(function (item, index, arr) {
//     // console.log(this.a) //this指向obj
//     //arr为原数组
//     console.log(item + '--' + index + '--' + arr)
//     arr.splice(index, 1)
//     console.log(item + '--' + index + '--' + arr)
//     //index会隐性自增
// }, obj)


//for in
// let obj = {
//     name: "张三",
//     age: 21,
//     work: "前端"
// }

// for (let index in obj) {
//      //console.log(typeof index)
//     //会把参数格式化为字符串
//     console.log("key为---", index, "val为---", obj[index])
// }

//for of
// let arr = [1, 2, 3, 4]
// for (let item of arr) {
//     console.log(item)
//     //不会把参数格式化为字符串
//     console.log(typeof item)
// }

// 不支持对象的遍历（但是它提供了其他的三种方法）
// Object.keys()   : 遍历key
// Object.values() ：遍历value
// Object.entries()   : 遍历属性和属性值，以数组形式输出
// var obj = {
//     name: "hello",
//     age: {
//         a: '1',
//         b: 2
//     }
// };
// for (var i of Object.entries(obj)) {
//     // console.log(i)
// };

function cancelSetIt(){
    // console.log(this.setInfo)
    this.setMore = false;
    this.confirmShow = true;
    this.confirmInfo.title = '温馨提示';
    this.confirmInfo.des = '确定取消当前播放?'
    this.confirmInfo.sureConfirm = async function () {
        // console.log('cancel')
        $self.confirmShow = false;

        // $self.tostShow = true;
        // $self.tostInfo.des = '取消中...';

        let data = {
            ringIds: [$.trim($self.setInfo.ringId)]
        }
        let msg = await $post(config.cancelCurrentVideo, data);

        if (msg) {
            $self.tostShow = true;
            $self.tostInfo.des = msg;
            setTimeout(() => {
                $self.tostShow = false;
            }, 1500)
        } else {
            $self.currentList = [];

            $self.currentList = $self.currentList.filter(e => {
                return e.ringIndex != $self.setInfo.ringIndex
            })

            $self.tostShow = true;

            $self.tostInfo.des = '已取消当前播放'

            setTimeout(() => {
                $self.tostShow = false;
            }, 1500)
        }
    }

}

async function t1 () {
    console.log(1)
    console.log(2)
    new Promise(function (resolve) {
        console.log('promise3')
        resolve();
    }).then(function () {
        console.log('promise4')
    })
    await new Promise(function (resolve) {
        console.log('b')
        resolve();
    }).then(function () {
        console.log('t1p')
    })

    console.log(3)
    console.log(4)
    new Promise(function (resolve) {
        console.log('promise5')
        resolve();
    }).then(function () {
        console.log('promise6')
    })
}


setTimeout(function () {
    console.log('setTimeout')
}, 0)

async function t2 () {
    console.log(5)
    console.log(6)
    await Promise.resolve().then(() => console.log('t2p'))
    console.log(7)
    console.log(8)
}

t1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve();
}).then(function () {
    console.log('promise2')
})
t2()

console.log('end');