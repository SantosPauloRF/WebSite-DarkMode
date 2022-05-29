## - Website com darkmode

🌟Olá!🌟

 Bem vindo a minha página! 

Esse foi meu primeiro website. 👨‍🎓 Sou um desenvolvedor em treinamento e tenho 2 meses de experiêcia (até esta data 29/05). Estou aprendendo os básicos de Js, Html, Css e estudando um pouco de Kotlin.

Esse projeto foi para treinar a opção "dark mode" em um site responsivo. 

A ideia foi introduzir uma nova classe no ```<body>``` que mudasse o background collor para um roxo escuro e a fonte para branco.

A opção de ter "dark mode" é muito importante em termos de acessibilidade uma vez que muitas pessoas tem sensibilidade ao brilho da luz. 

No [arquivo Css](styles/style.css) você pode ver no final (antes do ``` @media query ```) todas as mudanças que foram feitas a classe quando apertado o botão do dark mode.

👇

```css
/* -----------> DARK MODE<--------------*/

.dark{
    background-color: rgba(45, 1, 52, 0.942);
    color: white;
}
.videos{
    color: black;
}


/* ----> DARK - BOTOES INICIO <----*/


.dark .btnVideos{
    color: rgb(255, 255, 255);
}
...
```

Para mudar outros atributos, foi apenas inserir ```.dark ``` antes da classe que eu queria mudar, e edita-la normalmente.

Para ação de mudar o estilo, usei o ```.EventListner```, uma propriedade do javascript para ouvir o evento ```'click'``` e quando isto acontecesse, a classe ```.dark``` era inserida no ```<body>```. Tambem fiz uma nova classe para o círculo de dentro do switch para que ele se movesse quando o mesmo evento acontecesse. 

Veja o arquivo de [Javascript](script.js).

👇

```js

let btn = document.querySelector(".btnDark");
let circulo = document.querySelector(".circulo");

btn.addEventListener('click', function(){

    document.body.classList.toggle("dark");
    circulo.classList.toggle("circulo2");

});
```

Além disso você pode notar que usei o flex box para fazer todas as partes do site ser responsivo ao tamanho da tela. Para os blocos de video do centro, eu usei ```flex-wrap: wrap;``` para fazer eles ficarem um acima do outro quando a tela fosse diminuindo (não quis mexer no espaço deles pois acho que isso iria comprometer o entedimento do conteúdo).

Inseri algumas animações basicas nos botões e conteudo, para quando passar o mouse por cima deles. Os botões eu utilizei ```<div>``` para fazer eles para que podesse ediar do zero e por isso não utilizei a tag ```<buttom>```. Pus ancoras nos botões para que a tela se movesse para a parte do conteudo desejado, utilizando partes do site com id's e quando clicado a tela pularia para aquela sessão do site. 

Ainda muitas coisas que posso melhorar, mas acredito que meu objetivo de fazer o dark mode e o site responsivo foi alcançado! 

Qualquer comentário construtivo será bem vindo. Pode me mandar uma mensagem no meu [linkedin](https://www.linkedin.com/in/paulo-rafael-faria-dos-santos-a2ba65235/)

Obrigado!! 👋🙂


Volte para o projeto [AQUI](https://github.com/SantosPauloRF/WebSite-DarkMode)