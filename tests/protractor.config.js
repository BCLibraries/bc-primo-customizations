exports.config = {
capabilities: {
  browserName: 'chrome',

  chromeOptions: {
     args: [ "--headless", "--disable-gpu", "--window-size=1200,800" ]
   }
},
  suites: {
    production: ['hathi-spec.js','browzine-spec.js']
  },
};
