module.exports = {
//  verbose: true,
  testTimeout: 5 * 60 * 1000,
  npm: true,

  plugins: {
    local: {
      browserOptions: {
        chrome: ["--headless", "--disable-gpu", "--no-sandbox"],
        firefox: ["--headless"]
      },
      browsers: ['chrome']
    },
  },
};
