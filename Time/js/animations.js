var i = 1;

function aniTimer() {
    if (i == 240) {
        i = 1;
    }
    
    if (i == 1) {
        $('#bg1, #tree1').addClass('opac');
        $('#bg1').removeClass('disp');
    } else if (i == 12) {
        $('#tree2').addClass('opac');
        $('#tree1').removeClass('opac');
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
        $('#bg2').removeClass('disp');
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
        $('#bg3').removeClass('opac');
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
    i++;
}

setInterval(function() {aniTimer();},1000);