// swap function
function swap(bar1, bar2) {    
    let temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;
}


// disabling and enabling sort functions
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".heapSort").disabled = true;
}

function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".heapSort").disabled = true;
}


// Disabling and enabling  sliders
function disableSizeSlider(){
    document.querySelector("#size_input").disabled = true;
}

function disableSpeedSlider(){
    document.querySelector("#speed_input").disabled = true;
}

function enableSpeedSlider(){
    document.querySelector("#speed_input").disabled = false;
}

function enableSizeSlider(){
    document.querySelector("#size_input").disabled = false;
}


// Disabling and enabling randomize and stop buttons
function disableRandomize(){
    document.querySelector(".new").disabled = true;
}

function enableRandomize(){
    document.querySelector(".new").disabled = false;
}

function enableStop(){
    document.querySelector(".stop").disabled = false;
}

function disableStop(){
    document.querySelector(".stop").disabled = true;
}


// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function delayTime(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}


// Selecting size slider
let arraySize = document.querySelector('#size_input');


// update the no of bars
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});


// Default time delay
let delay = 260;


// Selecting speed
let delayElement = document.querySelector('#speed_input');


// update time delay
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});


// Creating barArray
let barArray = [];
createNewArray();


// creating new barArray of input size
function createNewArray(noOfBars = 60) {
    deleteChild();

    // creating an barArray of random numbers 
    barArray = [];
    for (let i = 0; i < noOfBars; i++) {
        barArray.push(Math.floor(Math.random() * 201));
    }
    console.log(barArray);

    const bars = document.querySelector("#sorting");

    // create multiple element div using loop
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${barArray[i]*2+20}px`;
        bar.style.width = `${1500/noOfBars}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}


// function to delete bars
function deleteChild() {
    const bar = document.querySelector("#sorting");
    bar.innerHTML = '';
}


// Selecting newarray button
const randomizeButton = document.querySelector(".new");
randomizeButton.addEventListener("click", function(){
    pressedStop = false;
    enableSpeedSlider();
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

const stopSortingButton = document.querySelector(".stop");
stopSortingButton.addEventListener("click", function(){
    disableSortingBtn();
    disableSizeSlider();
    pressedStop = true;
})
