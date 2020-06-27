$(function () {
    var introText = {
        "ali": "阿里巴巴网络技术有限公司是以曾担任英语教师的马云为首的18人于1999年在浙江省杭州市创立的公司。阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁金服、菜鸟网络等。",
        "mi": "北京小米科技有限责任公司成立于2010年3月3日，是一家专注于智能硬件和电子产品研发的全球化移动互联网企业，同时也是一家专注于高端智能手机、互联网电视及智能家居生态链建设的创新型科技企业。",
        "huawei": "华为技术有限公司（HUAWEI TECHNOLOGIES CO., LTD.）成立于1987年，总部位于中国广东省深圳市龙岗区。华为是全球领先的信息与通信技术（ICT）解决方案供应商，专注于ICT领域，坚持稳健经营、持续创新、开放合作。",
        "google": "谷歌公司（Google Inc.）成立于1998年9月4日，由拉里·佩奇和谢尔盖·布林共同创建，被公认为全球最大的搜索引擎公司。谷歌是一家位于美国的跨国科技企业，业务包括互联网搜索、云计算、广告技术等，同时开发并提供大量基于互联网的产品与服务，其主要利润来自于AdWords等广告服务。",
        "emp": ""
    }

    var qiye = "<select id=sel_qiye>" +
        "<option value =''>--请选择企业--</option>" +
        "<option value ='小米公司'>小米公司</option>" +
        "<option value ='华为公司'>华为公司</option>" +
        "<option value ='谷歌公司'>谷歌公司</option>" +
        "<option value ='阿里巴巴'>阿里巴巴</option>" +
        "</select>";
    var zhiwei = "<select id=sel_zhiwei>" +
        "<option value =''>--请选择职位--</option>" +
        "<option value ='前端开发'>前端开发</option>" +
        "<option value ='数据分析'>数据分析</option>" +
        "<option value ='电商美工'>电商美工</option>" +
        "<option value ='运营维护'>运营维护</option>" +
        "</select>";
    var diqu = "<select id=sel_diqu>" +
        "<option value =''>--请选择职位--</option>" +
        "<option value ='北京朝阳'>北京朝阳</option>" +
        "<option value ='上海浦东'>上海浦东</option>" +
        "<option value ='广州白云'>广州白云</option>" +
        "<option value ='佛山南海'>佛山南海</option>" +
        "</select>";

    var selectStyle = {
        "width": "100%",
        "height": "50px",
        "font-size": "20px",
        "border": "1px solid black",
        "display": "block",
        "border-radius": "2.5px",
        "background": "none"
    };

    var type = getUrlValue("type");
    var name = $("#name");
    var position = $("#position");
    var area = $("#area");
    var intro = $("#txt");
    var myArea = "";
    var myPosition = "";
    var myQiye = "";
    if (type == "qiye") {
        myQiye = getUrlValue("name_ch");
        name[0].innerText = myQiye;
        intro[0].innerText = introText[getUrlValue("name_en")];

        setSelect(position, zhiwei, "position");
        setSelect(area, diqu, "area");
    }
    else if (type == "zhiwei") {
        myPosition = getUrlValue("name_ch");
        position[0].innerText = myPosition;

        setSelect(name, qiye, "name");
        setSelect(area, diqu, "area");

        $("#myPosition")[0].innerText = getUrlValue("name_ch");
    } else {
        myArea = getUrlValue("name_ch");
        area[0].innerText = myArea;

        setSelect(position, zhiwei, "position");
        setSelect(name, qiye, "name");
        $("#myArea")[0].innerText = getUrlValue("name_ch");
    }
    setOptionHandle();


    function setResumeData() {
        var resume = JSON.parse(localStorage.getItem("resume"));
        // console.log(resume, typeof (resume))
        $("#userName")[0].innerText = resume.name;
        $("#sex")[0].innerText = resume.sex;
        $("#age")[0].innerText = resume.age;
        $("#mail")[0].innerText = resume.email;
        $("#myIntro div")[0].innerText = resume.myIntro;

    }
    setResumeData();
    function setSelect(jq, typeString, typeName) {
        jq.append(typeString);
        $("#" + typeName + " select").css(selectStyle);
        jq.css("border", "0");
    }

    function setIntroduceText(name) {
        intro.hide();
        intro[0].innerText = introText[name];
        intro.fadeIn();
    }

    function setOptionHandle() {//为下来列表设置事件
        $("#sel_qiye").on("change", function () {
            if ($("option:selected", this).val() == "小米公司") {
                setIntroduceText("mi");
                myQiye = "mi";
            } else if ($("option:selected", this).val() == "华为公司") {
                setIntroduceText("huawei");
                myQiye = "huawei";
            } else if ($("option:selected", this).val() == "谷歌公司") {
                setIntroduceText("google");
                myQiye = "google";
            } else if ($("option:selected", this).val() == "阿里巴巴") {
                setIntroduceText("ali");
                myQiye = "ali";
            } else {
                setIntroduceText("emp");
                myQiye = "";
            }
        })
        $("#sel_zhiwei").on("change", function () {

            var item = $("#myPosition");
            if ($("option:selected", this).val() == "前端开发") {
                myPosition = "前端开发";
            } else if ($("option:selected", this).val() == "数据分析") {
                myPosition = "数据分析";

            } else if ($("option:selected", this).val() == "电商美工") {
                myPosition = "电商美工";

            } else if ($("option:selected", this).val() == "运营维护") {
                myPosition = "运营维护";

            } else {
                myPosition = "";
            }
            item.hide();
            item[0].innerText = myPosition;
            item.fadeIn();
        })
        $("#sel_diqu").on("change", function () {

            var item = $("#myArea");
            if ($("option:selected", this).val() == "北京朝阳") {
                myArea = "北京朝阳";
            } else if ($("option:selected", this).val() == "上海浦东") {
                myArea = "上海浦东";

            } else if ($("option:selected", this).val() == "广州白云") {
                myArea = "广州白云";

            } else if ($("option:selected", this).val() == "佛山南海") {
                myArea = "佛山南海";

            } else {
                myArea = "";
            }
            item.hide();
            item[0].innerText = myArea;
            item.fadeIn();
        })
    }

    $("#send").click(function () {
        if (myPosition && myArea && myQiye) {
            alert("投递成功，请耐心等待邮件回复！");
            window.location.href = "index.html";
        } else {
            alert("请将相关信息填写完整！");
        }
    })


    function getUrlValue(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }


})
