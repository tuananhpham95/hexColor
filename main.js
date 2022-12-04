const background_hexcolor = document.querySelector('.hexcolor');

const hexid = document.getElementById('text');

const hexid2 = document.getElementById('text2');

const button = document.querySelector('.btn');

button.addEventListener('click', changeHexColor);

function changeHexColor(){
    let hex = "#";
    let hex2 = '#'
    const array = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for(let i = 0; i < 6; i++ ){
        hex += array[randomColor(array)];
        hex2 += array[randomColor(array)];
    }
    background_hexcolor.style.backgroundColor = hex;
    button.style.backgroundColor = hex2;
    hexid.textContent = hex;
    /* hexid2.textContent = hex2; */

}
function randomColor(array){
    return Math.floor(Math.random()*array.length);
}



