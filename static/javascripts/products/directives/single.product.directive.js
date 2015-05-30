(function () {
	'use strict';
	
	angular
		.module('salesfiction.products.directives')
		.directive('singleProduct', singleProduct);
		
	function singleProduct($timeout, $location, $compile, IndexService, $q) {
		var directive = {
			restrict: 'E',
        	replace: true,
			scope: {
				product: '='
			},
			link: function(scope, element, attrs) {
				scope.scriptsDOMLoaded = IndexService.getScriptsDOMLoaded;
				var lastScrollTop = 0;
				$('html, body').scrollTop(0);
				
				scope.$watch('scriptsDOMLoaded()', function(loaded) {
					if(loaded){
					//$timeout(function(){
						// Insert product content directive
						var el = $compile(angular.element(scope.product.product_content))(scope);
						el.insertAfter(element.find('h1'));
						
						// Checks whether we need to affix the product
						checkAffix();
						$(window).on("resize", function() {
							checkAffix();
						});
						$(window).on("scroll", function(e) {
							// Compute scroll change to determine if it's larger than script height
							var scrollDiff = Math.abs($(this).scrollTop() - lastScrollTop);
							lastScrollTop = $(this).scrollTop();
							/*
								On big scroll (browser text search for example) will cause the affixed products 
								to scroll to this position
								Triggering a click on them brings them back to their proper position
							*/
							if(canAffix() && scope.isAffix && element.data('bs.affix') && scrollDiff > element.closest('.script-row').height()) {
								element.trigger('click');
							}
						});
						
					//}, 600);	
					}
				});
				
				scope.isAffix = !canAffix();
				
				function checkAffix() {
					var affix = canAffix();
					// End affix if going from a state of affix to non-affix (ex. large to small width)
					if(!affix && scope.isAffix) {
						scope.isAffix = false;
						endAffix();
					}
					// Start affix if going from a state of non-affix to affix (ex. small to large width)
					else if(affix && !scope.isAffix) {
						scope.isAffix = true;
						element.width(element.parent().width());
						$('html, body').scrollTop(5);
						startAffix();
					}
					// Start affix if state is affixed, but affix object does not exist
					else if(affix && scope.isAffix && !element.data('bs.affix')) {
						startAffix();
					}
					// Recalculate top and bottom if affix exists (denotes resize)
					else if (affix && scope.isAffix && element.data('bs.affix')) {
						// we need to update top and bottom values since resize will change element heights
						element.width(element.parent().width());
						element.data('bs.affix').options.offset.top = calculateTop(element);
						element.data('bs.affix').options.offset.bottom = calculateBottom(element);
						element.trigger('click');
					}
				}
				
				function canAffix() {
					return $('.affix-breakpoint').is(':visible') && !$.browser.mobile;
				}
				
				function calculateTop(e) {
					var scriptContent = e.closest('.script-content');
					// get top offset of previous script
					var prevScript = e.closest('.script-fullwidth').prev('.script-fullwidth').find('.script-content');
					return scriptContent.offset().top - 76;
				}
				
				function calculateBottom(e){
					var nextScript = e.closest('.script-fullwidth').next('.script-fullwidth').find('.script-content');
					//if last element, go to bottom of page
					var bottom = (nextScript.length === 0) ? 0 :
								 $(document).height() - nextScript.offset().top;
					return bottom;
				}
				
				function startAffix() {
					element.affix({
						offset: {
							top: function(e) {
								return (this.top = calculateTop(e));
							},
							bottom: function(e) {
								return (this.bottom = calculateBottom(e));
							}
						}
					}).on('affix.bs.affix', function (e) { // before affix
						element.stop().animate({
							opacity: '1'
						}, 'slow');
						
						// Hide bars for next script
						var nextScript = element.closest('.script-fullwidth').next('.script-fullwidth').find('.script-content');
						
						if(nextScript.length) {
							angular.forEach(nextScript.find('.skill-bar'), function(skill, key) {
								$(skill).stop().animate({
									width: 0									  
								}, 'slow');												 
							});
						}
					}).on('affixed.bs.affix', function (e) { // after affix
						var index = element.closest('.script-fullwidth').index(),
						firstScript = $('.script-fullwidth').eq(0).find('.script-content');
						
						// Set Script dropdown with index to active, and update href
						$('.dropdown-menu li.active').removeClass('active');
						$('.dropdown-menu li').eq(index).addClass('active');
						scope.$apply(function(){
							$location.url('/'+$('.dropdown-menu li').eq(index).find('a').attr('href'));
						});
						
						// Animate skill bars
						angular.forEach(element.find('.skill-bar'), function(skill, key) {
							$(skill).stop().animate({
								width: $(skill).data('level') + '%'									  
							}, 'slow');												 
						});
						
						if(index > 0){
							$(this).css({
								'top': firstScript.offset().top - 15,  // for fixed height
							});
						}
						$(this).width(element.parent().width());
					}).on('affixed-top.bs.affix', function (e) { // after affix top
						var index = element.closest('.script-fullwidth').index(),
						firstScript = $('.script-fullwidth').eq(0).find('.script-content');
						
						// Set Script dropdown with index to active, and update href
						var prevScript = element.closest('.script-fullwidth').prev('.script-fullwidth').find('.script-content');
						if(prevScript.length) {
							prevScript.find('.product').stop().animate({
								opacity: '1'
							}, 'slow');
							//$('.dropdown-menu li.active').removeClass('active');
							//$('.dropdown-menu li').eq(index - 1).addClass('active');
							
						}
						else {
							scope.$apply(function(){
								$location.url('/');
							});	
						}
						
						if(index > 0){
							$(this).css({
								'top': 0  // for fixed height
							});
						}
						$(this).width(element.parent().width());
					}).on('affixed-bottom.bs.affix', function (e) { // after affix bottom
						var nextScript = element.closest('.script-fullwidth').next('.script-fullwidth').find('.script-content');
						if(nextScript.length) {
							element.stop().animate({
								opacity: '.2'
							}, 'slow');
						}
						
						// Animate skill bars
						angular.forEach(element.find('.skill-bar'), function(skill, key) {
							$(skill).stop().animate({
								width: 0									  
							}, 'slow');												 
						});
						$(this).width(element.parent().width());
					});
					
				}
				
				function endAffix() {
					$(window).off('.affix');
					element.removeClass("affix affix-top affix-bottom").removeData("bs.affix");
					element.css('opacity', 1);
					element.width('100%');
					//element.css('position', 'absolute');
					element.css('top', '');
					
					// Put skills bars to proper place
					angular.forEach(element.find('.skill-bar'), function(skill, key) {
						$(skill).width($(skill).data('level') + '%');											 
					});
				}
				function endAffixPromise() {
					var defer = $q.defer();
					$timeout(function(){
						endAffix();
						defer.resolve('end affix done');
					}, 0);
					return defer.promise;
				}
			},
			templateUrl: 'static/templates/products/single.product.html'
		};
		
		return directive;
	}
})();