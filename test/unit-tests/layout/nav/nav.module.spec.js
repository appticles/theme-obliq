describe('nav module', () => {
  let $rootScope, $state, $location;

  it('should exist.', () => {
    expect(angular.module('appticles.nav')).not.toBe(null);
  });

  beforeEach(() => {
    module('appticles.base'),
      module('appticles.nav');


    inject((_$rootScope_, _$state_, _$location_, $templateCache) => {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $location = _$location_;

      $templateCache.put('app/layout/nav/main-nav-view.template.html', '');
    });

  });

  describe('with the \'/\' route', () => {
    let stateName = 'app.nav';


    it('should resolve the \'/\' route', () => {
      expect($state.href(stateName)).toEqual('#');
    });

    it('should be an abstract state', () => {
      let state = $state.get(stateName);
      expect(state.abstract).toBeTruthy();
    });

    it('should have a template', () => {
      let state = $state.get(stateName);
      expect(state.templateUrl).not.toBe(null);
    });
  });
});
