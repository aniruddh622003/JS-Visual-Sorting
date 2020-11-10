var qubtn = document.getElementById("quick");
qubtn.addEventListener("click",function(){Quick(0, div_heights.length-1)});

function Quick(start, end){
    if(start < end){
        pivot = QuickSort(start, end);
        Quick(start, pivot-1);
        Quick(pivot+1, end);
    }
    
}

function QuickSort(start, end){
    var i = start+1;
    var piv = div_heights[start];
    //Update color to Yellow
    div_update(divs[start], div_heights[start], "#f7a500");

    for(j=start+1; j <= end; j++){
        //Update colow to Yellow
        div_update(divs[j], div_heights[j], "#f7a500");
        if(div_heights[j] < piv){
            //Update Color to Red
            div_update(divs[i], div_heights[i], "red");
            div_update(divs[j], div_heights[j], "red");

            var tem = div_heights[i];
            div_heights[i] = div_heights[j];
            div_heights[j] = tem;

            //Update Heights
            div_update(divs[i], div_heights[i], "red");
            div_update(divs[j], div_heights[j], "red");
            div_update(divs[i], div_heights[i], "#007bbd");

            i++;
        }
        //Return Color to Normal
        div_update(divs[j], div_heights[j], "#007bbd");
    }
    //Update Color to Red
    div_update(divs[start], div_heights[start], "red");
    div_update(divs[i-1], div_heights[i-1], "red");

    //Final Swap for the part
    var tem = div_heights[start];
    div_heights[start] = div_heights[i-1];
    div_heights[i-1] = tem;

    //Update Heights
    div_update(divs[start], div_heights[start], "red");
    div_update(divs[i-1], div_heights[i-1], "red");

    for(var t=start;t<=i;t++)
    {
        //Update Color to Green
        div_update(divs[t],div_heights[t],"#09ab00");
    }
    return i-1;
}