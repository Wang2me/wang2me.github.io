// buttonContainer.addEventListener('click', function(event) {
//     if (event.target.classList.contains('timeline-button')) {
//         var buttonValue = event.target.getAttribute('data-value');
//         slider.value = buttonValue;
//         // 触发滑块的input事件，手动更新标记的位置
//         var inputEvent = new Event('input');
//         slider.dispatchEvent(inputEvent);
//         filterMarkers();
//     }

// });
// buttonContainer.addEventListener('click', function(event) {
//     if (event.target.classList.contains('timeline-button')) {
//         var buttonValue = event.target.getAttribute('data-value');
        
//         // 清除之前选择的复选框
//         $('.category-checkbox[data-category="B"]').prop('checked', false);
        
//         // 根据按钮值选择对应的复选框并设置为选中状态
//         if (buttonValue === '8000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"]').prop('checked', true);
//         }
//         if (buttonValue === '7000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"]').prop('checked', true);
//         }
//         if (buttonValue === '6000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"]').prop('checked', true);
//         }
//         if (buttonValue === '5000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"]').prop('checked', true);
//         }
//         if (buttonValue === '4000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"]').prop('checked', true);
//         }
//         if (buttonValue === '3000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"],input[value="宋"]').prop('checked', true);
//         }        
//         if (buttonValue === '2000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"],input[value="宋"],input[value="元"]').prop('checked', true);
//         }
//         if (buttonValue === '1000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"],input[value="宋"],input[value="元"],input[value="明"]').prop('checked', true);
//         }
//         if (buttonValue === '0') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"],input[value="宋"],input[value="元"],input[value="明"],input[value="清"]').prop('checked', true);
//         }
        
//         // 触发change事件，更新地图标记
//         $('.category-checkbox').trigger('change');
//     }
// });
function handleToggleMarkers(currentValue) {
    const lionMarkers = [lion1, lion2, lion3, lion4, lion5, lion6, lion7, lion8, lion9, lion10, 
        lion11, lion12, lion13, lion14, lion15, lion16, lion17, lion18, lion19, lion20, lion21, 
        lion22, lion23, lion24, lion25, lion26, lion27, lion28, lion29, lion30, lion31, lion32, 
        lion33, lion34,lion35,lion36,lion37];
    const camelMarkers = [camel1, camel2, camel3,camel4, camel5 , camel8, camel9, camel6,camel7,camel10, 
        camel11, camel12, camel13, camel14, camel15, camel16, camel17, camel18, camel19, camel20, 
        camel21, camel22, camel23, camel24, camel25, camel26, camel27, camel28, camel29,camel30, 
        camel31, camel32, camel33, camel34, camel35, camel36, camel37, camel38, camel39, camel40, 
        camel41, camel42, camel43, camel44, camel45, camel46, camel47, camel48, camel49, camel50, 
        camel51, camel52, camel53, camel54, camel55, camel56, camel57, camel58, camel59, camel60, 
        camel61, camel62, camel63, camel64, camel65, camel66, camel67, camel68];
    const horseMarkers=[horse1, horse2, horse3, horse4, horse5, horse6,horse7, horse8, horse9, horse10, 
            horse11, horse12, horse13, horse14, horse15, horse16, horse17, horse18, horse19, horse20,
            horse21, horse22, horse23, horse24, horse25, horse26, horse27, horse28, horse29, horse30,
            horse31, horse32, horse33, horse34,horse35, horse36, horse37, horse38, horse39, horse40, 
            horse41, horse42, horse43, horse44, horse45, horse46,horse47, horse48, horse49, horse50, 
            horse51, horse52, horse53, horse54, horse55,horse56, horse57, horse58, horse59, horse60, 
            horse61, horse62, horse63, horse64,horse65, horse66, horse67, horse68,horse69,horse70,
            horse71];
    const catMarkers = [
            cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, 
            cat10, cat11, cat12, cat13, cat14, cat15, cat16, cat17, cat18, cat19,
            cat20, cat21, cat22, cat23, cat24, cat25, cat26, cat27, cat28,cat29, 
            cat30, cat31, cat32, cat33, cat34, cat35, cat36, cat37, cat38, 
];    

const dogMarkers = [
    dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9, 
    dog10,dog11, dog12, dog13, dog14, dog15, dog16, dog17, dog18, dog19,
    dog20, dog21, dog22, dog23, dog24, dog25, dog26, dog27, dog28,dog29, 
    dog30, dog31, dog32, dog33, dog34, dog35, dog36, dog37, dog38, dog39, 
    dog40, dog41, dog42, dog43, dog44, dog45, dog46,dog47, dog48, dog49, 
    dog50, dog51, dog52, dog53, 
   ];
const rabbitMarkers = [
    rabbit1, rabbit2, rabbit3];

const yakMarkers = [
    yak1, yak2, yak3, yak4, yak5, yak6, yak7, yak8 ]; 
    
const leopardMarkers = [
    leopard1, leopard2, leopard3, leopard4, leopard5, leopard6, leopard7, leopard8, leopard9, 
    leopard10,leopard11, leopard12, leopard13, leopard14, leopard15
];
const cheetahMarkers =[ cheetah1, cheetah2, cheetah3, cheetah4, cheetah5, cheetah6, cheetah7, cheetah8, cheetah9, 
cheetah10,cheetah11, cheetah12];
const elephantMarkers = [elephant1, elephant2, elephant3,elephant4, elephant5 , elephant8, elephant9, elephant6,elephant7,elephant10, 
    elephant11, elephant12, elephant13, elephant14, elephant15, elephant16, elephant17, elephant18, elephant19, elephant20, 
    elephant21, elephant22, elephant23, elephant24, elephant25, elephant26, elephant27, elephant28, elephant29,elephant30, 
    elephant31, elephant32, elephant33, elephant34, elephant35, elephant36, elephant37, elephant38, elephant39, elephant40, 
    elephant41, elephant42, elephant43, elephant44, elephant45, elephant46, elephant47, elephant48, elephant49, elephant50, 
    elephant51, elephant52, elephant53, elephant54, elephant55, elephant56 ];

const rhinoMarkers = [
        rhino1, rhino2, rhino3, rhino4, rhino5, rhino6, rhino7, rhino8, rhino9, 
        rhino10, rhino11, rhino12, rhino13, rhino14, rhino15, rhino16, rhino17, rhino18, rhino19,
        rhino20, rhino21, rhino22, rhino23, rhino24, rhino25, rhino26, rhino27, rhino28,rhino29 
       
    ];
const giraffeMarkers = [
    giraffe1, giraffe2, giraffe3, giraffe4, giraffe5, giraffe6 ]; 

const zebraMarkers = [
       zebra1,zebra2,zebra3];
const antelopeMarkers = [
        antelope1, antelope2, antelope3, antelope4, antelope5, antelope6 ]; 
const ostrichMarkers = [
    ostrich1, ostrich2, ostrich3, ostrich4, ostrich5, ostrich6,ostrich7, ostrich8 ]; 
const hawkMarkers = [
    hawk1, hawk2, hawk3, hawk4, hawk5, hawk6, hawk7, hawk8, hawk9, 
    hawk10,hawk11, hawk12, hawk13, hawk14, hawk15
];
const parrotMarkers = [
    parrot1, parrot2, parrot3, parrot4, parrot5, parrot6, parrot7, parrot8, parrot9, 
    parrot10,parrot11, parrot12, parrot13, parrot14
];
const peacockMarkers =[ peacock1, peacock2, peacock3, peacock4, peacock5, peacock6, peacock7, peacock8, peacock9, 
    ];
const turkeyMarkers = [
    turkey1, turkey2, turkey3]; 
const muscovyMarkers = [
        muscovy1, muscovy2, muscovy3, muscovy4, muscovy5];
const swallowMarkers = [
    swallow1, swallow2, swallow3, swallow4, swallow5, swallow6,swallow7 ];
const sealMarkers = [
        seal1, seal2, seal3, seal4];       
const otterMarkers = [
        otter1, otter2];
const beaverMarkers = [
        beaver1, beaver2, beaver3, beaver4];    
const shellMarkers = [
    shell1, shell2, shell3, shell4, shell5, shell6, shell7, shell8, shell9, 
    shell10
]; 
const turtleMarkers = [
    turtle1, turtle2, turtle3, turtle4, turtle5, turtle6, turtle7, turtle8, turtle9
];  
const coralMarkers = [
    coral1, coral2, coral3, coral4, coral5, coral6, coral7, coral8 ];                          
  if (currentValue <= 0 ) {
        toggleMarkers(lionMarkers.slice(0,37), lionMarkers.slice(37));
        toggleMarkers(camelMarkers.slice(0,68), camelMarkers.slice(68));
        toggleMarkers(horseMarkers.slice(0,71), horseMarkers.slice(71));
        toggleMarkers(catMarkers.slice(0,38), catMarkers.slice(38));
        toggleMarkers(dogMarkers.slice(0,53), dogMarkers.slice(53));
        toggleMarkers(rabbitMarkers.slice(0,3), rabbitMarkers.slice(3));
        toggleMarkers(yakMarkers.slice(0,8), yakMarkers.slice(8));
        toggleMarkers(leopardMarkers.slice(0,15), leopardMarkers.slice(15));
        toggleMarkers(cheetahMarkers.slice(0,12), cheetahMarkers.slice(12));
        toggleMarkers(elephantMarkers.slice(0,56), elephantMarkers.slice(56));
        toggleMarkers(rhinoMarkers.slice(0,29), rhinoMarkers.slice(29));
        toggleMarkers(giraffeMarkers.slice(0,6), giraffeMarkers.slice(6));
        toggleMarkers(zebraMarkers.slice(0,3), zebraMarkers.slice(3));
        toggleMarkers(antelopeMarkers.slice(0,6), antelopeMarkers.slice(6));
        toggleMarkers(ostrichMarkers.slice(0,8), ostrichMarkers.slice(8));
        toggleMarkers(hawkMarkers.slice(0,15), hawkMarkers.slice(15));
        toggleMarkers(parrotMarkers.slice(0,14), parrotMarkers.slice(14));
        toggleMarkers(peacockMarkers.slice(0,9), peacockMarkers.slice(9));
        toggleMarkers(turkeyMarkers.slice(0,3), turkeyMarkers.slice(3));
        toggleMarkers(muscovyMarkers.slice(0,5), muscovyMarkers.slice(5));
        toggleMarkers(swallowMarkers.slice(0,7), swallowMarkers.slice(7));
        toggleMarkers(sealMarkers.slice(0,4), sealMarkers.slice(4));
        toggleMarkers(otterMarkers.slice(0,2), otterMarkers.slice(2));
        toggleMarkers(beaverMarkers.slice(0,4), beaverMarkers.slice(4));
        toggleMarkers(shellMarkers.slice(0,10), shellMarkers.slice(10));
        toggleMarkers(turtleMarkers.slice(0,9), turtleMarkers.slice(9));
        toggleMarkers(coralMarkers.slice(0,8), coralMarkers.slice(8));




} //史前
   if (currentValue > 0 && currentValue < 1000) {
        toggleMarkers(lionMarkers.slice(0, 3), lionMarkers.slice(3));
        toggleMarkers(camelMarkers.slice(0, 7), camelMarkers.slice(7));
        toggleMarkers(horseMarkers.slice(0, 5), horseMarkers.slice(5));
        toggleMarkers(catMarkers.slice(0,8), catMarkers.slice(8));
        toggleMarkers(dogMarkers.slice(0,8), dogMarkers.slice(8));
        toggleMarkers(rabbitMarkers.slice(0,1), rabbitMarkers.slice(1));
        toggleMarkers(yakMarkers.slice(0,1), yakMarkers.slice(1));
        toggleMarkers(leopardMarkers.slice(0,4), leopardMarkers.slice(4));
        toggleMarkers(cheetahMarkers.slice(0), cheetahMarkers.slice(0,12));
        toggleMarkers(elephantMarkers.slice(0,6), elephantMarkers.slice(6));
        toggleMarkers(rhinoMarkers.slice(0,5), rhinoMarkers.slice(5));
        toggleMarkers(giraffeMarkers.slice(0), giraffeMarkers.slice(0,6));
        toggleMarkers(zebraMarkers.slice(0), zebraMarkers.slice(0,3));
        toggleMarkers(antelopeMarkers.slice(0), antelopeMarkers.slice(0,6));
        toggleMarkers(ostrichMarkers.slice(0), ostrichMarkers.slice(0,8));
        toggleMarkers(hawkMarkers.slice(0,3), hawkMarkers.slice(3));
        toggleMarkers(parrotMarkers.slice(0), parrotMarkers.slice(0,14));
        toggleMarkers(peacockMarkers.slice(0,1), peacockMarkers.slice(1));
        toggleMarkers(turkeyMarkers.slice(0,1), turkeyMarkers.slice(1));
        toggleMarkers(muscovyMarkers.slice(0), muscovyMarkers.slice(0,5));
        toggleMarkers(swallowMarkers.slice(0), swallowMarkers.slice(0,7));
        toggleMarkers(sealMarkers.slice(0), sealMarkers.slice(0,4));
        toggleMarkers(otterMarkers.slice(0), otterMarkers.slice(0,2));
        toggleMarkers(beaverMarkers.slice(0), beaverMarkers.slice(0,4));
        toggleMarkers(shellMarkers.slice(0,1), shellMarkers.slice(1));
        toggleMarkers(turtleMarkers.slice(0,1), turtleMarkers.slice(1));
        toggleMarkers(coralMarkers.slice(0), coralMarkers.slice(0,8));


    //秦汉
    } if (currentValue >= 1000 && currentValue < 2000) {
        toggleMarkers(lionMarkers.slice(0, 6), lionMarkers.slice(6));
        toggleMarkers(camelMarkers.slice(0, 19), camelMarkers.slice(19));
        toggleMarkers(horseMarkers.slice(0, 23), horseMarkers.slice(23));
        toggleMarkers(catMarkers.slice(0,14), catMarkers.slice(14));
        toggleMarkers(dogMarkers.slice(0,14), dogMarkers.slice(14));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,2), yakMarkers.slice(2));
        toggleMarkers(leopardMarkers.slice(0,8), leopardMarkers.slice(8));
        toggleMarkers(cheetahMarkers.slice(0), cheetahMarkers.slice(0,12));
        toggleMarkers(elephantMarkers.slice(0,12), elephantMarkers.slice(12));
        toggleMarkers(rhinoMarkers.slice(0,10), rhinoMarkers.slice(10));
        toggleMarkers(giraffeMarkers.slice(0), giraffeMarkers.slice(0,6));
        toggleMarkers(zebraMarkers.slice(0), zebraMarkers.slice(0,3));
        toggleMarkers(antelopeMarkers.slice(0), antelopeMarkers.slice(0,6));
        toggleMarkers(ostrichMarkers.slice(0,2), ostrichMarkers.slice(2));
        toggleMarkers(hawkMarkers.slice(0,3), hawkMarkers.slice(3));
        toggleMarkers(parrotMarkers.slice(0,1), parrotMarkers.slice(1));
        toggleMarkers(peacockMarkers.slice(0,3), peacockMarkers.slice(3));
        toggleMarkers(turkeyMarkers.slice(0,1), turkeyMarkers.slice(1));
        toggleMarkers(muscovyMarkers.slice(0), muscovyMarkers.slice(0,5));
        toggleMarkers(swallowMarkers.slice(0), swallowMarkers.slice(0,7));
        toggleMarkers(sealMarkers.slice(0), sealMarkers.slice(0,4));
        toggleMarkers(otterMarkers.slice(0), otterMarkers.slice(0,2));
        toggleMarkers(beaverMarkers.slice(0), beaverMarkers.slice(0,4));
        toggleMarkers(shellMarkers.slice(0,3), shellMarkers.slice(3));
        toggleMarkers(turtleMarkers.slice(0,3), turtleMarkers.slice(3));
        toggleMarkers(coralMarkers.slice(0,1), coralMarkers.slice(1));


//三国
    } if (currentValue >= 2000 && currentValue < 3000) {
        toggleMarkers(lionMarkers.slice(0, 11), lionMarkers.slice(11));
        toggleMarkers(camelMarkers.slice(0, 29), camelMarkers.slice(29));
        toggleMarkers(horseMarkers.slice(0, 30), horseMarkers.slice(30));
        toggleMarkers(catMarkers.slice(0,15), catMarkers.slice(15));
        toggleMarkers(dogMarkers.slice(0,21), dogMarkers.slice(21));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,3), yakMarkers.slice(3));
        toggleMarkers(leopardMarkers.slice(0,8), leopardMarkers.slice(8));
        toggleMarkers(cheetahMarkers.slice(0), cheetahMarkers.slice(0,12));
        toggleMarkers(elephantMarkers.slice(0,25), elephantMarkers.slice(25));
        toggleMarkers(rhinoMarkers.slice(0,12), rhinoMarkers.slice(12));
        toggleMarkers(giraffeMarkers.slice(0), giraffeMarkers.slice(0,6));
        toggleMarkers(zebraMarkers.slice(0), zebraMarkers.slice(0,3));
        toggleMarkers(antelopeMarkers.slice(0), antelopeMarkers.slice(0,6));
        toggleMarkers(ostrichMarkers.slice(0,3), ostrichMarkers.slice(3));
        toggleMarkers(hawkMarkers.slice(0,4), hawkMarkers.slice(4));
        toggleMarkers(parrotMarkers.slice(0,3), parrotMarkers.slice(3));
        toggleMarkers(peacockMarkers.slice(0,5), peacockMarkers.slice(5));
        toggleMarkers(turkeyMarkers.slice(0,1), turkeyMarkers.slice(1));
        toggleMarkers(muscovyMarkers.slice(0), muscovyMarkers.slice(0,5));
        toggleMarkers(swallowMarkers.slice(0), swallowMarkers.slice(0,7));
        toggleMarkers(sealMarkers.slice(0), sealMarkers.slice(0,4));
        toggleMarkers(otterMarkers.slice(0), otterMarkers.slice(0,2));
        toggleMarkers(beaverMarkers.slice(0), beaverMarkers.slice(0,4));
        toggleMarkers(shellMarkers.slice(0,4), shellMarkers.slice(4));
        toggleMarkers(turtleMarkers.slice(0,3), turtleMarkers.slice(3));
        toggleMarkers(coralMarkers.slice(0,2), coralMarkers.slice(2));

//隋
    } if (currentValue >= 3000 && currentValue < 4000) {
        toggleMarkers(lionMarkers.slice(0, 11), lionMarkers.slice(11));
        toggleMarkers(camelMarkers.slice(0, 32), camelMarkers.slice(32));
        toggleMarkers(horseMarkers.slice(0, 32), horseMarkers.slice(32));
        toggleMarkers(catMarkers.slice(0,15), catMarkers.slice(15));
        toggleMarkers(dogMarkers.slice(0,22), dogMarkers.slice(22));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,4), yakMarkers.slice(4));
        toggleMarkers(leopardMarkers.slice(0,8), leopardMarkers.slice(8));
        toggleMarkers(cheetahMarkers.slice(0), cheetahMarkers.slice(0,12));
        toggleMarkers(elephantMarkers.slice(0,25), elephantMarkers.slice(25));
        toggleMarkers(rhinoMarkers.slice(0,12), rhinoMarkers.slice(12));
        toggleMarkers(giraffeMarkers.slice(0), giraffeMarkers.slice(0,6));
        toggleMarkers(zebraMarkers.slice(0), zebraMarkers.slice(0,3));
        toggleMarkers(antelopeMarkers.slice(0), antelopeMarkers.slice(0,6));
        toggleMarkers(ostrichMarkers.slice(0,3), ostrichMarkers.slice(3));
        toggleMarkers(hawkMarkers.slice(0,4), hawkMarkers.slice(4));
        toggleMarkers(parrotMarkers.slice(0,3), parrotMarkers.slice(3));
        toggleMarkers(peacockMarkers.slice(0,5), peacockMarkers.slice(5));
        toggleMarkers(turkeyMarkers.slice(0,1), turkeyMarkers.slice(1));
        toggleMarkers(muscovyMarkers.slice(0), muscovyMarkers.slice(0,5));
        toggleMarkers(swallowMarkers.slice(0), swallowMarkers.slice(0,7));
        toggleMarkers(sealMarkers.slice(0), sealMarkers.slice(0,4));
        toggleMarkers(otterMarkers.slice(0), otterMarkers.slice(0,2));
        toggleMarkers(beaverMarkers.slice(0), beaverMarkers.slice(0,4));
        toggleMarkers(shellMarkers.slice(0,4), shellMarkers.slice(4));
        toggleMarkers(turtleMarkers.slice(0,3), turtleMarkers.slice(3));
        toggleMarkers(coralMarkers.slice(0,2), coralMarkers.slice(2));

//唐
    } if (currentValue >= 4000 && currentValue < 5000) {
        toggleMarkers(lionMarkers.slice(0, 19), lionMarkers.slice(19));
        toggleMarkers(camelMarkers.slice(0, 41), camelMarkers.slice(41));
        toggleMarkers(horseMarkers.slice(0, 45), horseMarkers.slice(45));
        toggleMarkers(catMarkers.slice(0,18), catMarkers.slice(18));
        toggleMarkers(dogMarkers.slice(0,30), dogMarkers.slice(30));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,7), yakMarkers.slice(7));
        toggleMarkers(leopardMarkers.slice(0,10), leopardMarkers.slice(10));
        toggleMarkers(cheetahMarkers.slice(0,6), cheetahMarkers.slice(6));
        toggleMarkers(elephantMarkers.slice(0,32), elephantMarkers.slice(32));
        toggleMarkers(rhinoMarkers.slice(0,16), rhinoMarkers.slice(16));
        toggleMarkers(giraffeMarkers.slice(0), giraffeMarkers.slice(0,6));
        toggleMarkers(zebraMarkers.slice(0), zebraMarkers.slice(0,3));
        toggleMarkers(antelopeMarkers.slice(0,2), antelopeMarkers.slice(2));
        toggleMarkers(ostrichMarkers.slice(0,4), ostrichMarkers.slice(4));
        toggleMarkers(hawkMarkers.slice(0,6), hawkMarkers.slice(6));
        toggleMarkers(parrotMarkers.slice(0,8), parrotMarkers.slice(8));
        toggleMarkers(peacockMarkers.slice(0,7), peacockMarkers.slice(7));
        toggleMarkers(turkeyMarkers.slice(0,1), turkeyMarkers.slice(1));
        toggleMarkers(muscovyMarkers.slice(0), muscovyMarkers.slice(0,5));
        toggleMarkers(swallowMarkers.slice(0,1), swallowMarkers.slice(1));
        toggleMarkers(sealMarkers.slice(0,1), sealMarkers.slice(1));
        toggleMarkers(otterMarkers.slice(0), otterMarkers.slice(0,2));
        toggleMarkers(beaverMarkers.slice(0), beaverMarkers.slice(0,4));
        toggleMarkers(shellMarkers.slice(0,4), shellMarkers.slice(4));
        toggleMarkers(turtleMarkers.slice(0,4), turtleMarkers.slice(4));
        toggleMarkers(coralMarkers.slice(0,3), coralMarkers.slice(3));

//宋
    }if (currentValue >= 5000 && currentValue < 6000) {  
        toggleMarkers(lionMarkers.slice(0, 22), lionMarkers.slice(22));
        toggleMarkers(camelMarkers.slice(0, 51), camelMarkers.slice(51));
        toggleMarkers(horseMarkers.slice(0, 53), horseMarkers.slice(53));
        toggleMarkers(catMarkers.slice(0,25), catMarkers.slice(25));
        toggleMarkers(dogMarkers.slice(0,39), dogMarkers.slice(39));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,7), yakMarkers.slice(7));
        toggleMarkers(leopardMarkers.slice(0,10), leopardMarkers.slice(10));
        toggleMarkers(cheetahMarkers.slice(0,7), cheetahMarkers.slice(7));
        toggleMarkers(elephantMarkers.slice(0,37), elephantMarkers.slice(37));
        toggleMarkers(rhinoMarkers.slice(0,19), rhinoMarkers.slice(19));
        toggleMarkers(giraffeMarkers.slice(0), giraffeMarkers.slice(0,6));
        toggleMarkers(zebraMarkers.slice(0), zebraMarkers.slice(0,3));
        toggleMarkers(antelopeMarkers.slice(0,2), antelopeMarkers.slice(2));
        toggleMarkers(ostrichMarkers.slice(0,4), ostrichMarkers.slice(4));
        toggleMarkers(hawkMarkers.slice(0,9), hawkMarkers.slice(9));
        toggleMarkers(parrotMarkers.slice(0,9), parrotMarkers.slice(9));
        toggleMarkers(peacockMarkers.slice(0,7), peacockMarkers.slice(7));
        toggleMarkers(turkeyMarkers.slice(0,1), turkeyMarkers.slice(1));
        toggleMarkers(muscovyMarkers.slice(0,1), muscovyMarkers.slice(1));
        toggleMarkers(swallowMarkers.slice(0,1), swallowMarkers.slice(1));
        toggleMarkers(sealMarkers.slice(0,1), sealMarkers.slice(1));
        toggleMarkers(otterMarkers.slice(0), otterMarkers.slice(0,2));
        toggleMarkers(beaverMarkers.slice(0), beaverMarkers.slice(0,4));
        toggleMarkers(shellMarkers.slice(0,8), shellMarkers.slice(8));
        toggleMarkers(turtleMarkers.slice(0,5), turtleMarkers.slice(5));
        toggleMarkers(coralMarkers.slice(0,4), coralMarkers.slice(4));

 //元       
    }if (currentValue >= 6000 && currentValue < 7000) {
        toggleMarkers(lionMarkers.slice(0, 24), lionMarkers.slice(24));
        toggleMarkers(camelMarkers.slice(0, 53), camelMarkers.slice(53));
        toggleMarkers(horseMarkers.slice(0, 57), horseMarkers.slice(57));
        toggleMarkers(catMarkers.slice(0,28), catMarkers.slice(28));
        toggleMarkers(dogMarkers.slice(0,43), dogMarkers.slice(43));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,7), yakMarkers.slice(7));
        toggleMarkers(leopardMarkers.slice(0,12), leopardMarkers.slice(12));
        toggleMarkers(cheetahMarkers.slice(0,11), cheetahMarkers.slice(11));
        toggleMarkers(elephantMarkers.slice(0,43), elephantMarkers.slice(43));
        toggleMarkers(rhinoMarkers.slice(0,21), rhinoMarkers.slice(21));
        toggleMarkers(giraffeMarkers.slice(0), giraffeMarkers.slice(0,6));
        toggleMarkers(zebraMarkers.slice(0), zebraMarkers.slice(0,3));
        toggleMarkers(antelopeMarkers.slice(0,2), antelopeMarkers.slice(2));
        toggleMarkers(ostrichMarkers.slice(0,4), ostrichMarkers.slice(4));
        toggleMarkers(hawkMarkers.slice(0,12), hawkMarkers.slice(12));
        toggleMarkers(parrotMarkers.slice(0,11), parrotMarkers.slice(11));
        toggleMarkers(peacockMarkers.slice(0,7), peacockMarkers.slice(7));
        toggleMarkers(turkeyMarkers.slice(0,1), turkeyMarkers.slice(1));
        toggleMarkers(muscovyMarkers.slice(0,1), muscovyMarkers.slice(1));
        toggleMarkers(swallowMarkers.slice(0,2), swallowMarkers.slice(2));
        toggleMarkers(sealMarkers.slice(0,1), sealMarkers.slice(1));
        toggleMarkers(otterMarkers.slice(0), otterMarkers.slice(0,2));
        toggleMarkers(beaverMarkers.slice(0), beaverMarkers.slice(0,4));
        toggleMarkers(shellMarkers.slice(0,8), shellMarkers.slice(8));
        toggleMarkers(turtleMarkers.slice(0,5), turtleMarkers.slice(5));
        toggleMarkers(coralMarkers.slice(0,4), coralMarkers.slice(4));

//明
    }if (currentValue >= 7000 && currentValue < 8000) {
        toggleMarkers(lionMarkers.slice(0, 36), lionMarkers.slice(36));
        toggleMarkers(camelMarkers.slice(0, 63), camelMarkers.slice(63));
        toggleMarkers(horseMarkers.slice(0, 67), horseMarkers.slice(67));
        toggleMarkers(catMarkers.slice(0,32), catMarkers.slice(32));
        toggleMarkers(dogMarkers.slice(0,48), dogMarkers.slice(48));
        toggleMarkers(rabbitMarkers.slice(0,3), rabbitMarkers.slice(3));
        toggleMarkers(yakMarkers.slice(0,7), yakMarkers.slice(7));
        toggleMarkers(leopardMarkers.slice(0,15), leopardMarkers.slice(15));
        toggleMarkers(cheetahMarkers.slice(0,12), cheetahMarkers.slice(12));
        toggleMarkers(elephantMarkers.slice(0,52), elephantMarkers.slice(52));
        toggleMarkers(rhinoMarkers.slice(0,28), rhinoMarkers.slice(28));
        toggleMarkers(giraffeMarkers.slice(0,6), giraffeMarkers.slice(6));
        toggleMarkers(zebraMarkers.slice(0,3), zebraMarkers.slice(3));
        toggleMarkers(antelopeMarkers.slice(0,6), antelopeMarkers.slice(6));
        toggleMarkers(ostrichMarkers.slice(0,8), ostrichMarkers.slice(8));
        toggleMarkers(hawkMarkers.slice(0,13), hawkMarkers.slice(13));
        toggleMarkers(parrotMarkers.slice(0,14), parrotMarkers.slice(14));
        toggleMarkers(peacockMarkers.slice(0,8), peacockMarkers.slice(8));
        toggleMarkers(turkeyMarkers.slice(0,2), turkeyMarkers.slice(2));
        toggleMarkers(muscovyMarkers.slice(0,2), muscovyMarkers.slice(2));
        toggleMarkers(swallowMarkers.slice(0,5), swallowMarkers.slice(5));
        toggleMarkers(sealMarkers.slice(0,1), sealMarkers.slice(1));
        toggleMarkers(otterMarkers.slice(0), otterMarkers.slice(0,2));
        toggleMarkers(beaverMarkers.slice(0), beaverMarkers.slice(0,4));
        toggleMarkers(shellMarkers.slice(0,10), shellMarkers.slice(10));
        toggleMarkers(turtleMarkers.slice(0,9), turtleMarkers.slice(9));
        toggleMarkers(coralMarkers.slice(0,8), coralMarkers.slice(8));

    }//清
    if (currentValue >= 8000 && currentValue < 9000) {
        toggleMarkers(lionMarkers.slice(0, 37), lionMarkers.slice(37));
        toggleMarkers(camelMarkers.slice(0, 68), camelMarkers.slice(68));
        toggleMarkers(horseMarkers.slice(0, 71), horseMarkers.slice(71));
        toggleMarkers(catMarkers.slice(0,38), catMarkers.slice(38));
        toggleMarkers(dogMarkers.slice(0,53), dogMarkers.slice(53));
        toggleMarkers(rabbitMarkers.slice(0,3), rabbitMarkers.slice(3));
        toggleMarkers(yakMarkers.slice(0,8), yakMarkers.slice(8));
        toggleMarkers(leopardMarkers.slice(0,15), leopardMarkers.slice(15));
        toggleMarkers(cheetahMarkers.slice(0,12), cheetahMarkers.slice(12));
        toggleMarkers(elephantMarkers.slice(0,56), elephantMarkers.slice(56));
        toggleMarkers(rhinoMarkers.slice(0,29), rhinoMarkers.slice(29));
        toggleMarkers(giraffeMarkers.slice(0,6), giraffeMarkers.slice(6));
        toggleMarkers(zebraMarkers.slice(0,3), zebraMarkers.slice(3));
        toggleMarkers(antelopeMarkers.slice(0,6), antelopeMarkers.slice(6));
        toggleMarkers(ostrichMarkers.slice(0,8), ostrichMarkers.slice(8));
        toggleMarkers(hawkMarkers.slice(0,15), hawkMarkers.slice(15));
        toggleMarkers(parrotMarkers.slice(0,14), parrotMarkers.slice(14));
        toggleMarkers(peacockMarkers.slice(0,9), peacockMarkers.slice(9));
        toggleMarkers(turkeyMarkers.slice(0,3), turkeyMarkers.slice(3));
        toggleMarkers(muscovyMarkers.slice(0,5), muscovyMarkers.slice(5));
        toggleMarkers(swallowMarkers.slice(0,7), swallowMarkers.slice(7));
        toggleMarkers(sealMarkers.slice(0,4), sealMarkers.slice(4));
        toggleMarkers(otterMarkers.slice(0,2), otterMarkers.slice(2));
        toggleMarkers(beaverMarkers.slice(0,4), beaverMarkers.slice(4));
        toggleMarkers(shellMarkers.slice(0,10), shellMarkers.slice(10));
        toggleMarkers(turtleMarkers.slice(0,9), turtleMarkers.slice(9));
        toggleMarkers(coralMarkers.slice(0,8), coralMarkers.slice(8));

    }

    
    
}
                        
