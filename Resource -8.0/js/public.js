$(function() {
	$('nav#mmenu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		counters	: false,
		navbar 		: {
			title		: '菜单',
		},
		navbars		: [
			 {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}, {
				position	: 'bottom',
				content		: [
					''
				]
			} 
		]
	});
	
	$(".home_nav li").hover(function(){
		$(this).prev().css("background-image","none")
	},function(){
		$(this).prev().css("background","url(images/nav_xian.png) no-repeat right center")
		
	})
	
	$(".home_nav .active").prev().css("background-image","none");
	$(".home_nav .active").mouseout(function(){
		$(this).prev().css("background-image","none")
	})
	
	$(".top_qie span").hover(function(){
		$(this).addClass("active").siblings("span").removeClass("active");
		$(".news_nei .new_nei_c").eq($(this).index()).show().siblings(".new_nei_c").hide();
	})
	
	$(".zi_jop li").click(function(){
		$(this).toggleClass("active").siblings("li").removeClass("active");
	})
	

	$(".yuyan").hover(function(){
		$(this).find("i").css("display","block");

	},function(){
		$(this).find("i").css("display","none");
	
	})
	
	$(".qie_shi span").hover(function(){
		$(".hon_com .hon_ul").eq($(this).index()).show().siblings().hide();
	})

	var pic_h = $(".pro_com .pic").height();
	$(".pro_com .text").css("height",pic_h);
	$(".pro_com .text2").css("height",pic_h);
	
	$(".pro_qie span").hover(function(){
		$(this).addClass("active").siblings("span").removeClass("active");
		$(".pro_com .ul_pro").eq($(this).index()).show().siblings(".ul_pro").hide();
	})
	$(".links").hover(function(){
		$(".links_show").show();
	},function(){
		$(".links_show").hide();
	})
	$(".links_show").hover(function(){
		$(this).show() 
	},function(){
		$(this).hide()
	})
	$(".er_show").hover(function(){
		$(".er_img").show();
	},function(){
		$(".er_img").hide();
	})
	

	var left_img = $(".left_tu img").attr("src");
		$(".right_tu li").hover(function(){
			var img_src = $(this).find("img").attr("src");
			$(".left_tu img").attr("src",img_src);
			$(this).addClass("active").siblings("li").removeClass("active");
		},function(){
		
		})

	
});    