var typed = new Typed('#element', {
    strings: [ 'Web Developer ', 'Web Designer'],
    typeSpeed: 100,
    backspeed: 100,
    backdelay: 1000,
    loop: true
});


var x,y
function light() {
  x =  document.getElementById('light').backgroundcolor;

  y = document.getElementById('mode').style.background="linear-gradient(to right,#7dd3fc,#fb7185)";
}
function dark() {
  x =  document.getElementById('dark').backgroundcolor;

  y = document.getElementById('mode').style.background="linear-gradient(to right,#86efac,black)";
}



var z
function change() {
    z = document.getElementById('img').style.background="bg2.jpg";
    
}