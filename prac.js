while(true){
    var message = prompt('창닫기 : close\n야구게임 : open');
    if(message === 'close'){
        window.close();
        break;
    }
    else if(message === 'open'){
        window.open('baseballgame.html');
    }
    else if(message === undefined){
        window.close();
    }
}