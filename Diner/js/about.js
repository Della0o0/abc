
var $history=$(".history")
,$til1=$(".choose>.title")
,$choose_img=$(".choose>section>img")
,$choose_article=$(".choose>section>article")
, $til2=$(".chef>.title")
,$chef=$(".chef .chef_wrap")
,$res=$(".choose article");
$(document).scroll(()=>{
    if($(document).scrollTop()>1450){
        $chef.show();
    }else if($(document).scrollTop()>1382){
        $til2.show();
    }else if($(document).scrollTop()>700){
        $choose_img.show();
        $choose_article.show();
    }else if($(document).scrollTop()>650){
        $til1.show();
    }else if($(document).scrollTop()>200){
        $history.show();
    }
})
var $h2=$(".choose h2");
var $span=$(".choose span");
var $p=$(".choose p");
$p.hide();
$res.click(function(e){
    var target=e.target;
    $p.hide(500);
    $span.html("+");
    $h2.css("color","#333");
    if(target.nodeName=="H2"){
        $(target).css("color","#fdb44b").siblings().show(500);
        $(target).children().html("-");
    }else if(target.nodeName=="SPAN"){
        $(target).parent().css("color","#fdb44b").siblings().show(500);
        $(target).html("-");
    }
})