var db = [];
    db[0] = {text: "Welcome to Time", i: 2, id: 0};
    db[1] = {text: "Feel free to contribute advice or inspirational messages to the collective", i: 12, id: 1};
    db[2] = {text: "Simply type the message and then push Enter", i: 22, id: 2};
var time = {
    m: 0,
    s: 0
};
var messageContainer = document.getElementById("message-container");
var addContent = null;
var counter = 3;

function getValues() {
    if (document.getElementById('input').value === "mail_messages") {
        var body = "";
        for (var a = 3; a < db.length; a++) {
            body += (a - 2) + '. ' + db[a].text + '\n';
        }
        window.open("mailto:dudeditto@gmail.com?subject=TimeContent&body=" + escape(body));
        document.getElementById('form').reset();
    } else {
        var input = {};
        input.text = document.getElementById('input').value;
        input.i = i;
        input.id = counter;
        db.push(input);
        document.getElementById('form').reset();
        /* addContent = document.createTextNode("<p>" + input.text + "</p>");
        messageContainer.appendChild(addContent); */
        $('#message-container').append('<p class="message" id="' + input.id + '">' + input.text + '</p>');

        counter++;
    }
	return false;
}

var i = 1;

function aniTimer() {
    if (i == 241) {
        i = 1;
    }
    
    if (i == 1) {
        $('#bg1, #tree1').addClass('opac');
        
    } else if (i == 12) {
        $('#tree2').addClass('opac');
        $('#tree1').removeClass('opac');
        $('#bg2').removeClass('disp');
    } else if (i == 24) {
        $('#tree3').addClass('opac');
        $('#tree2').removeClass('opac');
    } else if (i == 36) {
        $('#tree4').addClass('opac');
        $('#tree3').removeClass('opac');
    } else if (i == 48) {
        $('#tree5').addClass('opac');
        $('#tree4').removeClass('opac');
    } else if (i == 60) {
        $('#bg2, #tree6').addClass('opac');
        $('#tree5').removeClass('opac');
    } else if (i == 72) {
        $('#tree7').addClass('opac');
        $('#tree6').removeClass('opac');
    } else if (i == 84) {
        $('#tree8').addClass('opac');
        $('#tree7').removeClass('opac');
    } else if (i == 96) {
        $('#tree9').addClass('opac');
        $('#tree8').removeClass('opac');
    } else if (i == 108) {
        $('#tree10').addClass('opac');
        $('#tree9').removeClass('opac');
    } else if (i == 120) {
        $('#bg3').addClass('opac');
        $('#bg1').removeClass('opac');
        $('#bg1').addClass('disp');
    } else if (i == 126) {
        $('#tree9').addClass('opac');
        $('#tree10').removeClass('opac');
    } else if (i == 138) {
        $('#tree8').addClass('opac');
        $('#tree9').removeClass('opac');
    } else if (i == 150) {
        $('#tree7').addClass('opac');
        $('#tree8').removeClass('opac');
    } else if (i == 162) {
        $('#tree6').addClass('opac');
        $('#tree7').removeClass('opac');
    } else if (i == 174) {
        $('#tree5').addClass('opac');
        $('#tree6').removeClass('opac');
    } else if (i == 180) {
        $('#bg1').removeClass('disp');
        $('#bg3').removeClass('opac');
        $('#bg2').removeClass('opac');
        $('#bg2').addClass('disp');
    } else if (i == 186) {
        $('#tree4').addClass('opac');
        $('#tree5').removeClass('opac');
    } else if (i == 198) {
        $('#tree3').addClass('opac');
        $('#tree4').removeClass('opac');
    } else if (i == 210) {
        $('#tree2').addClass('opac');
        $('#tree3').removeClass('opac');
    } else if (i == 222) {
        $('#tree1').addClass('opac');
        $('#tree2').removeClass('opac');
    } else if (i == 234) {
        $('#tree1').removeClass('opac');
    }
    if (i > 0 && i < 30) {
		$('#message-container').css({'color': 'white'});
	} else if (i > 30 && i < 150) {
		$('#message-container').css({'color': 'black'});
	} else if (i > 150) {
		$('#message-container').css({'color': 'white'});
	}
    for (message in db) {
		if (db[message].i === i) {
            //$('#' + db[message].id).css("height", $('#' + db[message].id).height());
			$('#' + db[message].id).addClass("opac");
           // $('#' + db[message].id).slideDown(500);
		} else if (db[message].i + 7 === i) {
			$('#' + db[message].id).removeClass("opac");
            //$('#' + db[message].id).css({'top': '-30px'})
        } else if (db[message].i -1 === i) {
            $('#' + db[message].id).removeClass("disp");
        } else if (db[message].i + 9 === i) {
            $('#' + db[message].id).addClass("disp");
        } else if (db[message].i + 9 > 240 && db[message].i + 9 - 240 === i) {
            $('#' + db[message].id).addClass("disp");
        } else if (db[message].i + 7 > 240 && db[message].i + 7 - 240 === i) {
            $('#' + db[message].id).removeClass("opac");
        } else if (db[message].i === 1 && 240 === i) {
            $('#' + db[message].id).removeClass("disp");
        }
	}
	$('input').focus();
    i++;
}

setInterval(function() {aniTimer();},1000);