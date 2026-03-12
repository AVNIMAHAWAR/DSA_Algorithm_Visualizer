function showAlgorithmInfo(name, complexity, concept){

    const box = document.getElementById("infoBox");

    box.style.display = "block";

    document.getElementById("algoName").innerText = name;
    document.getElementById("complexity").innerText = complexity;
    document.getElementById("concept").innerText = concept;
}

async function bubbleSort(){

const bars = document.querySelectorAll(".bar");

for(let i=0;i<bars.length;i++){

    for(let j=0;j<bars.length-i-1;j++){

        bars[j].style.backgroundColor = "red";
        bars[j+1].style.backgroundColor = "red";

        await new Promise(resolve => setTimeout(resolve,100));

        let height1 = bars[j].style.height;
        let height2 = bars[j+1].style.height;

        if(parseInt(height1) > parseInt(height2)){

            bars[j].style.height = height2;
            bars[j+1].style.height = height1;
        }

        bars[j].style.backgroundColor = "steelblue";
        bars[j+1].style.backgroundColor = "steelblue";
    }

    bars[bars.length-i-1].style.backgroundColor = "green";
}

showAlgorithmInfo(
"Bubble Sort",
"Time Complexity: O(n²)",
"Concept: Comparison-based sorting with repeated swaps."
);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mergeSort(){

    const bars = document.querySelectorAll(".bar");
    let arr = [];

    bars.forEach(bar => {
        arr.push(parseInt(bar.style.height));
    });

    await mergeSortHelper(arr,0,arr.length-1);

    for(let i=0;i<arr.length;i++){
        bars[i].style.height = arr[i] + "px";
    }
}

async function mergeSortHelper(arr,left,right){

    if(left>=right) return;

    let mid = Math.floor((left+right)/2);

    await mergeSortHelper(arr,left,mid);
    await mergeSortHelper(arr,mid+1,right);

    await merge(arr,left,mid,right);
}

async function merge(arr,left,mid,right){

    let temp = [];
    let i = left;
    let j = mid+1;

    while(i<=mid && j<=right){

        if(arr[i] <= arr[j]){
            temp.push(arr[i]);
            i++;
        }
        else{
            temp.push(arr[j]);
            j++;
        }
    }

    while(i<=mid){
        temp.push(arr[i]);
        i++;
    }

    while(j<=right){
        temp.push(arr[j]);
        j++;
    }

  const bars = document.querySelectorAll(".bar");

for(let k=left;k<=right;k++){

    arr[k] = temp[k-left];

    bars[k].style.height = arr[k] + "px";

    bars[k].style.backgroundColor = "orange";

    await sleep(80);
    bars[k].style.backgroundColor = "steelblue";
}

showAlgorithmInfo(
"Merge Sort",
"Time Complexity: O(n log n)",
"Concept: Divide and Conquer using recursion."
);
}

function showAlgorithmInfo(name, complexity, concept){

    const box = document.getElementById("infoBox");

    box.style.display = "block";

    document.getElementById("algoName").innerText = name;
    document.getElementById("complexity").innerText = complexity;
    document.getElementById("concept").innerText = concept;
}