// put your code here
// remember, you can use modules with browserify

$(function(){
	var toggleMenu = $("[data-attr='toggleMenu']");

	toggleMenu.on('click', function(){
		menuCollapse();
	});

	menuCollapse = function() {
		var menu = $("[data-attr='menu']");
		menu.toggleClass('is-closed');
	}

});
