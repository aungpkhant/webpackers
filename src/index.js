import _ from "lodash";
import "./style.css";
import Icon from "./assets/jw-image.jpg";
import MyCsv from "./assets/data.csv";
import MyXml from "./assets/data.xml";
import printMe from "./print";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.style.width = "200px";
  myIcon.style.height = "auto";

  element.appendChild(myIcon);

  return element;
}

function component2() {
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";

  btn.onclick = printMe;
  return btn;
}

document.body.appendChild(component());
document.body.appendChild(component2());

console.log(MyCsv);
console.log(MyXml);
