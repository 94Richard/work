/**
 * Created by Liangyong on 2016/7/23.
 */

//全景配置
if (document.getElementById("pano") != undefined) {
    embedpano({
        swf: $swf,
        xml: $xml,
        target: "pano",
        html5: "only",
        mobilescale: 1.0,
        passQueryParameters: true
    });
}
function changeDate() {
    $("#date_select").change(function () {
        id = $(this).val();
        if (id != 0) {
            window.location.href = "/Index/index/id/" + id + ".html";
        }
    });
}
$(function () {
    changeDate();
    //设置默认值
    var option = $("<option>").val("0").text("--请选择省份--");
    $("[name='province']").append(option);

    option = $("<option>").val("0").text("--请选择城市--");
    $("[name='city']").append(option);

    option = $("<option>").val("0").text("--请选择县区--");
    $("[name='county']").append(option);


    option = $("<option>").val("0").text("--请选择场景--");
    $("[name='scenario']").append(option);

    //绑定省份
    for (var i = 0; i < areas.length; i++) {
        if (parseInt(areas[i].level) == 1) {
            option = $("<option>").val(areas[i].code).text(areas[i].name);
            $("[name='province']").append(option);
        }
    }

    init_data();

    //省切换
    $("[name='province']").bind("change", function () {
        var code = parseInt($(this).val());
        change_province(code);
    });

    //市切换
    $("[name='city']").bind("change", function () {
        var code = parseInt($(this).val());
        change_city(code);
    });

    //县切换
    $("[name='county']").bind("change", function () {
        var code = parseInt($(this).val());
        change_county(code);
    });

    /**
     * 省份切换
     * @param $val
     */
    function change_province(code) {
        //加载城市
        if (code > 0) {
            $("[name='city'] option:gt(0)").remove();
            for (var i = 0; i < areas.length; i++) {
                if (parseInt(areas[i].parentCode) == code) {
                    option = $("<option>").val(areas[i].code).text(areas[i].name);
                    $("[name='city']").append(option);
                }
            }
        }
        //绘制地图
        if (code > 0) {
            for (var i = 0; i < areas.length; i++) {
                if (parseInt(areas[i].code) == code) {

                    var longitude = areas[i].longitude;
                    var latitude = areas[i].latitude;

                    loadPlace(longitude, latitude, 10);

                    break;
                }
            }
        }
        //同时请求服务器，拿数据
        // my_ajax($request_region_url, 'post', {type: 0, id: code});
    }

    /**
     * 初始化数据加载
     */
    function init_data() {
        if ($province_id) {
            $("#province").find("option[value='" + $province_id + "']").attr("selected", true);
            change_province($province_id);  //自动加载省
        } else {
            $("#province").find("option[value='440000']").attr("selected", true);
            change_province("440000"); //默认加载广东省
        }
        if ($city_id) {
            $("#city").find("option[value='" + $city_id + "']").attr("selected", true);
            change_city($city_id);
        }
        if ($district_id) {
            $("#county").find("option[value='" + $district_id + "']").attr("selected", true);
            change_county($district_id);
        }
    }

    /**
     * 加载市区
     * @param code
     */
    function change_city(code) {
        if (code > 0) {
            $("[name='county'] option:gt(0)").remove();
            for (var i = 0; i < areas.length; i++) {
                if (parseInt(areas[i].parentCode) == code) {
                    option = $("<option>").val(areas[i].code).text(areas[i].name);
                    $("[name='county']").append(option);
                }
            }
        }

        //绘制地图
        if (code > 0) {
            for (var i = 0; i < areas.length; i++) {
                if (parseInt(areas[i].code) == code) {

                    var longitude = areas[i].longitude;
                    var latitude = areas[i].latitude;

                    loadPlace(longitude, latitude, 12);

                    break;
                }
            }
        }
        //同时请求服务器，拿数据
        //  my_ajax($request_region_url, 'post', {type: 1, id: code});
    }

    /**
     * 县区加载
     * @param code
     */
    function change_county(code) {
        //绘制地图
        if (code > 0) {
            for (var i = 0; i < areas.length; i++) {
                if (parseInt(areas[i].code) == code) {

                    var longitude = areas[i].longitude;
                    var latitude = areas[i].latitude;
                    loadPlace(longitude, latitude);
                    break;
                }
            }
        }
        //同时请求服务器，拿数据
        my_ajax($request_region_url, 'post', {type: 2, id: code});
    }

});