// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-05-07 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

	
	preprocessors: {
    	'static/templates/**/*.html':['ng-html2js']
    },
	
    // list of files / patterns to load in the browser
    files: [
      // bower:js
      /*'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-mocks/angular-mocks.js',*/
	  
	  'static/bower_components/jquery/dist/jquery.js',
	  'static/bower_components/bootstrap/dist/js/bootstrap.js',
	  'static/bower_components/angular/angular.js',
	  'static/bower_components/angular-resource/angular-resource.js',
	  'static/bower_components/angular-route/angular-route.js',
	  'static/bower_components/angular-cookies/angular-cookies.js',
	  "static/bower_components/angular-mocks/angular-mocks.js",
      // endbower
	  "static/javascripts/salesfiction.js",
	  "static/javascripts/layout/layout.module.js",
	  "static/javascripts/layout/controllers/index.controller.js",
	  "static/javascripts/layout/services/index.service.js",
	  "static/javascripts/stories/stories.module.js",
	  "static/javascripts/stories/services/stories.service.js",
	  "static/javascripts/scripts/scripts.module.js",
	  "static/javascripts/scripts/services/scripts.service.js",
	  "static/javascripts/products/products.module.js",
	  "static/javascripts/layout/directives/*.js",
	  "static/javascripts/scripts/directives/*.js",
	  "static/javascripts/products/directives/*.js",
	  
	  //"static/javascripts/stories/**/*.js",
      //"static/javascripts/**/*.js",
      //"test/mock/**/*.js",
      //"static/bower_components/angular-mocks/**/*.js",
	  "static/templates/**/*.html",
	  "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine",
      "karma-ng-html2js-preprocessor"
    ],
		
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
