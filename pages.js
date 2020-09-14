$('#page2').hide();

var animationTime = 200;

window.onhashchange = function () {
    if (location.hash == '#experience')
        pageExperience();
    else
        pageAboutMe();

}

function pageExperience() {
    $('#page1').hide("slide", {direction: "left"}, animationTime)
    $('#page1').promise().done(function () {
        $('#page2').show("slide", {direction: "right"}, animationTime);
    });
}

function pageAboutMe() {
    $('#page2').hide("slide", {direction: "right"}, animationTime)
    $('#page2').promise().done(function () {
        $('#page1').show("slide", {direction: "left"}, animationTime);
    });
}


$('#page-nav-1').click(function () {
    pageExperience();
});

$('#page-nav-2').click(function () {
    pageAboutMe();
});