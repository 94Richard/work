/**
 * Created by Liangyong on 2016/10/8.
 */

var lastH = 0;
var lastV = 0;
var panoRightH = 0;
var panoRightV = 0;

function syncRotateData(h, v) {
    var tmpH = 0;
    var tmpV = 0;
    if (lastH > h) {
        //h减小，向右拖动
        tmpH = panoRightH - Math.abs(h - lastH);
    } else {
        //h增大，向左拖动
        tmpH = panoRightH + Math.abs(h - lastH);
    }

    if (lastV > v) {
        //v减小，向下拖动
        tmpV = panoRightV - Math.abs(v - lastV);

    } else {
        //v增大，向上拖动
        tmpV = panoRightV + Math.abs(v - lastV);
    }

    krpano.call("updateHV('" + tmpH + "','" + tmpV + "');");
    lastH = h;
    lastV = v;
}

function syncRotateData2(h, v) {
    panoRightH = krpano.get("view[0].hlookat");
    panoRightV = krpano.get("view[0].vlookat");
}

function syncFovData(f) {
    fovMax = krpano.get("view[0].fovmax");
    fovMin = krpano.get("view[0].fovmin");
    fMagnify = f;
    fShrink = f;
    krpano.call("updateFov('" + f + "');");
}


function syncFovDataByKey(f) {
    krpano.call("updateFov('" + f + "');");
    syncFovData(f);
}

var ie;
var firefox;
if (document.all)
    ie = true;
else ie = false;
document.onkeydown = keyPress;
document.onkeyup = keyUp;

var fovMax = 0;
var fovMin = 0;
var fMagnify = 0;//放大
var fShrink = 0;//缩小
function keyPress() {
    var key;
    if (ie)
        key = event.keyCode;
    else
        key = keyPress.arguments[0].keyCode;

    if (key == 32 && !entering) {
        entering = true;
        xPoint1 = krpano.get("mouse.x");
        yPoint1 = krpano.get("mouse.y");


    } else if (key == 90) {
        //z键，放大，f缩小
        if (fMagnify == 0) {
            fMagnify = krpano.get("view[0].fov");
        }
        fMagnify--;
        fovMin=krpano.get("view[0].fovmin");
        if (fMagnify < fovMin) {
            fMagnify = fovMin;
        }
        syncFovDataByKey(fMagnify);
    } else if (key == 88) {
        //x键，缩小，f放大
        if (fShrink == 0) {
            fShrink = krpano.get("view[0].fov");
        }
        fShrink++;
        fovMax=krpano.get("view[0].fovmax");
        if (fShrink > fovMax) {
            fShrink = fovMax;
        }
        syncFovDataByKey(parseInt(fShrink));
    }
}

function keyUp() {
    var key;
    if (ie)
        key = event.keyCode;
    else
        key = keyUp.arguments[0].keyCode;


    if (typeof (entering) != 'undefined') {
        if (key == 32 && entering == true) {
            entering = false;
            xPoint2 = krpano.get("mouse.x");
            yPoint2 = krpano.get("mouse.y");
            submit();
        } else if (key == 90 || key == 88) {
            //clearInterval(fTimeId);
        }
    }
}
