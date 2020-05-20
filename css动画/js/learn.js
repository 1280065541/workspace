// function showAll() {
//     console.log($('.item-container').height());
//     var height = $('.item-container').height();
//     var divList = $('.item-container').children().length;
//     $('.item-container').height(height + getDistance(divList));
// }

// function returnAll() {

// }

function getDistance(length) {
    length = length || 8;
    if(length > 8) {
        return (Math.ceil(length - 9)/ 4) * 200;
    }
    return 0;
}

var module = {
    var1:1,
    var2:2,
    fn1:function(){
        console.log('haha')
    },
    fn2:function(){

    }
}

function person(){
    this.name = 'yanlu';
    this.age = 18;

    this.getAge = function(){
        return this.age;
    }
}
// Person.prototype.getAge = function(){
//     return this.age;
// }

$(function() {
    $('#showAll').show();
    $('#returnAll').hide();

    new person().getAge();
})

$('#showAll').on('click', function() {
    console.log($('.item-container').height());
    $('#showAll').hide();
    $('#returnAll').show();
    var height = $('.item-container').height();
    var divList = $('.item-container').children().length;
    $('.item-container').height(height + getDistance(divList));
})

$('#returnAll').on('click', function() {
    $('.item-container').height(400);
    $('#showAll').show();
    $('#returnAll').hide();
})

