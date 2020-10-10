var UPLOAD_FILE = new Vue({
    el: '#demo',
    data: {
        options: {
            disabledDate: function (date) {
                return date && date.valueOf() > new Date()

            }
        },
        time: new Date()
    },
    methods: {

    },
    computed: {

    },
    mounted: function () {

    }
})


// 在控制台上运行
// console.table([
//     { firstName: 'John', lastName: 'Doe', age: 2 },
//     { firstName: 'William', lastName: 'Shakespeare', age: 3 }
// ])

