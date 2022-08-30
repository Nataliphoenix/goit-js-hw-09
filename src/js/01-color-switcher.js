const refs = {
      body: document.querySelector('body'),
      startBtn: document.querySelector('button[data-start]'),
      stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);


function getRandomHexColor(e) {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timeId;

function onStartBtnClick() {
            timeId = setInterval(() => {
                  refs.body.style.backgroundColor = getRandomHexColor();
                  
            }, 1000);
      
      refs.startBtn.setAttribute('disabled', false);
      refs.stopBtn.removeAttribute('disabled', false);
      console.log(timeId);
      return timeId;
     
}

function onStopBtnClick() {
      clearInterval(timeId); 
      refs.stopBtn.setAttribute('disabled', false);

      refs.startBtn.removeAttribute('disabled', false);
      
      console.log('stop');
}