var merbtn = document.getElementById("merge");
merbtn.addEventListener("click", function(){MergeSort(div_heights)});
console.log(div_heights);
function MergeSort(A){
    console.log("Merge Sort");
    var n = A.length;
    
    if(n<2) return;
    mid = Math.floor(n/2);
    var left = [], right = [];
    for(i = 0; i < mid; i++){
        left[i] = A[i];
    }
    for(i = mid; i < n; i++){
        right[i-mid] = A[i];
    }
    MergeSort(left);
    MergeSort(right);
    Merge(left, right, A);
}
function Merge(left, right, A){
    nL = left.length;
    nR = right.length;
    i=j=k=0;

    while(i < nL && j < nR){
        if(left[i] <= right[j]){
            A[k] = left[i];
            div_update(divs[k], A[k], "#007bbd");
            k++;
            i++;
        }
        else{
            A[k] = right[j];
            div_update(divs[k], A[k], "#007bbd");
            k++;
            j++;
        }
    }
    while(i < nL){
        A[k] = left[i];
        div_update(divs[k], A[k], "#007bbd");
        i++;
        k++;
    }
    while(j < nR){
        A[k] = right[j];
        div_update(divs[k], A[k], "#007bbd");
        j++;
        k++;
    }
}