var selall = "<input type='checkbox' id='selall' onclick='selectall()'>全选";
var selone = "<input type='checkbox' name='selone' onclick='selectone()'>选择";
var chgRow = "<a href=# onclick=changeRow(this)>修改</a>";
var delRow = "<a href=# onclick=deleteRow(this)>删除</a>";
var allchecked = false;
var oldValue = [];
var title = new Array(selall, "学号", "姓名", "性别", "年龄");
var student = new Array();
student[0] = new Array(selone, "001", "张三", "男", "18", delRow, chgRow);
student[1] = new Array(selone, "002", "李四", "男", "19", delRow, chgRow);
student[2] = new Array(selone, "003", "王五", "女", "20", delRow, chgRow);
//页面内容
// console.log(film);
document.write("<table border='1' align='center' rules='all' id='table'>");
document.write("<tr>");
for (var i = 0; i < title.length; i++) {
    document.write("<th>" + title[i] + "</th>");
}
document.write("<th colspan=2>操作</th>");
document.write("</tr>");
for (var i = 0; i < student.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < student[i].length; j++) {
        document.write("<td>" + student[i][j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
function selectall() {
    var selall = document.getElementById("selall");
    var selone = document.getElementsByName("selone");
    if (selall.checked) {
        for (var i = 0; i < selone.length; i++)
            selone[i].checked = true;
        allchecked = true;
    }

    else {
        for (var i = 0; i < selone.length; i++)
            selone[i].checked = false;
        allchecked = false;
    }

}

function selectone() {
    var selall = document.getElementById("selall");
    var selone = document.getElementsByName("selone");

    if (allchecked) {
        selall.checked = false;
        allchecked = false;
    } else {
        tmp = true;
        for (var i = 0; i < selone.length; i++) {
            if (!selone[i].checked) {
                tmp = false;
                break;
            }
        }
        if (tmp) {
            selall.checked = true;
            allchecked = true;
        }
    }
}

function changeRow(that) {
    var save = "<a href=# onclick=saveChange(this)>保存</a>";
    var cancel = "<a href=# onclick=cancelChange(this)>取消</a>";
    var table = that.parentNode.parentNode.parentNode;
    var curRowIndex = that.parentNode.parentNode.rowIndex;
    var curRow = that.parentNode.parentNode;
    var input = [];
    for (var i = 1; i < 5; i++) {
        oldValue[i] = curRow.cells.item(i).innerHTML;
        input[i] = "<input type=text id=price value=" + oldValue[i] + ">";
    }
    for (var i = 1; i < 5; i++) {
        curRow.cells.item(i).innerHTML = input[i];
    }
    curRow.cells.item(5).innerHTML = save;
    curRow.cells.item(6).innerHTML = cancel;

}

function deleteRow(that) {
    var table = that.parentNode.parentNode.parentNode;
    var curRowIndex = that.parentNode.parentNode.rowIndex;
    if (confirm("你确定要删除该行数据吗?"))
        table.deleteRow(curRowIndex);
}

function cancelChange(that) {
    var curRow = that.parentNode.parentNode;
    for (var i = 1; i < 5; i++) {
        curRow.cells.item(i).innerHTML = oldValue[i];
    }
    curRow.cells.item(5).innerHTML = delRow;
    curRow.cells.item(6).innerHTML = chgRow;

}

function saveChange(that) {
    var curRow = that.parentNode.parentNode;
    var newValue = [];
    for (var i = 1; i < 5; i++) {
        newValue[i] = document.getElementById("price").value;
        curRow.cells.item(i).innerHTML = newValue[i];
    }
    curRow.cells.item(5).innerHTML = delRow;
    curRow.cells.item(6).innerHTML = chgRow;
}

function addLine() {
    var idNumber = document.getElementById("idNumber").value;
    var name = document.getElementById("name").value;
    var sexNode = document.getElementsByName("sex");
    var age = document.getElementById("age").value;
    if (sexNode[0].checked || sexNode[1].checked) {
        var sex = sexNode[0].checked ? "男" : "女";
    }
    if (!idNumber || !name || !sex || !age) {
        alert("请将表单填写完整!");
        return false;
    }
    var rowIndex = student.length;
    student[rowIndex] = new Array(selone, idNumber, name, sex, age, delRow, chgRow);
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    var td = [];
    for (var i = 0; i < 7; i++) {
        td[i] = document.createElement("td");
        td[i].innerHTML = student[rowIndex][i];
        table.appendChild(td[i]);
    }
}