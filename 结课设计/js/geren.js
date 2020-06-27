$(function () {
    $("#save").click(function () {
        var name = document.getElementById("name").value;
        var sex = document.getElementsByName("sex");
        sex = sex[0].checked ? "男" : "女";
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;
        var myIntro = document.getElementById("myIntro").value;
        // console.log(name, sex, age, email, myIntro);
        if (!name || !age || !email || !myIntro) {
            alert("请完整填写所有项目！");
            return;
        }
        var resume = {
            name: name,
            sex: sex,
            age: age,
            email: email,
            myIntro: myIntro
        };
        // console.log(JSON.stringify(resume))
        localStorage.setItem("resume", JSON.stringify(resume));
        alert("简历已更新, 即将跳转到首页...");
        window.location.href = "index.html"
    })
})