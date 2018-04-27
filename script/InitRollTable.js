var moveOffset = 1;
var moveFlag = true;
var index = 0;
var speed = 40;
var demo = document.getElementById("demo");
var demo2 = document.getElementById("demo2");
var demo1 = document.getElementById("demo1");
demo2.innerHTML = demo1.innerHTML;

var preTr;
var currTr;
function marquee() {
    if (moveOffset % 30 == 0 && moveFlag) {
        moveFlag = false;
        stopRoll();
        setTimeout(startRoll, 5000);
        index++;
        if (preTr)
            preTr.css("background-color", "");
        currTr = $("#demo1 table tr").eq(index);
        currTr.css("background-color", "rgb(55, 96, 125)");
        var tdObj = currTr.find("td").eq(0);
        var dataid = $(tdObj).attr("dataid");
        var coordinate = $(tdObj).attr("coordinate");
        initReportDetail(dataid);
        moveMapToPlace(coordinate);
        preTr = currTr;

        //console.log("moveOffset=" + moveOffset + ",index=" + index + ",dataid=" + dataid + ",demo2.offsetTop=" + demo2.offsetTop + ",demo.scrollTop=" + demo.scrollTop + ",demo1.offsetHeight=" + demo1.offsetHeight);
        
        return;
    }
    moveFlag = true;
    if (demo2.offsetTop - demo.scrollTop <= 300) {
        demo.scrollTop -= demo1.offsetHeight;
        moveOffset = 1;
        index = 0;
    } else {
        demo.scrollTop++;
    }
    moveOffset++;
}

var myMar = setInterval(marquee, speed);

function startRoll() {
    myMar = setInterval(marquee, speed);
}

function stopRoll() {
    clearInterval(myMar);
}

//初始化滚动表格数据
function initRollTableData() {
    $.getJSON(
        "http://cwt.skylartech.cn/map/get_apply_task_points/?act=api&center_location=114.251303,22.724531&zoom=21&type=1&token=1",
        null,
        function(result) {
            var jsonData = result.result;
            for (var i = 0; i < jsonData.length; i++) {
                if (i % 2 == 0) {
                    jsonData[i].patroller_id = true;
                } else {
                    jsonData[i].patroller_id = false;
                }
            }
            var html = $("#dtRollDataTmpl").html();
            var dt = { data: jsonData };
            //dt.cssRender = function() {
            //    if (this.patroller_id) {
            //        return "first";
            //    }
            //    return "serrcn";
            //};
            var dataHtml = Mustache.render(html, dt);
            $("#dataTable").html(dataHtml);
        });
}

//初始化报告详情
function initReportDetail(reportId)
{
    $.getJSON(
        "http://cwt.skylartech.cn/map/get_apply_task_info?act=api&token=1&id=" + reportId,
        null,
        function (result) {
            var jsonData = result.result;
            var html = $("#reportDetailTmpl").html();
            jsonData.leftimg = function () {
                var imgArr = this.spic.split('|');
                jsonData.rightimg = imgArr[1];
                return imgArr[0];
            };
            jsonData.leftdate = function () {
                var dateArr = this.date_spic.split('|');
                jsonData.rightdate = dateArr[1];
                return dateArr[0];
            };
            var dataHtml = Mustache.render(html, jsonData);
            $("#reportDetail").html(dataHtml);
        });
}