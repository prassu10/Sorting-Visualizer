let pressedStop = new Boolean(false);

async function bubble(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){
            if(pressedStop == true){
                return;
            }
            ele[j].style.background = 'turquoise';
            ele[j+1].style.background = 'turquoise';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await delayTime(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'crimson';
            ele[j+1].style.background = 'crimson';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    pressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableRandomize();
    enableStop();
    await bubble();
    if(pressedStop==true){
        disableSpeedSlider();
    }
    else{
        enableSortingBtn();
        enableSizeSlider();
    }
    enableRandomize();
    disableStop();
});