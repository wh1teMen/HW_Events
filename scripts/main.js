document.write(
`<div class="box">
<div class="flashlight">
    <div id="red"></div>
    <div id="yellow"></div>
    <div id="green"></div>
</div>
<div id="btn">OFF</div>
</div>`
);
const color = ['red', 'yellow', 'green', 'white'];
var button = false;
var countClick = 0;
btn.addEventListener('click', e => {
    console.log(e);
    countClick++;
    if (countClick % 2 != 0) {
         e.target.innerText = 'ON';
          button = true; 
           red.style['background-color'] = color[0]; 
        }
    if (countClick % 2 == 0) {
        e.target.innerText = 'OFF'; button = false;
        red.style['background-color'] = color[3];
        yellow.style['background-color'] = color[3];
        green.style['background-color'] = color[3];
    }
});
red.addEventListener('click', e => {
    if (button == true) {
        red.style['background-color'] = color[0];
        yellow.style['background-color'] = color[3];
        green.style['background-color'] = color[3];
    }


});
yellow.addEventListener('click', e => {
    if (button == true) {
        red.style['background-color'] = color[3];
        yellow.style['background-color'] = color[1];
        green.style['background-color'] = color[3];
    }


});
green.addEventListener('click', e => {
    if (button == true) {
        red.style['background-color'] = color[3];
        yellow.style['background-color'] = color[3];
        green.style['background-color'] = color[2];
    }

});