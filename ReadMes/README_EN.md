## - Website with dark mode

🌟Hello!🌟 

Welcome to my page! 

This is my firs website. 👨‍🎓 I am a 2 months experience developer (to this date 05/29/22) and i am stil learning the basics of Js, Html, Css and studying Kotlin at the side. 

This project was just to traine how to make an responsive website with dark mode.

The idea was just to toggle a class into body-tag that changes the background collor to a dark-purple and the font collor to white.

That option is very good in terms of acessibility as some people have bright light sensitivity. 

In the [css file](styles/style.css) you can see at the bottom (befor the ``` @media query ```) all the changes that was made to the classes when you press the switch button. 

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

Other then that, you can see that i used flex box to make all the parts of the website responsive. For the video blocks in the center, i used ```flex-wrap: wrap;``` to make them wrap into each other as the screen get smaller (didnt want to change their size as that will compromise the understanding of the content).

Also some basic animations in the content as you hover into them. Same with the menu buttons ( made divs and didnt use ```<buttom>``` so i could fully personalize them). I ancor the button clicks to the content and footer ids, so when you press them the page goes to those sections.

Still a bunch of things i can do better, but thats my first website and my objective of make a responsive dark mode was achive! 

Any constructive comments please send me a message on [linkedin](https://www.linkedin.com/in/paulo-rafael-faria-dos-santos-a2ba65235/)

Thank you very much! 👋🙂

Go back to the project [HERE](https://github.com/SantosPauloRF/WebSite-DarkMode)