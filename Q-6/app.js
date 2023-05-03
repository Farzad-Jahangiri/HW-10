function hideButton() {
    // hide the text and button elements
    document.getElementById("text").style.display = "none";
    document.getElementById("button").style.display = "none";

    // create a new div element with text
    let newDiv = document.createElement("div");
    let newText = document.createTextNode("The button has been hidden.");
    newDiv.appendChild(newText);

    // add the new div element to the container
    let container = document.getElementById("container");
    container.appendChild(newDiv);
}