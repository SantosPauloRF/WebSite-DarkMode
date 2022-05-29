## - Website with dark mode / - Website com darkmode

## ![](images/uk-ico.jpg) - English - ![](images/uk-ico.jpg)

🌟**Hello!**🌟 

Welcome to my page! 

This is my firs website. 👨‍🎓 I am a 2 months experience developer and i am stil learning basics of Js, Html, Css and studying Kotlin at the side. 

This project was just to traine how make an responsive website with dark mode.

The idea was just to toggle a class into body-tag that changes the background collor to a dark-purple and the font collor to white.

That option is very good in terms of acessibility as some people have bright light sensitivity. 

In the [css file](styles/style.css) you can see at bottom (befor the ``` @media query ```) all the changes that is made to the classes when you press the switch button. 

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

To change any other atribute, was easly done just adding ```.dark ``` + the class i wanted to change.

For the action of changing the style, i used the .EventListener javascript proprety to listen to a ```'click'``` event and when that happen, toggle the ```.dark``` class into ```<body>``` tag. Also made a new class for the circle inside of the switch to moove when the same event happens. 

Check it out the [Javascript](script.js) file.

👇

```js

let btn = document.querySelector(".btnDark");
let circulo = document.querySelector(".circulo");

btn.addEventListener('click', function(){

    document.body.classList.toggle("dark");
    circulo.classList.toggle("circulo2");

});
```

Other then that, you can see that i used flex box to make all the parts of the website responsive. For the video blocks on the center, i used ```flex-wrap: wrap;``` to make them wrap into each other as the screen get smaller (didnt want to change their size as that will compromise the understanding of the content).

Also some basic animations in the content as you hover into them. Same with the menu buttons ( made divs and didnt use ```<buttom>``` so i couls full personalise them). I ancor the button clicks to the content and the footer ids, so when you press them the page goes to those sections.

Still a bunch of things i can do better, but thats my first website and my objective of make a responsive dark mode was achive! 

Any constructive comments pleas send me a message on [linkedin](https://www.linkedin.com/in/paulo-rafael-faria-dos-santos-a2ba65235/)

Thank you very much! 👋🙂

## ![](images/br-ico.jpg) - Português - ![](images/br-ico.jpg)

🌟**Olá!**🌟

 Bem vindo a minha página! 

Esse foi meu primeiro website. 👨‍🎓 🌟Sou um desenvolvedor em treinamento e tenho 2 meses de experiêcia (até esta data 29/05). Estou aprendendo os básicos de Js, Html, Css e estudando um pouco de Kotlin.

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

Inseri algumas animações basicas nos botões e conteudo, para quando passar o mouse por cima deles. Os botões eu utilizei ```<div>``` para fazer eles para que podesse ediar do zero e por isso não utilizei a tag ```<buttom>```. Pus ancoras nos botões para que a tela se movesse para a parte do conteudo desejado, utilizando partes do site com id's e quando clicado a tela pularia para aquela seção do site. 

Ainda muitas coisas que posso melhorar, mas acredito que meu objetivo de fazer o dark mode e o site responsivo foi alcançado! 

Qualquer comentário construtivo será bem vindo. Pode me mandar uma mensagem no meu [linkedin](https://www.linkedin.com/in/paulo-rafael-faria-dos-santos-a2ba65235/)

Obrigado!! 👋🙂