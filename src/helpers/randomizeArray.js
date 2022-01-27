const generateRandomizedArray = ({arraySize} = {}) =>{
    let randomizedArray = [];

    for(let i = 0; i < arraySize;i++){
        randomizedArray.push(Math.floor(Math.random() * (100 - 10) + 10));
    }
    return randomizedArray;
}

export default generateRandomizedArray;