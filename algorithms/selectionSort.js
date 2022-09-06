async function selection(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        if(pressedStop==true){
            return;
        }
        let min_index = i;
        ele[i].style.background = 'lightgreen';
        for(let j = i+1; j < ele.length; j++){
            if(pressedStop==true){
                return;
            }
            ele[j].style.background = 'turquoise';

            await delayTime(delay);
            if(pressedStop==true){
                return;
            }
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                    ele[min_index].style.background = 'crimson';
                }
                min_index = j;
            } 
            else{
                ele[j].style.background = 'crimson';
            }   
        }
        await delayTime(delay);
        if(pressedStop==true){
            return;
        }
        swap(ele[min_index], ele[i]);
        ele[min_index].style.background = 'crimson';
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    pressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableRandomize();
    enableStop();
    await selection();
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