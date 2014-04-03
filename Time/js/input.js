var db = [];
var time = {
    m: 0,
    s: 0
};
var messageContainer = document.getElementById("message-container");
var addContent = null;

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function setTime() {
    if (time.s === 59) {
        time.s = 0;
        time.m++;
    } else {
        time.s++;
    }
    document.getElementById("clock").innerHTML = checkTime(time.m) + ":" + checkTime(time.s);
	for (message in db) {
		if (db[message].s === time.s && db[message].m === time.m) {
			
		}
	}
	$('input').focus();
}

function getValues() {
    var input = {};
	input.text = document.getElementById('input').value;
	input.m = time.m;
	input.s = time.s;
	db.push(input);
	document.getElementById('form').reset();
	/* addContent = document.createTextNode("<p>" + input.text + "</p>");
	messageContainer.appendChild(addContent); */
	$('#message-container').append('<p>' + input.text + '</p>');
	return false;
}

setInterval(function () { setTime(); }, 1000);
/* box.addEventListener( 'webkitTransitionEnd', 
    function( event ) { alert( "Finished transition!" ); }, false ); */