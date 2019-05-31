var elBtnArray = document.querySelector('.js-btn-array')
var elListArray = document.querySelector('.js-array-list')

var clOpen = 'open'

function setList(){
    var listHeight = elListArray.offsetHeight
    var listPosBottom = listHeight * -1
    elListArray.style.bottom = listPosBottom + 'px';
}

function openList(){
    elListArray.classList.add(clOpen);
}
function closeList(){
    elListArray.classList.remove(clOpen);
}

function listToggle(){
    var hasClOpen = elListArray.classList.contains(clOpen);
    if(hasClOpen){
        closeList();
    }else{
        openList();
    }
}

function btnArrayClick(){
    setList();
    elBtnArray.addEventListener('click',listToggle);
}

if(elBtnArray){
    btnArrayClick();
}

