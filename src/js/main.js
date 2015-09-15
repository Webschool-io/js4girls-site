// put your code here
// remember, you can use modules with browserify

$(function() {
  function menuCollapse() {
    var openMenu = $("#menu, [data-attr='toglleMenu']")
      , menu = $(".menu[data-attr='menu']")
      , itemMenu = menu.find('a');

    openMenu.on('click touchend', function() {
      menu.toggleClass('is-closed');
    });

    itemMenu.on('click touchend', function() {
      menu.addClass('is-closed');
    });
  }

  menuCollapse();
});
