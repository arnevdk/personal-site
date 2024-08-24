pages = ['gallery', 'about-me', 'experience']
landingPage = pages[1]
pages.forEach(function(page){
	$('#page-'+page).hide();
});
hash = window.location.hash
if(hash=='')
	hash = landingPage
else
	hash = hash.substring(1);
$('#page-'+hash).show();
animationTime = 150;
$(window).on("hashchange", function(e){
	oldURL = new URL(e.originalEvent.oldURL);
	oldHash = oldURL.hash;
	if(oldHash === '')
		oldHash = landingPage;
	else
		oldHash = oldHash.substring(1);
	newURL = new URL(e.originalEvent.newURL);
	newHash = newURL.hash.substring(1);
	slideDirection = '';
	if(pages.indexOf(oldHash) < pages.indexOf(newHash))
		slideDirection = 'left';
	else
		slideDirection = 'right';
	slidePage('page-' + oldHash, 'page-' + newHash, slideDirection);
});
function slidePage(oldId, newId, direction){
	otherDirection = '';
	if(direction === 'left')
		otherDirection = 'right';
	else
		otherDirection = 'left';
	$('#' + oldId).hide("slide", {direction: direction}, animationTime);
	$('#' + oldId).promise().done(function(){
		$('#' + newId).show("slide", {direction: otherDirection}, animationTime);
	});
}
