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

  (this.dataset.toggleLang === "en")
    ? document.body.classList.remove("ua")
    : document.body.classList.add("ua");
};