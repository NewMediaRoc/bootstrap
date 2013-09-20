/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )
.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})
.directive( 'popover', [ '$compile', '$timeout', '$parse', '$window', '$tooltip', function ( $compile, $timeout, $parse, $window, $tooltip ) {
  return $tooltip( 'popover', 'popover', 'click' );
}])
.directive( 'popoverTemplatePopup', [ '$templateCache', '$compile', function ( $templateCache, $compile ) {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&', compileScope: '&' },
    templateUrl: 'template/popover/popover-template.html',
    link: function( scope, iElement ) {
      iElement.find( 'div.popover-content' )
      .html( $compile( $templateCache.get( scope.content ) )( scope.compileScope() ) );
    }
  };
}])
.directive( 'popoverTemplate', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popoverTemplate', 'popover', 'click' );
}]);
