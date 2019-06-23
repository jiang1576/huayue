$(document).ready(function(){
    //展示企划列表
    $.ajax({
    url:"users/project",    //请求的url地址
    dataType:"json",   //返回格式为json
    async:true,//请求是否异步，默认为异步，这也是ajax重要特性
    //data:{"id":"value"},    //参数值
    type:"GET",   //请求方式
    beforeSend:function(){
        //请求前的处理
    },
    success:function(req){
        //请求成功时处理
        var req0 = JSON.stringify(req);
        var data = JSON.parse(req0);

        $.each(data, function(idx, data) {
            var cloneNode = $("#clone").clone();
            cloneNode.find("#projectName").text(data.name).attr("id", "projectName-"+idx);   // 企划名称
            cloneNode.find("#projectPrice").html( data.price+"<span> RMB/张</span>").attr("id","projectPrice-"+idx);   // 企划价格
            cloneNode.find("#projectDate").html( "<span>发布于 </span>"+crtTimeFtt(data.date)).attr("id","projectDate-"+idx);   // 发布时间
            cloneNode.find("#projectType").text( data.type).attr("id","projectType-"+idx);   // 用途·类型
            cloneNode.find("#projectDeadline").text( crtTimeFtt(data.deadline)).attr("id","projectDeadline-"+idx);   // 截稿时间
            cloneNode.find("#projectStyle").text( data.style).attr("id","projectStyle-"+idx);   // 风格要求
            cloneNode.find("#projectPeople").text( data.people).attr("id","projectPeople-"+idx);   // 应征人数
            cloneNode.find("#projectId").attr({"id":"projectId-"+idx,"href":"/content?id="+data.projectId});   // 企划ID
            cloneNode.attr("id", "clone-"+idx);
            $("#clone").after(cloneNode);
            $("#clone-"+idx).show();
            if(idx==9){return false;}
        });
    },
    complete:function(){
        //请求完成的处理
    },
    error:function(e){
        //请求出错处理
        console.log(e)
    }
    });
    var url=window.location.search;
    var id=url.replace(/[^0-9]/g, "");
    $.ajax({

        url:"users/content",    //请求的url地址
        dataType:"json",   //返回格式为json
        async:true,//请求是否异步，默认为异步，这也是ajax重要特性
        data:{"id":id},    //参数值
        type:"GET",   //请求方式
        beforeSend:function(){
            //请求前的处理
        },
        success:function(req){
            //请求成功时处理
            var req0 = JSON.stringify(req);
            var data = JSON.parse(req0);
            console.log(data);
        },
        complete:function(){
            //请求完成的处理
        },
        error:function(e){
            //请求出错处理
            console.log(e)
        }
    });


});

//时间格式化处理
function dateFtt(fmt,date) {
    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

//创建时间格式化显示
function crtTimeFtt(value,row,index){
    var crtTime = new Date(value);
    return top.dateFtt("yyyy-MM-dd",crtTime);//直接调用公共JS里面的时间类处理的办法
}
