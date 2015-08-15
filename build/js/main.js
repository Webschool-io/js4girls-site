// put your code here
// remember, you can use modules with browserify

$(function(){
	menuCollapse = function() {
		var openMenu = $("[data-attr='toglleMenu']"),
			menu = $(".menu[data-attr='menu']"),
			itemMenu = menu.find('a');

		openMenu.on('click touchend', function(){
			menu.toggleClass('is-closed');
			console.log("menu");
		});
		itemMenu.on('click touchend', function(){
			menu.addClass('is-closed');
		});
	}

	menuCollapse();
});
