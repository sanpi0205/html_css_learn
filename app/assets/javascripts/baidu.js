var map = new BMap.Map("allmap");            // 创建Map实例
map.setMapStyle({style:'grayscale'});  
var point = new BMap.Point(111.665, 40.890);    // 创建点坐标
map.centerAndZoom(point,6);                     // 初始化地图,设置中心点坐标和地图级别。
map.enableScrollWheelZoom();                            //启用滚轮放大缩小
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.MapTypeControl());

//map.setMapStyle({style:'googlelite'});


// 编写自定义函数,创建标注
function addMarker(point,icon){
  var myIcon = new BMap.Icon(icon,new BMap.Size(30, 20));  
  var marker = new BMap.Marker(point,{icon: myIcon});
  map.addOverlay(marker);
}
// 随机向地图添加25个标注
var bounds = map.getBounds();
var sw = bounds.getSouthWest();
var ne = bounds.getNorthEast();
var lngSpan = Math.abs(sw.lng - ne.lng);
var latSpan = Math.abs(ne.lat - sw.lat);

for (var i = 0; i < 25; i ++) {
  var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
  addMarker(point,"coalpower.png");
}

//东华热电
var point = new BMap.Point(110.086985,40.584124)
addMarker(point,"coalpower.png")


for (var i = 0; i < 20; i ++) {
  var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
  addMarker(point,"wind.png");
}


for (var i = 0; i < 20; i ++) {
  var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
  addMarker(point,"solar.png");
}

