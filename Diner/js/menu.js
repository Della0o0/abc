var $til1=$(".menu>.title")
, $list=$(".menu .list")
, $menu=$(".menu")
, $special=$(".special ")
// ,$wrap1=$(".list .wrap1 img")
// ,$wrap2=$(".list .wrap2 img")
, $til2=$(".special>.title")
,$car=$(".carousel");

// 滚轮事件
$(document).scroll(()=>{
    if($(document).scrollTop()>2300){
        $car.show();
    }else if($(document).scrollTop()>1100){
        $special.show();
        $til2.show();
    }else if($(document).scrollTop()>360){
        $menu.show();
    }
})
$list.click(function(e){
    var target=e.target;
    if(target.nodeName=="SPAN"){
        $(target).css({
            "border-bottom":"2px solid #fdb44b",
            "color":"#000"
        }).siblings().css({
            "border":"none",
            "color":"#ccc"
        });
        $(".list .wrap:nth-child("+($(target).index()+1)+")").siblings().css({
           opacity:0,
           display:"none"
       });
       $(".list .wrap:nth-child("+($(target).index()+1)+")").css({
            display:"block",
            opacity:1,
       });
    }
})
// 轮播
var dex=0;
var $div=$(".carousel .content>div" ) ;
var $li=$(".carousel li");
$li.click(function(){
    dex=$(this).index();
   $(this).addClass("show").siblings().removeClass();
   $($div[dex]).css("z-index",1).siblings().css("z-index",0);
})

var timer=setInterval(()=>{
    dex++;
    if(dex==4) dex=0;
    $($li[dex]).addClass("show").siblings().removeClass();
$($div[dex]).css("z-index",1).siblings().css("z-index",0);
},1500)
$car.mouseleave(()=>{
     timer=setInterval(()=>{
        dex++;
        if(dex==4) dex=0;
        $($li[dex]).addClass("show").siblings().removeClass();
   $($div[dex]).css("z-index",1).siblings().css("z-index",0);
    },1500)
})
$car.mouseover(()=>{
    clearInterval(timer);
})