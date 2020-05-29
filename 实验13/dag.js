var itemFlag = [];

window.onload = function () {

    var menu = document.getElementById("menu");

    for (var i = 1; i <= 11; i++) {
        var img = document.createElement("img");
        img.src = "img/" + i + ".JPG";
        img.draggable = true;
        img.id = i;
        img.ondragstart = function (e) {
            // console.log(e.target.id);
            e.dataTransfer.setData("index", e.target.id);
        }
        menu.appendChild(img);
    }

    //承载区
    this.setDrag(document.getElementById("A"))
    this.setDrag(document.getElementById("B"))
    this.setDrag(document.getElementById("C"))

    var bin = document.getElementById("bin");
    bin.ondragenter = function (e) {
        e.preventDefault();
        // console.log(true);
    }
    bin.ondragover = function (e) {
        e.preventDefault();
    }
    bin.ondrop = function (e) {
        var id = e.dataTransfer.getData("index");
        var item = document.getElementById(id);
        var who = document.getElementById(itemFlag[id]);
        // console.log(who);
        who.removeChild(item);
        menu.appendChild(item);
    }

}

function setDrag(curItem) {
    curItem.ondragenter = function (e) {
        e.preventDefault();
        // console.log(true);
    }
    curItem.ondragover = function (e) {
        e.preventDefault();
    }
    curItem.ondrop = function (e) {
        var id = e.dataTransfer.getData("index");
        itemFlag[id] = curItem.id;
        // console.log(id);
        var item = document.getElementById(id);
        // console.log(item);
        curItem.appendChild(item);
    }
}

