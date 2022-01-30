import _ from "lodash";
import "./style.css";
import Icon from "./assets/jw-image.jpg";
import MyCsv from "./assets/data.csv";
import MyXml from "./assets/data.xml";

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

document.body.appendChild(component());

console.log(MyCsv);
