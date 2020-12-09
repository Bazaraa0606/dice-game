// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэлээ
var activePlayer = 1;
// Тоглогчдийн цуглуулсан оноог цуглуулах хувьсагч 
var scores =[0, 0]
//Tоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах оноо
var roundScore =0; 

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice =Math.floor(Math.random()*6)+1;

/* <div class="player-score" id="score-0">43</div> */
// window.document.querySelector('#score-0').textContent = dice;
// window.document.querySelector('#score-1').textContent = dice;
// window.document.querySelector('#score-1').innerHTML = '<em>Yes!<em>';
//cssiig oorchlohdoo .style.display/// html rvv handaJ oorchlohdoo .innerHTML 

//Програм эхлэхэд бэлтгэе
window.document.querySelector('#score-0').textContent = 0;
window.document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display ='none';;
console.log('Шоо :' + dice);