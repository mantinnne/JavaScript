"use strick";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";


circles[0].style.backgroundColor = 'red';

// for ( let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div'); // создается элемент только внутри JS скрипта.

// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);

wrapper.append(div);


// wrapper.appendChild(div); // устаревший метод



// wrapper.prepend(div);

// hearts[0].before(div); // вставляет элемент перед

// hearts[0].after(div); // вставляет элемент после 


// wrapper.insertBefore(div,hearts[2]); // вставляет элемент перед вторым ( устаревший метод)






// circles[0].remove(); // удаляет элемент.

// wrapper.removeChild(hearts[1]);  // устаревший метод удаления


// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);


 div.innerHTML = "<h1>Hello world</h1>";

//  div.textContent = "Hello";

// div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');