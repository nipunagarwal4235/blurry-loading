const loadText = document.querySelector('.loading-text');
const loadText2 = document.querySelector('.load-text');
const bg = document.querySelector('.bg');

let load = 0;
const string = 'Just Travel';
let int = setInterval(blurring , 40);

function blurring (){
    load++;
    if(load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
    loadText2.innerText = `${string}`;
    loadText2.style.opacity = scale(load, 0, 100, 0, 1);
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}