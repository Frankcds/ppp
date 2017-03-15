// 轮播
$(function() {
    var swiper = new Swiper('.swiper-container', {
//  		direction:'vertical',
    		loop:true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
    });


//侧边栏
var flag=1;
$("#showlog").click(function() {
    if(flag==1){
        $("#showlog").attr("src","images/ico_btn2.png");
        $(".content").animate({"right":"2.55rem" },500);
        $(".column").animate({"right":"0" },500);

        flag=2;
    } 
    else if(flag==2){
        $("#showlog").attr("src","images/ico_btn2_hov.png");
        $(".content").animate({"right":"0"},500);
        $(".column").animate({"right":"-2.55rem"},500);
        flag=1;
    }
});

//文字滚动
function autoPlay() {
    $(".infoList li:first").animate({ "marginTop": "-0.35rem" }, 1500, function() {
        $(this).css("marginTop", 0).appendTo($(".infoList"));
    });
}
var timer = setInterval(autoPlay, 1500);
$(".infoList li").hover(function() {
    clearInterval(timer);
}, function() {
    timer = setInterval(autoPlay, 1500);
})


//地区鼠标移入切换



	var liHover=$(".area").find('li');
	liHover.each(function(index){
			$('.schoolBox').hide();
			$(".schoolBox:eq(0)").show();
			
			$(this).mouseover(function(){
			$(".area").find("li").removeClass("hover");
			$(this).addClass("hover");
			$('.schoolBox').hide();
			$(".schoolBox:eq("+index+")").show();
			return false;
		})
	})




//点击加载更多
var flag=1;
$("#btn").click(function(){
	
	if(flag==1){
		$("#btn").text("点击收起更多");
		$("#schoolBox").clone().appendTo($("#schoolBox"));
		flag=2;
	}else if(flag==2){
		$("#btn").text("点击加载更多");
		$("#schoolBox #schoolBox").remove();
		flag=1;
	}
})



//优选留学方案部分
var a=1;
$(".optimizeShow").hide();
$(".clickShow").click(function(){
	
	if(a==1){
		$(".clickShow").attr("src","images/ico_btn10.png");
		$(".optimizeShow").slideDown(300);
		a=2;
	}else if(a==2){
		$(".clickShow").attr("src","images/xiala_icon1.png");
		$(".optimizeShow").slideUp(300);
		a=1;
	}
})


//footer
//var liShow=$(".footer").find("li");
//var imgShow=$(".footer").find("img");
//liShow.each(function(index){
//			$('.schoolBox').hide();
//			$("imgShow:eq(0)").attr("src","images/ico-b-nav-1-on.png");
			
//			$(this).mouseover(function(){
//				$(".footer").find("li").removeClass("footerText");
//				$(this).addClass("footerText");
//			$(".footerImg").attr("src","images/ico-b-nav-"+(index+1)+");
//			$(".footerImg:eq("+index+")").attr("src","images/ico-b-nav-"+(index+1)+"-on");
//			return false;
//		})
//	})


//footer
$(".footer ul").find("li").each(function(index){
	$(this).click(function(){
//		console.log(index);
		$(this).addClass("footerText").siblings().removeClass("footerText");
	})
})



//指纹部分
var fiShow=$(".fingerprintOne");
var b=1;
fiShow.click(function(){
	if(b==1){
		$(".fingerprintOne").attr("src","images/ico_btn23.png");
		$("#fingerprinticon1").animate({"left":"1rem"},500);
		$("#fingerprinticon2").animate({"left":"2rem"},500);
		$("#fingerprinticon3").animate({"left":"3rem"},500);
		$("#fingerprinticon4").animate({"left":"4rem"},500);
		$("#fingerprinticon5").animate({"left":"5rem"},500);
		b=2;
	}else if(b==2){
		$(".fingerprintOne").attr("src","images/ico_btn22.png");
		$("#fingerprinticon1").animate({"left":"0.15rem"},500);
		$("#fingerprinticon2").animate({"left":"0.15rem"},500);
		$("#fingerprinticon3").animate({"left":"0.15rem"},500);
		$("#fingerprinticon4").animate({"left":"0.15rem"},500);
		$("#fingerprinticon5").animate({"left":"0.15rem"},500);
		b=1;
	}
})


//弹窗部分
$(".screen").hide();
    $(".pellet .screenWindow").hide();
    $("#moBtn").click(function() {
        $(this).animate({ "right": "-0.76rem" }, 500);
        $(".screen").show();
        $(".screenWindow").show();
    });
    $(".screen").click(function() {
        $("#moBtn").animate({ "right": "0rem" }, 500);
        $(".screen").hide();
        $(".screenWindow").hide();
    });
    $("#doBtn").click(function() {
        $("#moBtn").animate({ "right": "0rem" }, 500);
        $(".screen").hide();
        $(".screenWindow").hide();
    });

    function show() {
        $(".screen").show();
        $(".screenWindow").show();
        $("#moBtn").animate({ "right": "-0.76rem" }, 500);
    }
});