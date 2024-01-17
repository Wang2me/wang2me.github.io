
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
markers.seal1 = createMarker({lat:35.8215,lng:129.2526}, 'seal','韓國慶州',{ A:['seal'], B:['唐'],C:['朝貢'],D:['海上絲綢之路'],E:['東亞'] }
,{  title_cn: '描述',title_en: 'Description',
    description_cn: '海豹廣泛分佈於世界各海域。古代時人類就開始獵殺海豹以獲取皮毛。唐玄宗時期，位於朝鮮半島的新羅就曾經向唐朝進貢過十六張海豹皮。'
    ,description_en:'Seals are widely distributed throughout the world\'s oceans. In ancient times, people have been hunting seals for the fur. During the reign of Emperor Xuanzong of the Tang Dynasty 唐玄宗, Silla, located in the Korean Peninsula, once contributed sixteen seal hides to the Tang Dynasty 唐朝.'
	,reference:'1. 王欽若等，《冊府元龜·卷之九百七十一》（中國國家圖書館藏明崇禎十五年黃國琦刻本）。'
    ,imag:''
    ,referenceUrl:''
 });                                    

   markers.seal2 = createMarker({lat:61.2086,lng:-149.9127}, 'seal','美國安克雷奇',{ A:['seal'], B:['清'],C:['身份象徵'],D:['海上絲綢之路'],E:['北美洲'] },
   {title_cn: '描述',title_en: 'Description'  
    ,description_cn:'最早向清朝出售海豹皮的歐洲國家是俄國，但這些海豹並非來自歐洲，而是來自於北美洲。清朝時，俄國的探險隊跨過白令海峽，在阿拉斯加地區大肆獵殺海豹以獲取皮毛。在美國獨立以前，俄國主導了對中國的海豹皮毛貿易長達半個世紀。'  
    ,description_en:'The first European country to sell seal hides to the Qing Dynasty 清朝 was the Russian Empire. The seals did not come from Europe, but from North America. During the Qing Dynasty, Russian expeditions crossed the Bering Strait and hunted seals for their furs in Alaska. Russia dominated the seal furs trade with China for half a century before the United States became independent.'
	,reference:'1. 付成雙，《動物改變世界：海狸、毛皮貿易與北美開發》（北京：北京大學出版社，2016年），頁225-226。'
    ,image:''
    ,referenceUrl:''});		
  //俄羅斯白令戈夫斯基，俄羅斯雅克薩，黑龍江海林，北京	---


     	

}

//宋
{}

//元
{}

//明
{
    markers.seal3 = createMarker({lat:53.4348,lng:-132.2911}, 'seal','加拿大格雷厄姆島',{ A:['seal'], B:['清'],C:['身份象徵'],D:['海上絲綢之路'],E:['北美洲'] },
    {title_cn: '描述',title_en: 'Description'  
     ,description_cn:'海豹皮是美國向清朝出口的主要商品之一。這種皮毛貿易始於十八世紀末期。北美洲的西北海岸是海豹皮的主要產地，包括加拿大的英屬哥倫比亞和美國的俄勒岡。美國商船攜帶海豹皮以及其他商品從紐約港出發，橫跨大西洋和印度洋到達中國澳門。在獲得清朝的批准後，美國商人可以進入廣州出售海豹皮。有歷史學家推測，清朝時美國商人販售至中國的海豹皮價值在1500萬美元至2000萬美元之間。'  
     ,description_en:'Seal hides were one of the main commodities exported from the United States to the Qing Dynasty 清朝. The trade began in the late 18th century. The northwest coast of North America was the major origin of seal hides, including British Columbia in Canada and Oregon in the United States. American merchant ships carrying seal hides and other goods traveled from New York Harbor across the Atlantic and Indian Oceans to Macau, China. After receiving approval from the Qing Dynasty, American merchants were allowed to enter Guangzhou 廣州 to sell the hides. Historians have estimated that the value of seal hides sold to China by American merchants during the Qing Dynasty ranged from 15 million US dollars to 20 million US dollars.'
	,reference:'1. 郭衛東，〈19世紀初葉歐美國家對華貿易反差現象研究〉，《安徽史學》，期2（2013年3月），頁9-10。'
     ,image:''
     ,referenceUrl:''});	
//美國紐波特，美國紐約，佛得角，南非開普敦，印度尼西亞巽他海峽，中國澳門，廣東廣州	-------

markers.seal4 = createMarker({lat:-51.7906,lng:-58.7955}, 'seal','福克蘭群島',{ A:['seal'], B:['清'],C:['身份象徵'],D:['海上絲綢之路'],E:['南美洲'] },
    {title_cn: '描述',title_en: 'Description'  
     ,description_cn:'在美國商人大規模的獵殺下，東太平洋的海豹數量銳減。為了保證向清朝銷售的海豹皮數量，美國商人開始獵殺其他地區的海豹，例如位於南美洲的福克蘭群島。'  
     ,description_en:'The seal population in the eastern Pacific Ocean declined drastically due to the large-scale hunting and killing by American traders. In order to ensure the sale of seal hides to the Qing Dynasty 清朝, American traders began to hunt seals from other regions, such as the Falkland Islands in South America.'
	,reference:'1. 郭衛東，〈19世紀初葉歐美國家對華貿易反差現象研究〉，《安徽史學》，期2（2013年3月），頁11-12。'
     ,image:''
     ,referenceUrl:''});
//美國紐約，佛得角，南非開普敦，印度尼西亞巽他海峽，中國澳門，廣東廣州	------
    

     
     
}

//清
{	 
    
    
}
        

// 获取时间轴元素和标记
var timeline = document.getElementById('timeline');
var slider = document.getElementById('slider');
var seals = [
 'seal1', 'seal2', 'seal3', 'seal4' 
];

for (var i = 0; i < seals.length; i++) {
 window[seals[i]] = markers[seals[i]];
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


var newCoords_seal1_1= RandomCoords(xian);
var newCoords_seal2_1= {lat:63.0603,lng:179.3438};
var newCoords_seal2_2= {lat:53.3825,lng:124.0956};
var newCoords_seal2_3= {lat:44.6016,lng:129.3217};
var newCoords_seal2_4= RandomCoords(beijing);
var newCoords_seal3_1= {lat:41.4894,lng:-71.3173};
var newCoords_seal3_2= {lat:40.7097,lng:-74.0319};
var newCoords_seal3_3= {lat:16.5081,lng:-24.2041};
var newCoords_seal3_4= {lat:-33.9145,lng:18.3954};
var newCoords_seal3_5= {lat:-5.9205,lng:105.8755};
var newCoords_seal3_6= {lat:22.1957,lng:113.5415};
var newCoords_seal3_7= {lat:23.1256,lng:113.2677};

var newCoords_seal4_1= {lat:40.7097,lng:-74.0319};
var newCoords_seal4_2= {lat:16.5081,lng:-24.2041};
var newCoords_seal4_3= {lat:-33.9145,lng:18.3954};
var newCoords_seal4_4= {lat:-5.9205,lng:105.8755};
var newCoords_seal4_5= {lat:22.1957,lng:113.5415};
var newCoords_seal4_6= {lat:23.1256,lng:113.2677};


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


function getInitialCoords(seal) {
 const position = seal.getPosition();
 return {
     lat: position.lat(),
     lng: position.lng()
 };
}


var initialCoords_seal1 = getInitialCoords(seal1);
var initialCoords_seal2 = getInitialCoords(seal2);
var initialCoords_seal3 = getInitialCoords(seal3);
var initialCoords_seal4 = getInitialCoords(seal4);





// 添加滑块值变化的事件监听器
slider.addEventListener('input', function() {
    
   // handleToggleMarkers(currentValue)
   
    //史前之前
    if (currentValue<=0)
    {

        
        markers.seal1.setPosition(initialCoords_seal1);
        markers.seal2.setPosition(initialCoords_seal2);
        markers.seal3.setPosition(initialCoords_seal3);
        markers.seal4.setPosition(initialCoords_seal4);
     
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
       
        
        var points_1 = [initialCoords_seal1,newCoords_seal1_1, newCoords_seal1_1];
        
    // 计算当前阶段的目标点的索引
       
        var targetIndex_1 = Math.floor((currentValue - 4000) / (1000 / (points_1.length-1)));
        

    // 计算插值百分比
        
        var percentage_1 = (currentValue - 4000) % (1000 / (points_1.length-1)) / (1000 / (points_1.length-1));
        

        
        percentage_1 = Math.min(1, Math.max(0, percentage_1));
        

    // 计算插值的新位置
        

        var latDiff = points_1[targetIndex_1 + 1].lat - points_1[targetIndex_1].lat;
        var lngDiff = points_1[targetIndex_1 + 1].lng - points_1[targetIndex_1].lng;
        var interpolatedLat_1 = points_1[targetIndex_1].lat + latDiff * percentage_1
        var interpolatedLng_1 = points_1[targetIndex_1].lng + lngDiff * percentage_1

        
        
        
        seal1.setPosition({ lat: interpolatedLat_1, lng: interpolatedLng_1 });     
       
      
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
        
        var points_4 = [initialCoords_seal4, newCoords_seal4_1, newCoords_seal4_2,newCoords_seal4_3,newCoords_seal4_4,newCoords_seal4_5,newCoords_seal4_6,newCoords_seal4_6];
        var points_2 = [initialCoords_seal2, newCoords_seal2_1, newCoords_seal2_2,newCoords_seal2_3,newCoords_seal2_4,newCoords_seal2_4];
        var points_3 = [initialCoords_seal3, newCoords_seal3_1, newCoords_seal3_2,newCoords_seal3_3,newCoords_seal3_4,newCoords_seal3_5,newCoords_seal3_6,newCoords_seal3_6];

        var targetIndex_4 = Math.floor((currentValue - 8000) / (1000 / (points_4.length-1)));
        var targetIndex_2 = Math.floor((currentValue - 8000) / (1000 / (points_2.length-1)));
        var targetIndex_3 = Math.floor((currentValue - 8000) / (1000 / (points_3.length-1)));
        
        var percentage_4 = (currentValue - 8000) % (1000 / (points_4.length-1)) / (1000 / (points_4.length-1));
        var percentage_2 = (currentValue - 8000) % (1000 / (points_2.length-1)) / (1000 / (points_2.length-1));
        var percentage_3 = (currentValue - 8000) % (1000 / (points_3.length-1)) / (1000 / (points_3.length-1));
        
        percentage_4 = Math.min(1, Math.max(0, percentage_4));
        percentage_2 = Math.min(1, Math.max(0, percentage_2));
        percentage_3 = Math.min(1, Math.max(0, percentage_3));
       
        var latDiff = points_4[targetIndex_4 + 1].lat - points_4[targetIndex_4].lat;
        var lngDiff = points_4[targetIndex_4 + 1].lng - points_4[targetIndex_4].lng;
        var interpolatedLat_4 = points_4[targetIndex_4].lat + latDiff * percentage_4
        var interpolatedLng_4 = points_4[targetIndex_4].lng + lngDiff * percentage_4

        var latDiff = points_2[targetIndex_2 + 1].lat - points_2[targetIndex_2].lat;
        var lngDiff = points_2[targetIndex_2 + 1].lng - points_2[targetIndex_2].lng;
        var interpolatedLat_2 = points_2[targetIndex_2].lat + latDiff * percentage_2
        var interpolatedLng_2 = points_2[targetIndex_2].lng + lngDiff * percentage_2
    
        var latDiff = points_3[targetIndex_3 + 1].lat - points_3[targetIndex_3].lat;
        var lngDiff = points_3[targetIndex_3 + 1].lng - points_3[targetIndex_3].lng;
        var interpolatedLat_3 = points_3[targetIndex_3].lat + latDiff * percentage_3
        var interpolatedLng_3 = points_3[targetIndex_3].lng + lngDiff * percentage_3

        seal4.setPosition({ lat: interpolatedLat_4, lng: interpolatedLng_4 });
        seal2.setPosition({ lat: interpolatedLat_2, lng: interpolatedLng_2 });
        seal3.setPosition({ lat: interpolatedLat_3, lng: interpolatedLng_3 });
    }



});




