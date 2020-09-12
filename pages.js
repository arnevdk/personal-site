$('#page2').hide();

var animationTime = 200;
$('#page-nav-1').click(function () {
    $('#page1').hide("slide", {direction: "left"}, animationTime)
    $('#page1').promise().done(function () {
        $('#page2').show("slide", {direction: "right"}, animationTime);
    });
});

$('#page-nav-2').click(function () {
    $('#page2').hide("slide", {direction: "right"}, animationTime)
    $('#page2').promise().done(function () {
        $('#page1').show("slide", {direction: "left"}, animationTime);
    });
});