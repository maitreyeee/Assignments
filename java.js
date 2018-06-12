var box = document.getElementById('Box');
var open = document.getElementById("OBtn");
var close = document.getElementsByClassName("Cbtn ")[0];

open.onclick = function() {
    box.style.display = "block";
}

close.onclick = function() {
    box.style.display = "none";
}
