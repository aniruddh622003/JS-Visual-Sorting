var delay_time = 0.2;
c_delay = 0;
function div_update(div, height, color){

    setTimeout(function(){
        div.style = "margin: 0% " + margin_size + "%; background-color: " + color + "; width: " + 100/(200-2*margin_size) + "%; height: " + height + "px;"
    }, c_delay+=delay_time)

}