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
// let val =["What is Holoschool?","Who can use it?","What are you waiting for?"];
// let a = ["Holoschool is a free lebanese platform that makes learning easier , this page provides math lessons especially 'the orthogonality in space' lesson in a interactive way using 3d shapes that can be seen from all angles","This page is made especially for second year of high school, both teachers and students can use it ","if you are intrested , <a class=' font color' href=''>start now</a>"];
// let i=0;
// function changeRight(){
//     i++; 
//     let ele = document.getElementById("sir");
//     if(i>val.length-1){
//         i=0;
//     }
//     ele.innerHTML = "<h3 class='font color' style='margin:auto;width:40%;'>"+val[i]+"</h3><p class='font color'>"+a[i]+"</p>";//h3[2] par[2]
// }
// function changeLeft(){
//     i--;
//     let ele= document.getElementById("sir");
//     if(i<0){
//         i=val.length-1;
//     }
//     ele.innerHTML="<h3 class='font color' style='margin:auto;width:40%;'>"+val[i]+"</h3><p class='font color'>"+a[i]+"</p>";

// }

let val = [
    "What is Holoschool?",
    "Who can use it?",
    "What are you waiting for?"
];

let a = [
    "Holoschool is a free Lebanese platform that makes learning easier. This page provides math lessons, especially 'the orthogonality in space' lesson, in an interactive way using 3D shapes that can be viewed from all angles.",
    "This page is made especially for second-year high school students. Both teachers and students can use it.",
    "If you are interested, <a href='#' class='link'>start now</a>!"
];

let i = 0;
function changeRight() {
    i = (i + 1) % val.length;
    updateContent();
}

function changeLeft() {
    i = (i - 1 + val.length) % val.length;
    updateContent();
}
function changecolor(){
    let prop=document.querySelectorAll(".properties>*");
    if(document.getElementById("darkmode").checked==true){
        document.body.style.backgroundColor="black";
        document.querySelector(".properties").style.borderColor="white";
        for (let i=0; i<prop.length;i++){
            prop[i].style.color="white";
        }
    }else{
        document.body.style.backgroundColor="white";
        document.querySelector(".properties").style.borderColor="black";
        for (let i=0; i<prop.length;i++){
            prop[i].style.color="black";
        }
    }
}

function updateContent() {
    let title = document.getElementById("title");
    let para = document.getElementById("para");

    title.style.opacity = "0";
    para.style.opacity = "0";

    setTimeout(() => {
        title.innerHTML = val[i];
        para.innerHTML = a[i];

        title.style.opacity = "1";
        para.style.opacity = "1";
    }, 300);
}
function totutors(){
     window.location.href="tutors.html"
}
function tolessons(){
      window.location.href="lesson.html"
}
function gotoortho(){
     window.location.href="ortho.html"
}

function getStarted() {
    alert("Redirecting to the learning page...");
    window.location.href = "#"; // Replace with the actual link
}

let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
function reset(){
    let stars = document.querySelectorAll(".stars-card > .star");
    for(let i=0; i<stars.length;i++){
        stars[i].style.color="#c4baba69";        
    }

}
function gfg(a){
    reset();
    let stars = document.querySelectorAll(".stars-card > .star");
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
// let videos = ["../Videos/cercle_1920_1080_30fps.mp4","../Videos/ocean_1920_1080_30fps.mp4","../Videos/polygonwave-hd_1920_1080_24fps.mp4"];
function load(){
    let video= document.getElementById("myVideo");
    // document.querySelector("video > source").src = videos[Math.floo];
    video.playbackRate= 0.5;

}
