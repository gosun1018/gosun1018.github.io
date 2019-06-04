var elCommentTextarea = document.getElementById('commentWrite')
var clHasTxt = 'has_txt'

function checkTextarea(){
    var checkHasCl = elCommentTextarea.classList.contains(clHasTxt);
    var textareaValue = elCommentTextarea.value

    if (!checkHasCl && textareaValue) {
        elCommentTextarea.classList.add(clHasTxt);
    }else if (checkHasCl && !textareaValue){
        elCommentTextarea.classList.remove(clHasTxt);
    }
}

if(elCommentTextarea){
    elCommentTextarea.addEventListener('keyup',checkTextarea);
}