var $adv = $(".advantage"),
  $special = $(".special>.title"),
  $car = $(".carousel"),
  $img = $(".img_show"),
  $til1 = $(".menu>.title"),
  $list = $(".menu>.list"),
  $til2 = $(".news>.title"),
  $new_con = $(".news .wrap"),
  $til3 = $(".choose>.title"),
  $choo_con = $(".choose section"),
  $res = $(".choose article");
  $carousel_con = $(".carousel_con");
  console.log( $special);
$(document).scroll(() => {
  console.log($(document).scrollTop());
  if ($(document).scrollTop() > 5500) {
    $choo_con.fadeIn(2500);
  } else if ($(document).scrollTop() > 5000) {
    $til3.show();
  } else if ($(document).scrollTop() > 4200) {
    $new_con.fadeIn(2500);
  } else if ($(document).scrollTop() > 3700) {
    $til2.show();
  } else if ($(document).scrollTop() > 3300) {
    $list.fadeIn(2500);
  } else if ($(document).scrollTop() > 2900) {
    $til1.show();
  } else if ($(document).scrollTop() > 2200) {
    $img.fadeIn(2500);
  } else if ($(document).scrollTop() > 1900) {
    $car.fadeIn(2500);
  } else if ($(document).scrollTop() > 1400) {
    $carousel_con.show();
  }else if ($(document).scrollTop() > 600) {
    $special.show();
  } else if ($(document).scrollTop() > 120) {
    $adv.fadeIn(2500);
  }
});

var $h2 = $(".choose h2");
var $span = $(".choose span");
var $p = $(".choose p");
$p.hide();
$res.click(function (e) {
  var target = e.target;
  $p.hide(500);
  $span.html("+");
  $h2.css("color", "#333");
  if (target.nodeName == "H2") {
    $(target).css("color", "#fdb44b").siblings().show(500);
    $(target).children().html("-");
  } else if (target.nodeName == "SPAN") {
    $(target).parent().css("color", "#fdb44b").siblings().show(500);
    $(target).html("-");
  }
});
$list.click(function (e) {
  var target = e.target;
  if (target.nodeName == "SPAN") {
    $(target)
      .css({
        "border-bottom": "2px solid #fdb44b",
        color: "#000",
      })
      .siblings()
      .css({
        border: "none",
        color: "#ccc",
      });
    $(".list .wrap:nth-child(" + ($(target).index() + 1) + ")")
      .siblings()
      .css({
        opacity: 0,
        display: "none",
      });
    $(".list .wrap:nth-child(" + ($(target).index() + 1) + ")").css({
      display: "block",
      opacity: 1,
    });
  }
});
// 轮播
//   var dex = 0;
//   var $div = $(".carousel>.content");
//   var $li = $(".carousel li");
//   $li.click(function () {
//     dex = $(this).index();
//     console.log($div);
//     $(this).addClass("show").siblings().removeClass();
//     //    $($div[dex]).css("z-index",99).siblings().css("z-index",0);
//     $($div[dex]).show().siblings().hide();
//   });

//   var timer = setInterval(() => {
//     dex++;
//     if (dex == 4) dex = 0;
//     $($li[dex]).addClass("show").siblings().removeClass();
//     // $($div[dex]).css("z-index",99).siblings().css("z-index",0);
//     $($div[dex]).fadeIn().siblings().fadeOut();
//   }, 1500);
//   $car.mouseleave(() => {
//     timer = setInterval(() => {
//       dex++;
//       if (dex == 4) dex = 0;
//       $($li[dex]).addClass("show").siblings().removeClass();
//       //    $($div[dex]).css("z-index",99).siblings().css("z-index",0);
//       $($div[dex]).fadeIn().siblings().fadeOut();
//     }, 1500);
//   });
//   $car.mouseover(() => {
//     clearInterval(timer);
//   });
