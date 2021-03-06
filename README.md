## - Website with dark mode / - Website com darkmode

## ![](images/uk-ico.jpg) - English - ![](images/uk-ico.jpg)

πHello!π

Welcome to my page!

This is my first website. π¨βπ I've started my journey as a developer in May 2022 but I am still learning the basics of Js, Html, Css and studying Kotlin at the side.

I've created this project to practice creating a responsive website with dark mode.

The idea was just to toggle a class into body-tag that changes the background color to a dark-purple and the font color to white.

That option is very good in terms of acessibility as some people have bright light sensitivity. 

In the [css file](styles/style.css) you can see at the bottom (before the ``` @media query ```) all the changes that was made to the classes when you press the switch button. 

π

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

To change any the other atributes, it's easly done by adding  ```.dark ``` + the class I wanted to change.

To change the style, I used .EventListener Javascript proprety to listen to the ```'click'``` event and when that happens, toggle the ```.dark``` class into ```<body>``` tag. Also made a new class for the circle inside of the switch to moove when the same event happens. 

Check it out the [Javascript](script.js) file.

π

```js

let btn = document.querySelector(".btnDark");
let circulo = document.querySelector(".circulo");

btn.addEventListener('click', function(){

    document.body.classList.toggle("dark");
    circulo.classList.toggle("circulo2");

});
```

Other than that, you can see that I used flex box to make all the parts of the website responsive. For the video blocks at the center, I used ```flex-wrap: wrap;``` to make them stack on top of each other as the screen get smaller (didnt want to change their size as that would compromise the understanding of the content).

Additionally, I created some basic animations on the content as you hover into them. I did the same with the menu buttons (created divs and didnt use```<buttom>``` so I could fully personalize them). I anchored the button clicks to the content and footer ids, so when you press them the page goes to those sections.

There are still lot of things I can improve, but this is my first website project and my objective was to make a responsive dark mode website was achieve!

If you have any constructive comments please send me a message on [linkedin](https://www.linkedin.com/in/paulo-rafael-faria-dos-santos-a2ba65235/).

Thank you very much! ππ

## ![](images/br-ico.jpg) - PortuguΓͺs - ![](images/br-ico.jpg)

πOlΓ‘!π

 Bem vindo a minha pΓ‘gina! 

Esse foi meu primeiro website. π¨βπ Sou um desenvolvedor em treinamento e tenho 2 meses de experiΓͺcia (atΓ© esta data 29/05). Estou aprendendo os bΓ‘sicos de Js, Html, Css e estudando um pouco de Kotlin.

Esse projeto foi para treinar a opΓ§Γ£o "dark mode" em um site responsivo. 

A ideia foi introduzir uma nova classe no ```<body>``` que mudasse o background collor para um roxo escuro e a fonte para branco.

A opΓ§Γ£o de ter "dark mode" Γ© muito importante em termos de acessibilidade uma vez que muitas pessoas tem sensibilidade ao brilho da luz. 

No [arquivo Css](styles/style.css) vocΓͺ pode ver no final (antes do ``` @media query ```) todas as mudanΓ§as que foram feitas a classe quando apertado o botΓ£o do dark mode.

π

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

Para aΓ§Γ£o de mudar o estilo, usei o ```.EventListner```, uma propriedade do javascript para ouvir o evento ```'click'``` e quando isto acontecesse, a classe ```.dark``` era inserida no ```<body>```. Tambem fiz uma nova classe para o cΓ­rculo de dentro do switch para que ele se movesse quando o mesmo evento acontecesse. 

Veja o arquivo de [Javascript](script.js).

π

```js

let btn = document.querySelector(".btnDark");
let circulo = document.querySelector(".circulo");

btn.addEventListener('click', function(){

    document.body.classList.toggle("dark");
    circulo.classList.toggle("circulo2");

});
```

AlΓ©m disso vocΓͺ pode notar que usei o flex box para fazer todas as partes do site ser responsivo ao tamanho da tela. Para os blocos de video do centro, eu usei ```flex-wrap: wrap;``` para fazer eles ficarem um acima do outro quando a tela fosse diminuindo (nΓ£o quis mexer no espaΓ§o deles pois acho que isso iria comprometer o entedimento do conteΓΊdo).

Inseri algumas animaΓ§Γ΅es basicas nos botΓ΅es e conteudo, para quando passar o mouse por cima deles. Os botΓ΅es eu utilizei ```<div>``` para fazer eles para que podesse ediar do zero e por isso nΓ£o utilizei a tag ```<buttom>```. Pus ancoras nos botΓ΅es para que a tela se movesse para a parte do conteudo desejado, utilizando partes do site com id's e quando clicado a tela pularia para aquela sessΓ£o do site. 

Ainda muitas coisas que posso melhorar, mas acredito que meu objetivo de fazer o dark mode e o site responsivo foi alcanΓ§ado! 

Qualquer comentΓ‘rio construtivo serΓ‘ bem vindo. Pode me mandar uma mensagem no meu [linkedin](https://www.linkedin.com/in/paulo-rafael-faria-dos-santos-a2ba65235/)

Obrigado!! ππ