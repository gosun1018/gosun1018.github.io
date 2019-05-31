// header
var elHeader01 = document.querySelector(".header01")
var clScrolldown = 'scroll_down'

var hasClScrolldown = elHeader01.classList.contains(clScrolldown)

function headerClose(){
    elHeader01.classList.add(clScrolldown);
}

function headerOpen(){
    elHeader01.classList.remove(clScrolldown);
}

function headerController(){
    var scrollHeight = window.pageYOffset;
    
    if(scrollHeight > 150 && !hasClScrolldown){
        headerClose();
    }else{
        headerOpen();
    } 
}

window.addEventListener('scroll',headerController);

// gnb_bottom
// 스크롤을 내린다
// 하단 gnb가 아래로 사라진다
// 스크롤을 올린다
// 하단 gnb가 위로 나타난다
// 질문 :: 스크롤 위아래 방향을 알아내는 방법

//var elGnbbottom = document.querySelector('.gnb_bottom')