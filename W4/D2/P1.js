// innerText & textContent
// innerText:visible rendered text only
// textContent:all text nodes regardless of css
// innerHTML: allows reading or writing HTML markup
// inside an element

const message = document.getElementById("message");
const textContentBtn = document.getElementById("textContentBtn");
const messageTxtBtn = document.getElementById("messageTxtBtn");

document.getElementById("innerTxtBtn").addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});

textContentBtn.addEventListener("click",function(){
    message.textContent = "Updated using textContentBtn";
});

messageTxtBtn.addEventListener("click",function(){
    message.innerText = "Original Message";
});

const box = document.getElementById("box");

document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML = "<strong>Original</strong> Content";
});