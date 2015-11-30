//
// Scripts
// -------------------

// Required libraries
// f.e. require('../../vendor/jquery/jquery.min');
// require('../../vendor/zeroclipboard/dist/ZeroClipboard.min');

// Main scripts


$(function(){

	$('.sw-example .dropdown-container > .dropdown-menu').each(function(){
		$(this).css({
			// 'width': $(this).width()
		})
	})

	$('.dropdown-container-slidemorph .dropdown-submenu').each(function(){
		var self = $(this)

		var label = $('> a .dropmenu-item-label', this) ? $('> a .dropmenu-item-label', this).text() : $('> a', this).text()
		var backlink = $('<li class="dropdown-backlink"><a href="#">' + label + '</a></li>')

		$(this).find('ul').first().prepend(backlink)

		$(this).find('.dropdown-menu').each(function(){
			$(this).css({
				'width': $(this).width()
			})
		})

		// Attach listeners to the back buttons
		$('.dropdown-backlink').on('click', function(e){
			e.preventDefault()

			var self = $(this)
			var container = self.closest('.dropdown-submenu')
			var parentDropdown = container.closest('.dropdown-menu')
			
			container.removeClass('open')


			// Init width
			self.closest('.dropdown-container').css({
				'width': parentDropdown.outerWidth(),
				'height': parentDropdown.outerHeight()
			})

		})

	})

	$('[data-toggle="slideMorph"]').on('click', function(e){
		e.preventDefault()

		var self = $(this)
		var container = self.parent()
		var parentDropdown = self.closest('.dropdown-menu')
		var submenu = container.find('.dropdown-menu')
		
		container.addClass('open')

		// Init width
		self.closest('.dropdown-container').css({
			'width': parentDropdown.outerWidth(),
			'height': parentDropdown.outerHeight()
		})

		self.closest('.dropdown-container').css({
			'width': submenu.outerWidth(),
			'height': submenu.outerHeight()
		})
	});
});