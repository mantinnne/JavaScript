// const btn = document.querySelector('button'),
    // overlay = document.querySelector('.overlay');

    const btns = document.querySelectorAll('button');


// btn.onclick = () => {
//     alert('Click');
// };

// btn.onclick = () => {
//     alert(' Second Click');
// };


// btn. addEventListener('click', () => {
//         alert('Click');
// });

// btn. addEventListener('click', () => {
//     alert('Second Click');
// });

// btn. addEventListener('mouseenter', (e) => {        // e-event лбюбое название
//     console.log(e.target);
//     e.target.remove();
// });

// let i = 0;

const deleteElement = (e) => { // e-event лбюбое название
    console.log(e.currentTarget);
    console.log(e.type);


    // // e.target.remove();
    // i++;
    // if (i == 1) {
    //     btn. RemoveEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});