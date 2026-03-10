function generateArray(){

    const container = document.getElementById("array-container");

    container.innerHTML = "";

    for(let i=0;i<30;i++){

        const value = Math.floor(Math.random()*200);

        const bar = document.createElement("div");

        bar.classList.add("bar");

        bar.style.height = value + "px";

        container.appendChild(bar);
    }
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
}