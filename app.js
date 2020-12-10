//тоглоомын бүх газарт ашиглагдах глобал хувьсагчдийг энд зарлана
//Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;
//аль тоглогч шоо шидэхийг энд хадгална
var activePlayer;
//хоёр тоглогчийн цуглуулсан оноонууд
var scores;
//Хоёр тоглогчийн цуглуулсан оноонууд
var roundScore;
//шооны зургийг үзүүлэх элементийг dom-с хайж олоод энд хадгалья
var diceDom =document.querySelector('.dice');

// тоглоомыг эхлүүлэх
initGame();

//тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
// тоглоом эхэллээ гэдэг төлөвт оруулна.
isNewGame = true;
// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэлээ
activePlayer = 0;
// Тоглогчдийн цуглуулсан оноог цуглуулах хувьсагч 
scores =[0, 0]
//Tоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах оноо
roundScore =0; 

//cssiig oorchlohdoo .style.display/// html rvv handaJ oorchlohdoo .innerHTML 

//Програм эхлэхэд бэлтгэе id r elementiig haihad .getElementById ashiglana//.querySelector iig class vyd
// window.document.querySelector('#score-0').textContent = 0;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Тоглогчдийн нэрийг буцааж гаргах
document.getElementById('name-0').textContent ='Player 1';
document.getElementById('name-1').textContent ='Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

diceDom.style.display ='none';
}

// Шоог шидэх эвент листенер
document.querySelector('.btn-roll').addEventListener('click', function(){ 
    if(isNewGame) {
    // 1-6 доторх санамсаргүй нэг тоог гаргаж авна
    var diceNumber = Math.floor(Math.random()*6)+1;
    
    //шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.style.display ='block';
   
    // буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.src = 'dice-'+ diceNumber +'.png'
    
    //Буусан тоо 1-ээс ялгаатай бол идэвхитэй Тоглогчийн ээлжийн оноог нэмэгдүүлнэ
    if(diceNumber !== 1){
        //1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмнэ
        roundScore=roundScore+diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт солиж өгнө.
        // энэ тоглогчийн ээлжиндээ цуглуулсан оноог 1 буувал 0 болгоно
        switchToNextPlayer();
    }
  } else {
      alert('Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү');
  }
    
});

// HOLD товчны эвент листенер
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isNewGame){
        //уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нэмж өгнө. if(activePlayer===0) = scores[activePlayer]
    // if(activePlayer===0){
    //     scores[0] = scores [0] + roundScore;
    // } else {
    //     scores[1] = scores [1] + roundScore;
    // }
    scores[activePlayer]=scores[activePlayer]+roundScore

    //Дэлгэц дээрх оноог нь өөрчилнө
    document.getElementById('score-'+activePlayer).textContent =scores[activePlayer];

    // Уг тоглогч хожсон эсэхийг шалгах
    if(scores[activePlayer] >= 10) {
        // тоглоомыг дууссан төлөвт оруулна
        isNewGame= false;
        //Та хожлоо. БАЯР ХҮРГЭЕ. Алив ахдаа дансаа. г нэрний оронд гаргана
        document.getElementById('name-' + activePlayer).textContent='Алив ахдаа дансаа.';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else{
        switchToNextPlayer();
    }
    } else{
        alert('Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү');  
    }
})

//Энэ функц нь тоглох ээлжийг дараачийн тоглогчруу шилжүүлдэг.
function switchToNextPlayer(){
   // энэ тоглогчийн ээлжиндээ цуглуулсан оноог 1 буувал 0 болгоно
   roundScore=0
   document.getElementById('current-' + activePlayer).textContent = 0 ;
   //тоглогчийн ээлжийг нөгөө тоглогчруу шилжүүлнэ
   // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болго
   // үгүй бол  идэвхтэй тоглогчийг 0 болго
   activePlayer === 0 ? (activePlayer =1) : (activePlayer=0);
        
   // Улаан цэгийг шилжүүлэх toggle ni baihgvi bol nemne hasna add+remove
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');
   //шоог түр алга болгоно 1 буувал
   diceDom.style.display ='none';
   // if(activePlayer ===0) {
   //     activePlayer=1;
   // } else {
   //     activePlayer=0;
   // }
}
// new game towch buyu Шинэ тоглоом эхлүүлэх товчны эвент листенер
document.querySelector('.btn-new').addEventListener('click', initGame);



// DRY dont repeat yourself dahin dahinbitgii yumiig dawtaj hiigeed bai!!!!!!