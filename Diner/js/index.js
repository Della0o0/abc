// banner滚动时的动画
var $bgc = $(".bgc");
var unitTop = 0;
var bool = false;
// $(document).scroll(function (e) {
//   var scrollTop =
//     window.pageYOffset ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop ||
//     0;
//     var bpY = $bgc.css("background-position-Y");
//   // 向下滑动
//   if (scrollTop > unitTop) {
//     $bgc.css("background-position-Y", (parseInt(bpY)+2)+"px")

//   }else{
//     $bgc.css("background-position-Y", (parseInt(bpY)-2)+"px")
//     // 向下滑动
//   }
//   if(bpY == 0){
//     $bgc.css("background-position-Y","40%")
//   }
//   unitTop = scrollTop;
// });
var $header = $(".site-header");
$(document).scroll(function(e){
  var scrollTop = window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop ||0;
  if(scrollTop>=300){
    $header.css({
      position:"fixed",
      top:0,
      backgroundColor:"white",
      color:"black"
    })
    $(".site-header .home>a").css({
      color:"black",
      border: "2px solid black",
    })
    $(".site-nav-toggle").children().css({
      backgroundColor:"black"
    })
    // $header.slideDown();
  }else{
    $header.css({
      position: "absolute",
      color:"white",
      backgroundColor:"transparent",
    })
    $(".site-header .home>a").css({
      color:"white",
      border: "2px solid white",
    })
    $(".site-nav-toggle").children().css({
      backgroundColor:"white"
    })
  }
})

var $menu_btn = $(".site-nav-toggle");
var menu_back = false;
$menu_btn.click(function(e){
  if(menu_back){
    $(".menu_back").hide();
  }else{
    $(".menu_back").show();
  }
  menu_back = !menu_back;
})