let btn1 = document.querySelector('.button1');
let btn2 = document.querySelector('.button2');
let backgroundPic = document.querySelector('.backgroundPic')
let clicks = 0;
let btn_clicks = clicks % 3;


btn1.onclick = function() { 
    clicks = clicks - 1;
    btn_clicks = clicks % 3
    if(btn_clicks == 0){
        backgroundPic.style.backgroundImage = "url('/pictures/slider_picture1.jpg')"; 
    }
    if(btn_clicks == -1 || btn_clicks == 2 ){
        backgroundPic.style.backgroundImage = "url('/pictures/slider_picture3.jpg')"; 
    }
    if(btn_clicks == -2 || btn_clicks == 1){
        backgroundPic.style.backgroundImage = "url('/pictures/slider_picture2.jpg')"; 
    }
};

btn2.onclick = function() { 
    clicks = clicks + 1;
    btn_clicks = clicks % 3
    if(btn_clicks === 0){
        backgroundPic.style.backgroundImage = "url('/pictures/slider_picture1.jpg')"; 
    }
    if(btn_clicks === -1 || btn_clicks === 2 ){
        backgroundPic.style.backgroundImage = "url('/pictures/slider_picture3.jpg')"; 
    }
    if(btn_clicks === -2 || btn_clicks === 1){
        backgroundPic.style.backgroundImage = "url('/pictures/slider_picture2.jpg')"; 
    }
};

let backToTop = document.querySelector('.toTop');

backToTop.onclick = function(){
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 