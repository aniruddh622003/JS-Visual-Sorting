var selectbtn = document.getElementById("select");
selectbtn.addEventListener("click", Select);


function Select(){
    for(i=0; i<div_heights.length; i++){
        var min=div_heights[i],index = i;
        for(j=i; j<div_heights.length; j++){
            div_update(divs[j], div_heights[j], "#f7a500")
            if(div_heights[j] <= min){
                div_update(divs[index], div_heights[index], "#007bbd")
                min = div_heights[j];
                div_update(divs[j], div_heights[j], "red")
                index = j;
            }
            else{
                div_update(divs[j], div_heights[j], "#007bbd")
            }
        }
        var temp = div_heights[i];
        div_heights[i] = min;
        div_heights[index] = temp;
        div_update(divs[index], div_heights[index], "#007bbd");
        div_update(divs[i], div_heights[i], "#09ab00");
    }
}