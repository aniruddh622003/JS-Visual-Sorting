var merbtn = document.getElementById("merge");
merbtn.addEventListener("click", function(){MergeSort(0, div_heights.length-1)});
console.log(div_heights);


function MergeSort(start, end){
    console.log("Merge Sort");
    if(start < end){
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_heights[mid],"#f7a500");//Color update

        MergeSort(start,mid);
        MergeSort(mid+1,end);

        merge_sort(start,mid,end);
    }
}
function merge_sort(start, mid, end){
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_heights[q++];
            div_update(divs[q-1],div_heights[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_heights[p++];
            div_update(divs[p-1],div_heights[p-1],"red");//Color update
        }
        else if(div_heights[p]<div_heights[q])
        {
            Arr[k++]=div_heights[p++];
            div_update(divs[p-1],div_heights[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_heights[q++];
            div_update(divs[q-1],div_heights[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_heights[start++]=Arr[t];
        div_update(divs[start-1],div_heights[start-1],"#007bbd");//Color update
    }
    if(k >= div_heights.length -1){
        for(j=0; j<=k; j++){
            div_update(divs[j], div_heights[j], "#09ab00");
        }
    }
}