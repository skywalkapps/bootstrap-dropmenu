//
// Scripts
// -------------------

// Required libraries
// f.e. require('../../vendor/jquery/jquery.min');

// Main scripts
// f.e. require('main');

$(function(){
	$('[data-toggle="slidemorph"]').on('click', function(){
		var self = $(this)
		var parentMenu = self.parent()
		var submenu = parentMenu.find('.dropdown-menu')
		
		self.closest('.dropdown-container').css({
			'width': submenu.width(),
			'height': submenu.height()
		});
	});
});