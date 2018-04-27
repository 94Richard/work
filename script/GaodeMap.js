var gaodemap = new AMap.Map("gaodeMapContainer",
    {
        resizeEnable: true,
        zoom: 13,
        center: [114.246899, 22.720968],
        mapStyle: "amap://styles/cc4bf1d633d6c4ef131c8c33e368665b"
    });

//移动地图到某个地方
var markers = [];
function moveMapToPlace(coordinate) {
    var coordinateArr = coordinate.split(",");
    gaodemap.remove(markers);
    var marker= new AMap.Marker({
        map: gaodemap,
        position: coordinateArr,
        icon: new AMap.Icon({
            size: new AMap.Size(40, 50), //图标大小
            image: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png"
        })
    });
    markers.push(marker);
    gaodemap.panTo(coordinateArr);
}