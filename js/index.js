const userText = document.querySelector('.userText');
const setBtn = document.querySelector('.userSetBtn');
const startBtn = document.querySelector('.startBtn');
const rulret = document.querySelector('.rulret');
const joinList = document.querySelector('.joinList');

function canvers(list){
    var ctx = document.querySelector('.cvs').getContext("2d");
    let radius = 120;

    
    ctx.clearRect(0,0,300,300);
    //그리기
    list.map(user =>{
        ctx.beginPath();
        ctx.moveTo(150,150);
        ctx.arc(150,150, radius, (Math.PI/180) * user.startPoint, (Math.PI/180) * user.endPoint ,false);
        ctx.fillStyle = user.color;
        ctx.fill();
        ctx.stroke();
    });
    ctx.closePath();
}

function userSetting(userText){
    let list = [];
    let userList = userText.split(',');
    let currPoint = 270;

    joinList.childNodes.forEach(node =>{
        joinList.removeChild(node);
    })
    userList.map(user => {
        let endPoint = currPoint + (360/userList.length);
        endPoint = endPoint < 360 ? endPoint : endPoint - 360;
        list.push({
            userName: user,
            color: '#'+Math.round(Math.random()* 0xffffff).toString(16),
            startPoint: currPoint,
            endPoint: endPoint
        });
        currPoint = endPoint;
        
        var node = document.createElement('li'); 
        node.innerText = user
        joinList.appendChild(node);
    });

    console.log(userList);
    canvers(list);
}

function clickSetButton(){
    userSetting(userText.value);
}

function start(){
    rulret.classList.toggle('start');
    let max = 9000;
    let min = 5000;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    rulret.style.transform = `rotate(${randomNum}deg)`;
}

function init(){
    setBtn.addEventListener('click', clickSetButton);
    startBtn.addEventListener('click', start);
    rulret.addEventListener(
        'webkitTransitionEnd', 
        function( event ) { 
            alert( "Finished transition!" ); 
        },
        false 
    );
   
}

init();