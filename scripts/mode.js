// Get the root element
var r = document.querySelector(":root");
// Create a function for setting a variable value
function oscuro_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty("--main-color", "#ff0000b7");
  r.style.setProperty("--second-color", "#000000");
  r.style.setProperty("--text-color", "#ffffff");
  r.style.setProperty("--bg-color", "#2f0300e8");
  r.style.setProperty("--cookie-filter", "invert(1)");
  document.cookie = "modo = claro";

}
function claro_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty("--main-color", "#ff0000b7");
  r.style.setProperty("--second-color", "#f0f0f0");
  r.style.setProperty("--text-color", "#000000");
  r.style.setProperty("--bg-color", "#ffffff");
  r.style.setProperty("--cookie-filter", "invert(0)");
  document.cookie = "modo = oscuro;"

}
function modo_set() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    oscuro_set();
  } else {
    claro_set();
  }
}