var typed = new Typed('#element', {
    strings: [ 'Web Developer ', 'Web Designer'],
    typeSpeed: 100,
    backspeed: 100,
    backdelay: 1000,
    loop: true
});



function light() {
   document.getElementById('mode').style.background="linear-gradient(to right,#7dd3fc,#fb7185)";
}
function dark() {
  document.getElementById('mode').style.background="linear-gradient(to right,#86efac,black)";
}



var z
function change() {
    z = document.getElementById('img').style.background="url('bg2.jpg')";
    
}