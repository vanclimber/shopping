$(function () {
    //设置select默认值
    $('.modelSelect')[0].selectedIndex = 0
    $('.colorSelect')[0].selectedIndex = 0

    // 价格随SKU改变
    // $(".modelSelect").change(function () {
    //     var model= $(this).val();
    //     if(model=="6GB+64GB"){
    //         $("#presentPrice").html("&nbsp;&nbsp;￥1999元");
    //     }else if(model=="6GB+128GB"){
    //         $("#presentPrice").html("&nbsp;&nbsp;￥2399元");
    //     }else{
    //         $("#presentPrice").html("&nbsp;&nbsp;￥2699元");
    //     }
    // });

    //视图随SKU改变
    $(".colorSelect").change(function () {
        var color=$(this).val();
        var a=$(".carousel-inner img");
        if (color=="优雅银河（银色）") {
            a.eq(0).attr("src","/image/product/product_0003/product_0003_slivery1.png");
            a.eq(1).attr("src","/image/product/product_0003/product_0003_slivery2.png");
            a.eq(2).attr("src","/image/product/product_0003/product_0003_slivery3.png");
            a.eq(3).attr("src","/image/product/product_0003/product_0003_slivery4.png");
        }
        else if(color=="尊贵金星（金色）"){
            a.eq(0).attr("src","/image/product/product_0003/product_0003_gold1.png");
            a.eq(1).attr("src","/image/product/product_0003/product_0003_gold2.png");
            a.eq(2).attr("src","/image/product/product_0003/product_0003_gold3.png");
            a.eq(3).attr("src","/image/product/product_0003/product_0003_gold4.png");
        }
        else{
            a.eq(0).attr("src","/image/product/product_0003/product_0003_black1.png");
            a.eq(1).attr("src","/image/product/product_0003/product_0003_black2.png");
            a.eq(2).attr("src","/image/product/product_0003/product_0003_black3.png");
            a.eq(3).attr("src","/image/product/product_0003/product_0003_black4.png");
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

    //商品详情随页面滚动加载
    $("#myTab li:eq(1)").click(function () {
        $(".picture0 h2").fadeIn(1000);
        $(window).scroll(function () {
            var location=$(document).scrollTop();
            // alert(location);
            if(location>300){
                $(".picture1 h2").fadeIn(500);
                $(".picture1 h3").fadeIn(1000);
                $(".picture1 ul").fadeIn(1500);
            }
            if(location>1100){
                $(".picture2 h2").fadeIn(500);
                $(".picture2  h4").fadeIn(1000);

            }
            if(location>1600){
                $(".picture3 h2").fadeIn(500);
                $(".picture3 h4").fadeIn(1000);

            }
            if(location>2100){
                $(".picture4 h2").fadeIn(500);
                $(".picture4 h4").fadeIn(1000);
                $(".picture4 img").fadeIn(1500);

            }
            if(location>2900) {
                $(".picture5 h2").fadeIn(500);
                $(".picture5 h4,.picture5 img").fadeIn(1000);
            }
        });

    });
});