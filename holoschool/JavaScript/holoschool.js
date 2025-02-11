const languages={
    en:{
     nav:{
        search:"search",
        lesson:"Lesson",
        help:"help",
        french:"French ",
         eng:"english",

    },
    main:{
        whoarewe:"who are we?",
        para:"a three dimensional projection which can be seen without any special equipment such as cameras or glasses.the shape viewed from any angle,so as the user walks around the display the object will appear to move and shift realistically"
    },
    footer:{
        contactus:"Contact us"
    }
    },

    fr:{
        nav:{
            search:"Recherche sur la leçon",
            lesson:"Leçon",
            help:"Aide",
            french:"Français ",
            eng:"Anglais",
        },
        main:{
            whoweare:"Qui sommes-nous?",
            para:"une projection tridimensionnelle qui peut être vue sans aucun équipement spécial tel que des caméras ou des lunettes. la forme vue sous n'importe quel angle, de sorte que lorsque l'utilisateur se promène autour de l'écran, l'objet semblera bouger et se déplacer de manière réaliste."

        },
        footer:{
            contactus:"Contactez-nous"
        }
    }
}
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
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
function reset(){
    let stars = document.querySelectorAll(".card > .star");
    for(let i=0; i<stars.length;i++){
        stars[i].style.color="#c4baba69";        
    }

}
function gfg(a){
    reset();
    let stars = document.querySelectorAll(".card > .star");
    let color;

    switch(a){
        case 0: color="#002E50"; break;
        case 1: color="#0c67bc"; break;
        case 2: color="#4f86f7 "; break;
        case 3: color="#00bfff "; break;
        case 4: color="#9ACFFF"; break;
        default: color="#c4baba69"; break;
    }
    for(let i = 0; i<=a;i++){
        stars[i].style.color = color;
    }  
    let rate=document.getElementById("rate");
    rate.value = a+1;
}
function request(){
    let inputs = document.querySelectorAll("#feedback input");
	console.log(inputs);
    let empty = document.querySelectorAll(".empty");
    let pass = true;
    for(let i=0;i<inputs.length-1;i++ ){
        if(inputs[i].value==null || inputs[i].value==""){
            empty[i].innerHTML = "Cannot be empty";
            empty[i].style.color = "#FF0000";
            pass = false;
        }else{
            empty[i].innerHTML = "";
        }
    }
    return pass;
}
