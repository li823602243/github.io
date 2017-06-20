 _init : function(){
                if (this.dom) {
                    return this;
                }
                var self = this;
                this.body = $(document.body);
                this.all  = $(".smm_all");

                this.dom  = $(document.createElement("div"));
                this.info = $(document.createElement("div"));
                this.icon = $(document.createElement("i"));
                this.dom .addClass("smm-hidden smm-cover yahei");
                this.info.addClass("smm-hidden smm-cover-info yahei");
                this.icon.addClass(this.LOADING);
                this.text = $(document.createElement("div"));
                this.text.addClass("smm-cover-text yahei")

                this.body.append(this.dom);
                this.body.append(this.info);
                this.info.append($(document.createElement('div')).addClass('smm-cover-icon-capacity').append(this.icon));
                this.info.append(this.text);
                this.ok = $(document.createElement("div"));
                this.ok.hide();
                this.ok.text(this.oktext);
                this.ok.addClass("smm-cover-btn blue yahei");
                this.cancel = $(document.createElement("div"));
                this.cancel.hide();
                this.cancel.text("取消");
                this.cancel.addClass("smm-cover-btn orange yahei");
                this.info   .append($(document.createElement("div")))
                            .append(this.cancel)
                            .append(this.ok);

                this.ok.on('click',function(){
                    self.remove();
                    if(self.callback){
                        self.callback(true);
                        self.callback = null;
                    }
                });
                this.cancel.on('click',function(){
                    self.remove();
                    if(self.callback){
                        self.callback(false);
                        self.callback = null;
                    }
                });

                return this;
            },

            cover : function(info,timeout,icon,oktext,onclose){
                this._show( info ,
                            timeout ? timeout : undefined,
                            icon ? icon : this.LOADING ,
                            oktext ? oktext :this.OKTEXT
                            );
            },

            _show : function(info, timeout,icon,oktext,onclose){
                this._init().dom.show();
                this.icon.removeClass().addClass(icon);
                this.text.html(info );
                this.ok.html(oktext );
                this.info.show();
                this.all.addClass("filter-blur")
                return this
            },

            remove : function(){
                this._init().dom.hide();
                this.info.hide();
                this.all.removeClass("filter-blur");
                this.ok.hide();
                this.cancel.hide();
            },

            alert : function(info,timeout,icon,oktext,onclose){
                this._show( info ,
                            timeout ? timeout : undefined,
                            icon ? icon : this.CHECK ,
                            oktext ? oktext :this.OKTEXT
                            );
                this.callback = onclose;
                this.ok.show();
            },

            alert_large : function(info,timeout,icon,oktext,onclose){
                this._init().info.addClass("smm-cover-large");
                this.alert(info,timeout,icon,oktext,function(data){
                    this.info.removeClass("smm-cover-large");
                    if(onclose){
                        onclose(data);
                    }
                });
            },

            confirm : function(info,timeout,icon,oktext,onclose){
           
                this._show( info ,
                            timeout ? timeout : undefined,
                            icon ? icon : this.QUESTION,
                            oktext ? oktext : this.OKTEXT
                        );
                this.callback = onclose;
                this.ok.show();
                this.cancel.show();
            },
            QUESTION  : "fa fa-3x orange fa-question-circle ",
            PRINT     : "fa fa-4x blue fa-print ",
            CHECK     : "fa fa-3x green fa-check-circle",
            LOADING   : "fa fa-3x fa-pulse green fa-spinner",
            ERROR     : "fa fa-3x red fa-times-circle",
            OKTEXT    : "确定"
        }