var db = [];
var time = {
    m:0,
    s: 0
};

setInterval(function () { setTime(); },1000);
function setTime() {
    if (time.s == 59) {
        time.s = 0;
        time.m++;
    } else {
        time.s++;
    }
    document.getElementById("clock").innerHTML=checkTime(time.m) + ":" + checkTime(time.s);
}

function checkTime(i) {
    if (i<10) {
      i="0" + i;
    }
    return i;
}

function getValues() {
    var input = {};
	input.text = document.getElementById('input').value;
	input.m = time.m;
	input.s = time.s;
	db.push(input);
	document.getElementById('form').reset();
	return false;
}
/* box.addEventListener( 'webkitTransitionEnd', 
    function( event ) { alert( "Finished transition!" ); }, false ); */