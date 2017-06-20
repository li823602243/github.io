
;(function($){
	var myModal = function($ele,opts){
		this.$ele = $ele;
		this.opts = opts;
		this.default = {
			width    : 500,
			height   : 300,
			ok       : false,
			cancle   : true,
			title    : "info",
			icon     : this.icon,
			cover 	 : true,
			btnIcon  : true,
			okText	 : "确定",
			Callback : null
		}
		console.log(this)
		var opts = $.extend(this.default,this.opts)
		this.creatModal(opts);
		this.setModalStyle(opts)
	};
	myModal.prototype = {
		creatModal 	  : function(opts){

			// var $modal = '<div class="popcover-modal">'
			// 		   + '	  <div class="popcover-modal">'
			// 		   + ' 		  <h2 class="poptitle-modal">TITLE <span class="popclose-moadl"></span></h2>'
			// 		   + '   	  <div class="popinfo-modal">'
			// 		   + '        		<div class="popicon-moadl"></div>'
			// 		   + '        		<div class="poptext-moadl"></div>'
			// 		   + '		  </div>'
			// 		   + '		  <div class="popbtns-modal">'
			// 		   + '		  		<div class="popokbtn-modal"></div>'
			// 		   + '		  		<div class="popcanbtn-modal"></div>'
			// 		   + ' 		  </div>'
			// 		   + '	  </div>'
			// 		   + '</div>'
			$cover      = $('<div class="popcover-modal"></div>');
			$popmain    = $('<div class="popmain-modal"></div>');
			$title      = $('<h2 class="poptitle-modal">'+opts.title+'</h2>');
			$close 		= $('<span class="popclose-moadl"></span>');
			$info       = $('<div class="popinfo-modal"></div>');
			$icon 		= $('<div class="popicon-moadl"></div>');
			$text 		= $('<div class="poptext-moadl"></div>');
			$btns       = $('<div class="popbtns-modal"></div>');
			$okbtn      = $('<div class="popokbtn-modal">'+opts.okText+'</div>');
			$canclebtn  = $('<div class="popcanbtn-modal">取消</div>');
			$title.append($close);
			$info.append($icon);
			$info.append($text);
			$btns.append($okbtn);
			$btns.append($canclebtn);
			$popmain.append($title);
			$popmain.append($info);
			$popmain.append($btns);
			if(opts.cover){
				$cover.append($popmain);
				$('body').append($cover);
			}else{
				$('body').append($popmain);
			};
		},
			

		setModalStyle : function(opts){

		}
	};
	$.fn.myModals = function(opts){
		   this.each(function(){
		   var element = this;
		   var myModals = new myModal($(element),opts);
		});
	}

})(jQuery);