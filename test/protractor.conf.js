exports.config = {
  
  //allScriptsTimeout: 99999,
 
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  //chromeDriver: '../node_modules/chromedriver/lib/chromedriver/chromedriver',
  //seleniumPort: 4444,
 
  /*capabilities: {
    browserName: 'phantomjs',
	'phantomjs.binary.path': "/home/landon/.node/bin/phantomjs"
  },*/
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
	/*"chromeOptions": {
        binary: "/usr/bin/google-chrome",
        args: [],
        extensions: [],
    }*/
  },
  
  /*capabilities: {
    'browserName': 'safari'
  },*/
 
  baseUrl: 'http://localhost:8000/', 
 
  framework: 'jasmine',
 
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../test/e2e/**/*.js'],
 
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose : true,
    includeStackTrace : true
  }
};