// 从 localStorage 中获取语言设置，若没有则默认为中文
var currentLanguage = localStorage.getItem('language') || 'cn';
switchLanguageTo(currentLanguage);

// 给语言切换按钮添加点击事件处理函数
document.getElementById('languageSwitch').addEventListener('click', function() {
    // 切换语言
    if (currentLanguage === 'cn') {
        switchLanguageTo('en');
        switchToEnglish()
        currentLanguage = 'en';
    } else {
        switchLanguageTo('cn');
        switchToChinese()
        currentLanguage = 'cn';
    }
    // 将切换后的语言状态保存到 localStorage
    localStorage.setItem('language', currentLanguage);
});

// 切换至英文界面
function switchToEnglish() {

    window.location.href = '/EN.html'; // 执行页面跳转
    console.log('Switching to English');
    //switchLanguageTo('en');
}

// 切换回中文界面
function switchToChinese() {

    window.location.href = '/index.html'; // 执行页面跳转
    console.log('Switching to Chinese');
    //switchLanguageTo('cn');
}


// 切换语言的函数
function switchLanguageTo(language) {
    var markersToUpdate = [
                'lion1', 'lion2', 'lion3', 'lion4', 'lion5', 'lion6', 'lion7', 'lion8', 'lion9', 'lion10', 
                    'lion11', 'lion12', 'lion13', 'lion14', 'lion15', 'lion16', 'lion17', 'lion18', 'lion19', 'lion20', 'lion21', 
                    'lion22', 'lion23', 'lion24', 'lion25', 'lion26', 'lion27', 'lion28', 'lion29', 'lion30', 'lion31', 'lion32', 
                    'lion33', 'lion34','lion35','lion36','lion37',
                'camel1', 'camel2', 'camel3','camel4', 'camel5', 'camel8', 'camel9', 'camel6','camel7','camel10', 
                    'camel11', 'camel12', 'camel13', 'camel14', 'camel15', 'camel16', 'camel17', 'camel18', 'camel19', 'camel20', 
                    'camel21', 'camel22', 'camel23', 'camel24', 'camel25', 'camel26', 'camel27', 'camel28', 'camel29','camel30', 
                    'camel31', 'camel32', 'camel33', 'camel34','camel35', 'camel36', 'camel37', 'camel38', 'camel39', 'camel40', 
                    'camel41',   'camel42', 'camel43', 'camel44', 'camel45', 'camel46','camel47', 'camel48', 'camel49', 'camel50', 
                    'camel51', 'camel52', 'camel53',  'camel54', 'camel55','camel56', 'camel57', 'camel58', 'camel59', 'camel60', 
                    'camel61', 'camel62', 'camel63','camel64','camel65', 'camel66', 'camel67', 'camel68',
                'horse1', 'horse2', 'horse3', 'horse4', 'horse5', 'horse6','horse7', 'horse8', 'horse9', 'horse10', 
                        'horse11', 'horse12', 'horse13', 'horse14', 'horse15', 'horse16', 'horse17', 'horse18', 'horse19', 'horse20',
                        'horse21', 'horse22', 'horse23', 'horse24', 'horse25', 'horse26', 'horse27', 'horse28', 'horse29', 'horse30',
                        'horse31', 'horse32', 'horse33', 'horse34','horse35', 'horse36', 'horse37', 'horse38', 'horse39', 'horse40', 
                        'horse41', 'horse42', 'horse43', 'horse44', 'horse45', 'horse46','horse47', 'horse48', 'horse49', 'horse50', 
                        'horse51', 'horse52', 'horse53', 'horse54', 'horse55','horse56', 'horse57', 'horse58', 'horse59', 'horse60', 
                        'horse61', 'horse62', 'horse63', 'horse64','horse65', 'horse66', 'horse67', 'horse68','horse69','horse70',
                           'horse71',
                        'cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9', 
                        'cat10', 'cat11', 'cat12', 'cat13', 'cat14', 'cat15', 'cat16', 'cat17', 'cat18', 'cat19',
                        'cat20', 'cat21', 'cat22', 'cat23', 'cat24', 'cat25', 'cat26', 'cat27', 'cat28','cat29', 
                        'cat30', 'cat31', 'cat32', 'cat33', 'cat34', 'cat35', 'cat36', 'cat37', 'cat38', 
           
           
                'dog1', 'dog2', 'dog3', 'dog4', 'dog5', 'dog6', 'dog7', 'dog8', 'dog9', 
                'dog10','dog11', 'dog12', 'dog13', 'dog14', 'dog15', 'dog16', 'dog17', 'dog18', 'dog19',
                'dog20', 'dog21', 'dog22', 'dog23', 'dog24', 'dog25', 'dog26', 'dog27', 'dog28','dog29', 
                'dog30', 'dog31', 'dog32', 'dog33', 'dog34', 'dog35', 'dog36', 'dog37', 'dog38', 'dog39', 
                'dog40', 'dog41', 'dog42', 'dog43', 'dog44', 'dog45', 'dog46','dog47', 'dog48', 'dog49', 
                'dog50', 'dog51', 'dog52', 'dog53', 
             
          
                'rabbit1', 'rabbit2', 'rabbit3',
            
            
                'yak1', 'yak2', 'yak3', 'yak4', 'yak5', 'yak6', 'yak7', 'yak8',
                
            
                'leopard1', 'leopard2', 'leopard3', 'leopard4', 'leopard5', 'leopard6', 'leopard7', 'leopard8', 'leopard9', 
                'leopard10','leopard11', 'leopard12', 'leopard13', 'leopard14', 'leopard15',
            
             'cheetah1', 'cheetah2', 'cheetah3', 'cheetah4', 'cheetah5', 'cheetah6', 'cheetah7', 'cheetah8', 'cheetah9', 
            'cheetah10','cheetah11', 'cheetah12',

            'elephant1', 'elephant2', 'elephant3','elephant4', 'elephant5 ', 'elephant8', 'elephant9', 'elephant6','elephant7','elephant10', 
    'elephant11', 'elephant12', 'elephant13', 'elephant14', 'elephant15', 'elephant16', 'elephant17', 'elephant18', 'elephant19', 'elephant20', 
    'elephant21', 'elephant22', 'elephant23', 'elephant24', 'elephant25', 'elephant26', 'elephant27', 'elephant28', 'elephant29','elephant30', 
    'elephant31', 'elephant32', 'elephant33', 'elephant34', 'elephant35', 'elephant36', 'elephant37', 'elephant38', 'elephant39', 'elephant40', 
    'elephant41', 'elephant42', 'elephant43', 'elephant44', 'elephant45', 'elephant46', 'elephant47', 'elephant48', 'elephant49', 'elephant50', 
    'elephant51', 'elephant52', 'elephant53', 'elephant54', 'elephant55', 'elephant56',
    'rhino1', 'rhino2', 'rhino3', 'rhino4', 'rhino5', 'rhino6', 'rhino7', 'rhino8', 'rhino9', 
        'rhino10', 'rhino11', 'rhino12', 'rhino13', 'rhino14', 'rhino15', 'rhino16', 'rhino17', 'rhino18', 'rhino19',
        'rhino20', 'rhino21', 'rhino22', 'rhino23', 'rhino24', 'rhino25', 'rhino26', 'rhino27', 'rhino28','rhino29', 
        'giraffe1', 'giraffe2', 'giraffe3', 'giraffe4', 'giraffe5', 'giraffe6',
        'zebra1','zebra2','zebra3',
        'antelope1', 'antelope2', 'antelope3', 'antelope4', 'antelope5', 'antelope6',
        'ostrich1', 'ostrich2', 'ostrich3', 'ostrich4', 'ostrich5', 'ostrich6', 'ostrich7', 'ostrich8',
        'hawk1', 'hawk2', 'hawk3', 'hawk4', 'hawk5', 'hawk6', 'hawk7', 'hawk8', 'hawk9', 
        'hawk10','hawk11', 'hawk12', 'hawk13', 'hawk14', 'hawk15',
        'parrot1', 'parrot2', 'parrot3', 'parrot4', 'parrot5', 'parrot6', 'parrot7', 'parrot8', 'parrot9', 
        'parrot10','parrot11', 'parrot12', 'parrot13', 'parrot14',
        'peacock1', 'peacock2', 'peacock3', 'peacock4', 'peacock5', 'peacock6', 'peacock7', 'peacock8', 'peacock9', 
        'turkey1', 'turkey2', 'turkey3',
        'muscovy1', 'muscovy2', 'muscovy3', 'muscovy4', 'muscovy5',
        'swallow1', 'swallow2', 'swallow3', 'swallow4', 'swallow5', 'swallow6', 'swallow7',
        'seal1', 'seal2', 'seal3', 'seal4', 
        'otter1','otter2', 
        'beaver1', 'beaver2', 'beaver3', 'beaver4', 
        'shell1', 'shell2', 'shell3', 'shell4', 'shell5', 'shell6', 'shell7', 'shell8', 'shell9', 
        'shell10',
        'turtle1', 'turtle2', 'turtle3', 'turtle4', 'turtle5', 'turtle6', 'turtle7', 'turtle8', 'turtle9', 
        'coral1', 'coral2', 'coral3', 'coral4', 'coral5', 'coral6', 'coral7', 'coral8',
             // 其他标记的名称
            ];

    for (var i = 0; i < markersToUpdate.length; i++) {
        var markerName = markersToUpdate[i];
        if (markers[markerName] && markers[markerName].content) {
            markers[markerName].content.description = markers[markerName].content['description_' + language];
            markers[markerName].content.title = markers[markerName].content['title_' + language];
            markers[markerName].content.image_content = markers[markerName].content['image_content_' + language]; // 添加切换参考文献的语言
            
            // 可以在这里处理其他需要变更的属性...
        }
    }
    console.log('Switching language to: ' + language); // 输出将要切换到的语言
    let infowindows = {};

    for (let key in markers) {
      if (markers.hasOwnProperty(key)) {
        let marker = markers[key];
    
        marker.addListener('click', function() {
          console.log('点击了标记 ' + key);
    
          // 检查信息窗口的状态并执行相应操作
          if (infowindows[key] !== undefined && infowindows[key].getMap()) {
            console.log('关闭已存在的标记' + key + '的信息窗口');
            infowindows[key].close();
          } else {
            let content = '<div class="info-window" id="infoContainer">' +
                '<h1>' + marker.content.title + '</h1>' +
                '<p>' + marker.content.description + '</p>' +
                '<p class="info-reference">' + (language === 'cn' ? '参考：' : 'Reference: ') + marker.content.reference + '</p>' +
                //'<img class="info-image" src="' + marker.content.image + '" alt="">' +
                '<img class="info-image" src="' + marker.content.image + '" alt="" onclick="enlargeImage(this)">' + 
    (marker.content.image_content ? '<p class="info-reference">' + marker.content.image_content + '</p>' : '') + // Add conditional check
                '</div>';
    
            let infowindow = new google.maps.InfoWindow({
              content: content,
            });
            
            
            infowindow.open(map, marker);
            infowindows[key] = infowindow;
          }
        });
      }
    }
    
    

}
window.onload = function () {

    initMap();
       
    }

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
