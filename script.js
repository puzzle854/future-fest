var prevScrollPos = window.pageYOffset;
var header = document.getElementById("cabeçalho");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
    }
    
    prevScrollPos = currentScrollPos;
}
