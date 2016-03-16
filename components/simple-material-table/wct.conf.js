module.exports = {
//  verbose: true,
  testTimeout: 5 * 60 * 1000,
  plugins: {
    local: {
      browsers: ['chrome']
      //, 'firefox']
    },
    sauce: {
      disabled: true,
      browsers: [
        'Linux/chrome',
        'Linux/firefox',
        'OS X 10.10/chrome',
        'OS X 10.10/firefox',
        'OS X 10.10/safari',
        {
            platform: 'Windows 7',
            browserName: 'internet explorer',
            version: '10.0',
        },
        {
            platform: 'Windows 7',
            browserName: 'internet explorer',
            version: '11.0',
        },
        {
            platform: 'Windows 10',
            browserName: 'MicrosoftEdge',
        },

        'Windows 7/chrome',
        'Windows 10/firefox',

      ]
    }
  },
};
