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
        whoarewe:"what is holoschool?",
        para:"Holoschool is a free lebanese platform that makes learning easier , this page provides math lessons especially the orthogonality in space lesson in an interactive way using 3d shapes that can be seen from all angles ",
        para2:"This page is made especially for second year of high school, both teachers and students can use it"
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
            whoweare:"Qu’est-ce que l’Holoschool ?",
            para:"Holoschool est une plateforme libanaise gratuite qui facilite l’apprentissage, cette page propose des cours de mathématiques, en particulier « l’orthogonalité dans l’espace », de manière interactive en utilisant des formes 3D qui peuvent être vues sous tous les angles .",
            para2:"Cette page est faite spécialement pour la deuxième année du secondaire, les enseignants et les élèves peuvent l’utiliser"
        },
        footer:{
            contactus:"Contactez-nous"
        }
    }
}
let val =["What is Holoschool?","who can use it?",""];
let a= ["Holoschool is a free lebanese platform that makes learning easier , this page provides math lessons especially 'the orthogonality in space' lesson in a interactive way using 3d shapes that can be seen from all angles ","This page is made especially for second year of high school, both teachers and students can use it ","if you are intrested , start now"];
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
