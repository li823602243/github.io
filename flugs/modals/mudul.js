;(function () {
        function extend(son,person) {
            for (var attr in person){
                son[attr]=person[attr];
            }
        }
        function createTag(tag) {
            return document.createElement(tag);
        }
        function viewWidth() {
            return document.documentElement.clientWidth;
        }
        function viewHeight() {
            return document.documentElement.clientHeight;
        }
        function Dialog() {
            this.oLogin=null;
            this.mark=null;
            this.settings={//默认参数
                w:300,
                h:300,
                dir:"center",
                title:"标题",
                background:"gary",
                mark:true,
                content:"",
                boxClass:""
            }
        }
        Dialog.prototype.init=function (options) {
            extend(this.settings,options);
            this.create();
        };
        Dialog.prototype.create=function () {
            if(this.settings.mark){
                this.mark=createTag("div");
                this.mark.id="mark";
                this.setZhezhaoceng();
                document.body.appendChild(this.mark);
                this.oLogin=createTag("div");
                this.oLogin.className=this.settings.boxClass;
                this.oLogin.innerHTML='<div class="title" style="background: '+this.settings.background+'"><span>'+this.settings.title+'</span><span class="close">X</span></div><div class="content"></div>';
                this.mark.appendChild(this.oLogin)
                this.setData();
                this.close();
            }else{
                this.oLogin=createTag("div");
                this.oLogin.className=this.settings.boxClass;
                this.oLogin.innerHTML='<div class="title" style="background: '+this.settings.background+'"><span>'+this.settings.title+'</span><span class="close">X</span></div><div class="content">'+this.settings.content+'</div>';
                document.body.appendChild(this.oLogin);
                this.setData();
                this.close();
            }
        };
        Dialog.prototype.close=function () {
          var close=this.oLogin.getElementsByClassName("close")[0];
           if(this.settings.mark){
              var me=this;
               close.onclick=function () {
                   var omark=document.getElementById(me.mark.id);
                   document.body.removeChild(omark);
               }
           }else {
               var me=this;
               close.onclick=function () {
                   var olo=document.getElementsByClassName(this.settings.boxClass)[0];
                   document.body.removeChild(olo);
               }
           }
        };
        Dialog.prototype.setZhezhaoceng=function () {
            this.mark.style.width=viewWidth()+"px";
            this.mark.style.height=viewWidth()+"px";
            this.mark.style.background="rgba(0,0,0,.5)";
            this.mark.style.position="fixed";
            this.mark.style.zIndex=1000;
            this.mark.style.left=0;
            this.mark.style.top=0;
        };
        Dialog.prototype.removeDialog=function () {
          if(this.settings.mark){

          }
        };
        Dialog.prototype.setData=function () {
            this.oLogin.style.width=this.settings.w+"px";
            this.oLogin.style.height=this.settings.h+"px";
            this.oLogin.style.position="absolute";
            if (this.settings.dir=="center"){
                this.oLogin.style.left=(viewWidth()-this.oLogin.offsetWidth)/2+"px";
                this.oLogin.style.top=(viewHeight()-this.oLogin.offsetHeight)/2+"px";
            }else if(this.settings.dir=="right"){
                this.oLogin.style.left=(viewWidth()-this.oLogin.offsetWidth)+"px";
                this.oLogin.style.top=(viewHeight()-this.oLogin.offsetHeight)+"px";
            }
        };
        window["Dialog"]=Dialog;
    })();