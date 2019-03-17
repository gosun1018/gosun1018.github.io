// todolist
// todolist 작성
// 인풋 값 받기
// 인풋값 로컬스토리지에 저장
// todolist 나오게

// 버튼 누르면 투두리스트 지우기
// html요소지우기
// 로컬스토리지에 있는 데이터 지우기

// 1 todolist 형식 만들기 temp
// li button id blahblah
// 2 todolist array 만들기
// local storage 에는 텍스트형식만 저장할수 있다 JSON으로 데이터 형식을 바꿔주는 이유 !

// array.forEach(fucntion(){});
// .forEach :: array안에 있는 것 하나씩 function을 반복해서 실행 

//el
const elFormTodo = document.querySelector('.ask_todo'),
			elInpTodo = elFormTodo.querySelector('input'),
			elTodoList = document.querySelector('.list');

//class
const todoClass = 'todo',
			btnDelClass = 'del_todo',
			lsTodos = 'toDos';

let listTodos = [];

// delete
function deleteToDo(event){
	const thisBtn = event.target;
	const thisLi = thisBtn.parentNode;
	console.log(thisLi);
	elTodoList.removeChild(thisLi);
	const cleanToDos = listTodos.filter(function(toDo){
		return toDo.id !== parseInt(thisLi.id);
		
	});
	listTodos = cleanToDos
	saveTodos();
}

//
function saveTodos(){
	localStorage.setItem(lsTodos,JSON.stringify(listTodos));
}

function printTodo(txt){
	const liTodos = document.createElement('li');
	liTodos.classList.add(todoClass);
	const delBtn = document.createElement('button');
	delBtn.innerText = 'X';
	delBtn.classList.add(btnDelClass);
	delBtn.addEventListener('click',deleteToDo);
	const spanTxt = document.createElement('span');
	const newId = listTodos.length +1 ;
	
	liTodos.id = newId ;
	spanTxt.innerText = txt;
	liTodos.appendChild(delBtn);
	liTodos.appendChild(spanTxt);
	elTodoList.appendChild(liTodos);
	
	const toDoObj ={
		text: txt,
		id: newId,
	};
	listTodos.push(toDoObj) ;
	saveTodos();
}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = elInpTodo.value;
	printTodo(currentValue);
	elInpTodo.value = '';
}

function loadToDos(){
	const toDos = localStorage.getItem(lsTodos);
	if(toDos !== null){
		const parsedToDos = JSON.parse(toDos);
		parsedToDos.forEach(function(toDo){
			printTodo(toDo.text);
		});
	}
	
}


function setTodo(){
	loadToDos();
	elFormTodo.addEventListener('submit',handleSubmit)
}

setTodo();