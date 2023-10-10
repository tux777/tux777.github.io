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

    var tooltip = document.getElementById('tooltip');
    var github_social = document.getElementById('social-1');
    var threads_social = document.getElementById('social-2');

    buttons = [github_social, threads_social]

    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("mouseenter", tooltipEnterFunc, false)
        buttons[i].addEventListener("mousemove", tooltipMoveFunc, false)
        buttons[i].addEventListener("mouseleave", tooltipLeaveFunc, false)
    }

    function tooltipEnterFunc(e) {
        console.log("Mouse has entered")
        setTimeout(() => {
            tooltip.style.opacity = "1";
        }, 500)
    }

    function tooltipMoveFunc(e) {
        tooltip.style.left = e.pageX - 30 + 'px';
        tooltip.style.top = e.pageY + 5 + 'px';
    }

    function tooltipLeaveFunc(e) {
        console.log("Mouse Has Left")
        tooltip.style.opacity = "0";
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