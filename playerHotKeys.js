Lampa.Player.listener.follow('ready', onPlayerReady);
logEvent('loaded');



function onPlayerReady() {
	document.addEventListener("keydown", listenHotkeys);
	Lampa.Player.listener.follow('destroy', listenDestroy);
}

function listenDestroy() {
	document.removeEventListener("keydown", listenHotkeys);
	Lampa.Player.listener.remove('destroy', listenDestroy);	
}

function listenHotkeys(e) {
  //logEventParam('button pressed', e.keyCode);
  
  if (e.keyCode === backBtnCode) {
  	Lampa.PlayerPlaylist.next();
      e.preventDefault(); 
  } 
  
  let numberBtn=convertBtnKeyCodeToNumberButton(e.keyCode);
  if(numberBtn>=0){
	setVideoPositionBtn(numberBtn);
   }
}



// log module

function logEvent(eventName) {
     logEventParam(eventName, '');
}

function logEventParam(eventName, param) {
        console.log('TiViAl', 'PlayerHotkeys', eventName, param);       
}

function logMovie(movie) {
	this.eventParam('data', movie.data);
	this.eventParam('KpId', movie.kpid);
	this.eventParam('ImDbId', movie.imid);
}



// module BtnCode

const backBtnCode=8;
const upBtnCode=38;
const downBtnCode=40;
const zeroBtnCode=48;
const lastBtnCode=zeroBtnCode + 9;

function convertBtnKeyCodeToNumberButton(keyCode) {
    if (keyCode >= zeroBtnCode && keyCode<=lastBtnCode) {
	   return minusBtnKeyCodeToZeroBtnCode(keyCode);
  }else {
  	return -1;
  }
}

function minusBtnKeyCodeToZeroBtnCode(keyCode) {
        return keyCode-zeroBtnCode;
}



// module Player

function setVideoPositionBtn(numberButton) {
        setVideoPositionSec(getNewPosition(numberButton));
}

function getNewPosition(numberButton) {
        return getVideoDuration()*numberButton/10;
}

function getVideoDuration() {
        return Lampa.PlayerVideo.video().duration;
}

function setVideoPositionSec(seconds) {
        Lampa.PlayerVideo.to(seconds);
}

function openPlayListPanel(){    
	Lampa.PlayerPlaylist.show();
}