// 291
window.onload = function(){
    // Fade into page
    document.body.style.opacity = 1;
    // Navbar stuff
    var socialButton = document.getElementById("social-indicator-toggle");
    var socialBar = document.getElementById("social-bar")
    socialButton.onclick = () => {
        socialBar.style.borderColor = "#FFFFFF"
        setTimeout(() => {
            socialBar.style.borderColor = "orange"
        },600)
    }
    // Typewriter effect
    const html = document.getElementsByTagName("html")[0];
    var width = "";
    if (html.id == "index") {
        console.log("index")
        width = "236px";
    } else if (html.id == "about") {
        console.log("about")
        width = "197px";
    } else if (html.id == "projects"){
        console.log("projects")
        width = "233px";
    }

    const greeting = document.getElementById("greeting");
    greeting.style.transition = "width 2s steps(12)";
    greeting.style.width = width
    greeting.addEventListener("transitionend", () => {
        if (greeting.style.width == width){
            setTimeout(() => {
                greeting.style.transition = "width 1s steps(12)";
                greeting.style.width = "0px";
            }, 2000)
        } else if (greeting.style.width == "0px"){
            setTimeout(() => {
                greeting.style.transition = "width 2s steps(12)";
                greeting.style.width = width;
            }, 1000)
        }
    })
}