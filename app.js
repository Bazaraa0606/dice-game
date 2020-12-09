// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэлээ
var activePlayer = 1;
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

document.querySelector('.btn-roll').addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random()*6)+1;
    diceDom.style.display ='block';
    diceDom.src = 'dice-'+ diceNumber +'.png'
});
