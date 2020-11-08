var selectbtn = document.getElementById("select");
selectbtn.addEventListener("click", Select);

console.log(div_heights)

function Select(){
    console.log("Selection sort");
    for(i=0; i<200; i++){
        var min=div_heights[i],index = i;
        for(j=i; j<200; j++){
            if(div_heights[j] < min){
                min = div_heights[j];
                index = j;
            }
        }
        var temp = div_heights[i];
        div_heights[i] = min;
        div_heights[index] = temp;
        div_update(divs[i], div_heights[i], "#007bbd");
        div_update(divs[index], div_heights[index], "#007bbd")
    }
}