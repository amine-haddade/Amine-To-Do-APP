const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById('list-container');  



function addTsk(){
    if(inputBox.value === ''){  // si usr taper une tache vide
        alert("veullier taper voter tache!");// messagbox
    }
    else{
        let li = document.createElement("li");// ajouet une elment li et stocker dans une varible li

        li.innerHTML = inputBox.value; // coller l valuer de input dans l'elemnt html li
        
        listContainer.appendChild(li);// afficher l'elemnt dans html

        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)

    }
    inputBox.value="";// vider  input une fois add button
    savedeta()
}
listContainer.addEventListener("click",function(e){  // Lorsque clicker sur elemnt li applicer le block suivant
    if(e.target.tagName==="LI"){ // name de elment est li create 
        e.target.classList.toggle("cheked")// neveau element prend une class cheked
        savedeta()

    }
    else{
        if(e.target.tagName=="SPAN"); // Lorsque clicker sur elemnt span applicer le block suivant
        e.target.parentElement.remove();// supprimer le elment parent li dispaly none
        savedeta()
    }
},false);


function savedeta(){
    localStorage.setItem("data",listContainer.innerHTML) //  ==> cette functio permet de save les task et tous les action dlet and update 

}
function afficherTask(){
    listContainer.innerHTML=localStorage.getItem("data")  /// a fiicher les task save dans le position de task
}
afficherTask()