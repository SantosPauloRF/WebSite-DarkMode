## - Website with dark mode / - Website com darkmode


![](images/uk-ico.jpg) - **English!** - ![](images/uk-ico.jpg)



**Hello!** Welcome to my page! 

This is my firs website. I am a 2 months experience developer and i am stil learning basics of Js, Html, Css and studying Kotlin at the side. 

This project was just to traine to make an responsive website with dark mode.

The idea was just to toggle a class into body-tag that changes the background collor to a dark-purple and the font collor to white.

The option is very good in terms of acessibility as some people have bright-sensitivity. 

In the css file you can see at bottom (befor the ``` @media query ```) all the changes that is made to the classes when you press the switch button. 

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

For the action of changing the style, i used the .EventListener javascript proprety to listen to a 'click' and when that happen, toggle the dark class into body tag. Also made a new class for the circle inside of the switch to moove when the same event happens. 

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

Any constructive comments pleas send me a message on ![linkedin](https://www.linkedin.com/in/paulo-rafael-faria-dos-santos-a2ba65235/)