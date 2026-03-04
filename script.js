console.log("Script started");

function changeStyle() {
    console.log("click");

    //Get the p element and store it in a variable
    let p = document.getElementById("text");
    
    //set some styles
    p.style.color = "rdg";
    p.style.fontSize = "50px";
    p.style.textAlign = "center";
    p.style.backgroundColor = "white";
}