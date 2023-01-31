let color_change = 0;
let button_change = 0;
let trigo_button = 0;
let fun_body = 0;
function second_button_display_Change() {
    if(color_change == 0){
       const elems = document.getElementsByClassName('second_change');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
            console.log("for");
            
        }

       const elem1 = document.getElementsByClassName('second_changed');
        for (let i = 0; i < elem1.length; i++) {
            elem1[i].style.display = "block"; 
            
        }

       document.getElementById('second_button').style.backgroundColor = "rgb(121, 169, 215)";
        color_change = 1;
        console.log(color_change)
        button_change = 1;
        console.log(button_change)

    }
    else{
        console.log(color_change)
        const elems = document.getElementsByClassName('second_change');
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.display = "block";
            console.log("else for");
            
        }
        const elem1 = document.getElementsByClassName('second_changed');
        for (let i = 0; i < elem1.length; i++) {
            elem1[i].style.display = "none";
            
        }
        document.getElementById('second_button').style.backgroundColor = "";
        color_change = 0;
        console.log(color_change)
        button_change = 0;
    }
    //if function drpdown or trigo dropdown is open then it will close when click on 2nd 
    if(fun_body == 1 || trigo_button == 1){
        document.getElementById('fun_1st_row').style.display = "";
        document.getElementById('fun_2nd_row').style.display = "";
        fun_body = 0;
        document.getElementById("trigo_fun_body").style.display = "";
        document.getElementById("trigo_fun_sin").style.display = "";
        document.getElementById("trigo_fun_sec").style.display = "";
        document.getElementById("trigo_fun_sin_1").style.display = "";
        document.getElementById("trigo_fun_sec_1").style.display = "";
        document.getElementById("trigo_fun_sinh").style.display = "";
        document.getElementById("trigo_fun_sech").style.display = "";
        document.getElementById("trigo_fun_sinh_1").style.display = "";
        document.getElementById("trigo_fun_sech_1").style.display = "";
        trigo_button = 0;
    }
}

function trigo_fun() {
    if(trigo_button == 0){
        document.getElementById("trigo_fun_body").style.display = "block";
        document.getElementById("trigo_fun_sin").style.display = "flex";
        document.getElementById("trigo_fun_sec").style.display = "flex";
        trigo_button = 1;
        // trigo_fun_sin = 1;
        // trigo_fun_sec = 1;
        // second_trigo_fun_sin = 1;
    }
    else{
        document.getElementById("trigo_fun_body").style.display = "";
        document.getElementById("trigo_fun_sin").style.display = "";
        document.getElementById("trigo_fun_sec").style.display = "";
        document.getElementById("trigo_fun_sin_1").style.display = "";
        document.getElementById("trigo_fun_sec_1").style.display = "";
        document.getElementById("trigo_fun_sinh").style.display = "";
        document.getElementById("trigo_fun_sech").style.display = "";
        document.getElementById("trigo_fun_sinh_1").style.display = "";
        document.getElementById("trigo_fun_sech_1").style.display = "";
        trigo_button = 0;      
    }
    if(fun_body == 1){
        document.getElementById('fun_1st_row').style.display = "";
        document.getElementById('fun_2nd_row').style.display = "";
        fun_body = 0;
    }
    else{

    }
}
function fun_body_display() {
    if(fun_body == 0){
        document.getElementById('fun_body').style.display = "block";
        document.getElementById('fun_1st_row').style.display = "flex";
        document.getElementById('fun_2nd_row').style.display = "flex";
        fun_body = 1;
    }
    else{
        document.getElementById('fun_1st_row').style.display = "";
        document.getElementById('fun_2nd_row').style.display = "";
        fun_body = 0;
    }
    if(trigo_button == 1){
        document.getElementById("trigo_fun_body").style.display = "";
        document.getElementById("trigo_fun_sin").style.display = "";
        document.getElementById("trigo_fun_sec").style.display = "";
        document.getElementById("trigo_fun_sin_1").style.display = "";
        document.getElementById("trigo_fun_sec_1").style.display = "";
        document.getElementById("trigo_fun_sinh").style.display = "";
        document.getElementById("trigo_fun_sech").style.display = "";
        document.getElementById("trigo_fun_sinh_1").style.display = "";
        document.getElementById("trigo_fun_sech_1").style.display = "";
        trigo_button = 0;
    }
    else{

    }
}

function second_sin_change() {
        document.getElementById("trigo_fun_sin").style.display = "";
        document.getElementById("trigo_fun_sec").style.display = "";
        document.getElementById("trigo_fun_sin_1").style.display = "flex";
        document.getElementById("trigo_fun_sec_1").style.display = "flex";
        document.getElementById('second_sin_inverse').style.backgroundColor = "rgb(121, 169, 215)"; 
}
function second_sin_inverse_change() {
        document.getElementById("trigo_fun_sin").style.display = "flex";
        document.getElementById("trigo_fun_sec").style.display = "flex";
        document.getElementById("trigo_fun_sin_1").style.display = "";
        document.getElementById("trigo_fun_sec_1").style.display = "";
}
function hyp_sin_change() {
    document.getElementById("trigo_fun_sin").style.display = "";
    document.getElementById("trigo_fun_sec").style.display = "";
    document.getElementById("trigo_fun_sinh").style.display = "flex";
    document.getElementById("trigo_fun_sech").style.display = "flex";
    document.getElementById('hyp_sech').style.backgroundColor = "rgb(121, 169, 215)";


}
function second_sinh_inverse_change(){
    document.getElementById("trigo_fun_sinh_1").style.display = "flex";
    document.getElementById("trigo_fun_sech_1").style.display = "flex";
    document.getElementById("trigo_fun_sinh").style.display = "";
    document.getElementById("trigo_fun_sech").style.display = "";
    document.getElementById('second_sinh_inverse').style.backgroundColor = "rgb(121, 169, 215)";
    document.getElementById('hyp_sech_inverse').style.backgroundColor = "rgb(121, 169, 215)";
}
function hyp_change_sinh_inverse() {
    document.getElementById("trigo_fun_sinh_1").style.display = "flex";
    document.getElementById("trigo_fun_sech_1").style.display = "flex";
    document.getElementById("trigo_fun_sin_1").style.display = "";
    document.getElementById("trigo_fun_sec_1").style.display = "";
    document.getElementById('second_sinh_inverse').style.backgroundColor = "rgb(121, 169, 215)";
    document.getElementById('hyp_sech_inverse').style.backgroundColor = "rgb(121, 169, 215)";
}
function reverse_to_sin_inverse() {
    document.getElementById("trigo_fun_sinh_1").style.display = "";
    document.getElementById("trigo_fun_sech_1").style.display = "";
    document.getElementById("trigo_fun_sin_1").style.display = "flex";
    document.getElementById("trigo_fun_sec_1").style.display = "flex";
}
function sinh_inverse_second_reverse_to_sinh(){
    document.getElementById("trigo_fun_sinh_1").style.display = "";
    document.getElementById("trigo_fun_sech_1").style.display = "";
    document.getElementById("trigo_fun_sinh").style.display = "flex";
    document.getElementById("trigo_fun_sech").style.display = "flex";
    document.getElementById('hyp_sech').style.backgroundColor = "rgb(121, 169, 215)";
}
function hyp_sech_change_to_sin() {
    document.getElementById("trigo_fun_sin").style.display = "flex";
    document.getElementById("trigo_fun_sec").style.display = "flex";
    document.getElementById("trigo_fun_sinh").style.display = "";
    document.getElementById("trigo_fun_sech").style.display = ""; 
}
let deg = 0;
function deg_to_radian(){
    if(deg == 0){
        deg = 1;
        document.getElementById("degree").innerHTML = "RAD";
    }
    else{
        deg = 0;
        document.getElementById("degree").innerHTML = "DEG";
    }

}
function sin() {
    if (deg == 0){
        display.value = (Math.sin(display.value)).toFixed(5);
    }
    else{
        display.value = (Math.sin((Math.PI / 180) * Number(display.value))).toFixed(5);
    }
}
function cos() {
    if (deg == 0){
        display.value = Math.cos(display.value).toFixed(5);
    }
    else{
        display.value = (Math.cos(Math.PI / 180 * display.value)).toFixed(5);    }
}
function tan() {
    if (deg == 0){
        display.value = Math.tan(display.value).toFixed(5);
    }
    else{
        display.value = (Math.tan(Math.PI / 180 * display.value)).toFixed(5);
    }
}
function sec() {
    if (deg == 0){
        display.value = 1 / Math.cos(display.value).toFixed(5);
    }
    else{
        display.value = (1 / Math.cos(Math.PI / 180 * display.value)).toFixed(5);
    }
}
function csc() {
    if (deg == 0){
        display.value = 1 / Math.sin(display.value).toFixed(5);
    }
    else{
        display.value = (1 / Math.sin(Math.PI / 180 * display.value)).toFixed(5);
    }
}
function cot() {
    if (deg == 0){
        display.value = 1 / Math.tan(display.value).toFixed(5);
    }
    else{
        display.value = 1 / (Math.tan(Math.PI / 180 * display.value)).toFixed(5);
    }
}
function sin_inv(){
    if (deg == 0){
        display.value = Math.asin(display.value).toFixed(5);
    }
    else{
        display.value = (Math.PI / 180 * Math.asin(display.value)).toFixed(5);
    }
}
function cos_inv(){
    if (deg == 0){
        display.value = Math.acos(display.value).toFixed(5);
    }
    else{
        display.value = (Math.PI / 180 * Math.acos(display.value)).toFixed(5);
    }
}
function tan_inv(){
    if (deg == 0){
        display.value = Math.atan(display.value).toFixed(5);
    }
    else{
        display.value = (Math.PI / 180 * Math.atan(display.value)).toFixed(5);
    }
}
function sec_inv(){
    if (deg == 0){
        display.value = 1 / Math.acos(display.value).toFixed(5);
    }
    else{
        display.value = (Math.PI / 180 * (Math.acos(1 / display.value))).toFixed(5);
    }
}
function csc_inv(){
    if (deg == 0){
        display.value = 1 / Math.asin(display.value).toFixed(5);
    }
    else{
        display.value = (Math.PI / 180 * (Math.asin(1 / display.value))).toFixed(5);
    }
}
function cot_inv(){
    if (deg == 0){
        display.value = 1 / Math.atan(display.value).toFixed(5);
    }
    else{
        display.value = (Math.PI / 180 * (Math.atan(1 / display.value))).toFixed(5);
    }
}
function sinh() {
    display.value = (Math.sinh(display.value)).toFixed(5);
}
function cosh() {
    display.value = (Math.cosh(display.value)).toFixed(5);
}
function tanh() {
    display.value = (Math.tanh(display.value)).toFixed(5);
}
function sech() {
    display.value = (1/Math.cosh(display.value)).toFixed(5);
}
function csch() {
    display.value = (1/Math.sinh(display.value)).toFixed(5);
}
function coth() {
    display.value = (1/Math.tanh(display.value)).toFixed(5);
}
function sin_invh() {
    display.value = (Math.asinh(display.value)).toFixed(5);
}
function cos_invh() {
    display.value = (Math.acosh(display.value)).toFixed(5);
}
function tan_invh() {
    display.value = (Math.atanh(display.value)).toFixed(5);
}
function sec_invh() {
    display.value = (1/Math.acosh(display.value)).toFixed(5);
}
function csc_invh() {
    display.value = (1/Math.asinh(display.value)).toFixed(5);
}
function cot_invh() {
    display.value = (1/Math.atanh(display.value)).toFixed(5);
}
function element(value) {
    display.value += value;
}
//1st line of button
function clr() {
    display.value = " ";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
 function epsilon() {
    if (Number(display.value.substring(-1))) {
        display.value = Math.exp(1);
    }
    else {
        display.value += Math.exp(1);
    }
 }
 function pi() {
    if (Number(display.value.substring(-1))) {
        display.value = Math.PI;
    }
    else {
        display.value += Math.PI;
    }
 }
// 2nd line of button
function fractional() {
    display.value = 1 / (display.value);
}
function mod_x() {
    display.value = Math.abs(display.value);
}
function exponential(value) {
    display.value += value;
}
function mod(value) {
    display.value += value;
}
function square() {
    display.value = Math.pow(display.value, 2);
}
function cubed() {
    display.value = Math.pow(display.value, 3);
}
// 3rd line of button
function square_root() {
    display.value = Math.pow(display.value, 1 / 2);
}
function cube_root() {
    display.value = Math.pow(display.value, 1 / 3);
}
function opening_bracket(value){
    display.value += value;
}
function closing_bracket(value){
    display.value += value;
}
function getFactorialForLoop(n) {
    let result = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "n has to be positive";
    }
}
function factorial() {
    display.value = getFactorialForLoop(parseInt(display.value)).toString();
}
function divide(value) {
    display.value += value;
}

//4th line of button
function x_power_y(value){
    display.value += value;
}
function y_root_x(value){
    display.value += value;
}

//5th line of button
function ten_power_x(){
    display.value = Math.pow(10, display.value);
}
function two_power_x() {
    display.value = Math.pow(2, display.value);
}

//6th line of button
function log() {
    display.value = Math.log10(display.value);
}

//7th line of button
function lnx(){
    display.value = Math.log(display.value);
}
function e_power_x() {
    display.value = Math.exp(display.value);
}


function ythrroot(val1, val2) {
    display.value = Math.pow(val2, 1 / val1).toString();
}
function ythlog(val1, val2) {
    display.value = (Math.log(val1) / Math.log(val2)).toString();
}
function yroot(value) {
    let z = value.search("yroot");
    let y = value.substring(0, z);
    let x = value.substring(z + 5, value.length);
    return [x, y]
}

function logy(value) {
    let z = value.search("ylog");
    let y = value.substring(0, z);
    let x = value.substring(z + 4, value.length);
    return [x, y]
}
function signalt(){
    display.value = (-1) * (display.value);
}
function equal() {
    if (display.value.includes("yroot")) {
        let y = yroot(display.value);
        ythrroot(y[0], y[1]);

    }
    if (display.value.includes("ylog")) {
        let y = logy(display.value);
        ythlog(y[0], y[1]);

    }
    display.value = display.value.replaceAll("^", "**");
    display.value = eval(display.value);
}