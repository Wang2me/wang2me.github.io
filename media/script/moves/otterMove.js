
//<br>&emsp;&emsp;&emsp;
//史前至夏商周
{
	
}


 //秦漢
{

   
   

}
//三国
{
   				
}

//隋
{
    

}

//唐
{
markers.otter1 = createMarker({lat:61.2016,lng:-149.9157}, 'otter','美國安克雷奇',{ A:['otter'], B:['清'],C:['身份象徵'],D:['海上絲綢之路'],E:['北美洲'] }
,{  title_cn: '描述',title_en: 'Description',
    description_cn: '海獺主要分佈於北太平洋海域。清朝時，俄國的探險隊跨過白令海峽，在阿拉斯加地區大肆獵殺海獺以獲取皮毛。這些海獺皮很多通過黑龍江地區傳入清朝，是貴族和高級官員所鐘愛的衣物原料。'
    ,description_en:'Sea otters are mainly spread in the North Pacific Ocean. During the Qing Dynasty 清朝, expeditions from the Russian Empire crossed the Bering Strait and hunted sea otters in Alaska for their fur. Many of these sea otter furs were introduced to the Qing Dynasty through the Heilongjiang 黑龍江 region and were popular clothing material for nobles and high-ranking officials.'
	,reference:'1.  付成雙，《動物改變世界：海狸、毛皮貿易與北美開發》（北京：北京大學出版社，2016年），頁225-226。<br>&emsp;&emsp;&emsp;2. 杜君立，〈毛皮征服歷史〉，《天涯》，期6（2018年11月），頁33-34。'
    ,imag:''
    ,referenceUrl:''
 });                                    
	//俄羅斯白令戈夫斯基，俄羅斯雅克薩，黑龍江海林，北京	---
 
   markers.otter2 = createMarker({lat:53.4318,lng:-132.2951}, 'otter','加拿大格雷厄姆島',{ A:['otter'], B:['清'],C:['身份象徵'],D:['海上絲綢之路'],E:['北美洲'] },
   {title_cn: '描述',title_en: 'Description'  
    ,description_cn:'美國獨立後，皮毛成為美國向中國輸出的主要貿易商品。1785年，紐約和廣州之間的貿易航線開通。至19世紀初期，中美間的皮毛貿易達到頂峰，每年有數萬張海獺皮運輸至廣州。'  
    ,description_en:'After the independence of the United States, fur became the major commodity exported from the U.S. to China. In 1785, the trade route between New York and Guangzhou 廣州 was opened. By the early 19th century, the fur trade between the United States and China was at its peak, with tens of thousands of sea otter hides transported to Guangzhou each year.'
	,reference:'1. 郭衛東，〈毛皮：清代北美對華貿易的重要貨品〉，《安徽史學》，期6（2015年12月），頁24-27。<br>&emsp;&emsp;&emsp;2. 付成雙，《動物改變世界：海狸、毛皮貿易與北美開發》（北京：北京大學出版社，2016年），頁234-240。'
    ,image:''
    ,referenceUrl:''});		
  //美國紐波特，美國紐約，佛得角，南非開普敦，印度尼西亞巽他海峽，中國澳門，廣東廣州	-------
  
     	

}

//宋
{}

//元
{}

//明
{
    
    

     
     
}

//清
{	 
    
    
}
        

// 获取时间轴元素和标记
var timeline = document.getElementById('timeline');
var slider = document.getElementById('slider');
var otters = [
 'otter1', 'otter2', 'otter3', 'otter4' 
];

for (var i = 0; i < otters.length; i++) {
 window[otters[i]] = markers[otters[i]];
}



// 定义新坐标和初始坐标

// 定义一个函数，生成指定范围内的随机数
function getRandomNumber(min, max) {
 return Math.random() * (max - min) + min;
}

// 定义一个函数，生成新的坐标对象，并添加随机数
function RandomCoords(coords) {
 var randomLat = coords.lat + getRandomNumber(-0.05, 0.05); // 在-0.1到0.1之间生成随机数
 var randomLng = coords.lng + getRandomNumber(-0.05, 0.05); // 在-0.1到0.1之间生成随机数
 return { lat: randomLat, lng: randomLng };
}

var xian= {lat:34.2655,lng:108.9508};//西安
var luoyang= {lat:34.6321,lng:112.4470}//洛阳
var kaifeng ={lat:34.7872,lng:114.3081};//开封
var beijing ={lat:39.9171,lng:116.3797};//北京



var newCoords_otter1_1= {lat:63.0603,lng:179.3438};
var newCoords_otter1_2= {lat:53.3825,lng:124.0956};
var newCoords_otter1_3= {lat:44.6016,lng:129.3217};
var newCoords_otter1_4= RandomCoords(beijing);


var newCoords_otter2_1= {lat:41.4894,lng:-71.3173};
var newCoords_otter2_2= {lat:40.7097,lng:-74.0319};
var newCoords_otter2_3= {lat:16.5081,lng:-24.2041};
var newCoords_otter2_4= {lat:-33.9145,lng:18.3954};
var newCoords_otter2_5= {lat:-5.9205,lng:105.8755};
var newCoords_otter2_6= {lat:22.1957,lng:113.5415};
var newCoords_otter2_7= {lat:23.1256,lng:113.2677};


//河西走廊:敦煌-酒泉-张掖-武威
var dunhuang= { lat:	40.1130	,lng:94.6618 }; 
var wuwei = {lat:37.9283,lng:102.6371};
var jiuquan={lat:39.7237,lng:98.3444}
var zhangye = {lat:38.9177,lng:100.3065};
//海上絲路：古里-xilan-palk-馬六甲
var guli ={lat:11.2618,lng:75.7822};
var xilan={lat:6.9397,lng:79.8259};
var palk={lat:10.0803,lng:80.1207};
var maliujia={lat:2.2373,lng:102.1691};
var kailuo={lat:	30.0444 ,lng:31.2357};
var kemolin={lat:8.0864,lng:77.5355};
var jibudi={lat:11.8125,lng:41.9678};
var taihai={lat:24.2877,lng:119.5445};
var zhangjiagang={lat:31.8774,lng:120.4609};
var nanhai={lat:-0.3778,lng:106.0436};


function getInitialCoords(otter) {
 const position = otter.getPosition();
 return {
     lat: position.lat(),
     lng: position.lng()
 };
}


var initialCoords_otter1 = getInitialCoords(otter1);
var initialCoords_otter2 = getInitialCoords(otter2);





// 添加滑块值变化的事件监听器
slider.addEventListener('input', function() {
    
   // handleToggleMarkers(currentValue)
   
    //史前之前
    if (currentValue<=0)
    {

        
        markers.otter1.setPosition(initialCoords_otter1);
        markers.otter2.setPosition(initialCoords_otter2);
       
    }
    //史前
    if(currentValue>0&&currentValue<1000)
    {
    }
    //秦汉
    if (currentValue >= 1000 && currentValue < 2000) {
        
       

    }
    //三国
    if (currentValue >= 2000 && currentValue <3000) {
       
        
        
    }
    //隋
    if(currentValue>=3000&&currentValue<4000){
        
       
        
    }
    //唐
    if (currentValue >= 4000 && currentValue < 5000) {
       
        
    }
    //宋
    if (currentValue >= 5000 && currentValue <6000) {
       
            
            
           

    }
    //元
    if (currentValue >= 6000 && currentValue <7000) {}
   //明
    if(currentValue >=7000 && currentValue <8000){

        
    }

    //清
    if(currentValue >=8000 && currentValue <=9000){
        
        var points_1 = [initialCoords_otter1, newCoords_otter1_1, newCoords_otter1_2,newCoords_otter1_3,newCoords_otter1_4,newCoords_otter1_4];
        var points_2 = [initialCoords_otter2, newCoords_otter2_1, newCoords_otter2_2,newCoords_otter2_2,newCoords_otter2_4,newCoords_otter2_5,newCoords_otter2_6,newCoords_otter2_7,newCoords_otter2_7];

        var targetIndex_1 = Math.floor((currentValue - 8000) / (1000 / (points_1.length-1)));
        var targetIndex_2 = Math.floor((currentValue - 8000) / (1000 / (points_2.length-1)));
        
        var percentage_1 = (currentValue - 8000) % (1000 / (points_1.length-1)) / (1000 / (points_1.length-1));
        var percentage_2 = (currentValue - 8000) % (1000 / (points_2.length-1)) / (1000 / (points_2.length-1));
        
        percentage_1 = Math.min(1, Math.max(0, percentage_1));
        percentage_2 = Math.min(1, Math.max(0, percentage_2));
       
        

        var latDiff = points_2[targetIndex_2 + 1].lat - points_2[targetIndex_2].lat;
        var lngDiff = points_2[targetIndex_2 + 1].lng - points_2[targetIndex_2].lng;
        var interpolatedLat_2 = points_2[targetIndex_2].lat + latDiff * percentage_2
        var interpolatedLng_2 = points_2[targetIndex_2].lng + lngDiff * percentage_2
    
        var latDiff = points_1[targetIndex_1 + 1].lat - points_1[targetIndex_1].lat;
        var lngDiff = points_1[targetIndex_1 + 1].lng - points_1[targetIndex_1].lng;
        var interpolatedLat_1 = points_1[targetIndex_1].lat + latDiff * percentage_1
        var interpolatedLng_1 = points_1[targetIndex_1].lng + lngDiff * percentage_1

        otter1.setPosition({ lat: interpolatedLat_1, lng: interpolatedLng_1 });
        otter2.setPosition({ lat: interpolatedLat_2, lng: interpolatedLng_2 });
    }



});




