//设置select默认值


$(function () {
    //设置select默认值
    $('.modelSelect')[0].selectedIndex = 0
    $('.colorSelect')[0].selectedIndex = 0

    //价格随SKU改变
    $(".modelSelect").change(function () {
        var model= $(".modelSelect").val();
        if(model=="8GB+128GB"){
            $("#presentPrice").html("&nbsp;&nbsp;￥5488元");
        }else if(model=="8GB+256GB"){
            $("#presentPrice").html("&nbsp;&nbsp;￥5988元");
        }else{
            $("#presentPrice").html("&nbsp;&nbsp;￥6788元");
        }
    });

    //视图随SKU改变
    $(".colorSelect").change(function () {
        var color=$(".colorSelect").val();
        var a=$(".carousel-inner img");
        if (color=="天空之境") {
            a.eq(0).attr("src","../static/image/product/product_0002/product_0002_white1.png");
            a.eq(1).attr("src","../static/image/product/product_0002/product_0002_white2.png");
            a.eq(2).attr("src","../static/image/product/product_0002/product_0002_white3.png");
            a.eq(3).attr("src","../static/image/product/product_0002/product_0002_white4.png");
        }
        else if(color=="极光色"){
            a.eq(0).attr("src","../static/image/product/product_0002/product_0002_aurora1.png");
            a.eq(1).attr("src","../static/image/product/product_0002/product_0002_aurora2.png");
            a.eq(2).attr("src","../static/image/product/product_0002/product_0002_aurora3.png");
            a.eq(3).attr("src","../static/image/product/product_0002/product_0002_aurora4.png");
        }
        else{
            a.eq(0).attr("src","../static/image/product/product_0002/product_0002_red1.png");
            a.eq(1).attr("src","../static/image/product/product_0002/product_0002_red2.png");
            a.eq(2).attr("src","../static/image/product/product_0002/product_0002_red3.png");
            a.eq(3).attr("src","../static/image/product/product_0002/product_0002_red4.png");
        }
    });


    //商品导航随页面滚动，固定在顶部
    $(window).scroll(function () {
        var move=$(document).scrollTop();
        if(move<210){
            $(".staticHeader").css({"position":"relative"})
        }
        if(move>210){
            $(".staticHeader").css({"width":"100%","position":"fixed","top":"0"})
        }
    });


});