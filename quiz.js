let a = document.getElementById("q1");
let aa = document.getElementById("q1").innerHTML;

function show1(){
   
    a.style.visibility = "visible";
    b.style.visibility = "hidden";
    c.style.visibility = "hidden";

    a.innerHTML = aa; 
}
let b = document.getElementById("q2");
let bb = document.getElementById("q2").innerHTML;

function show2(){

    a.innerHTML = " ";
    b.style.visibility = "visible";
    c.style.visibility = "hidden";
    b.innerHTML = bb;
    
}
let c = document.getElementById('q3');
let cc = document.getElementById('q3').innerHTML;

function show3(){
    a.innerHTML = " ";
    b.innerHTML = " ";
    c.style.visibility = "visible";
    a.style.visibility = "hidden";
    b.style.visibility = "hidden";
}

//Check Answer 

function check1(){
    let x = document.getElementById('c1');
    let y = document.getElementById('c2');
    let z = document.getElementById('c3');
    
    if(x == z) {
        x.style.background = "green";
    }
    else{
        x.style.background = "red";
        y.style.background = "";
        z.style.background = "";
    }

}

function check2(){
    let x = document.getElementById('c1');
    let y = document.getElementById('c2');
    let z = document.getElementById('c3');
    
    if(y == z) {
        y.style.background = "green";
    }
    else{
        y.style.background = "red";

            x.style.background = "";
        
            z.style.background = "";       
    }
}
function check3(){
    let x = document.getElementById('c1');
    let y = document.getElementById('c2');
    let z = document.getElementById('c3');
    
    if(z == z) {
        z.style.background = "green";
         x.style.background = "";
        
         y.style.background = "";    
    }
    else{
        z.style.background = "red";
    }
}
function check11(){
    let a2 = document.getElementById('c4');
    let a23 = document.getElementById('c5');

    //alert("Ok");
    if(a2 == a2) {
        a2.style.background = "green";
        a23.style.background = "";  
    }
    else{
        a2.style.background = "red";
    }
}
function check12(){
    let a2 = document.getElementById('c4');
    let a23 = document.getElementById('c5');

    if ( a23 == a2){
        a23.style.background = "green";
    }
    else{
        a23.style.background = "red";
        a2.style.background = "";
    }
}

function show22() {
    let x = document.getElementById('c6');
    let y = document.getElementById('c7');
    if ( x == x){
        x.style.background = "green";
        y.style.background = ""; 
    }
    else{
        x.style.background = "red";
        y.style.background = "";
    }
}
function show23() {
    let x = document.getElementById('c6');
    let y = document.getElementById('c7');
    if ( y == x){
        y.style.background = "green";
    }
    else{
        y.style.background = "red";
        x.style.background = "";
    }
}