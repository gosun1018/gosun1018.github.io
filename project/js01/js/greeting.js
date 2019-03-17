// 이름묻기
// 이름 로컬스토리지에 저장하기
// 폼 submit막기
// 인풋 가리기
// 이름 불러오기
// 안녕 누구야

// el
const elFormName = document.querySelector('.ask_name'),
			elInpName = elFormName.querySelector('input'),
			elGreeting = document.querySelector('.greeting'),
			elBtnChange = document.querySelector('.btn_change');

const showClass = 'showing',
			hideClass = 'hide_class',
			lsCurrentUser = 'userName';

function showEl(el){
	el.classList.add(showClass);
	el.classList.remove(hideClass);
}
function hideEl(el){
	el.classList.add(hideClass);
	el.classList.remove(showClass);
}
function greeting(txt){
	elGreeting.innerText = `안녕하세요 ${txt}님`;
}

function saveUserName(event){
	event.preventDefault();
	const inpValue = elInpName.value;
	greeting(inpValue);
	localStorage.setItem(lsCurrentUser,inpValue);
	showEl(elGreeting);
	hideEl(elFormName);
	elInpName.value = '';
	showEl(elBtnChange);
}

function greetingUser(){
	const lsUserName = localStorage.getItem(lsCurrentUser);
	if(lsUserName === null){
			showEl(elFormName);
			hideEl(elGreeting);
			hideEl(elBtnChange);
			elFormName.addEventListener("submit",saveUserName);
		}else{
			showEl(elGreeting);
			hideEl(elFormName);
			showEl(elBtnChange);
			greeting(lsUserName);
		}
	
}
function changeName(){
	localStorage.clear(lsCurrentUser);
	showEl(elFormName);
	hideEl(elGreeting);
	hideEl(elBtnChange);
}

function btnClickEvent(){
	elBtnChange.addEventListener('click',changeName);
	
}

greetingUser();
btnClickEvent();