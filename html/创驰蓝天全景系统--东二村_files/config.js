/**
 常量定义
 * Created by Liangyong on 2016/5/5.
 */
var config = {
    SUCCESS_CODE: 200,  //成功返回的状态码
    ERROR_CODE: 400,  //错误状态码
    REFRESH: 500  //刷新状态码
}


/**
 * 转时间戳
 * @param stringTime
 */
function datePaseTamp(stringTime) {
    return Date.parse(new Date(stringTime)) / 1000;
}