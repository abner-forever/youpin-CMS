import map_template from '../views/map.html'


const init = () => {
    $('#router-view').html(map_template)

    //加载地图的js
    if (!window.AMap) {

        let $script = $('<script  src="https://webapi.amap.com/maps?v=1.4.10&key=5880eb38541e06376134095dd685bcd3" >')
        $("body").append($script)
    } else {
        window.onApiloaded()
    }
}

var lng = null
var lat = null
window.onApiloaded = function () {

    var map = new AMap.Map('map-container', {
        resizeEnable: true,
        center: [116.3102500000, 39.9928700000],
        zoom: 11
    })
    var marker = new AMap.Marker({
        position: new AMap.LngLat(116.3102500000, 39.9928700000),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '北京'
    });

    // 将创建的点标记添加到已有的地图实例：
    map.add(marker);
    //定位
    AMap.plugin(['AMap.Geolocation', 'AMap.Driving','AMap.Autocomplete',"AMap.PlaceSearch"], function () {
        var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：5s
            buttonPosition: 'RB',    //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function (status, result) {
            if (status == 'complete') {
                onComplete(result)
            } else {
                onError(result)
            }
        });

        var autoOptions = {
            //city 限定城市，默认全国
            city: '全国',
            input: 'map-spot'
          }
          var autoComplete= new AMap.Autocomplete(autoOptions);
        //   var placeSearch = new AMap.PlaceSearch({
        //     // city 指定搜索所在城市，支持传入格式有：城市名、citycode和adcode
        //     city: '010',
        //     map: map,
        //     panel: "search-result"
        //   })
          
        //   placeSearch.search('北京大学', function (status, result) {
        //      // 查询成功时，result即对应匹配的POI信息
        //   })
        
    });

    //定位成功后创建点标记
    function onComplete(data) {
        lng = data.position.lng
        lat = data.position.lat
        var marker = new AMap.Marker({
            position: new AMap.LngLat(data.position.lng, data.position.lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '北京'
        })
        map.add(marker);
        //构造路线导航类
        var driving = new AMap.Driving({
            map: map,
            panel: "map-panel",
            hideMarkers: true
        });
        // 根据起终点经纬度规划驾车导航路线
        
        driving.search(new AMap.LngLat(lng, lat), new AMap.LngLat(116.3102500000, 39.9928700000), function (status, result) {
            // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
            if (status === 'complete') {
               console.log('绘制驾车路线完成')
            } else {
                log.error('获取驾车数据失败：' + result)
            }
        });
    }

}


export default {
    init
}