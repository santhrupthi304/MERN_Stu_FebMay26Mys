// getElementById
// console.log("Document object: ",document);
// console.log("Page title",document.title);

// const heading = document.getElementById("mainHeading");
// console.log("Heading text",heading.textContent);

// getElementByClassName
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");
// getElementByTagName
const spanTag = document.getElementsByTagName("span");

run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }
    for (let i = 0; i < spanTag.length; i++) {
        spanTag[i].style.background = "green";
    }
    // Query selector: returns the first element
    // matching a css selector
    const mainFirstHeading = document.querySelector(".mainHeading");
    mainFirstHeading.style.color = "red";
});

// QuerySelectorAll: returns all elements matching the selector
const task = document.querySelectorAll(".task");
// task.style.color="purple";
task.forEach(function(task){
    task.style.color="purple";
});
