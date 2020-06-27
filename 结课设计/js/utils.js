$(function () {
    check();
    var cur = getUrlValue("cur") || "qiye";//用于确认当前页面
    var menuList = ["qiye", "zhiwei", "diqu", "geren"];
    var url;
    //id与html文件名不同，单独绑定
    $("#qiye").click(function () {
        window.location.href = "index.html?cur=qiye";
    });
    $("#qiye text").hover(function () {
        $("#qiye").animate({
            opacity: '1',
            fontSize: '30px'
        });
    });
    $("#qiye text").mouseleave(function () {
        $("#qiye").animate({
            opacity: '0.8',
            fontSize: '26px'
        });
    });
    //循环绑定动画和点击事件
    for (var i = 1; i < menuList.length; i++) {
        $("#" + menuList[i]).click(function () {
            window.location.href = $(this)[0].id + ".html?cur=" + $(this)[0].id;
        })
        setAnimate($("#" + menuList[i]), $("#" + menuList[i] + " text"));
    }

    $("#content ul li").hover(function (e) {
        var index = e.currentTarget.dataset.index;
        var item = $("#content ul li")[index];
        var text = $("#content ul li text")[index];
        item = $(item);
        text = $(text);
        item.animate({
            opacity: "1",
            speed: "fast"
        });
        text.animate({
            fontSize: "30px",
            marginLeft: "41px",
            speed: "fast"
        })
    })
    $("#content ul li").mouseleave(function (e) {
        var index = e.currentTarget.dataset.index;
        var item = $("#content ul li")[index];
        var text = $("#content ul li text")[index];
        item = $(item);
        text = $(text);
        item.animate({
            opacity: "0.7",
            speed: "fast"
        });
        text.animate({
            fontSize: "24px",
            marginLeft: "53px",
            speed: "fast"
        })
    })

    $("#content ul li").click(function (e) {
        if (!localStorage.getItem("resume")) {
            if (confirm("请先完善个人简历！")) {
                window.location.href = "geren.html?cur=geren";
            }
            return;
        }
        var index = e.currentTarget.dataset.index;
        var value = e.currentTarget.dataset.value;
        var item = $("#content ul li")[index];
        item = $(item);
        window.location.href = "send.html?name_en=" + value + "&name_ch=" + item[0].innerText + "&type=" + cur;
    })

    //轮播图效果函数
    var index = 1;
    function changeImg() {
        $("#lunbo0").hide();
        $("#lunbo1").hide();
        $("#lunbo2").hide();
        if (index == 0) {
            $("#lunbo0").fadeIn(500);
        } else if (index == 1) {
            $("#lunbo1").fadeIn(500);
        } else {
            $("#lunbo2").fadeIn(500);
        }
        index++;
        if (index > 2) index = 0;
    }
    //个人页面无轮播模块
    if (cur != "geren") setInterval(changeImg, 3000);


    //获取页面传值
    function getUrlValue(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
    //将dom对象数组转化为jQuery对象数组
    function getList(choose) {
        var domList = $(choose);
        var jqList = [];
        for (var i = 0; i < domList.length; i++) {
            jqList[i] = $(domList[i]);
        }
        return jqList;
    }
    //设置单个动画事件
    function setAnimate(jqAni, jqHov) {
        jqHov.hover(function () {
            jqAni.animate({
                opacity: '1',
                fontSize: '30px'
            });
        });
        jqHov.mouseleave(function () {
            jqAni.animate({
                opacity: '0.8',
                fontSize: '26px'
            });
        });
    }
    function check() {
        if (!sessionStorage.getItem("userName")) {
            alert("请先登录!");
            window.location.href = "login.html";
        }
    }


})
