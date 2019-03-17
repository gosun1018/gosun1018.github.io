// 시간불러오기
// 매초마다 업데이트 
const elClock = document.querySelector('.clock');


function getTime(){
	const currentTime = new Date();
	const currentHours = currentTime.getHours();
	const currentMinutes = currentTime.getMinutes();
	
	elClock.innerText = `${currentHours < 10 ? `0${currentHours}` : `${currentHours}`}:${currentMinutes < 10? `0${currentMinutes}` : `${currentMinutes}`}`;
	
}


function showClock(){
	getTime();
	setInterval(getTime,1000);
}

showClock();