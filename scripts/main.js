// #################################
//    
// Made by - Aniruddh Dev Upadhyay
// E-mail- aniruddh622003@gmail.com
//    
// #################################


var cont = document.getElementById("arrcont");
var div_heights = [];
var divs = [];
console.log(cont.clientHeight);
generate_array();

var new_arr_btn = document.getElementById("newArray");


new_arr_btn.addEventListener("click", rel);

function rel(){
    location.reload()
}


function generate_array(){
    cont.innerHTML = "";

    for(i=0; i < 200; i++){
        div_heights[i] = Math.floor(Math.random()*(cont.clientHeight));
 
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = "margin: 0% " + margin_size + "%; background-color: #969696; width: " + 100/(200-2*margin_size) + "%; height: " + div_heights[i] + "px;"
        
    }
}