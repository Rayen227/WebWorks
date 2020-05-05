var selall = "<input type='checkbox' id='selall' onclick='selectall()'>全选";
var selone = "<input type='checkbox' name='selone' onclick='selectone()'>选择";
var chgRow = "<a href=# onclick=changeRow(this)>修改</a>";
var delRow = "<a href=# onclick=deleteRow(this)>删除</a>";
var allchecked = false;
var oldValue;
var title = new Array(selall, "电影类型", "电影名称", "价格");
var film = new Array();
film[0] = new Array(selone, "动作片", "导火线", "50", delRow, chgRow);
film[1] = new Array(selone, "科幻片", "2012", "70", delRow, chgRow);
film[2] = new Array(selone, "战争片", "我是战士", "60", delRow, chgRow);
//页面内容
// console.log(film);
document.write("<table border='1' align='center' rules='all'>");
document.write("<tr>");
for (var i = 0; i < title.length; i++) {
    document.write("<th>" + title[i] + "</th>");
}
document.write("<th colspan=2>操作</th>");
document.write("</tr>");
for (var i = 0; i < film.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < film[i].length; j++) {
        document.write("<td>" + film[i][j] + "</td>");
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
    oldValue = curRow.cells.item(3).innerHTML
    var input = "<input type=text id=price value=" + oldValue + ">"
    curRow.cells.item(3).innerHTML = input;
    curRow.cells.item(4).innerHTML = save;
    curRow.cells.item(5).innerHTML = cancel;

}

function deleteRow(that) {
    var table = that.parentNode.parentNode.parentNode;
    var curRowIndex = that.parentNode.parentNode.rowIndex;
    if (confirm("你确定要删除该行数据吗?"))
        table.deleteRow(curRowIndex);
}

function cancelChange(that) {
    var curRow = that.parentNode.parentNode;
    curRow.cells.item(3).innerHTML = oldValue;
    curRow.cells.item(4).innerHTML = delRow;
    curRow.cells.item(5).innerHTML = chgRow;

}

function saveChange(that) {
    var curRow = that.parentNode.parentNode;
    var newValue = document.getElementById("price").value;
    curRow.cells.item(3).innerHTML = newValue;
    curRow.cells.item(4).innerHTML = delRow;
    curRow.cells.item(5).innerHTML = chgRow;
}