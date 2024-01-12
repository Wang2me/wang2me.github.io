// 图标信息
var iconInfo = {
    camel: { url: '/media/animal_icon/camel.PNG', scaledSize: new google.maps.Size(30, 30)},
    cat: { url: '/media/animal_icon/cat.png',scaledSize: new google.maps.Size(25,25) },
    dog: { url: '/media/animal_icon/dog2.png', scaledSize: new google.maps.Size(25, 25) },
    rhino: { url: '/media/animal_icon/rhino.png',scaledSize: new google.maps.Size(25, 25) },
    leopard: { url: '/media/animal_icon/leopard.png', scaledSize: new google.maps.Size(25, 25) },
    lion: { url: '/media/animal_icon/lion5.png',scaledSize: new google.maps.Size(25, 25) },
    elephant: { url: '/media/animal_icon/elephant1.png', scaledSize: new google.maps.Size(25, 25) },
    horse:{ url: '/media/animal_icon/horse.png', scaledSize: new google.maps.Size(25, 25) },
    rabbit:{ url: '/media/animal_icon/rabbit.png', scaledSize: new google.maps.Size(25, 25) },
    yak:{ url: '/media/animal_icon/yak.png', scaledSize: new google.maps.Size(50, 50) },
    cheetah:{ url: '/media/animal_icon/cheetah.png', scaledSize: new google.maps.Size(25, 25) },
    giraffe:{ url: '/media/animal_icon/giraffe.png', scaledSize: new google.maps.Size(25, 25) },
    zebra:{ url: '/media/animal_icon/zebra.png', scaledSize: new google.maps.Size(25, 25) },
    antelope:{ url: '/media/animal_icon/antelope.png', scaledSize: new google.maps.Size(25, 25) },
    ostrich:{ url: '/media/animal_icon/ostrich.png', scaledSize: new google.maps.Size(25, 25) },
    hawk:{ url: '/media/animal_icon/hawk.png', scaledSize: new google.maps.Size(25, 25) },
    parrot:{ url: '/media/animal_icon/parrot.png', scaledSize: new google.maps.Size(25, 25) },
    peacock:{ url: '/media/animal_icon/peacock.png', scaledSize: new google.maps.Size(25, 25) },
    turkey:{ url: '/media/animal_icon/turkey.png', scaledSize: new google.maps.Size(25, 25) },
    muscovy:{url: '/media/animal_icon/muscovy.png', scaledSize: new google.maps.Size(25, 25)},
    swallow:{ url: '/media/animal_icon/swallow.png', scaledSize: new google.maps.Size(25, 25) },
    seal:{ url: '/media/animal_icon/seal.png', scaledSize: new google.maps.Size(25, 25) },
    otter:{ url: '/media/animal_icon/otter.png', scaledSize: new google.maps.Size(25, 25) },
    beaver:{ url: '/media/animal_icon/beaver.png', scaledSize: new google.maps.Size(25, 25) },
    shell:{ url: '/media/animal_icon/shell.png', scaledSize: new google.maps.Size(25, 25) },
    turtle:{ url: '/media/animal_icon/turtle.png', scaledSize: new google.maps.Size(25, 25) },
    coral:{ url: '/media/animal_icon/coral.png', scaledSize: new google.maps.Size(25, 25) },

};

// 地图、标记、复选框等的全局变量
var map;
var markers = {};

function initMap() {
    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-75, -180),
        new google.maps.LatLng(75, 180)
    );

    map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: 34.123, lng: 108.456 },
        zoom: 2,
        minZoom: 2,
        maxZoom: 12,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        //scrollwheel: false,
        zoomControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        restriction: {
            latLngBounds: bounds,
            strictBounds: true,
        },
        // language:'zh_HK'
    });


    var currentZoom = map.getZoom();
    console.log('当前缩放级别1：', currentZoom);

    map.set('styles', mapstyle);
    document.getElementById('zoomInButton').addEventListener('click', function () {
        var currentZoom = map.getZoom();
        var zoomLevels = [2, 3, 5, 8,12];
        var nextZoom = zoomLevels.find(level => level > currentZoom) || zoomLevels[zoomLevels.length - 1];
        var maxZoom = map.maxZoom;
        if (currentZoom !== nextZoom && currentZoom < maxZoom) {
            map.setZoom(nextZoom);
        }
    });
    
    document.getElementById('zoomOutButton').addEventListener('click', function () {
        var currentZoom = map.getZoom();
        var zoomLevels = [2, 3, 5, 8,12];
        var prevZoom = zoomLevels.slice().reverse().find(level => level < currentZoom) || zoomLevels[0];
        var minZoom = map.minZoom;
        if (currentZoom !== prevZoom && currentZoom > minZoom) {
            map.setZoom(prevZoom);
        }
    });
    


    // document.getElementById('map-container').addEventListener('wheel', function(e) {
    //     e.preventDefault(); // Prevent default scrolling behavior
    //     var currentZoom = map.getZoom();
    //     var zoomLevels = [12, 8, 5, 2];
    //     var currentIndex = zoomLevels.indexOf(currentZoom);
    //     var deltaY = e.deltaY;
    
    //     var newIndex = currentIndex + (deltaY > 0 ? 1 : -1);
    //     if (newIndex >= 0 && newIndex < zoomLevels.length) {
    //         var newZoom = zoomLevels[newIndex];
    
    //         // Get the mouse position within the map container
    //         var offsetX = e.pageX - this.offsetLeft;
    //         var offsetY = e.pageY - this.offsetTop;
    
    //         // Calculate the new center coordinates
    //         var center = map.getCenter();
    //         var scale = Math.pow(2, newZoom - currentZoom);
    //         var worldCoordinate = map.getProjection().fromLatLngToPoint(center);
    //         var newWorldCoordinate = new google.maps.Point(
    //             (offsetX - this.clientWidth / 2) / scale + worldCoordinate.x,
    //             (offsetY - this.clientHeight / 2) / scale + worldCoordinate.y
    //         );
    
    //         var newCenter = map.getProjection().fromPointToLatLng(newWorldCoordinate);
    
    //         // Set the new map center and zoom
    //         map.setCenter(newCenter);
    //         map.setZoom(newZoom);
    //     }
    // });
    
    // google.maps.event.addListener(map, 'zoom_changed', function() {
    //     var currentZoom = map.getZoom();
    //     var allowedZoomLevels = [2,3, 5, 12];
    
    //     if (!allowedZoomLevels.includes(currentZoom)) {
    //         // 找到最接近的允许缩放级别
    //         var closestZoom = allowedZoomLevels.reduce(function(prev, curr) {
    //             return (Math.abs(curr - currentZoom) < Math.abs(prev - currentZoom) ? curr : prev);
    //         });
    
    //         // 将地图缩放设置为最接近的允许缩放级别
    //         map.setZoom(closestZoom);
    //     }
    // });
    

    
   
    google.maps.event.addListener(map, 'zoom_changed', function() {
        var currentZoom = map.getZoom();
        if  (currentZoom==2||currentZoom==3||currentZoom==5||currentZoom==8||currentZoom==12){
        var zoomLevels = [2, 3, 5, 8,12];
        var currentIndex = zoomLevels.indexOf(currentZoom);
        //console.log('currentIndex', currentIndex);
       
        
   
        zoomSlider.value=currentIndex;
        console.log('当前缩放级别：', currentZoom);
        }
    });
    zoomSlider.addEventListener('input',function(){

        var zoomLevels = [2, 3, 5, 8,12];
        var currentZoom = parseInt(zoomSlider.value); // 获取滑块的值并转换为数字类型
        var targetZoom = zoomLevels[currentZoom]; // 获取对应的缩放级别
        
        map.setZoom(targetZoom);
        console.log('当前缩放级别：', targetZoom);
        

    });

    google.maps.event.addListenerOnce(map, 'idle', function(currentValue) {
        // 找到所有的复选框
        var checkboxes = document.querySelectorAll('.category-checkbox');
    
        // 遍历复选框并勾选它们
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    
        // 调用筛选标记函数或其他适当的操作
        filterMarkers(currentValue); // 调用筛选标记函数，确保标记根据复选框状态进行过滤
    });

}






function createMarker(position, type, label, categories, content) {
    // 在地图上创建标记
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.lat, position.lng),
        map:null,
        icon: iconInfo[type],
        title: label,
        attributes: {
            A: categories.A || [],
            B: categories.B || [],
            C: categories.C || [],
            D: categories.D || [],
            E: categories.E || []
        },
        content: content,
        //visible: true
    });

    // 如果有特定大小需求，设置标记的大小
    if (iconInfo[type].scaledSize) {
        marker.setIcon(iconInfo[type]);
    }
    
    return marker;
}

// 关联复选框和标记
// function attachCheckboxHandler(checkboxId, markerType) {
//     var checkbox = $('#' + checkboxId);

//     checkbox.change(function () {
//         if (checkbox.is(':checked')) {
//             markers[markerType].setMap(map);
//         } else {
//             markers[markerType].setMap(null);
//         }
//     });
// }

// 显示选项卡内容
function showTab(tabName) {
    // 隐藏所有选项卡内容
    $('.tab-content').hide();

    // 显示指定选项卡内容
    $('#' + tabName).show();
}

// 在页面加载后的初始化


const checkboxList = [
    { id: 'land-Checkbox', value: '陸上絲綢之路' },
    { id: 'ocean-Checkbox', value: '海上絲綢之路' },
    { id: '其他-Checkbox', value: '其他' },

    { id: 'camel-Checkbox', value: 'camel' },
    { id: 'cat-Checkbox', value: 'cat' },
    { id: 'dog-Checkbox', value: 'dog' },
    { id: 'rhino-Checkbox', value: 'rhino' },
    { id: 'leopard-Checkbox', value: 'leopard' },
    { id: 'lion-Checkbox', value: 'lion' },
    { id: 'banma-Checkbox', value: 'zebra' },
    { id: 'changjinglu-Checkbox', value: 'giraffe' },
    { id: 'horse-Checkbox', value: 'horse' },
    { id: 'rabbit-Checkbox', value: 'rabbit' },
    { id: 'yak-Checkbox', value: 'yak' },
    { id: 'cheetah-Checkbox', value: 'cheetah' },
    { id: 'elephant-Checkbox', value: 'elephant' },
    { id: 'antelope-Checkbox', value: 'antelope' },
    { id: 'ostrich-Checkbox', value: 'ostrich' },
    { id: 'hawk-Checkbox', value: 'hawk' },
    { id: 'parrot-Checkbox', value: 'parrot' },
    { id: 'peacock-Checkbox', value: 'peacock' },
    { id: 'turkey-Checkbox', value: 'turkey' },
    { id: 'muscovy-Checkbox', value: 'muscovy' },
    { id: 'swallow-Checkbox', value: 'swallow' },
    { id: 'seal-Checkbox', value: 'seal' },
    { id: 'otter-Checkbox', value: 'otter' },
    { id: 'beaver-Checkbox', value: 'beaver' },
    { id: 'shell-Checkbox', value: 'shell' },
    { id: 'turtle-Checkbox', value: 'turtle' },
    { id: 'coral-Checkbox', value: 'coral' },
    


    { id: 'xia-Checkbox', value: '史前至夏商周' },
    { id: 'qinhan-Checkbox', value: '秦漢' },
    { id: 'sanguo-Checkbox', value: '三國兩晉南北朝' },
    { id: 'sui-Checkbox', value: '隋' },
    { id: 'tang-Checkbox', value: '唐' },
    { id: 'song-Checkbox', value: '宋' },
    { id: 'yuan-Checkbox', value: '元' },
    { id: 'ming-Checkbox', value: '明' },
    { id: 'qing-Checkbox', value: '清' },

    { id: 'zongjiao-Checkbox', value: '宗教信仰' },
    { id: 'chaogong-Checkbox', value: '朝貢' },
    { id: 'shenfen-Checkbox', value: '身份象徵' },
    { id: 'junshi-Checkbox', value: '軍事' },
    { id: 'wenhua-Checkbox', value: '文化娛樂' },
    { id: 'jiaotong-Checkbox', value: '交通運輸' },
    { id: 'nongye-Checkbox', value: '農業生產' },
    { id: 'yinshi-Checkbox', value: '飲食' },

    { id: 'zhong-Checkbox', value: '中亞' },
    { id: 'nan-Checkbox', value: '南亞' },
    { id: 'xi-Checkbox', value: '西亞' },
    { id: 'bei-Checkbox', value: '北亞' },
    { id: 'dong-Checkbox', value: '東亞' },
    { id: 'dongnan-Checkbox', value: '東南亞' },
    { id: 'feizhou-Checkbox', value: '非洲' },
    { id: 'ouzhou-Checkbox', value: '歐洲' },
    { id: 'beimeizhou-Checkbox', value: '北美洲' },
    { id: 'nanmeizhou-Checkbox', value: '南美洲' },
    { id: 'dayagnzhou-Checkbox', value: '大洋洲' },
   
];

checkboxList.forEach(item => {
    handleCheckboxChange(item.id, item.value);
});


var categoryToggleIcon = $('#toggle');
var categoryContainer = $('.category-container');
var isContainerVisible = true;


var filteredMarkers = [];
var markerCluster=null;
var previouslyHiddenMarkers = []; // 在函数外部记录之前隐藏的标记

function filterMarkers(currentValue) {

    // 在更新标记前记录之前隐藏的标记
    previouslyHiddenMarkers = filteredMarkers.filter(function(marker) {
        return marker.getMap() === null;
        
    });

    // 清空上次筛选的结果
    filteredMarkers.forEach(function(marker) {
        marker.setMap(null);
    });
    filteredMarkers = [];
    var noCheckboxSelected = $('.category-checkbox:checked').length === 0;

    // 如果没有选中任何复选框，则隐藏所有标记
    if (noCheckboxSelected) {
        filteredMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        filteredMarkers = []; // 清空筛选的标记数组
        return;
    }

    var selectedCategories = getSelectedCategories();
    
    // 对每个标记进行筛选
    for (var key in markers) {
        var marker = markers[key];
    
        if (marker.attributes && (marker.attributes.A || marker.attributes.B || marker.attributes.C || marker.attributes.D || marker.attributes.E)) {
            var markerCategories = {
                A: marker.attributes.A || [],
                B: marker.attributes.B || [],
                C: marker.attributes.C || [],
                D: marker.attributes.D || [],
                E: marker.attributes.E || []
            };
    
           
            
    
            var isMatching = selectedCategories.every(function(categoryGroup) {
                return categoryGroup.some(function(subCategory) {
                    return markerCategories.A.includes(subCategory) || 
                           markerCategories.B.includes(subCategory) || 
                           markerCategories.C.includes(subCategory) || 
                           markerCategories.D.includes(subCategory) || 
                           markerCategories.E.includes(subCategory);
                });
            });
    
            
            
            if (isMatching) {
                marker.setMap(map);
                filteredMarkers.push(marker);
                
            }
           
        }

        
    }

    
    // 清除当前的聚合器
    // if (markerCluster) {
    //     markerCluster.clearMarkers();
    // }

    //创建新的聚合器
    // markerCluster = new MarkerClusterer(map, filteredMarkers, {
    //     gridSize: 2,
    //     minimumClusterSize: 200,
    //     styles: [
    //         { url: 'media/animal_icon/lion_gather.png', width: 50, height: 40, textSize: 18, textColor: 'black' },
    //     ]
    // });
    previouslyHiddenMarkers.forEach(function(marker) {
        marker.setMap(null);
    });
    //创建自定义标签
    handleToggleMarkers(currentValue);
    
}


// function filterMarkers() {
//     // 清空上次筛选的结果
//     filteredMarkers.forEach(function(marker) {
//         marker.setMap(null);
//     });
//     filteredMarkers = [];

//     var selectedCategories = getSelectedCategories();

//     // 分别处理不同类型的动物标记
//     var lionMarkers = [];
//     var dogMarkers = [];
//     var catMarkers=[];
//     var camelMarkers= [];
    
//     // 对每个标记进行筛选并分类
//     for (var key in markers) {
//         var marker = markers[key];
//         if (marker.attributes && marker.attributes.A.includes('lion')) {
//             lionMarkers.push(marker);
//         } 
//         if (marker.attributes && marker.attributes.A.includes('dog')) {
//             dogMarkers.push(marker);
//         }
//         if (marker.attributes && marker.attributes.A.includes('cat')) {
//             catMarkers.push(marker);
//         }
//         if (marker.attributes && marker.attributes.A.includes('camel')) {
//             camelMarkers.push(marker);
//         }

//     }

//     // 过滤所选的动物类型
//     var filteredLionMarkers = lionMarkers.filter(function(marker) {
//         return isMatchingMarker(marker, selectedCategories);
//     });

//     var filteredDogMarkers = dogMarkers.filter(function(marker) {
//         return isMatchingMarker(marker, selectedCategories);
//     });
//     var filteredCatMarkers = catMarkers.filter(function(marker) {
//         return isMatchingMarker(marker, selectedCategories);
//     });
//     var filteredCamelMarkers = camelMarkers.filter(function(marker) {
//         return isMatchingMarker(marker, selectedCategories);
//     });

//     // 在地图上设置不同类型的聚合器
//     var lionCluster = new MarkerClusterer(map, filteredLionMarkers, {
//         gridSize: 2,
//         minimumClusterSize: 3,
//         styles: [
//             { url: 'media/animal_icon/lion_gather.png', width: 50, height: 40, textSize: 18, textColor: 'black' },
//         ]
//     });

//     var dogCluster = new MarkerClusterer(map, filteredDogMarkers, {
//         gridSize: 2,
//         minimumClusterSize: 3,
//         styles: [
//             { url: 'media/animal_icon/dog1.png', width: 50, height: 40, textSize: 18, textColor: 'black' },
//         ]
//     });
//     var catCluster = new MarkerClusterer(map, filteredCatMarkers, {
//         gridSize: 2,
//         minimumClusterSize: 3,
//         styles: [
//             { url: 'media/animal_icon/cat2.png', width: 50, height: 40, textSize: 18, textColor: 'black' },
//         ]
//     });
//     var camelCluster = new MarkerClusterer(map, filteredCamelMarkers, {
//         gridSize: 2,
//         minimumClusterSize: 3,
//         styles: [
//             { url: 'media/animal_icon/camel.png', width: 50, height: 40, textSize: 18, textColor: 'black' },
//         ]
//     });
// }




function isMatchingMarker(marker, selectedCategories) {
    if (marker.attributes && (marker.attributes.A || marker.attributes.B || marker.attributes.C || marker.attributes.D || marker.attributes.E)) {
        var markerCategories = {
            A: marker.attributes.A || [],
            B: marker.attributes.B || [],
            C: marker.attributes.C || [],
            D: marker.attributes.D || [],
            E: marker.attributes.E || []
        };

        var isMatching = selectedCategories.every(function(categoryGroup) {
            return categoryGroup.some(function(subCategory) {
                return markerCategories.A.includes(subCategory) || 
                       markerCategories.B.includes(subCategory) || 
                       markerCategories.C.includes(subCategory) || 
                       markerCategories.D.includes(subCategory) || 
                       markerCategories.E.includes(subCategory);
            });
        });

        return isMatching;
    }
    return false;
}


function getSelectedCategories() {
    var selectedCategories = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: []
    };

    // 遍历所有复选框
    $('.category-checkbox:checked').each(function() {
        var category = $(this).data('category');
        var subCategory = $(this).val();
        if (subCategory !== '') {
            selectedCategories[category].push(subCategory);
        }
    });

    // 如果某个大类别下没有选择任何子类别，但大类别不是D，则默认选择该大类别下的所有非空子类别
    for (var category in selectedCategories) {
        if (category !== 'D' && selectedCategories[category].length === 0) {
            $('input[data-category="' + category + '"]').each(function() {
                var subCategoryValue = $(this).val();
                // 检查子类别是否为空，如果不为空则加入选择列表
                if (subCategoryValue !== '') {
                    selectedCategories[category].push(subCategoryValue);
                }
            });
        }
    }

    // 移除空的大类别
    for (var category in selectedCategories) {
        if (selectedCategories[category].length === 0) {
            delete selectedCategories[category];
        }
    }

    var formattedCategories = Object.values(selectedCategories).map(function(subCategories) {
        return subCategories;
    });

    return formattedCategories;
}




function handleCheckboxChange(checkboxId, currentValue) {
    var checkbox = $('#' + checkboxId);
    checkbox.change(function () {
        filterMarkers(currentValue);
        
    });
}
$('.category-checkbox').change(function() {
    filterMarkers(currentValue);
    toggleMarkers();
});






// 获取图标元素
var toggleIcon = document.getElementById('toggle');

// 获取整个.category-container
var categoryContainer = document.querySelector('.category-container');

// 点击收起容器icon

toggleIcon.addEventListener('click', function() {
    if (categoryContainer.style.display === 'flex' || categoryContainer.style.display === '') {
        categoryContainer.style.display = 'none';
        toggleIcon.style.left = '0'; // 将图标移动到屏幕的左边缘
    } else {
        categoryContainer.style.display = 'flex';
        toggleIcon.style.left = '15%'; // 将图标移动回初始位置
    }
});

var slider = document.getElementById('slider');
var controlImage = document.getElementById('controlImage');
var currentValue = parseInt(slider.value);

var intervalId = null;
var startTime; // 用于记录开始时间
// 点击图片的事件处理
// controlImage.addEventListener('click', function() {
//     if (intervalId === null) {
//         // 如果 intervalId 为 null，表示当前是停止状态，需要开始自动拖动
//         controlImage.src = 'media/animal_icon/leopard.png'; // 切换到暂停图片
//         intervalId = setInterval(autoSlide, 10); // 每隔 50 毫秒自动拖动一次
//     } else {
//         // 否则，当前是运行状态，需要停止自动拖动
//         clearInterval(intervalId);
//         intervalId = null;
//         controlImage.src = 'media/animal_icon/dog.png'; // 切换回播放图片
//     }
// });
// document.body.addEventListener('keydown', function(event) {
//     if (event.code === 'Space' && document.activeElement === document.body) {
//         if (intervalId === null) {
//             // 如果 intervalId 为 null，表示当前是停止状态，需要开始自动拖动
//             controlImage.src = 'media/animal_icon/leopard.png'; // 切换到暂停图片
//             intervalId = setInterval(autoSlide, 10); // 每隔 50 毫秒自动拖动一次
//         } else {
//             // 否则，当前是运行状态，需要停止自动拖动
//             clearInterval(intervalId);
//             intervalId = null;
//             controlImage.src = 'media/animal_icon/dog.png'; // 切换回播放图片
//         }
//     }
// });

controlImage.addEventListener('click', function() {
    if (intervalId === null) {
        clearInterval(intervalId); // 清除旧的定时器
        controlImage.src = 'media/animal_icon/stop.png'; // 切换到暂停图片
        //let intervalTime = 50 - currentValue / 20; // 根据 currentValue 的值调整间隔时间
        // if (intervalTime < 10) { // 设置最小间隔时间为10
        let intervalTime = 50;
        //}
        intervalId = setInterval(autoSlide, intervalTime); // 根据 intervalTime 自动拖动
    } else {
        clearInterval(intervalId);
        intervalId = null;
        controlImage.src = 'media/animal_icon/play.png'; // 切换回播放图片
    }
});

function autoSlide() {
    
    currentValue += 5; // 每次增加 10，你可以根据需要调整
    if (currentValue === 1000 || currentValue === 2000 || currentValue === 3000|| currentValue === 4000|| currentValue === 5000|| currentValue === 6000|| currentValue === 7000|| currentValue === 8000) {
        currentValue += 3; // 跳过边界点
    }
    slider.value = currentValue;
    let time0,time1000, time2000, time3000, time4000, time5000,time6000,time7000,time8000,time9000; // 用于记录时间
    //currentValue += 2; // 每次增加 2，您可以根据需要调整
    if (currentValue > 0&&currentValue<=5) {
        time0 = new Date(); // 记录达到 1000 的时间
        console.log('currentValue达到0的时间：', new Date());
    } 
    if (currentValue > 1000&&currentValue<=1005) {
        time1000 = new Date(); // 记录达到 1000 的时间
        console.log('currentValue达到1000的时间：', new Date());
    } 
    if (currentValue > 2000&&currentValue<=2005) {
        time2000 = new Date(); // 记录达到 2000 的时间
        console.log('currentValue达到2000的时间：', new Date());
    } 
    if (currentValue> 3000&&currentValue<=3005) {
        time3000 = new Date(); // 记录达到 3000 的时间
        console.log('currentValue达到3000的时间：', new Date());
    } 
    if (currentValue > 4000&&currentValue<=4005) {
        time4000 = new Date(); // 记录达到 4000 的时间
        console.log('currentValue达到4000的时间：', new Date());
    } 
    if(currentValue > 5000&&currentValue<=5005) {
        time5000 = new Date(); // 记录达到 5000 的时间
        console.log('currentValue达到5000的时间：', new Date());
    }
    if(currentValue > 6000&&currentValue<=6005) {
        time6000 = new Date(); // 记录达到 5000 的时间
        console.log('currentValue达到6000的时间：', new Date());
    }
    if(currentValue > 7000&&currentValue<=7005) {
        time7000 = new Date(); // 记录达到 5000 的时间
        console.log('currentValue达到7000的时间：',new Date());
    }
    if(currentValue > 8000&&currentValue<=8005) {
        time8000 = new Date(); // 记录达到 5000 的时间
        console.log('currentValue达到8000的时间：', new Date());
    }

    slider.dispatchEvent(new Event('input')); // 触发 input 事件，模拟用户拖动滑块
    if (currentValue >= 8998) {
        clearInterval(intervalId); // 停止自动拖动的 setInterval
        intervalId = null; // 确保 intervalId 为 null
        controlImage.src = 'media/animal_icon/play.png'; // 切换回播放图片
        time9000 = new Date();
        console.log('currentValue达到9000的时间：', new Date())
    }
   
}


// 添加滑块值变化的事件监听器，以更新 currentValue
slider.addEventListener('input', function() {
    currentValue = parseInt(slider.value);
   
});
//获取亚洲地区的容器
function toggleAsiaContainer(currentValue) {
    var asiaContainer = document.getElementById('asiaContainer'); // 获取亚洲地区的容器
    var asiaCheckboxes = asiaContainer.querySelectorAll('.category-checkbox'); // 获取亚洲地区的子复选框

    // 切换亚洲地区容器的显示和隐藏状态
    if (asiaContainer.style.display === 'none' || asiaContainer.style.display === '') {
        asiaContainer.style.display = 'block';
        // 自动勾选亚洲地区的所有子复选框
        asiaCheckboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    } else {
        asiaContainer.style.display = 'none';
        // 取消勾选亚洲地区的所有子复选框
        asiaCheckboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
    filterMarkers(currentValue);
}

    // 打开新窗口
document.getElementById('openWindow').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认行为，即不打开链接
  
    // 打开新窗口
    window.open(this.href, '对照表窗口', 'width=800,height=800,top=200,left=400');
  });
  


// 全选复选框点击事件
$(document).ready(function() {
    // 全选复选框点击事件
    $('.category-select-all').click(function() {
        var category = $(this).data('category');
        var checkboxes = $('.category-checkbox[data-category="' + category + '"]');
        checkboxes.prop('checked', $(this).prop('checked'));
        //filterMarkers();
    });

    // 子类别复选框点击事件
    $('.category-checkbox').click(function() {
        var category = $(this).data('category');
        var selectAllCheckbox = $('.category-select-all[data-category="' + category + '"]');
        var checkboxes = $('.category-checkbox[data-category="' + category + '"]');
        // 检查是否有任何一个子类别没有被选中，如果没有则勾选对应的全选复选框
        if (checkboxes.length === checkboxes.filter(':checked').length) {
            selectAllCheckbox.prop('checked', true);
        } else {
            selectAllCheckbox.prop('checked', false);
        }
        //filterMarkers();
    });

    // 其他事件处理和filterMarkers函数等
    // ...
});
document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('#dynastyCategoryContainer .category-checkbox');
    //var slider = document.querySelector('.slider');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            console.log('Checkbox changed');
            var checkedValues = Array.from(checkboxes)
            
                .filter(function(checkbox) {
                    return checkbox.checked && checkbox.dataset.value !== undefined;
                })
                .map(function(checkbox) {
                    return parseInt(checkbox.dataset.value);
                });
                console.log('Checked values:', checkedValues);
            if (checkedValues.length > 0 ) {
                console.log('Updating slider value');
                var minCheckedValue = Math.min(...checkedValues);
                console.log('minCheckedValue',minCheckedValue)
                slider.value = minCheckedValue;
//         // 触发滑块的input事件，手动更新标记的位置
                var inputEvent = new Event('input');
                slider.dispatchEvent(inputEvent);
                // slider.value = minCheckedValue;
                // slider.dispatchEvent(new Event('input'));
            }
        });
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     var allCheckboxes = document.querySelectorAll('.category-checkbox');
//     var markerCluster = null; // 初始化聚合器

//     allCheckboxes.forEach(function(checkbox) {
//         checkbox.addEventListener('change', function() {
//             // 获取所有选中的复选框的值
//             var checkedAnimals = Array.from(allCheckboxes)
//                 .filter(function(checkbox) {
//                     return checkbox.checked && checkbox.dataset.value !== undefined;
//                 })
//                 .map(function(checkbox) {
//                     return parseInt(checkbox.dataset.value);
//                 });

//             if (markerCluster) {
//                 markerCluster.clearMarkers();
//             }

//             if (checkedAnimals.length > 0) {
//                 var minCheckedValue = Math.min(...checkedAnimals); // 计算所有已选复选框的最小值
//                 //console.log("123",minCheckedValue)
//                 markerCluster = new MarkerClusterer(map, filteredMarkers, {
//                     //clusterClass: 'custom-cluster',
//                     gridSize: 2,
//                     minimumClusterSize: 200,
//                     styles: checkedAnimals.map(function(value) {
//                         console.log("value", value);
//                         return { 
//                             url: 'media/animal_icon/' + value + '_icon.png', 
//                             width: 50, 
//                             height: 40, 
//                             textSize: 18, 
//                             textColor: 'red',
//                             background: 'yellow', // 添加背景颜色
//                             fontFamily: 'Arial' // 添加字体样式
//                         };
//                     })
//                 });
//             }
//         });
//     });
//     //filterMarkers();
// });


// function updateMarkerCluster(allCheckboxes) {

//     var checkedAnimals = Array.from(allCheckboxes)
//         .filter(function(checkbox) {
//             return checkbox.checked && checkbox.dataset.value !== undefined;
//         })
//         .map(function(checkbox) {
//             return parseInt(checkbox.dataset.value);
//         });

//     if (markerCluster) {
//         markerCluster.clearMarkers(); // 清除已有聚合
//     }

//     if (checkedAnimals.length > 0) {
//         var minCheckedValue = Math.min(...checkedAnimals);
        
//         // 计算所有已选复选框的最小值
//        if (minCheckedValue>=20){
//         minCheckedValue=1;
//        }
      
//         console.log("123",minCheckedValue)
//         markerCluster = new MarkerClusterer(map, filteredMarkers, {
//             //clusterClass: 'custom-cluster',
//             gridSize: 2,
//             minimumClusterSize: 2,
//             styles: checkedAnimals.map(function(value) {
//                 console.log("value", value);
                
//                 return { 
//                     url: 'media/animal_icon/' + value + '_icon.png', 
//                     width: 50, 
//                     height: 40, 
//                     textSize: 18, 
//                     textColor: 'red',
//                     background: 'yellow', // 添加背景颜色
//                     fontFamily: 'Arial' // 添加字体样式
//                 };
//             })
//         });
        
//     }
//     else if (checkedAnimals.length==0){
//         markerCluster = new MarkerClusterer(map, filteredMarkers, {
//             //clusterClass: 'custom-cluster',
//             gridSize: 2,
//             minimumClusterSize: 2,
//             styles:  [{
                
                
//                     url: 'media/animal_icon/0_icon.png', 
//                     width: 50, 
//                     height: 40, 
//                     textSize: 18, 
//                     textColor: 'red',
//                     background: 'yellow', // 添加背景颜色
//                     fontFamily: 'Arial' // 添加字体样式
//                 }]
            
//         });
//     }
// }
// document.addEventListener('DOMContentLoaded', function() {
//     var allCheckboxes = document.querySelectorAll('.category-checkbox');

//     // 在页面加载时自动进行聚合
//     //updateMarkerCluster(allCheckboxes);

//     // 对每个复选框添加事件监听器，以便在更改状态时更新聚合
//     allCheckboxes.forEach(function(checkbox) {
//         checkbox.addEventListener('change', function() {
//             updateMarkerCluster(allCheckboxes);
//         });
//     });
// });


// 获取所有复选框
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

// 为每个复选框添加更改事件监听器暂停播放
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
       
            // 如果复选框被选中，则暂停自动滑块函数
            clearInterval(intervalId);
            intervalId = null;
            controlImage.src = 'media/animal_icon/play.png';
        
        
                           
    });
});
//复选框全选
function handleCheckboxContainer(containerId) {
    const checkboxContainer = document.getElementById(containerId);
    const selectAllCheckbox = checkboxContainer.querySelector('.category-select-all');
    const otherCheckboxes = checkboxContainer.querySelectorAll('.category-checkbox:not(.category-select-all)');

    otherCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const allOthersChecked = [...otherCheckboxes].every(cb => cb.checked);
            selectAllCheckbox.checked = allOthersChecked;
        });
    });
}

handleCheckboxContainer('animalCategoryContainer');
handleCheckboxContainer('dynastyCategoryContainer');
handleCheckboxContainer('waysCategoryContainer');
handleCheckboxContainer('areaCategoryContainer');
// 获取所有的类别复选框元素
// 获取所有的类别复选框元素
// const selectAllCheckboxes = document.querySelectorAll('.category-checkbox.subcategory-select-all');

// selectAllCheckboxes.forEach(function(selectAllCheckbox) {
//     selectAllCheckbox.addEventListener('click', function(event) {
//         // 获取当前复选框所在的容器
//         const container = selectAllCheckbox.closest('.s-container');
//         if (container) {
//             // 获取容器下的所有非全选复选框
//             const checkboxes = container.querySelectorAll('.category-checkbox:not(.subcategory-select-all)');
//             // 显示或隐藏容器下的所有复选框
//             checkboxes.forEach(function(checkbox) {
//                 checkbox.closest('.ss-container').style.display = selectAllCheckbox.checked ? 'flex' : 'none';
//             });
//         }
//     });
// });



// const subcategoryContainers = document.querySelectorAll('.ss-container');

// subcategoryContainers.forEach(function(container) {
//     container.addEventListener('click', function(event) {
//         // 检查是否点击的是复选框以外的其他区域
//         if (event.target.tagName !== 'INPUT') {
//             // 获取容器下的所有非全选复选框
//             const checkboxes = container.querySelectorAll('.category-checkbox:not(.subcategory-select-all)');
            
//             // 检查当前容器下的复选框是否全部选中
//             const allCheckboxes = Array.from(checkboxes);
//             const allChecked = allCheckboxes.every(function(checkbox) {
//                 return checkbox.checked;
//             });

//             // 获取当前容器内的全选复选框
//             const selectAllCheckbox = container.querySelector('.category-checkbox.subcategory-select-all');
//             if (selectAllCheckbox) {
//                 // 更新全选复选框的状态
//                 selectAllCheckbox.checked = allChecked;
//             }
//         }
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     // 获取所有的复选框
//     var checkboxes = document.querySelectorAll('.category-checkbox');

//     // 遍历复选框并设置为选中状态
//     checkboxes.forEach(function(checkbox) {
//         checkbox.checked = true;
//     });
// });
//复选框容器隐藏
function toggleContainer(containerId) {
    var container = document.getElementById(containerId);
    if (container.style.display === 'none') {
        container.style.display = 'flex';
    } else {
        container.style.display = 'none';
    }
}

var currentValue = parseInt(slider.value);




function toggleMarkers(showList, hideList) {
    if (Array.isArray(showList) && showList.length > 0 && Array.isArray(hideList) ) {
        showList.forEach(function(marker) {
            if (filteredMarkers.includes(marker)) {
                marker.setMap(map);
            }
        });

        hideList.forEach(function(marker) {
            marker.setMap(null);
        });
    } 
}

// function enlargeImage(img) {
//     // Create a modal or overlay to display the enlarged image and a close button
// var imageContainer = document.createElement('div');
// imageContainer.className = 'image-container';
//     // Create a div for the modal
//     var modal = document.createElement('div');
//     modal.className = 'modal';
    
//     // Create an image element for the enlarged image
//     var modalImg = document.createElement('img');
//     modalImg.src = img.src;
//     modalImg.alt = 'Enlarged Image';
//     modalImg.className = 'modal-content';
  
//     // Append the image to the modal
//     modal.appendChild(modalImg);
  
//     // Create a close button
//     var closeButton = document.createElement('span');
//     closeButton.innerHTML = '&times;'; // The "x" symbol for the close button
//     closeButton.className = 'close';
    
//     // Append the close button to the modal
//     modal.appendChild(closeButton);
  
//     // Append the modal to the body of the document
//     document.body.appendChild(modal);
  
//     // Add a click event listener to the close button to hide the modal when clicked
//     closeButton.addEventListener('click', function() {
//       modal.style.display = 'none';
//     });
  
//     // Show the modal
//     modal.style.display = 'block';
  
//     // Optional: Implement styling for the modal to position it in the center of the screen
//   }
  
function enlargeImage(img) {
    // Create a div for the container of the enlarged image
    var imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
  
    // Create a close button
    var closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;'; // The "x" symbol for the close button
    closeButton.className = 'close';
    closeButton.addEventListener('click', function() {
      document.body.removeChild(imageContainer);
    });
  
    // Create an image element for the enlarged image
    var modalImg = document.createElement('img');
    modalImg.src = img.src;
    modalImg.alt = 'Enlarged Image';
    modalImg.className = 'modal-content';
  
    // Append the close button and the image to the image container
    imageContainer.appendChild(closeButton);
    imageContainer.appendChild(modalImg);


    // let isDragging = false;
    // let offset = { x: 0, y: 0 };
    
    // // Mouse event listeners for dragging the image container
    // imageContainer.addEventListener('mousedown', function(event) {
    //   isDragging = true;
    //   offset.x = event.offsetX;
    //   offset.y = event.offsetY;
    // });
  
    // document.addEventListener('mousemove', function(event) {
    //   if (isDragging) {
    //     imageContainer.style.left = (event.clientX - offset.x) + 'px';
    //     imageContainer.style.top = (event.clientY - offset.y) + 'px';
    //   }
    // });
  
    // document.addEventListener('mouseup', function() {
    //   isDragging = false;
    // });

    //Position the image container over the map using CSS
    // imageContainer.addEventListener('wheel', function(event) {
    //     event.preventDefault(); // Prevent default scrolling behavior
    //     if (event.deltaY < 0) {
    //       modalImg.style.width = (modalImg.clientWidth * 1.1) + 'px';
    //     } else {
    //       modalImg.style.width = (modalImg.clientWidth * 0.9) + 'px';
    //     }
    //   });
    // Append the image container to the body of the document
    document.body.appendChild(imageContainer);
  }
