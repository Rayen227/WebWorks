function check() {
    if (sessionStorage.getItem("userName")) {
        alert("欢迎访问!");
    } else {
        alert("请先登录!");
        window.location.href = "login.html";
    }
}