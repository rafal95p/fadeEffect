const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");
const globalButton = document.getElementById("globalButton");
const contentDiv = document.getElementById("contentDiv");


buttonA.addEventListener("click", () => {
    displayContent();
    displayGlobalButton();
    const text = document.getElementById("textA");
    text.style.display != "block" ? text.style.display = "block" : text.style.display = "none";
})
buttonB.addEventListener("click", () => {
    displayContent();
    displayGlobalButton();
    const text = document.getElementById("textB");
    text.style.display != "block" ? text.style.display = "block" : text.style.display = "none";
})
buttonC.addEventListener("click", () => {
    displayContent();
    displayGlobalButton();
    const text = document.getElementById("textC");
    text.style.display != "block" ? text.style.display = "block" : text.style.display = "none";
})
buttonD.addEventListener("click", () => {
    displayContent();
    displayGlobalButton();
    const text = document.getElementById("textD");
    text.style.display != "block" ? text.style.display = "block" : text.style.display = "none";
})

function displayContent() {
    contentDiv.className != "contentDivVisable" ? 
    contentDiv.className = "contentDivVisable" : contentDiv.className = "contentDivInvisable";
}

function displayGlobalButton() {
    globalButton.style.display != "block" ? globalButton.style.display = "block" : globalButton.style.display = "none";
}