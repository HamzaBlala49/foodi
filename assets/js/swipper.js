let counter = 0;
function translate(wrapper,cards,viewedCards,buttonId){
    if (buttonId === "btn-left") {
        counter <= 0 ? counter = 0 : counter-=1;        
    }else if(buttonId === "btn-right"){
        counter >= cards.length - 1 ? counter = 0  : counter+=1  
    }
    inner.style.transform = `translate(-${(wrapper.clientWidth / viewedCards)*counter}px)`  
}

