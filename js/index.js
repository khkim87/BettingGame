const userText = document.querySelector('.userList');
const setBtn = document.querySelector('.userSetBtn');
const startBtn = document.querySelector('.startBtn');
const rulret = document.querySelector('.rulret');

function canvers(list){
    var ctx = document.querySelector('.cvs').getContext("2d");
    let radius = 120;

    ctx.beginPath();
    ctx.clearRect(0,0,300,300);
    //그리기
    list.map(user =>{
        ctx.moveTo(150,150);
        ctx.arc(150,150, radius, (Math.PI/180) * user.startPoint, (Math.PI/180) * user.endPoint ,false);
        // ctx.fillStyle = 'orange';
        // ctx.fill();
        ctx.stroke();
    });
    ctx.closePath();
}

function userSetting(userText){
    let list = [];
    let userList = userText.split(',');
    let currPoint = 270;

    userList.map(user => {
        let endPoint = currPoint + (360/userList.length);
        endPoint = endPoint < 360 ? endPoint : endPoint - 360;
        list.push({
            userName: user,
            startPoint: currPoint,
            endPoint: endPoint
        });
        currPoint = endPoint;
    });

    console.log(userList);
    canvers(list);
}

function clickSetButton(){
    userSetting(userText.value);
}

function start(){
    rulret.classList.toggle('start');
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