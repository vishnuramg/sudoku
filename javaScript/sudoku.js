var sudoku = new SUDOKU

function SUDOKU() {

}

SUDOKU.prototype.createView = function() {
    var htmlData = [];
	var sbox = [[],[],[],[],[],[],[],[],[]];
    var data = myObj[Math.floor((Math.random() * 25) + 1)];
    for (var i = 0; i < 9; i++) {
        var row = data[i];
        var rowdata = row.split("");
        for (var j = 0; j < 9; j++) {
            sbox[i][j] = rowdata[j];
        }
    }

    var letter = /[\d]+/g;

    htmlData.push("<div class = 'cls_sk_layout'>");
    htmlData.push("<table class = cls_sk_table cellspacing=0 cellpadding=0>");
    for (var i = 0; i < 9; i++) {
        if (i == 2 || i == 5)
            htmlData.push("<tr style='border-bottom:2px solid red'> ");
        else
            htmlData.push("<tr>");
        for (var j = 0; j < 9; j++) {
            if (j == 2 || j == 5)
                htmlData.push("<td style='border-right:2px solid red'>");
            else
                htmlData.push("<td>");
            htmlData.push("<input type ='number'  class ='cls_sk_textbox' max=9 min=1 id='id_sk_textbox" + i + "_" + j + "' onkeyup='sudoku.myFunction(this)'>");

        }
    }
    htmlData.push("</table>");
    htmlData.push("</div>");
    $('#id_sk_content').html(htmlData.join(""));
    for (var i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            document.getElementById("id_sk_textbox" + i + "_" + j).value = sbox[i][j];
            if (sbox[i][j] == "0") {
                sbox[i][j] = undefined;
                document.getElementById("id_sk_textbox" + i + "_" + j).value = "";
            }
            if (sbox[i][j] != undefined)
                document.getElementById("id_sk_textbox" + i + "_" + j).disabled = true;
        }
    }
    SUDOKU.prototype.myFunction = function(x) {
        var textId = x.id;
        var s = textId.match(letter);
        sbox[s[0]][s[1]] = document.getElementById(textId).value;
        var data = document.getElementById(textId).value;
        var i = s[0];
        var j = s[1];
        var flag = false;
        for (k = 0; k < 9; k++) {
            if (data == sbox[i][k] && k != j && sbox[i][k] != "") {
                x.style.background = "#e75555";
                flag = true;
                break;
            } else if (data != sbox[k][j]) {
                x.style.background = "white";
            }
        }
        if (flag != true) {
            for (k = 0; k < 9; k++) {
                if (data == sbox[k][j] && k != i && sbox[k][j] != "") {
                    x.style.background = "#e75555";
                    flag = true;
                    break;
                } else if (data != sbox[i][k]) {
                    x.style.background = "white";
                }
            }
        }
        if (flag != true) {
            sudoku.crosscheck(i, data, j, x);
        }
    }
    SUDOKU.prototype.crosscheck = function(i, data, j, x) {
        k = i;
        if (i >= 0 && i < 3) {
            if (j >= 0 && j < 3) {
                for (var c = 0; c < 3; c++) {
                    for (var v = 0; v < 3; v++) {
                        if (data == sbox[c][v] && k != v && k != c && data != "") {
                            x.style.background = "#e75555";
                            c = 3;
                        } else if (data != sbox[k][v]) {
                            x.style.background = "white";
                        }
                    }
                }
            }
            else if (j >= 3 && j < 6) {
                for (var c = 0; c < 3; c++) {
                    for (var v = 3; v < 6; v++) {
                        if (data == sbox[c][v] && k != v && k != c && data != "") {
                            x.style.background = "#e75555";
                            c = 3;
                        } else if (data != sbox[k][v]) {
                            x.style.background = "white";
                        }
                    }
                }
            }
            else if (j >= 6 && j < 9) {
                for (var c = 0; c < 3; c++) {
                    for (var v = 6; v < 9; v++) {
                        if (data == sbox[c][v] && k != v && k != c && data != "") {
                            x.style.background = "#e75555";
                            c = 3;
                        } else if (data != sbox[k][v]) {
                            x.style.background = "white";
                        }
                    }
                }
            }
        }

        if (i >= 3 && i < 6) {
            if (j >= 0 && j < 3) {
                for (var c = 3; c < 6; c++) {
                    for (var v = 0; v < 3; v++) {
                        if (data == sbox[c][v] && k != v && k != c && data != "") {
                            x.style.background = "#e75555";
                            v = 6;
                            c = 7;
                        } else if (data != sbox[k][v]) {
                            x.style.background = "white";
                        }
                    }
                }
            }
            else if (j >= 3 && j < 6) {
                for (var c = 3; c < 6; c++) {
                    for (var v = 3; v < 6; v++) {
                        if (data == sbox[c][v] && k != v && k != c && data != "") {
                            x.style.background = "#e75555";
                            v = 6;
                            c = 7;
                        } else if (data != sbox[k][v]) {
                            x.style.background = "white";
                        }
                    }
                }
            }
            else if (j >= 6 && j < 9) {
                for (var c = 3; c < 6; c++) {
                    for (var v = 6; v < 9; v++) {
                        if (data == sbox[c][v] && k != v && k != c && data != "") {
                            x.style.background = "#e75555";
                            v = 10;
                            c = 7;
                        } else if (data != sbox[k][v]) {
                            x.style.background = "white";
                        }
                    }
                }
            }
        }

        if (i >= 6 && i < 9) {
            if (j >= 0 && j < 3) {
                for (var c = 6; c < 9; c++) {
                    for (var v = 0; v < 3; v++) {
                        if (data == sbox[c][v] && k != v && k != c && data != "") {
                            x.style.background = "#e75555";
                            c = 10;
                            v = 4;
                        } else if (data != sbox[k][v]) {
                            x.style.background = "white";
                        }
                    }
                }
            }
            else if (j >= 3 && j < 6) {
                for (var c = 6; c < 9; c++) {
                    for (var v = 3; v < 6; v++) {
                        if (data == sbox[c][v] && k != v && k != c && data != "") {
                            x.style.background = "#e75555";
                            v = 7;
                            c = 10;
                        } else if (data != sbox[k][v]) {
                            x.style.background = "white";
                        }
                    }
                }
            }
            else if (j >= 6 && j < 9) {
                for (var c = 6; c < 9; c++) {
                    for (var v = 6; v < 9; v++) {
                        if (data == sbox[c][v] && k != v && k != c && data != "") {
                            x.style.background = "#e75555";
                            c = 10;
                            v = 10;
                        } else if (data != sbox[k][v]) {
                            x.style.background = "white";
                        }
                    }
                }

            }
        }

    }
}