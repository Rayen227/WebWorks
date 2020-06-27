function reg() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;


    if (userName == "") {
        alert("用户名不能为空!");
        return false;
    }
    if (password == "" || confirm == "") {
        alert("密码不能为空!");
        return false;
    }
    if (password != confirm) {
        alert("两次密码不一致!");
        return false;
    }
    localStorage.setItem("userName", userName);
    localStorage.setItem("password", password);
    alert("注册成功!");
    window.location.href = "login.html";

}