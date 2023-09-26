/***********************************
* Language
***********************************/

function Language(btns) {
  this.btns = document.querySelectorAll("[data-toggle-lang]");

  this.btns.forEach(item => {
    item.addEventListener("click", this.toggle);
  });
}

Language.prototype.toggle = function(e) {
  e.preventDefault();

  (this.dataset.toggleLang === "ua")
    ? document.body.classList.remove("en")
    : document.body.classList.add("en");
};