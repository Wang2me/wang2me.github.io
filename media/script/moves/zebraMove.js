
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


}

//宋
{

 }

//元
{


}

//明
{
	markers.zebra1 = createMarker({ lat:1.1116,lng:44.0298}, 'zebra','索馬里布拉瓦',{ A:['zebra'], B:['明'],C:['朝貢'],D:['海上絲綢之路'],E:['非洲']},
    {title_cn: '描述',title_en: 'Description'  
     ,description_cn:'斑馬，在明朝時被稱為｢福鹿｣、｢福祿｣或｢花福祿｣。在明朝的歷史記錄中，斑馬是不剌哇（如今索馬里的巴拉韋）的特產之一，該國曾數次向明朝進貢這種動物。'  
     ,description_en:'In the historical records of the Ming Dynasty 明朝, the zebra was one of the specialties of Barawa in Somali. The country sent zebras as tribute to the Ming Dynasty several times.'
     ,reference:'1. 張廷玉等，《明史·列傳第二百十四》（北京：中華書局，1997），頁8449。'
     ,image:'media/OneDrive_1_2024-1-8/396. (Ming Dynasty, Zebra in Yiyu Tuzhi, housed in Cambridge University Library).png'
     ,image_content_cn:'明，《異域圖志》福鹿圖，劍橋大學圖書館藏'
    ,image_content_en:'Ming Dynasty, Zebra in Yiyu Tuzhi, housed in Cambridge University Library'
   ,referenceUrl:''});	

     markers.zebra2 = createMarker({ lat:27.1376,lng:57.0724 }, 'zebra','伊朗米納卜',{ A:['zebra'],B:['明'],C:['朝貢'],D:['海上絲綢之路'],E:['西亞']},
     {title_cn: '描述',title_en: 'Description'  
      ,description_cn:'忽魯謨斯，即如今伊朗米納卜，地處霍爾木茲海峽，是進入波斯灣的必經之路。鄭和的船隊曾多次到達此處。1414年，忽魯謨斯國王跟隨鄭和的船隊返回北京，向永樂皇帝進貢馬匹。此外，獅子、長頸鹿、斑馬、鴕鳥、羚羊也是忽魯謨斯經常攜帶的貢品。'  
      ,description_en:'Hormuz, the present-day Minab in Iran, was located on the essential route into the Persian Gulf. Zheng He 鄭和 visited this place on several occasions. In 1414, the King of Hormuz visited Beijing 北京 with Zheng He and offered horses to Yongle Emperor 永樂皇帝 as tribute. In addition, lions, giraffes, zebras, ostriches, and oryxes were often the tributes from Hormuz.'
       ,reference:'1. 張廷玉等，《明史·列傳第二百十四》（北京：中華書局，1997），頁8452。<br>&emsp;&emsp;&emsp;2. 馬歡，《瀛涯勝覽》（北京：中華書局據寶顏堂秘笈本影印，1985），頁85-86。'
      ,image:''
      ,referenceUrl:''});
      
  markers.zebra3 = createMarker({ lat:12.8208,lng:45.0173},'zebra','也門亞丁',{ A:['zebra'],B:['明'],C:['朝貢'],D:['海上絲綢之路'],E:['西亞'] },
     {title_cn: '描述',title_en: 'Description'  
      ,description_cn:'亞丁在明代被稱為阿丹。據史書記載，阿丹國王十分崇敬中國，用大量珍寶與鄭和進行貿易。鄭和船隊從阿丹帶回了長頸鹿、獅子、豹、花貓、斑馬、鴕鳥等動物。'  
      ,description_en:'The king of Aden greatly respected the Ming Dynasty 明朝 and traded with Zheng He 鄭和 for a large number of treasures. Zheng He\'s fleet brought back giraffes, lions, leopards, spotted cats, zebras,  ostriches and other animals from Aden.'
       ,reference:'1. 馬歡，《瀛涯勝覽》（北京：中華書局據寶顏堂秘笈本影印，1985），頁71。'
       ,image:''
      ,referenceUrl:''});
}

//清
{

 }
        

// 获取时间轴元素和标记
var timeline = document.getElementById('timeline');
var slider = document.getElementById('slider');
var zebras = [
 'zebra1','zebra2','zebra3'
];

for (var i = 0; i < zebras.length; i++) {
 window[zebras[i]] = markers[zebras[i]];
}


var newCoords_zebra1_1=RandomCoords(beijing);
var newCoords_zebra2_1=RandomCoords(beijing);
var newCoords_zebra3_1=RandomCoords(beijing);



function getInitialCoords(zebra) {
 const position = zebra.getPosition();
 return {
     lat: position.lat(),
     lng: position.lng()
 };
}



var initialCoords_zebra1 = getInitialCoords(zebra1);
var initialCoords_zebra2 = getInitialCoords(zebra2);
var initialCoords_zebra3 = getInitialCoords(zebra3);





// 添加滑块值变化的事件监听器
slider.addEventListener('input', function() {
    
   // handleToggleMarkers(currentValue)
   
    //史前之前
    if (currentValue<=0)
    {
        
        
        
        markers.zebra1.setPosition(initialCoords_zebra1);        
        markers.zebra2.setPosition(initialCoords_zebra2);        
        markers.zebra3.setPosition(initialCoords_zebra3);        
     
    }
    //史前
    if(currentValue>0&&currentValue<1000)
    {
        
     
    }
    //秦汉
    if (currentValue >= 1000 && currentValue < 2000) {
        
        

    }
    //三国
    if (currentValue >= 2000 && currentValue <1000) {
       
       
    }
    //隋
    if(currentValue>=1000&&currentValue<4000){
        
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
        
        
        var points_1 = [initialCoords_zebra1,  guli,xilan,maliujia,taihai,zhangjiagang,newCoords_zebra1_1, newCoords_zebra1_1];
        var points_2 = [initialCoords_zebra2,  guli,palk,maliujia,taihai,zhangjiagang,zhangjiagang,newCoords_zebra2_1, newCoords_zebra2_1];
        var points_3 = [initialCoords_zebra3,  guli,guli,xilan,maliujia,taihai,taihai,zhangjiagang,newCoords_zebra3_1, newCoords_zebra3_1];


    // 计算当前阶段的目标点的索引
       
        
        var targetIndex_1 = Math.floor((currentValue - 7000) / (1000 / (points_1.length-1)));
        var targetIndex_2 = Math.floor((currentValue - 7000) / (1000 / (points_2.length-1)));
        var targetIndex_3 = Math.floor((currentValue - 7000) / (1000 / (points_3.length-1)));


    // 计算插值百分比
        
       
        var percentage_1 = (currentValue - 7000) % (1000 / (points_1.length-1)) / (1000 / (points_1.length-1));
        var percentage_2 = (currentValue - 7000) % (1000 / (points_2.length-1)) / (1000 / (points_2.length-1));
        var percentage_3 = (currentValue - 7000) % (1000 / (points_3.length-1)) / (1000 / (points_3.length-1));


        
        
        percentage_1 = Math.min(1, Math.max(0, percentage_1));
        percentage_2 = Math.min(1, Math.max(0, percentage_2));
        percentage_3 = Math.min(1, Math.max(0, percentage_3));



    // 计算插值的新位置
        
        

        var latDiff = points_1[targetIndex_1 + 1].lat - points_1[targetIndex_1].lat;
        var lngDiff = points_1[targetIndex_1 + 1].lng - points_1[targetIndex_1].lng;
        var interpolatedLat_1 = points_1[targetIndex_1].lat + latDiff * percentage_1
        var interpolatedLng_1 = points_1[targetIndex_1].lng + lngDiff * percentage_1

        var latDiff = points_2[targetIndex_2 + 1].lat - points_2[targetIndex_2].lat;
        var lngDiff = points_2[targetIndex_2 + 1].lng - points_2[targetIndex_2].lng;
        var interpolatedLat_2 = points_2[targetIndex_2].lat + latDiff * percentage_2
        var interpolatedLng_2 = points_2[targetIndex_2].lng + lngDiff * percentage_2

        var latDiff = points_3[targetIndex_3 + 1].lat - points_3[targetIndex_3].lat;
        var lngDiff = points_3[targetIndex_3 + 1].lng - points_3[targetIndex_3].lng;
        var interpolatedLat_3 = points_3[targetIndex_3].lat + latDiff * percentage_3
        var interpolatedLng_3 = points_3[targetIndex_3].lng + lngDiff * percentage_3
    
        

        
       
        zebra1.setPosition({ lat: interpolatedLat_1, lng: interpolatedLng_1 });     
        zebra2.setPosition({ lat: interpolatedLat_2, lng: interpolatedLng_2 });
        zebra3.setPosition({ lat: interpolatedLat_3, lng: interpolatedLng_3 });
       
    }

    //清
    if(currentValue >=8000 && currentValue <=9000){
        
        
        
   }


});




