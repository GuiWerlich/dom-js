const article = document.createElement("article");
const articleTitle = document.createElement("h2");
const articleResume = document.createElement("p");
const articleButton = document.createElement("button");

articleTitle.innerText = "Como criar elementos HTML de forma dinâmica, utilizando Javascript"
articleResume.innerText = "Nesse post vamos aprender como criar elementos utilizando o DOM"
articleButton.innerText = "Acessar conteúdo"


article.appendChild(articleTitle);
article.appendChild(articleResume);
article.appendChild(articleButton);

const body = document.querySelector("body")
body.appendChild(article)