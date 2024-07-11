import './style.css';

const selectFeild = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options")
const list = document.getElementById("list")
const arrowIcon = document.getElementById("arrowIcon")

selectFeild.onclick = function (){
  list.classList.toggle("hide")
  arrowIcon.classList.toggle('rotate')
}
for(const option of options){
  option.onclick = function(){
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.remove('rotate');
  }
}
