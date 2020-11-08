var inbtn = document.getElementById("insert");

inbtn.addEventListener("click", Insertion);
function Insertion(){
    console.log("Insertion Sort");
    console.log(div_heights);
    for(i = 0; i < div_heights.length; i++){
        div_update(divs[i], div_heights[i], "red");
        var hole = i, value = div_heights[i];
        while(hole > 0 && div_heights[hole-1] > value){
            div_heights[hole] = div_heights[hole-1];
            div_update(divs[hole], div_heights[hole], "#007bbd");
            hole -= 1;
        }
        div_heights[hole] = value;
        div_update(divs[hole], div_heights[hole], "#007bbd");
    }
    console.log(div_heights);
}