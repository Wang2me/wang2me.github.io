
//<br>&emsp;&emsp;&emsp;
//史前至夏商周
{
    markers.turkey1 = createMarker({lat:17.0745,lng:-96.7356}, 'turkey','墨西哥瓦哈卡',{ A:['turkey'], B:['史前至夏商周'],C:['宗教信仰'],D:['其他'],E:['北美洲'] }
,{  title_cn: '描述',title_en: 'Description',
    description_cn: '火雞是北美洲的原生物種。在普遍的認識中，位於美國西南部和墨西哥的印第安人可能飼養火雞用於部落的祭祀儀式。有的歷史學家認為，火雞的馴化可以追溯至5000年前墨西哥的瓦哈卡。'
    ,description_en:'Turkeys are a native species of North America. It is widely recognized that Indians in the southwestern United States and Mexico may have kept turkeys for tribal ceremonies. Some historians believe that the domestication of turkeys can be dated to Oaxaca, Mexico, 5,000 years ago.'
    ,reference:'1. 馬克·艾弗里著，徐凱傑、張建軍譯，《鳥類發現之旅》（北京：中國攝影出版社，2017），頁146。<br>&emsp;&emsp;&emsp;2. 郭郛、李約瑟、成慶泰，《中國古代動物學史》（北京：科學出版社，1999），頁457。'
    ,imag:''
    ,referenceUrl:''
 });
			
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


}

//宋
{

 }

//元
{


}

//明
{ markers.turkey2 = createMarker({ lat:19.0515,lng:256.3241}, 'turkey','墨西哥曼薩尼約',{ A:['turkey'], B:['明'],C:['飲食'],D:['其他'],E:['北美洲'] },
    {title_cn: '描述',title_en: 'Description'  
     ,description_cn:'十五世紀末期至十六世紀中期，隨著歐洲人通過遠洋航行發現了新大陸，大量殖民者進入了美洲。西班牙商人將美洲的火雞作為肉食販賣至歐洲，運輸火雞的海上路線經過印度和土耳其。因此，英國人以為火雞原產於土耳其，而法國人以為火雞原產於印度，這就是英語和法語中｢turkey｣和｢d’Inde｣兩個詞語的來源。'  
     ,description_en:'During the period from the late fifteenth century to the mid-sixteenth century, a large number of colonists entered the Americas with the discovery of the New World by Europeans through ocean voyages. Spanish merchants traded turkeys from the Americas to Europe as meat, and the maritime route for transporting turkeys passed through India and Turkey. As a result, the English believed that turkeys originated in Turkey, while the French believed that turkeys originated in India, which is the origin of the words "turkey" and "d\'Inde" in English and French.'
    ,reference:'1. Mark Forsyth, "The Turkey\'s Turkey Connection", The New York Times (27 November 2013).'
     ,image:''
     ,referenceUrl:''
    });
    //印度孟買，土耳其伊斯坦布爾，法國巴黎，英國倫敦	-lat:19.0698193,lng:72.8367-lat:41.0370912,lng:28.9561-lat:48.8536057,lng:2.3105-lat:51.5110446,lng:-0.1270
 
    
	
}

//清
{	markers.turkey3 = createMarker({ lat:-27.4741,lng:152.9980}, 'turkey','澳洲布里斯本',{ A:['turkey'], B:['清'],C:['飲食'],D:['海上絲綢之路'],E:['大洋洲']},
    {title_cn: '描述',title_en: 'Description'  
     ,description_cn:'隨著英國的全球殖民，火雞在大洋洲開始大規模養殖。道光時期，英國人又將澳洲和新幾內亞的火雞帶入了中國。許多中國人在浙江舟山開始了火雞養殖。這些火雞主要販賣給上海的西餐廳。'  
     ,description_en:'With the British global colonization, turkeys were raised on a large scale in Oceania. During the Daoguang 道光 period, the British brought turkeys from Australia and New Guinea to China. Many Chinese started turkey farming in Zhoushan 舟山, Zhejiang Province 浙江省. These turkeys were mainly sold to Western restaurants in Shanghai 上海.'
     ,reference:'1. 徐珂，《清稗類鈔·第十二冊》（北京：中華書局，2010），頁5578。'
     ,image:''
     ,referenceUrl:''});
//新幾內亞，浙江舟山，上海	-lat:-6.9607901,lng:143.5580-lat:29.9851304,lng:122.2120-lat:31.2286097,lng:121.4749

 }
        

// 获取时间轴元素和标记
var timeline = document.getElementById('timeline');
var slider = document.getElementById('slider');
var turkeys = [
 'turkey1', 'turkey2', 'turkey3',  
];

for (var i = 0; i < turkeys.length; i++) {
 window[turkeys[i]] = markers[turkeys[i]];
}



var newCoords_turkey2_1= {lat:19.0698,lng:72.8367};
var newCoords_turkey2_2= {lat:41.0370,lng:28.9561};
var newCoords_turkey2_3= {lat:48.8536,lng:2.3105};
var newCoords_turkey2_4= {lat:51.5110,lng:-0.1270};

var newCoords_turkey3_1= {lat:-6.9607,lng:143.5580};
var newCoords_turkey3_2= {lat:29.9851,lng:122.2120};
var newCoords_turkey3_3= {lat:31.2286,lng:121.4749};
var taipingyang={lng:2.2041394,lng:102.2212117}
function getInitialCoords(turkey) {
 const position = turkey.getPosition();
 return {
     lat: position.lat(),
     lng: position.lng()
 };
}



var initialCoords_turkey2 = getInitialCoords(turkey2);
var initialCoords_turkey3 = getInitialCoords(turkey3);





// 添加滑块值变化的事件监听器
slider.addEventListener('input', function() {
    
   // handleToggleMarkers(currentValue)
   
    //史前之前
    if (currentValue<=0)
    {
        
        
        markers.turkey2.setPosition(initialCoords_turkey2);        
        markers.turkey3.setPosition(initialCoords_turkey3);        
     
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
    if (currentValue >= 6000 && currentValue <7000) {
   
         
    
       
    
    }
   //明
    if(currentValue >=7000 && currentValue <8000){
        
        
        var points_2 = [initialCoords_turkey2, maliujia,newCoords_turkey2_1, newCoords_turkey2_2,newCoords_turkey2_3,newCoords_turkey2_4,newCoords_turkey2_4];
        

    // 计算当前阶段的目标点的索引
       
        
        var targetIndex_2 = Math.floor((currentValue - 7000) / (1000 / (points_2.length-1)));
       

    // 计算插值百分比
        
       
        var percentage_2 = (currentValue - 7000) % (1000 / (points_2.length-1)) / (1000 / (points_2.length-1));
        

        
        
        percentage_2 = Math.min(1, Math.max(0, percentage_2));
       


    // 计算插值的新位置
        
        

        var latDiff = points_2[targetIndex_2 + 1].lat - points_2[targetIndex_2].lat;
        var lngDiff = points_2[targetIndex_2 + 1].lng - points_2[targetIndex_2].lng;
        var interpolatedLat_2 = points_2[targetIndex_2].lat + latDiff * percentage_2
        var interpolatedLng_2 = points_2[targetIndex_2].lng + lngDiff * percentage_2

        
        

        
       
        turkey2.setPosition({ lat: interpolatedLat_2, lng: interpolatedLng_2 });     
        
    }

    //清
    if(currentValue >=8000 && currentValue <=9000){
        
          
        var points_3 = [initialCoords_turkey3,  newCoords_turkey3_1,newCoords_turkey3_2,newCoords_turkey3_3,newCoords_turkey3_3];
        

    // 计算当前阶段的目标点的索引
       
        
        var targetIndex_3 = Math.floor((currentValue - 8000) / (1000 / (points_3.length-1)));
       

    // 计算插值百分比
        
       
        var percentage_3 = (currentValue - 8000) % (1000 / (points_3.length-1)) / (1000 / (points_3.length-1));
        

        
        
        percentage_3 = Math.min(1, Math.max(0, percentage_3));
       


    // 计算插值的新位置
        
        

        var latDiff = points_3[targetIndex_3 + 1].lat - points_3[targetIndex_3].lat;
        var lngDiff = points_3[targetIndex_3 + 1].lng - points_3[targetIndex_3].lng;
        var interpolatedLat_3 = points_3[targetIndex_3].lat + latDiff * percentage_3
        var interpolatedLng_3 = points_3[targetIndex_3].lng + lngDiff * percentage_3

        
        

        
       
        turkey3.setPosition({ lat: interpolatedLat_3, lng: interpolatedLng_3 });     
        
   }


});




