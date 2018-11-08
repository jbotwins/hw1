let currentHover = "Hello world!";

function performInteraction() {
  if (currentHover == "Hello world!") {
    console.log("Variable not set");;
  } else {
    alert(currentHover);
    return;
  }
}

performInteraction();
