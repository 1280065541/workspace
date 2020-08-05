var util = {
    getUrlParams: function () {
        var path = window.location.search
        var obj = new Object()
        if (path.indexOf('?') != -1) {
            var str = path.substring(1).split('&')
            for (var i = 0; i < str.length; i++) {
                obj[str[i].split('=')[0]] = unescape(str[i].split('=')[1])
            }
        }
        return obj
    }
}