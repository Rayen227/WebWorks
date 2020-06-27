function log() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    if (userName == "" || password == "") {
        alert("输入不能为空!");
        return false;
    }

    if (localStorage.getItem("userName")) {
        var localName = localStorage.getItem("userName").toString();
        var loacalPassword = localStorage.getItem("password").toString();
        if (userName == localName) {
            if (password == loacalPassword) {
                sessionStorage.setItem("userName", userName);
                alert("登录成功");
                window.location.href = "index.html";
            }
            else {
                alert("输入密码不正确!");
            }
        } else {
            alert("用户名不正确!");
        }
    } else {
        alert("请先注册!");
    }
}