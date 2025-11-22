function doSomething() {
    alert("Resume button clicked!");
}

let explore = document.querySelectorAll(".explore");
explore.forEach((btn) => {
    btn.addEventListener("click", () => {
       location.href = "https://www.google.com/";
    });
});
