var selectbtn = document.getElementById("select");
selectbtn.addEventListener("click", Select);


function Select(){
    for(i=0; i<div_heights.length; i++){
        var min=div_heights[i],index = i;
        for(j=i; j<div_heights.length; j++){
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
        if(i == div_heights.length -1){
            for(j=0; j<=i; j++){
                div_update(divs[j], div_heights[j], "#09ab00");
            }
        }
    }
}