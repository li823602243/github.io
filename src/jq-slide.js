/**
 * Created by 郭子林 on 2016/7/29.
 */
;(function($){
    var carousels = function(carousel){
        //保存每个carousel对象
        //console.log(this.carousel)  underfined
        this.carousel = carousel;
        //console.log(this.carousel)  === carousel
        this.setting = {
            "width": 600,
            "height":380,
            "overflow":"hidden",
            "position":"relative",
            "speed":1000
        };
        $.extend(this.setting,this.getSetting());
        this.insertOptions();
        this.setSlidesStyle()
    };
    carousels.prototype = {
         insertOptions : function(){
            var currentIndex = 0;
            var viewPoint = $("<div class='view-point'></div>");
            var itemImg = $("<div class='item-img'></div>");
            var prevBtn = $("<h2 class='prev-btn'><</h2>");
            var nextBtn = $("<h2 class='next-btn'>></h2>");
            var listImgs = this.carousel.children();
            //所有图片外层均包裹着一层div
            listImgs.wrap(itemImg);
            var list = this.carousel.children();
            var itemNum = list.length;
            // 最外层包裹着视觉窗口
            list.wrapAll(viewPoint);
            // 
            list.eq(0).clone().appendTo(this.carousel.children());
            list.eq(itemNum-1).clone().prependTo(this.carousel.children());
            // 上一张 下一张 按钮
            prevBtn.appendTo(this.carousel);
            nextBtn.appendTo(this.carousel);
            $('.view-point').css({
                "position":"relative",
                "color":"#f5f5f5",
                "height":"100%",
                "left":-this.setting.width,
                "width":this.setting.width * (itemNum + 2)
            })
            $('.prev-btn,.next-btn').css({
                "position":"absolute",
                "width":28,
                "height":40,
                "top":"50%",
                "transform":"translate(0,-50%)",
                "background-color":"rgba(0,0,0,.3)",
                "text-align":"center",
                "line-height":"40px",
                "font-size":"24px",
                "cursor":"pointer"
            });
             $('.prev-btn').css({
                "left":0
            });
            $('.next-btn').css({
                "right":0
            });
            $('.item-img').css({
                "float":"left",
                "overflow":"hidden"
            });
            $('.item-img img').css({
                "vertical-align":"top",
                "width":this.setting.width,
                "height":this.setting.height,
            });
            
            var width = this.setting.width,speed = this.setting.speed;
            function slides(num){    
                $('.view-point').stop(true,true).animate({"left": - width * (num + 1) },1000,function(){
                    if(num<0){
                       $('.view-point').css({"left":- width * itemNum});
                       currentIndex = itemNum -1;
                       return;
                    }else if(num>=itemNum){
                        $('.view-point').css({"left":- width})
                        currentIndex = 0;
                        return;
                    }else{
                        currentIndex = num
                    }
                })
            };
            $('.prev-btn').on('click',function(){
                console.log(this)
                this.slides(currentIndex-1);
            })
            $('.next-btn').on('click',function(){
                slides(currentIndex+1);
            });
         },
         next :function(){
            slides(currentIndex+1);
         },
         //获取用户配置参数
         getSetting : function(){
            var setting = this.carousel.attr("data-setting");
            if(setting&&setting!==""){
                return $.parseJSON(setting);
            }else{
                return {};
            }
        },
         setSlidesStyle : function(){
            this.carousel.css({
                "width":this.setting.width,
                "height":this.setting.height,
                "overflow":this.setting.overflow,
                "position":this.setting.position
            })
         }
    };
    // 页面包含多个插件内容时 初始化
    carousels.init = function(allCarousels){
        //this指的是carousels这一函数
        var _this = this;
        allCarousels.each(function(){
            //$(this)是allCarousels的每一项
            //new 执行carousels
            new _this($(this))
        })

    };
    window.carousels = carousels;
})(jQuery)