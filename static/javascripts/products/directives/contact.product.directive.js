(function () {
	'use strict';
	
	angular
		.module('salesfiction.products.directives')
		.directive('contact', contact);
		
	function contact($timeout, $http) {
		var directive = {
			restrict: 'E',
        	replace: true,
			transclude: true,
			scope: {
				fields: '=',
				submitTitle: '@'
			},
			link: function(scope, element, attrs) {
				
				function resetContactDetails(){
					scope.contactDetails = {
						email: '',
						subject: '',
						message: ''
					};
				}
				resetContactDetails();
				element.on('submit', function(){
					$http.post('/contact/', scope.contactDetails).then(function(response){
						resetContactDetails();
						scope.contactForm.$setPristine();
						element.find('.media-heading').text(response.data.message);
						element.find('.media img').attr('alt', response.data.message).attr('title', response.data.message);
						$(".submit-complete").fadeIn('slow', function(){
							var that = $(this);
							$timeout(function(){
								that.fadeOut();				  
							}, 4000);
						});
					});
				});
			},
			templateUrl: 'static/templates/products/contact.product.html'
		};
		
		return directive;
	}
})();