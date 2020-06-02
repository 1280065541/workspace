var UPLOAD_FILE = new Vue({
    el: '#demo',
    data: {
        // dates: []
        a: 12345
    },
    methods: {
        test: function (date1, date2) {
        }
    },
})


/** 
 * @param {*} time 时间字符串（2020-06-02）
 * @param {*} type 获取周一（start）还是周日（end）
 */
function getWeekEndDay (time, type) {
    if (time == '' || type == '')
        return null
    var date = new Date(time)
    var day = date.getDay()
    switch (type) {
        case 'start':
            if (day == 1) {
                return date
            }
            else {
                //获取需要减去的天数
                day = day == 0 ? 6 : (day - 1)
                return new Date(date.getTime() - day * 60 * 60 * 24 * 1000)
            }
        case 'end':
            if (day == 0) {
                return date
            }
            else {
                day = 7 - day
                return new Date(date.getTime() + day * 60 * 60 * 24 * 1000)
            }
        default:
            return null
    }
}

function getTimeParams (time, type) {

}

// console.log(getWeekEndDay('2020-06-01', 'start').toDateString())