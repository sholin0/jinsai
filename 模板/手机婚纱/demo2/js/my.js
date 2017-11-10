$(function(){
	//菜单
	 $('.top .hide-nav').click(function(){
    	$('.navtree').css('display','block');
    });
    $('.maskbg').click(function(){
    	$('.navtree').css('display','none');
    });
    //滚动
    var swiper = new Swiper('.scrol-box', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay : 5000
    });
});