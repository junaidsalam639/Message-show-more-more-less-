function addText(){
    let text1 = document.getElementById("text1").value;
    let outputText = document.getElementById("outputText");
    if(text1.length <= 60){
        outputText.innerHTML = `<h1> ${text1} ...</h1>`;
    }else{
        outputText.innerHTML = `<h1> ${text1.slice(0, 50)} ...</h1>` +
        `<button onclick="ReadMore()"> Read More </button>`
    }
}
function ReadMore(){
    let text1 = document.getElementById("text1").value;
    let outputText = document.getElementById("outputText");
    outputText.innerHTML = `<h1> ${text1} </h1>` +
    `<button onclick="ReadLess()" > Read Less </button>`
}
function ReadLess(){
    let text1 = document.getElementById("text1").value;
    let outputText = document.getElementById("outputText");
    outputText.innerHTML = `<h1> ${text1.slice(0, 50)} ...</h1>` +
    `<button onclick="ReadMore()" id="btn"> Read More </button>`;
}