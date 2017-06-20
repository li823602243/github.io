/**
 * Created by 郭子林 on 2016/7/5.
 */
$(function(){
    $.fn.slides = function(){

        alert(1)


    }

    slides.prototype = function(){



    };


    slides.init = function(loop){
        var _this = this;
        loop.each(function(){
            new _this($(this));
        })

    };







});
