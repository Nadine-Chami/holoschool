const languages = {
  en: {
    nav: {
      lessons: "Lessons",
      ex: "Exercises",
      tutors: "Tutors",
      contactus: "Contact Us",
      french: "French ",
      eng: "english",
    },
    main: {
      whatisholo: "What is Holoschool?",

      para: "Holoschool is a free lebanese platform that makes learning easier ,this page provides math lessons especially 'the orthogonality in space' lesson in a interactive way using 3d shapes that can be seen from all angles",
      getStarted: "GET STARTED",
      ortho: "l'orthogonalité dans l'espace",
      fun: "Function",
      vec: "Vector space",
      seemore: "SEE MORE",
      extitle1: "ex in orthogonality in space",
      expara1: "ex1: ABCDEFGH is a cube , (ab)//(cd)...",
      extitle2: "ex in fucntion",
      expara: "ex1: f(x)=2x^2-5 ...",
      extitle3: "ex in vector in space",
      extitle3: "ex1: determine the collinear vectors...",
    },
    footer: {
      contactus: "Contact us",
    },
  },

  fr: {
    nav: {
      lessons: "Leçons",
      ex: "Exercices",
      tutors: "Tuteurs",
      contactus: "Contactez-nous",
      french: "Français ",
      eng: "Anglais",
    },
    main: {
      whatisholo: "Qu'est-ce que l'Holoschool?",
      para: "Holoschool est une plate-forme libanaise gratuite qui facilite l'apprentissage, cette page propose des leçons de mathématiques, en particulier la leçon sur l'orthogonalité dans l'espace, de manière interactive en utilisant des formes 3D qui peuvent être vues sous tous les angles",
      getStarted: "Commencer",
      ortho: "l'orthogonalité dans l'espace",
      fun: "Fonction",
      vec: "Vecteur de l'espace",
      seemore: "Voir plus",
      extitle1: "ex de l'orthogonalité dans l'espace",
      expara1: "ex1: ABCDEFGH est un cube , (ab)//(cd)...",
      extitle2: "ex de foncntion",
      expara: "ex1: f(x)=2x^2-5 ...",
      extitle3: "ex de vecteyr de l'espace",
      extitle3: "ex1: Déterminer les vecteurs colinéaires...",
    },
    footer: {
      contactus: "Contactez-nous",
    },
  },
};
let english = document.getElementById("en");
let french = document.getElementById("fr");
english.addEventListener("click", console.log("test"));
french.addEventListener("click", (language) => {
  let lessons = document.getElementsByClassName("lesfr");
  let tutors = document.getElementsByClassName("tufr");
  let exercises = document.getElementsByClassName("exfr");
  let cont = document.getElementsByClassName("contactfr");
  let title = document.getElementById("title");
  title.innerHTML = languages.fr.main.whatisholo;
  let para2 = document.getElementById("para1");
  para2.innerHTML = languages.fr.main.para;
  let gets = document.getElementById("getfr");
  gets.innerHTML = languages.fr.main.getStarted;
  let eng = document.getElementById("en");
  eng.innerHTML = languages.fr.nav.eng;
  let fran = document.getElementById("fr");
  fran.innerHTML = languages.fr.nav.french;
  for (let i = 0; i < lessons.length; i++) {
    lessons[i].innerHTML = languages.fr.nav.lessons;
  }
  for (let i = 0; i < tutors.length; i++) {
    tutors[i].innerHTML = languages.fr.nav.tutors;
  }
  for (let i = 0; i < exercises.length; i++) {
    exercises[i].innerHTML = languages.fr.nav.ex;
  }
  for (let i = 0; i < cont.length; i++) {
    cont[i].innerHTML = languages.fr.nav.contactus;
  }
});

let en = document.getElementById("en");
let fr = document.getElementById("fr");
fr.addEventListener("click", language);
en.addEventListener("click", (language) => {
  let lessons = document.getElementsByClassName("lesfr");
  let tutors = document.getElementsByClassName("tufr");
  let exercises = document.getElementsByClassName("exfr");
  let cont = document.getElementsByClassName("contactfr");
  let title = document.getElementById("title");
  title.innerHTML = languages.en.main.whatisholo;
  let para2 = document.getElementById("para1");
  para2.innerHTML = languages.eng.main.para;
  let gets = document.getElementById("getfr");
  gets.innerHTML = languages.en.main.getStarted;
  let eng = document.getElementById("en");
  eng.innerHTML = languages.en.nav.eng;
  let fran = document.getElementById("fr");
  fran.innerHTML = languages.en.nav.french;
  for (let i = 0; i < lessons.length; i++) {
    lessons[i].innerHTML = languages.en.nav.lessons;
  }
  for (let i = 0; i < tutors.length; i++) {
    tutors[i].innerHTML = languages.en.nav.tutors;
  }
  for (let i = 0; i < exercises.length; i++) {
    exercises[i].innerHTML = languages.en.nav.ex;
  }
  for (let i = 0; i < cont.length; i++) {
    cont[i].innerHTML = languages.en.nav.contactus;
  }
});

let val =["What is Holoschool?","Who can use it?","What are you waiting for?"];
let a = ["Holoschool is a free lebanese platform that makes learning easier , this page provides math lessons especially 'the orthogonality in space' lesson in a interactive way using 3d shapes that can be seen from all angles","This page is made especially for second year of high school, both teachers and students can use it ","if you are intrested , <a class=' font color' href=''>start now</a>"];
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
function changecolor() {
  let prop = document.querySelectorAll(".properties>*");
  if (document.getElementById("darkmode").checked == true) {
    document.body.style.backgroundColor = "black";
    document.querySelector(".properties").style.borderColor = "white";
    for (let i = 0; i < prop.length; i++) {
      prop[i].style.color = "white";
    }
  } else {
    document.body.style.backgroundColor = "white";
    document.querySelector(".properties").style.borderColor = "black";
    for (let i = 0; i < prop.length; i++) {
      prop[i].style.color = "black";
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
function totutors() {
  window.location.href = "tutors.html";
}
function tolessons() {
  window.location.href = "lesson.html";
}
function gotoortho() {
  window.location.href = "ortho.html";
}
function gotofun(){
  window.location.href = "fonction.html";
}
function gotocube(){
  window.location.href = "cube2.html";
}
function gototetra(){
  window.location.href = "tetraedre.html";
}
function gotocuboid(){
  window.location.href="rectangle.html";
}
function gotosphere(){
  window.location.href = "sphere.html";
}
function getStarted() {
  alert("Redirecting to the learning page...");
  window.location.href = "#"; 
}

let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

function reset() {
  let stars = document.querySelectorAll(".stars-card > .star");
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.color = "#c4baba69";
  }
}
function gfg(a) {
  reset();
  let stars = document.querySelectorAll(".stars-card > .star");
  let color;

  switch (a) {
    case 0:
      color = "#002E50";
      break;
    case 1:
      color = "#0c67bc";
      break;
    case 2:
      color = "#4f86f7 ";
      break;
    case 3:
      color = "#00bfff ";
      break;
    case 4:
      color = "#9ACFFF";
      break;
    default:
      color = "#c4baba69";
      break;
  }
  for (let i = 0; i <= a; i++) {
    stars[i].style.color = color;
  }
  let rate = document.getElementById("rate");
  rate.value = a + 1;
}
function request() {
  let inputs = document.querySelectorAll("#feedback input");
  console.log(inputs);
  let empty = document.querySelectorAll(".empty");
  let pass = true;
  for (let i = 0; i < inputs.length - 3; i++) {
    if (inputs[i].value == null || inputs[i].value == "") {
      empty[i].innerHTML = "Cannot be empty";
      empty[i].style.color = "#FF0000";
      pass = false;
    } else {
      empty[i].innerHTML = "";
    }
  }
  return pass;
}
function load() {
  let video = document.getElementById("myVideo");
  video.play();
  video.playbackRate = 0.5;
}
function togglepdf(pdfpath) {
  let pdfcontainer = document.getElementById("pdfcontainer");
  let togglebutton = document.getElementById("togglebutton");
  if (pdfcontainer.style.display === "none") {
    pdfcontainer.src = pdfpath;
    pdfcontainer.style.display = "block";
    togglebutton.textcontent = "hide pdf";
  } else {
    pdfcontainer.style.display = "none";
  }
}
function togglepdf2(pdfpath2) {
  let pdfcontainer2 = document.getElementById("pdfcontainer2");
  let togglebutton2 = document.getElementById("togglebutton2");
  if (pdfcontainer2.style.display === "none") {
    pdfcontainer2.src = pdfpath2;
    pdfcontainer2.style.display = "block";
    togglebutton2.textcontent = "hide pdf";
  } else {
    pdfcontainer2.style.display = "none";
  }
}

function showprops() {
  const properties = document.getElementById("properties");
  if (properties.style.display === "none") {
    properties.style.display = "block";
  } else {
    properties.style.display = "none";
  }
}

  

function showstudent(){
  let student=document.getElementById("student");
  let person=document.getElementById("choice");
  person.innerHTML="<div class='student'> <label>Grade:</label><br><input type='text' id='name'></div> <div> <label>School:</label><br> <input type='text' id='name'></div>";
}
 function showteacher(){
  let teacher=document.getElementById("teacher");
  let person=document.getElementById("choice");
  person.innerHTML="<div class='teacher'><label> schools you teach in</label><br><input type='text' id='name' name='name'></div><div>   <label>number</label><br><input type='text' id='name' name='name'></div>"
 }

function showstudent2(){
  let student2=document.getElementById("student2");
  let person2=document.getElementById("choice2");
  person2.innerHTML="<div class='student'> <label>Grade:</label><br><input type='text' id='name'></div><div> <label>School:</label><br> <input type='text' id='name'></div><div> <label>Date of birth</label><br> <input type='date' id='birth'></div>"
}
 function showteacher2(){
  let teacher2=document.getElementById("teacher2");
  let person2=document.getElementById("choice2");
  person2.innerHTML="<div class='teacher'><label> schools you teach in</label><br><input type='text' id='name' name='name'></div><div>   <label>number</label><br><input type='text' id='name' name='name'></div>"
 }

function returnScore(){
  let score = 0;
  
  let answer=[2,3,3,1]
  for(let i=0;i<answer.length;i++){
    let option = document.querySelector("input[name=question"+i+"]:checked").value;
    if(option==answer[i]){
      score++;
    }
    let options = document.querySelectorAll("input[name=question"+i+"]");
    let corrections=document.querySelectorAll(".corrections"+i);
    for(let j=0;j<options.length;j++){
      if(options[j].value==answer[i]){
        corrections[j].textContent = "CORRECT ANSWER";
        corrections[j].style.color = "green";
      }  
    } 
  }
  let result = document.getElementById("myresults");
  result.textContent=score+"/"+answer.length;
  let buttonResult = document.getElementById("btn-result");
  buttonResult.disabled = true;
  buttonResult.style.background="grey";
  buttonResult.style.cursor="no-drop";

  
  return score;
}
function resetMCQ(){
  score = 0;
  let buttonResult = document.getElementById("btn-result");
  buttonResult.disabled = false;
  buttonResult.style.background="#45a049";
  buttonResult.style.cursor="pointer";

  let result = document.getElementById("myresults");
  result.textContent="Results will appear here";
  for(let i = 0;i<corrections.length;i++){
    let options = document.querySelectorAll("input[name=question"+i+"]");
    let corrections=document.querySelectorAll(".corrections"+i);
    corrections[i].textContent = "";
    corrections[i].style.color="";
  }
  
 
}
function showshapes() {
  const shapes = document.getElementById("shapes");
  if (shapes.style.display === "none") {
    shapes.style.display = "block";
  } else {
    shapes.style.display = "none";
  }
}
// Select the arrow element{}
function rotation(){
const arrow = document.getElementById('arrow');

// Add an event listener to rotate the arrow when clicked
arrow.addEventListener('click', () => {
  arrow.classList.toggle('rotate');
});}



function returnScoref(){
  let score = 0;
  
  let answer=[1,3,3,1]
  for(let i=0;i<answer.length;i++){
    let option = document.querySelector("input[name=question"+i+"]:checked").value;
    if(option==answer[i]){
      score++;
    }
    let options = document.querySelectorAll("input[name=question"+i+"]");
    let corrections=document.querySelectorAll(".corrections"+i);
    for(let j=0;j<options.length;j++){
      if(options[j].value==answer[i]){
        corrections[j].textContent = "CORRECT ANSWER";
        corrections[j].style.color = "green";
      }  
    } 
  }
  let result = document.getElementById("myresults");
  result.textContent=score+"/"+answer.length;
  let buttonResult = document.getElementById("btn-result");
  buttonResult.disabled = true;
  buttonResult.style.background="grey";
  buttonResult.style.cursor="no-drop";

  
  return score;
}
function resetMCQ(){
  score = 0;
  let buttonResult = document.getElementById("btn-result");
  buttonResult.disabled = false;
  buttonResult.style.background="#45a049";
  buttonResult.style.cursor="pointer";

  let result = document.getElementById("myresults");
  result.textContent="Results will appear here";
  for(let i = 0;i<corrections.length;i++){
    let options = document.querySelectorAll("input[name=question"+i+"]");
    let corrections=document.querySelectorAll(".corrections"+i);
    corrections[i].textContent = "";
    corrections[i].style.color="";
  }
  
 
}
