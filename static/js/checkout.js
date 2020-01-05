$(function () {
    var num=$(".Pnum");
    var totalnum=0;
    for(var i=0;i<num.length;i++){
        totalnum+=Number(num.eq(i).html().substring(1));
    }
    $("#totalNum").html(totalnum+'件');

    $("#addressList li").not("#addressEmpty").click(function () {
        $("#addressList li").css("border","1px solid #e0e0e0");
        $("#addressList li input[name='checkedaddress']").attr("checked",false);
        $(this).find('input[name="checkedaddress"]').attr("checked",'checked');
        $(this).css("border","1px solid rgb(240,90,45)");
    });
    var myform=$("#putaddress");
    $("#goAhead").click(function () {
        myform.submit();
    })
});