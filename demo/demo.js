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