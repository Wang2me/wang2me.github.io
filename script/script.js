// 图标信息
var iconInfo = {
    camel: { url: '/media/animal_icon/camel.png', scaledSize: new google.maps.Size(25, 25)},
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
        new google.maps.LatLng(-80, -180),
        new google.maps.LatLng(75, 180)
    );
  // 将折线添加到地图


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

  
    previouslyHiddenMarkers.forEach(function(marker) {
        marker.setMap(null);
    });
    //创建自定义标签
    handleToggleMarkers(currentValue);
    
}



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
        toggleIcon.style.left = '20%'; // 将图标移动回初始位置
    }
    if (toggleIcon.classList.contains('expanded')) {
        toggleIcon.classList.remove('expanded'); // 如果有 expanded 类名，则移除
    } else {
        toggleIcon.classList.add('expanded'); // 如果没有 expanded 类名，则添加
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
        controlImage.src = 'media/animal_icon/stop.png'; // 切換到暫停圖片
        // let intervalTime = 50 - currentValue / 20; // 根據 currentValue 的值調整間隔時間
        // if (intervalTime < 10) { // 設置最小間隔時間為10
        let intervalTime = 50;
        //}
        intervalId = setInterval(autoSlide, intervalTime); // 根據 intervalTime 自動拖動
    } else {
        clearInterval(intervalId);
        intervalId = null;
        controlImage.src = 'media/animal_icon/play.png'; // 切換回播放圖片
    }
    if (currentValue >= 8998) {
        // 重置 currentValue 為 0
        currentValue = 0;
        // 記錄重置時間
        console.log('currentValue 在點擊圖標後重置為 0，時間為：', new Date());
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
        controlImage.src = 'media/animal_icon/reset.png'; // 切换回播放图片
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
    var asiaContainer = document.getElementById('asiaContainer');
    var asiaCheckboxes = asiaContainer.querySelectorAll('.category-checkbox');

    var asiaButton = document.getElementById('asiaButton');
    asiaButton.addEventListener('click', function() {
        if (asiaContainer.style.display === 'none' || asiaContainer.style.display === '') {
            showContainer(asiaContainer, asiaCheckboxes);
        } else {
            hideContainer(asiaContainer, asiaCheckboxes);
        }
        filterMarkers(currentValue);
    });
}

function showContainer(container, checkboxes) {
    container.style.display = 'block';
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = true;
    });
}

function hideContainer(container, checkboxes) {
    container.style.display = 'none';
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
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


// 获取所有复选框
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

// // 为每个复选框添加更改事件监听器暂停播放
// checkboxes.forEach(function(checkbox) {
//     checkbox.addEventListener('change', function() {
       
//             // 如果复选框被选中，则暂停自动滑块函数
//             clearInterval(intervalId);
//             intervalId = null;
//             controlImage.src = 'media/animal_icon/play.png';
        
        
                           
//     });
// });

// 为所有朝代类别复选框添加更改事件监听器
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // 根据朝代类别复选框的改变来处理
        if (checkbox.id === 'xia-Checkbox' || checkbox.id === 'qinhan-Checkbox' || checkbox.id ==='sanguo-Checkbox'|| 
        checkbox.id ==='sui-Checkbox'|| checkbox.id ==='tang-Checkbox'|| checkbox.id ==='song-Checkbox'||
        checkbox.id === 'yuan-Checkbox'|| checkbox.id ==='ming-Checkbox'||checkbox.id === 'qing-Checkbox') {
            // 如果复选框被选中，则暂停自动滑块函数
            clearInterval(intervalId);
            intervalId = null;
            controlImage.src = 'media/animal_icon/play.png'; // 更新控制图像的来源
        }
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
  document.addEventListener('contextmenu', event => {
    if (event.target.tagName === 'IMG') {
        event.preventDefault();
    }
});

var xian= {lat:34.2655,lng:108.9508};//西安
var luoyang= {lat:34.6321,lng:112.4470}//洛阳
var kaifeng ={lat:34.7872,lng:114.3081};//开封
var beijing ={lat:39.9171,lng:116.3897};//北京
var nanjing={lat:32.0435,lng:118.7501}//南京


//河西走廊:敦煌-酒泉-张掖-武威
var dunhuang= { lat:	40.1030	,lng:94.6618 }; 
var wuwei = {lat:37.9283,lng:102.6371};
var jiuquan={lat:39.7237,lng:98.3444}
var zhangye = {lat:38.9177,lng:100.3065};
//海上絲路：古里-xilan-palk-馬六甲


var guli ={lat:11.2603525,lng:75.7776419};
var xilan={lat:6.9397,lng:79.8259};
var palk={lat:10.0803,lng:80.1207};
var maliujia={lat:2.2373,lng:102.1691};
var kailuo={lat:	30.0444 ,lng:31.2357};
var kemolin={lat:8.0864,lng:77.5355};
var jibudi={lat:11.8125,lng:41.9678};
var taihai={lat:24.2877,lng:119.5445};
var zhangjiagang={lat:31.8774,lng:120.4609};
var nanhai={lat:-0.3778,lng:106.0436};

//定义向前箭头图标作为折线动画的线符号
var lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    strokeColor: '#000000', // 蓝色
    strokeOpacity: 0.8, // 不透明度
  };
  
var lineSymbolSquare = {
    path: 'M -0.5,-0.5 0.5,-0.5 0.5,0.5 -0.5,0.5 Z', // 定义一个近似正方形的路径
    fillColor: '#FFFFFF', // 填充颜色
    fillOpacity: 1, // 填充不透明度
    strokeColor: '#000000', // 边框颜色
    strokeWeight: 0 // 边框宽度
};



  function animateCircle(line) {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;
      // 在每个时间间隔内更新箭头的位置
      line.set('icons', [
        {
          icon: lineSymbolSquare,
          offset: count / 2 + '%',
          repeat: '5%' // 控制箭头是否重复出现
        }
      ]);
    }, 100); // 控制速度
  }  
  function animateCi6(line) {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;
      // 在每个时间间隔内更新箭头的位置
      line.set('icons', [
        {
          icon: lineSymbolSquare,
          offset: count / 2 + '%',
          repeat: '30%' // 控制箭头是否重复出现
        }
      ]);
    }, 10); // 控制速度
  } 
   function animateCi7(line) {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;
      // 在每个时间间隔内更新箭头的位置
      line.set('icons', [
        {
          icon: lineSymbolSquare,
          offset: count / 2 + '%',
          repeat: '12%' // 控制箭头是否重复出现
        }
      ]);
    }, 25); // 控制速度
  }
  function animateCi8(line) {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;
      // 在每个时间间隔内更新箭头的位置
      line.set('icons', [
        {
          icon: lineSymbolSquare,
          offset: count / 2 + '%',
          repeat: '30%' // 控制箭头是否重复出现
        }
      ]);
    }, 20); // 控制速度
  }
// 将折线添加到地图
function toggleLines(checkboxId, line) {
    var checkbox = document.getElementById(checkboxId);
    if (checkbox.checked) {
      line.setMap(map); // 显示折线
    } else {
      line.setMap(null); // 隐藏折线
    }
  }

  function togglecity(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    if (checkbox.checked) {
        blinkingMarkers.forEach(function(marker) {
            marker.setMap(map); // 显示每个标记点
            if (!marker.blinkInterval) {
                startBlinking(marker); // 开始闪烁每个标记点
            }
        });
    } else {
        blinkingMarkers.forEach(function(marker) {
            stopBlinking(marker); // 停止闪烁每个标记点
            marker.setMap(null); // 隐藏每个标记点
        });
    }
}
 

  function toggleMultipleLines(checkboxId, line2, line3,line5,line6,line7,line8,line9,line10,line11) {
    var checkbox = document.getElementById(checkboxId);
    if (checkbox.checked) {
        line2.setMap(map); // 显示折线1
        line3.setMap(map); // 显示折线2
        line5.setMap(map); // 显示折线2
        line6.setMap(map); // 显示折线2
        line7.setMap(map); // 显示折线2
        line8.setMap(map); // 显示折线2
        line9.setMap(map); // 显示折线2
        line10.setMap(map); // 显示折线2
        line11.setMap(map); // 显示折线2

    } else {
        line3.setMap(null); // 隐藏折线1
        line2.setMap(null); // 隐藏折线2
        line5.setMap(null); // 隐藏折线2
        line6.setMap(null); // 隐藏折线2
        line7.setMap(null); // 隐藏折线2
        line8.setMap(null); // 隐藏折线2
        line9.setMap(null); // 隐藏折线2
        line10.setMap(null); // 隐藏折线2
        line11.setMap(null); // 隐藏折线2

    }
}


// 定义一个函数，生成指定范围内的随机数
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// 定义一个函数，生成新的坐标对象，并添加随机数
function RandomCoords(coords) {
    var randomLat = coords.lat + getRandomNumber(-0.066, 0.066); // 在-0.1到0.1之间生成随机数
    var randomLng = coords.lng + getRandomNumber(-0.090, 0.090); // 在-0.1到0.1之间生成随机数
    return { lat: randomLat, lng: randomLng };
}
// // 修改后的函数，保证生成的坐标之间存在一定距离



var blinkingMarkers = []; // 存储所有闪烁标记
// 创建一个透明的覆盖物层

function createBlinkingMarker(map, position, title, content) {
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: title,
        zIndex: 99999 // 设置 zIndex 为 100
    });



    startBlinking(marker); // 默认开始闪烁
    blinkingMarkers.push(marker); // 将闪烁标记添加到数组中

    // // 添加鼠标悬停事件处理程序
    // marker.addListener('mouseover', function() {
    //     stopAllBlinking(); // 停止所有闪烁标记
    //     marker.setAnimation(google.maps.Animation.BOUNCE); // 放大图标
    // });

    // // 添加鼠标移出事件处理程序
    // marker.addListener('mouseout', function() {
    //     showAllMarkers(); // 显示所有标记
    //     startAllBlinking(); // 开始所有闪烁标记
    //     marker.setAnimation(null); // 取消放大图标
    // });

    // 添加点击事件处理程序
    marker.addListener('click', function() {
        var infoWindow_city = new google.maps.InfoWindow({
            content: content
        });
        infoWindow_city.setOptions({className: 'info-window-city'}); // 添加类别
        infoWindow_city.open(map, marker);
        closeOtherInfoWindows(infoWindow_city); // 关闭其他已打开的信息窗口
        //map.setZoom(8); // 设置缩放级别为 15
        //map.setCenter(marker.getPosition()); // 将地图中心设置为标记点的位置

    });

    return marker; 
}

function startBlinking(marker) {
    var visible = true; // 初始状态为可见

    var interval = window.setInterval(function() {
        if (visible) {
            marker.setVisible(false); // 如果标记当前可见，则隐藏标记
            visible = false; // 更新状态为不可见
        } else {
            marker.setVisible(true); // 如果标记当前不可见，则显示标记
            visible = true; // 更新状态为可见
        }
    }, 1000);
    marker.blinkingInterval = interval; // 将定时器引用存储在标记对象上
}

function stopBlinking(marker) {
    clearInterval(marker.blinkingInterval); // 清除对应标记的定时器
}

function stopAllBlinking() {
    for (var i = 0; i < blinkingMarkers.length; i++) {
        stopBlinking(blinkingMarkers[i]);
    }
}

function startAllBlinking() {
    for (var i = 0; i < blinkingMarkers.length; i++) {
        startBlinking(blinkingMarkers[i]);
    }
}

function showAllMarkers() {
    for (var i = 0; i < blinkingMarkers.length; i++) {
        blinkingMarkers[i].setVisible(true);
    }
}
function closeOtherInfoWindows(currentInfoWindow) {
    for (var i = 0; i < blinkingMarkers.length; i++) {
        if (blinkingMarkers[i].infoWindow && blinkingMarkers[i].infoWindow !== currentInfoWindow) {
            blinkingMarkers[i].infoWindow.close();
        }
    }
}


// 在 JavaScript 中编写 toggleintro 函数来处理点击事件
function toggleintro() {
        var customWindow = document.getElementById('introwindow');
        if (customWindow.style.display === 'none'||customWindow.style.display === '') {
          customWindow.style.display = 'block';
        } else {
          customWindow.style.display = 'none';
        }
    
}
function showImage() {
    var customWindow = document.getElementById('qrcontainer');
        if (customWindow.style.display === 'none'||customWindow.style.display === '') {
          customWindow.style.display = 'block';
        } else {
          customWindow.style.display = 'none';
        }
    
  }


  $(document).ready(function () {
    // Event handler for the "亞洲" checkbox
    $("#asiaButton").change(function () {
        // Get the state of the "亞洲" checkbox
        var isChecked = $(this).prop("checked");

        // Update the state of related checkboxes
        $("#asiaContainer .category-checkbox").prop("checked", isChecked);

        // 调用 filterMarkers 函数，传递当前的值（如果有的话）
        filterMarkers(currentValue);
    });

    // Event handler for the sub-checkboxes under "亞洲"
    $("#asiaContainer .category-checkbox").change(function () {
        // Check if any of the sub-checkboxes are not selected
        var isAnySubCheckboxNotSelected = $("#asiaContainer .category-checkbox:not(:checked)").length > 0;

        // If any sub-checkbox is not selected, uncheck the "亞洲" checkbox
        $("#asiaButton").prop("checked", !isAnySubCheckboxNotSelected);

        // Check if all sub-checkboxes are selected, then check the "亞洲" checkbox
        var isAllSubCheckboxesSelected = $("#asiaContainer .category-checkbox:checked").length === $("#asiaContainer .category-checkbox").length;
        $("#asiaButton").prop("checked", isAllSubCheckboxesSelected);

        // 调用 filterMarkers 函数，传递当前的值（如果有的话）
        filterMarkers(currentValue);
    });
});
// 當子容器的全選按鈕被點擊時
$(".ss-container .category-select").on("change", function() {
    // 找到同一個容器下的其他複選框並根據全選按鈕的狀態來改變它們的選取狀態
    $(this).closest(".ss-container").find(".category-checkbox").prop("checked", $(this).prop("checked"));
    filterMarkers(currentValue);
});


// 检查是否已有访问计数，如果没有则初始化为 0
if (!document.cookie.split(';').some((item) => item.trim().startsWith('visitCount='))) {
    document.cookie = "visitCount=0";
}

// 获取当前的访问计数
let count = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)visitCount\s*\=\s*([^;]*).*$)|^.*$/, "\$1"));

// 确保 count 不是 NaN
if (isNaN(count)) {
    count = 0;
}

// 更新访问计数
count++;
document.cookie = `visitCount=${count}`;

// 更新网页上的显示
document.getElementById('visitCount').innerText = `${count} views`;


//    // 使用 fetch API 来增加访问次数
//    async function increaseVisitCount() {
//     await fetch('/increaseVisitCount');
//   }

//   // 使用 fetch API 来获取访问次数并更新页面
//   async function updateVisitCount() {
//     const response = await fetch('/getVisitCount');
//     const data = await response.json();
//     document.getElementById('visitcount').innerText = `${data.visitCount} views`;
//   }

//   // 在页面加载时执行更新访问次数的函数
//   window.onload = async function() {
//     await increaseVisitCount(); // 增加访问次数
//     updateVisitCount(); // 更新页面上的访问次数
//   };