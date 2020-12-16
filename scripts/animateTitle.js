var i = 0;
var title = "Isa Milefchik";
var speed = 50;

function typing() {
    var span = document.getElementById("title");
    if (i < title.length) {
        span.innerHTML = span.innerHTML.replace('_', '');
        span.innerHTML += title.charAt(i);
        span.innerHTML += "_";
        i++;
        setTimeout(typing, speed);
    } else {
        if (span.innerHTML.charAt(span.innerHTML.length - 1) == '_') {
            span.innerHTML = span.innerHTML.replace('_', '');
            setTimeout(typing, 500);
        } else {
            span.innerHTML += "_";
            setTimeout(typing, 500);
        }
    }
}

document.body.onload = typing;
