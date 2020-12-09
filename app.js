// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэлээ
var activePlayer = 0;
// Тоглогчдийн цуглуулсан оноог цуглуулах хувьсагч 
var scores =[0, 0]
//Tоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах оноо
var roundScore =0; 

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber =Math.floor(Math.random()*6)+1;

//cssiig oorchlohdoo .style.display/// html rvv handaJ oorchlohdoo .innerHTML 

//Програм эхлэхэд бэлтгэе id r elementiig haihad .getElementById ashiglana//.querySelector iig class vyd
// window.document.querySelector('#score-0').textContent = 0;
document.getElementById('score-0').textContent = '0';
window.document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
var diceDom =document.querySelector('.dice');
diceDom.style.display ='none';

// Шоог шидэх эвент листенер
document.querySelector('.btn-roll').addEventListener('click', function(){
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


});
