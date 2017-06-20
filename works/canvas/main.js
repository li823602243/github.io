/**
 * Created by 郭子林 on 2016/7/29.
 */

;(function($){
    var myCanvas = function(canvas){
        //保存单个canva对象
        this.canvas = canvas;
        //默认参数
        this.setting={
            "x":100,
            "y":100,
            "radius":50,
            "startAngle":-Math.PI/2,
            "endAngle":360,
            "anticlockwise":false,
            "lineWidth":5.0,
            "color":"blue"
        }
        $.extend(this.setting,this.getSetting());
        //console.log(this.getSetting());
        //console.log(this.setting.x+"/"+this.setting.y);
        this.setCanvasValue();
    };
    myCanvas.prototype = {

        //获取人工配置参数
        getSetting : function(){
            var setting = this.canvas.attr("data-setting");
            if(setting&&setting!==""){
                return $.parseJSON(setting);
            }else{
                return {};
            }
        },
        //配置参数
        setCanvasValue : function(){
            if (this.canvas.context.getContext) {
                var ctx = this.canvas.context.getContext('2d');
                var x = this.setting.x;                                                                 //横向偏移
                var y = this.setting.y;                                                                 //纵向偏移
                var radius = this.setting.radius;                                                      //radius
                var startAngle = -Math.PI/2;                                                            //开始角度 默认开始角度为-90度，下，面结束角度里有处理
                var endAngle = (this.setting.endAngle-90)*(1.5*Math.PI/270);                          //结束角度 方便输入0-360的角度
                var anticlockwise = false;                                                              //顺/逆时针
                ctx.beginPath();
                ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise);
                ctx.lineWidth = this.setting.lineWidth;
                ctx.strokeStyle = this.setting.color;
                ctx.stroke();
            }
        }
    };
    myCanvas.init = function(allCanvas){
        var _this_ = this;
        allCanvas.each(function(){
            new _this_($(this))
        })

    };
    window.myCanvas=myCanvas;
})(jQuery);
