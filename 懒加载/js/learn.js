

var viewHeight = document.documentElement.clientHeight;//获取可视区高度
function lazyload() {
    var eles = document.querySelectorAll('img[data-original][lazyload]')
    Array.prototype.forEach.call(eles, function (item, index) {
        var rect;
        if (item.dataset.original === "")
            return;
        rect = item.getBoundingClientRect()// 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
        if (rect.bottom >= 0 && rect.top < viewHeight) {
         
            item.src = item.dataset.original;
                item.removeAttribute("data-original");//移除属性，下次不再遍历
                item.removeAttribute("lazyload");
        }
    });
}
lazyload();//刚开始还没滚动屏幕时，要先触发一次函数，初始化首页的页面图片
document.addEventListener("scroll", lazyload);


// var viewheight = document.documentElement.clientHeight;
// var lazyload = function() {
//     var imgList = document.querySelectorAll('img[data-original][lazyload]');
//     Array.prototype.forEach.call(imgList, function(item, index){
//         var position;
//         if(item.dataset.original === "")
//             return;
//         position = item.getBoundingClientRect();
//         if(position.bottom >= 0 && position.top < viewHeight) {
//             (function(){
//                 var img = new Image();
//                 item.src = item.dataset.original;
//                 item.src = img.src;
//             })();
//             item.removeAttribute('data-original');
//             item.removeAttribute('lazyload');
//         }
//     });
// }
// lazyload();//刚开始还没滚动屏幕时，要先触发一次函数，初始化首页的页面图片
// document.addEventListener("scroll",lazyload);

