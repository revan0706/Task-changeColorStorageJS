document.body.style.backgroundColor = localStorage.getItem("changeColor");
function change() {
  let backcolor = document.body.style.backgroundColor;
  if (backcolor == "") {
    document.body.style.backgroundColor = "red";
  } else if (backcolor == "red") {
    document.body.style.backgroundColor = "blue";
  } else if (backcolor == "blue") {
    document.body.style.backgroundColor = "green";
  } else if (backcolor == "green") {
    document.body.style.backgroundColor = "";
  }
  console.log(document.body.style.backgroundColor);
  localStorage.setItem("changeColor", document.body.style.backgroundColor);
}
