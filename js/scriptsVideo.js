var slideIndex = 0;

$(document).ready(function () {
    $("#vinheta").focus();
    $('#vinheta').trigger('play');
    showSlides();
});

function fimVideo() {
    $('.overlay').fadeOut(500, function () {
        $(this).remove();
        $('.menu-toggle').prop('hidden', false);
    });
}

function desmutarVideo() {
    $('#vinheta').prop('muted', false);
    $('#botaoSom').empty();
    $('#botaoSom').append('<i class="fas fa-volume-up"></i>');
}

function mutarVideo() {
    $('#vinheta').prop('muted', true);
    $('#botaoSom').empty();
    $('#botaoSom').append('<i class="fas fa-volume-mute"></i>');
}

function alternarSom() {
    if ($("video").prop('muted')) {
        desmutarVideo();
    } else {
        mutarVideo();
    }
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideMasthead");
    for (i = 0; i < slides.length; i++) {
        $(slides[i]).fadeOut(1000);
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    setTimeout(function () {
        $(slides[slideIndex - 1]).fadeIn(1000);
    }, 1500);
    setTimeout(showSlides, 10000);
}

function plusSlides(indexSum) {
    var i;
    var slides = document.getElementsByClassName("slideMasthead");
    for (i = 0; i < slides.length; i++) {
        $(slides[i]).fadeOut(500);
    }
    slideIndex += indexSum;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    setTimeout(function () {
        $(slides[slideIndex - 1]).fadeIn(500);
    }, 500);
}

$("#btnApresentacao").click(function () {
    $("#modalApresentacao").modal();
});