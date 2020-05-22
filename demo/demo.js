var UPLOAD_FILE = new Vue({
    el: '#demo',
    data: {
        social: ['twitter'],
        selectArr: [
            { name: '111', value: 0 },
            { name: '222', value: 1 }
        ],
        tempSelect: 0
    },
    methods: {
        selectChange: function () {
            console.log(this.tempSelect)
        }
    }
})

var b = 3;
(function () {
    b = 5;
    var b = 2;
    console.log(this)
})();
console.log(b);