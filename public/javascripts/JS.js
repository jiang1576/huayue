function messagetime()
{
    var name=$("#gjname").val();
    if (name == '' || name == undefined || name == null){

        $("#gjname").css('borderColor','red'); //添加css样式
        divdate.style.display = 'block';
    }else {
        $("#gjname").css('borderColor',''); //取消css样式
        divdate.style.display = 'none';
    }
}

function messagetime2()
{
    var name2=$("#time").val();
    if (name2 == '' || name2 == undefined || name2 == null){

        $("#time").css('borderColor','red'); //添加css样式
        divtime.style.display = 'block';
    }else {
        $("#time").css('borderColor',''); //取消css样式
        divtime.style.display = 'none';
    }
}

function messagetime3()
{
    var name3=$("#price").val();
    if (name3 == '' || name3 == undefined || name3 == null){

        $("#price").css('borderColor','red'); //添加css样式
        divprice.style.display = 'block';
    }else {
        $("#price").css('borderColor',''); //取消css样式
        divprice.style.display = 'none';
    }
}

function messagetime4()
{
    var name4=$("#size").val();
    if (name4 == '' || name4 == undefined || name4 == null  ){

        $("#size").css('borderColor','red'); //添加css样式
        divsize.style.display = 'block';
    }else {
        $("#size").css('borderColor',''); //取消css样式
        divsize.style.display = 'none';
    }
}
function messagetime5()
{
    var name5=$("#jj1").val();
    var name5length = document.getElementById("jj1").value.length;
    if (name5 == '' || name5 == undefined || name5 == null || name5length<10){

        $("#jj1").css('borderColor','red'); //添加css样式
        divjj.style.display = 'block';
    }else {
        $("#jj1").css('borderColor',''); //取消css样式
        divjj.style.display = 'none';
    }
}

// function messagetime2() {
//     if (document.getElementById('gjname').value === '') {
//         divdate.style.display = 'block';
//
//     }
//     else {
//         divdate.style.display = 'none';
//
//     }
// }




$(function () {

    $('#btnFB').click(function() {
        //使用FormData用来上传文件及其他信息
        var tpp = $("input[name='tp']:checked").val();
        var fgg = $("input[name='fg']:checked").val();
        var coo = $("input[name='color']:checked").val();
        var gaojianname = document.getElementById('gjname').value;
        var gjtime = document.getElementById('time').value;
        var gjprice = document.getElementById('price').value;
        var gjjj = document.getElementById('jj1').value;
        var gjsize = document.getElementById('size').value;

        if(tpp===''){ alert('请选择稿件用途');return false;}
        if(fgg===''){ alert('请选择稿件风格要求');return false;}
        if(coo===''){ alert('请选择稿件颜色额模式');return false;}
        if(gaojianname===''){ alert('请为您的稿件起个名字');return false;}
        if(gjtime===''){ alert('请选择稿件截稿时间');return false;}
        if(gjprice===''){ alert('请选择稿件价格');return false;}
        if (gjjj === ''){ alert('请描述您的稿件');return false;}
        if (gjsize ===''){alert('请选择稿件规格');return false;}
        else {
            if (gjjj.length < 10) {
                alert('简介内容长度至少为10');
                return false
            }
            else {
                var formData1 = new FormData();
                formData1.append('Iusing', $("input[name='tp']:checked").val());
                formData1.append('Istyle', $("input[name='fg']:checked").val());
                formData1.append('Icolor', $("input[name='color']:checked").val());
                formData1.append('Iname', $('#gjname').val());
                formData1.append('Idate', $("#time").val());
                formData1.append('Iprice', $('#price').val());
                formData1.append('Ijj', $('#jj1').val());
                formData1.append('Isize', $('#size').val());
                $.ajax({
                    url: "fabu",
                    type: "POST",
                    data: formData1,
                    processData: false,  // 不处理数据
                    contentType: false,   // 不设置内容类型
                    success: function (data) {
                        alert(data);
                        location.href = "project"
                    }
                });
            }
        }

    });
})
// window.onload = function () {
//     function txtCount(el) {
//         var val = el.value;
//         var eLen = val.length;
//         return eLen;
//     }
//     var el = document.getElementById('jj1');
//     el.addEventListener('input',function () {
//         var len = txtCount(this); // 调用函数
//         document.getElementById('textCount').innerHTML = len.toString();
//     });
//     el.addEventListener('propertychange',function () {//兼容IE
//         var len = txtCount(this); // 调用函数
//         document.getElementById('textCount').innerHTML = len.toString();
//     });
// }

$(function(){
    $('#jj1').on('keyup',function(){
        var txtval = $('#jj1').val().length;




        if(txtval >= 10 ){
            $('#textcount').html(txtval);
            countspan.style.display = 'block';
        }
        else {
            countspan.style.display = 'none';
        }
        //console.log($('#num_txt').html(str));
    });
})



// function fabu()
// //验证发布信息
// {
//     var tpp = $("input[name='tp']:checked").val();
//     var fgg = $("input[name='fg']:checked").val();
//     var coo = $("input[name='color']:checked").val();
//     var gaojianname = document.getElementById('gjname').value;
//     var gjtime = document.getElementById('time').value;
//     var gjprice = document.getElementById('price').value;
//     var gjjj = document.getElementById('jj1').value;
//
//     if(tpp===''){ alert('请选择稿件用途');return false;}
//     if(fgg===''){ alert('请选择稿件风格要求');return false;}
//     if(coo===''){ alert('请选择稿件颜色额模式');return false;}
//     if(gaojianname===''){ alert('请为您的稿件起个名字');return false;}
//     if(gjtime===''){ alert('请选择稿件截稿时间');return false;}
//     if(gjprice===''){ alert('请选择稿件价格');return false;}
//     if (gjji === ''){ alert('请描述您的稿件');return false;}
//     }


