
//<br>&emsp;&emsp;&emsp;
//史前至夏商周
{
    markers.rabbit1 = createMarker({ lat:32.9867,lng:112.5245}, 'rabbit','河南南陽',{ A:['rabbit'], B:['史前至夏商周'],C:['飲食'],D:['其他'],E:['東亞'] }
,{  title_cn: '描述',title_en: 'Description',
    description_cn: '在中國境內有多種原生野兔分佈。中國古人很早就開始狩獵野兔以食用。在先秦的典籍《詩經》中就有相關例證，比如《兔置》一詩描繪的是武士狩獵野兔的場景，《瓠葉》中則有烹飪兔肉的有關詩句。'
    ,description_en:'In China, there are many kinds of native hares. Ancient Chinese people started hunting rabbits for food at a very early stage. There were poems about hunting rabbits and cooking rabbit meat in the Shijing 詩經 (Classic of Poetry), a pre-Qin 先秦 classical text.'
    ,reference:'1. 《毛詩正義·卷第一》，《十三經注疏·上冊》（北京：中華書局據清阮元校刻本影印，1979），頁281。<br>&emsp;&emsp;&emsp;2. 《毛詩正義·卷第十五》，《十三經注疏·上冊》（北京：中華書局據清阮元校刻本影印，1979），頁499。'
    ,imag:''
    ,referenceUrl:''
 });




}


 //秦漢
{
    markers.rabbit2 = createMarker({ lat:28.2170,lng:112.9561}, 'rabbit','湖南長沙',{ A:['rabbit'], B:['秦漢'],C:['宗教信仰'],D:['其他'],E:['東亞'] },
    {title_cn: '描述',title_en: 'Description'  
     ,description_cn:'中國古人認為，月亮上生活著白兔和蟾蜍。因此，玉兔（白兔）在中國文化中是月亮的象徵。例如在長沙馬王堆漢墓中出土的兩幅漢代T形帛畫中的兔子和蟾蜍形象，就是月亮的指代。'  
     ,description_en:'Ancient Chinese believed that white rabbits and toads were living on the moon. Therefore, the "white rabbit" is a symbol of the moon in Chinese culture. For example, the images of rabbits and toads in two T-shaped silk paintings of the Han Dynasty 漢朝 excavated from the Mawangdui Han Tombs 馬王堆漢墓 in Changsha 長沙 are representations of the moon.'
    ,reference:'1. 王傳明，〈淺談馬王堆漢墓T形帛畫的構圖及場景表現〉，《故宮博物院院刊》，總期204（2019年4月），頁85。<br>&emsp;&emsp;&emsp;2. T形帛畫，湖南博物館，de.hnmuseum.com/collection/collectionDetails.html?id=968149701662605315&type=index#。'
     ,image:''
     ,referenceUrl:''
    });
    //埃及盧克索	/@-/@25.6906282,32.6404
    
    
    


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
	markers.rabbit3 = createMarker({ lat:45.7534,lng:1.2754}, 'rabbit','法國索力尼亞克',{ A:['rabbit'], B:['明'],C:['飲食'],D:['海上絲綢之路'],E:['歐洲']},
    {title_cn: '描述',title_en: 'Description'  
     ,description_cn:'雖然中國有原生的野兔分佈，但家兔並不是由中國古人馴化的。現代的生物學證據表明，家兔是由地中海地區的穴兔馴化的。歷史學家普遍認為，法國教會的修道士們最早開始馴化兔子以供食用。至16世紀，歐洲的家兔馴化已經完成。當時的葡萄牙商人通過海路貿易將家兔走私至明朝的福建地區。'  
     ,description_en:'Although there are native distributions of hares in China, the domestic rabbit was not domesticated by the ancient Chinese. Modern biological evidence shows that the domestic rabbit was domesticated from the European rabbit in the Mediterranean. Historians generally agree that French monks first tamed rabbits for food. By the 16th century, the domestication of rabbits in Europe was accomplished. At that time, Portuguese merchants smuggled rabbits to the Fujian 福建 area of the Ming Dynasty 明朝 through the maritime trade.'
     ,reference:'1. 王娟，〈家兔馴化歷史的考證〉，《南方文物》，期4（2019年12月），頁175-179。<br>&emsp;&emsp;&emsp;2. 王娟，〈中國家兔起源考證〉，《中國農史》，期1（2023年1月），頁17-19。'
     ,image:''
     ,referenceUrl:''});	
}

//清
{

 }
        

// 获取时间轴元素和标记
var timeline = document.getElementById('timeline');
var slider = document.getElementById('slider');
var rabbits = [
 'rabbit1', 'rabbit2', 'rabbit3',  
];

for (var i = 0; i < rabbits.length; i++) {
 window[rabbits[i]] = markers[rabbits[i]];
}


var newCoords_rabbit3_1= {lat:38.7180,lng:-9.1388};
var newCoords_rabbit3_2= {lat:24.8678,lng:118.6760};


function getInitialCoords(rabbit) {
 const position = rabbit.getPosition();
 return {
     lat: position.lat(),
     lng: position.lng()
 };
}



var initialCoords_rabbit3 = getInitialCoords(rabbit3);





// 添加滑块值变化的事件监听器
slider.addEventListener('input', function() {
    
   // handleToggleMarkers(currentValue)
   
    //史前之前
    if (currentValue<=0)
    {
        
        
        
        markers.rabbit3.setPosition(initialCoords_rabbit3);        
     
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
        
        
        var points_3 = [initialCoords_rabbit3,  newCoords_rabbit3_1, maliujia,newCoords_rabbit3_2,newCoords_rabbit3_2];
        

    // 计算当前阶段的目标点的索引
       
        
        var targetIndex_3 = Math.floor((currentValue - 7000) / (1000 / (points_3.length-1)));
       

    // 计算插值百分比
        
       
        var percentage_3 = (currentValue - 7000) % (1000 / (points_3.length-1)) / (1000 / (points_3.length-1));
        

        
        
        percentage_3 = Math.min(1, Math.max(0, percentage_3));
       


    // 计算插值的新位置
        
        

        var latDiff = points_3[targetIndex_3 + 1].lat - points_3[targetIndex_3].lat;
        var lngDiff = points_3[targetIndex_3 + 1].lng - points_3[targetIndex_3].lng;
        var interpolatedLat_3 = points_3[targetIndex_3].lat + latDiff * percentage_3
        var interpolatedLng_3 = points_3[targetIndex_3].lng + lngDiff * percentage_3

        
        

        
       
        rabbit3.setPosition({ lat: interpolatedLat_3, lng: interpolatedLng_3 });     
        
    }

    //清
    if(currentValue >=8000 && currentValue <=9000){
        
        
        
   }


});




