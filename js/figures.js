var i = 0;
var txt = "Minimalism at its peak ."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
  if (i < txt.length) {
    element = document.getElementById("write");
    console.log(element);
    element.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
