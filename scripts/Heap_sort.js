var hpbtn = document.getElementById("heap");
hpbtn.addEventListener("click", HeapSort);
array_size = div_heights.length;
function HeapSort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        MaxHeapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_heights[i],"green");//Color update
        div_update(divs[i],div_heights[i],"#f7a500");//Color update

        MaxHeapify(i,0);

        div_update(divs[i],div_heights[i],"#007bbd");//Color update
        div_update(divs[i],div_heights[i],"green");//Color update
    }
    div_update(divs[i],div_heights[i],"green");//Color update
}

function MaxHeapify(n,i)
{
    var largest=i;
    var l=2*i+1; //0->(arrsize-1)
    var r=2*i+2; //0->(arrsize)

    if(l<n && div_heights[l]>div_heights[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_heights[largest],"#007bbd");//Color update
        }

        largest=l;

        div_update(divs[largest],div_heights[largest],"red");//Color update
    }

    if(r<n && div_heights[r]>div_heights[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_heights[largest],"#007bbd");//Color update
        }

        largest=r;

        div_update(divs[largest],div_heights[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        MaxHeapify(n,largest);
    }
}


function swap(i,j)
{
    div_update(divs[i],div_heights[i],"red");//Color update
    div_update(divs[j],div_heights[j],"red");//Color update

    var temp=div_heights[i];
    div_heights[i]=div_heights[j];
    div_heights[j]=temp;

    div_update(divs[i],div_heights[i],"red");//Height update
    div_update(divs[j],div_heights[j],"red");//Height update

    div_update(divs[i],div_heights[i],"#007bbd");//Color update
    div_update(divs[j],div_heights[j],"#007bbd");//Color update
}



