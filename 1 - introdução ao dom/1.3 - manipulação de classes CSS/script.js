let className = "paragraph-black"

function addClassToParagraph() {

    const paragraph = document.querySelector("p");
 
    paragraph.classList.add(className);
 
}


function addAndRemoveClassToParagraph() {
    const paragraph = document.querySelector("p");

    if (paragraph.classList.contains("paragraph-black")) { // Avalia
        paragraph.classList.remove("paragraph-black") // Remove a classe
    } else {
        paragraph.classList.add("paragraph-black") // Adiciona a classe
    }

}


function addAndRemoveClassToParagraphWithToggle() {
    const paragraph = document.querySelector("p");

    paragraph.classList.toggle(className)

}



function toggleChangeText() {

const paragraph = document.querySelector("p");
const classResult = paragraph.classList.toggle(className) 

if (classResult) { 
paragraph.innerText = "Classe Adicionada"
} else {
paragraph.innerText = "Classe Removida"
}

}

toggleChangeText()



/* podemos utilizar um if else para isso mas tem um jeito mais facil*/