// To ensure that it generates JavaScript Char keycodes instead of ASCII keycodes, use event.key and event.code instead 
// of event.which. using event.which is outdated, and generates ASCII keycodes which are also seen as outdated. 
// JavaScript keycodes can be generated using the more modern event.key and event.code which are more widely used
// on the web today.



// below made using info from YouTube vid 'Making a Key Code Generator App Using HTML, CSS & JavaScript' https://www.youtube.com/watch?v=jOLwRV6xSwA
// 

const displayKey = document.querySelector(".key h2");
const displayKeyCode = document.querySelector(".keyCode h2");
const keyCodeDiv = document.querySelector(".keyCode");
const overlay = document.querySelector(".overlay");

window.addEventListener("keydown", (e) => {
  overlay.classList.add("hide");
  displayKey.innerHTML = e.key;
  displayKeyCode.innerHTML = e.keyCode;
  if (e.keyCode === 32) {
    displayKey.innerHTML = `'space'`;
  }
});

keyCodeDiv.addEventListener("click", (e) => {
  const textArea = document.createElement("textarea");
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.value = displayKeyCode.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  keyCodeDiv.querySelector("p").innerText = "Copied";
  setTimeout(() => {
    keyCodeDiv.querySelector("p").innerText = "Click to Copy";
  }, 2000);
});