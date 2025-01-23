let val =["Who we are","Lorem1","Lorem2"];
let a= ["a three dimensional projection which can be seen without any special equipment such as cameras or glasses.the imagan viewed from any angle,so as the user walks around the display the object will appear to move and shift realistically","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aperiam ipsa dolores explicabo, consequuntur veritatis? Nobis obcaecati accusamus fugit pariatur consectetur dicta sapiente tempora deleniti, debitis iusto rerum molestias sunt.","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aperiam ipsa dolores explicabo, c."];
let i=0;
function changeRight(){
    i++; 
    let ele = document.getElementById("sir");
    if(i>val.length-1){
        i=0;
    }
    ele.innerHTML = "<h3 class='font color' style='margin:auto;width:40%;'>"+val[i]+"</h3><p class='font color'>"+a[i]+"</p>";//h3[2] par[2]
}
function changeLeft(){
    i--;
    let ele= document.getElementById("sir");
    if(i<0){
        i=val.length-1;
    }
    ele.innerHTML="<h3 class='font color' style='margin:auto;width:40%;'>"+val[i]+"</h3><p class='font color'>"+a[i]+"</p>";

}
