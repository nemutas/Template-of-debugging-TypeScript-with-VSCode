"use strict";
const button = document.querySelector("button");
function clickHandler(message) {
    console.log("Click! " + message);
}
button.addEventListener("click", clickHandler.bind(null, "Hello Typescript"));
//# sourceMappingURL=app.js.map