(function () {

'use strict';

//const timeLineUrl='./add/timeCodes.json';//own server
const timeLineUrl='https://tivial19.github.io/lampa/add/timeCodes.json';//plugin
const backBtnCode=8;
const zeroBtnCode=48;
let zeroIndex=0;
let timeCodes=[];
initTimeLine();
Lampa.Player.listener.follow('ready', onPlayerReady);
Lampa.PlayerVideo.listener.follow('loadeddata', onPlayerVideoLoaded);
logEvent('loaded');

  
  
function initTimeLine() {
  for (let i = 0; i < 10; i++) {
      timeCodes.push({keyCode:i+zeroBtnCode});
  }
}

function onPlayerReady() {
  document.addEventListener("keydown", listenHotkeys);
  Lampa.Player.listener.follow('destroy', listenDestroy);
}

function listenDestroy() {
  document.removeEventListener("keydown", listenHotkeys);
  Lampa.Player.listener.remove('destroy', listenDestroy);	
}

 function onPlayerVideoLoaded(){
 	//logEvent(getPositionByPercent(100));
    setTimeCodesByPercents();
 	}
 
function setTimeCodesByPercents() {
  for (let i = 0; i < timeCodes.length; i++) {
    timeCodes[i].timeInSec=getPositionByPercent(i*10);
  }
}

function setTimeCodesBy10min() {
  for (let i = 0; i < timeCodes.length; i++) {
    timeCodes[i].timeInSec=i*10*60;
  }
}

function setTimeCodesByRemData(data) {
  for (let i = 0; i < timeCodes.length; i++) {
      timeCodes[i].timeInSec=getSecondsFromValue(data.timeLine[i]);
  }
}

function getSecondsFromValue(value) {
  if(value==null || typeof value !== 'number' || !isFinite(value) || isNaN(value) || value==0) return 0;
  else return getSecondsFromNumberInTimeFormat(value);
}

function getSecondsFromNumberInTimeFormat(number) {
    const arrayHMS = new Array(3).fill(0);
    let currN=number;
    for (let i = 0; i < 3; i++) {
        let n= Math.trunc(currN/100);
        arrayHMS[i]=currN-n*100;
        currN=n;
    }
    return arrayHMS[0] + arrayHMS[1]*60 + arrayHMS[2]*3600;
}



function listenHotkeys(e) {
  //logEventParam('button pressed', e.keyCode);
  
  if (e.keyCode === backBtnCode) {
    Lampa.PlayerPlaylist.next();
      e.preventDefault(); 
  } 

  if(e.keyCode==zeroBtnCode){
    const isDoubleClick = checkDoubleClick(800, setPosition);
    if(isDoubleClick){
      showSelectTimeLines();
    }
  }
  else setPosition();



  function setPosition() {
    setVideoPositionByKeyCode(e.keyCode);
  }
}

function setVideoPositionByKeyCode(keyCode) {
  const timeL = timeCodes.find(t=>t.keyCode==keyCode);
  if(timeL!=null){
    setVideoPositionSec(timeL.timeInSec);
  }
}

function checkDoubleClick(pauseMs, actionNotDouble) {
  if(zeroIndex==0){
      zeroIndex++;
      setTimeout(function () {
          if(zeroIndex!=0){
            actionNotDouble();
          }
          zeroIndex=0; 
      }, pauseMs);
      return false;
  }
  else{
      zeroIndex=0;
      return true;
  }
}



function showSelectTimeLines(){
  const itemsAdd=[
    {title:"В процентах", subscribe:"subscribe", action:setTimeCodesByPercents},
    {title:"Через 10 мин", action:setTimeCodesBy10min},
    {title:"Загрузить...", action:loadTimeLineSelect}
  ];

  showSelectActionsAny('Установить метки:', itemsAdd);
}

async function loadTimeLineSelect() {
  const newTimeLine= await loadTimeCodes();
  // const items=[];
  // for (const timeL of newTimeLine) {
  //   items.push(title:`${newTimeLine.name} ${newTimeLine.s} ${newTimeLine.e}`, timeLine:newTimeLine.timeLine );
  // }
  showSelectActionOne('Тайм коды:', newTimeLine, setTimeCodesByRemData);
}

function showSelectActionOne(title, items, actionSelect, actionBack) {
  var enabledName = Lampa.Controller.enabled().name;
  Lampa.Select.show({
      title: title,
      items: items,
      onSelect: (e)=>{ finall(); actionSelect(e);},
      onBack: ()=>{ finall(); if(actionBack!=null){ actionBack();}}
  });

  function finall(){
    Lampa.Controller.toggle(enabledName);
  }
}

function showSelectActionsAny(title, items, actionBack) {
  var enabledName = Lampa.Controller.enabled().name;  
  Lampa.Select.show({
      title: title,
      items: items,
      onSelect: (e)=>{ finall(); e.action(e);},
      onBack: ()=>{ finall(); if(actionBack!=null){ actionBack();}}
  });

  function finall(){
    Lampa.Controller.toggle(enabledName);
  }
}



async function loadTimeCodes() {
  const newTimeCodesJson= await loadTextFromUrl(timeLineUrl);
  return JSON.parse(newTimeCodesJson);
}

async function loadTextFromUrl(url) {
  const response = await fetch(url);
  return await response.text();
}



// log module

function logEvent(eventName) {
     logEventParam(eventName, '');
}

function logEventParam(eventName, param) {
        console.log('TiViAl', 'TimeCode', eventName, param);       
}




// module Player

function getPositionByPercent(percent) {
        return getVideoDuration()*percent/100;
}

function getVideoDuration() {
        return Lampa.PlayerVideo.video().duration;
}

function setVideoPositionSec(seconds) {
        Lampa.PlayerVideo.to(seconds);
}


      
})();