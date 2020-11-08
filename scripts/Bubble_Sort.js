var bubble_Sort_btn = document.getElementById("bubble");
bubble_Sort_btn.addEventListener("click", Bubble);

function Bubble(){
    for(i=0; i<200; i++){
        for(j=0; j<200-i-1 ; j++){
            div_update(divs[j], div_heights[j], "#ffdd03");
            div_update(divs[j+1], div_heights[j+1], "#ffdd03");

            if(div_heights[j] > div_heights[j+1]){
                var tem = div_heights[j];
                div_heights[j] = div_heights[j+1];
                div_heights[j+1] = tem;
                div_update(divs[j], div_heights[j], "red");
                div_update(divs[j+1], div_heights[j+1], "red");
            }
            div_update(divs[j], div_heights[j], "#969696");
            div_update(divs[j+1], div_heights[j+1], "#969696");
        }
        div_update(divs[j],div_heights[j], "#007bbd");
    }
}