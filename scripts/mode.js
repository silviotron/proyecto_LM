// Get the root element
var r = document.querySelector(":root");
// Create a function for setting a variable value
function oscuro_set() {
  r.style.setProperty("--main-color", "var(--oscuro-main-color)");
  r.style.setProperty("--second-color", "var(--oscuro-second-color)");
  r.style.setProperty("--text-color", "var(--oscuro-text-color)");
  r.style.setProperty("--bg-color", "var(--oscuro-bg-color)");
  r.style.setProperty("--cookie-filter", "var(--oscuro-cookie-filter)");
  document.cookie = "modo = oscuro; path=/silviotron.github.io";

}
function claro_set() {
  r.style.setProperty("--main-color", "var(--claro-main-color)");
  r.style.setProperty("--second-color", "var(--claro-second-color)");
  r.style.setProperty("--text-color", "var(--claro-text-color)");
  r.style.setProperty("--bg-color", "var(--claro-bg-color)");
  r.style.setProperty("--cookie-filter", "var(--claro-cookie-filter)");
  document.cookie = "modo = claro; path=/silviotron.github.io;"
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
function load_modo(){
  var checkBox = document.getElementById("myCheck");
  if(document.cookie = "modo = oscuro; path=/silviotron.github.io"){
    document.getElementById("myCheck").cheked = true;
  }else if(document.cookie = "modo = claro; path=/silviotron.github.io"){
    document.getElementById("myCheck").cheked = false;
  }
  modo_set();
}