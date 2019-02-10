while(true){
    var message = prompt('창닫기 : close\n새 창 : open');
    if(message === 'close'){
        window.close();
        break;
    }
    else if(message === 'open'){
        window.open('baseballgame.html')
    }

}