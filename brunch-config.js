module.exports = {
  files: {
    javascripts: {
      entryPoints: {
        'resources/page1.js': {
          'page1.js': /^resources/,
          'vendor.js': /^(?!resources)/
        },
        'resources/page2.js': {
          'page2.js': /^resources/,
          'vendor.js': /^(?!resources)/
        }
      }
    }
  },
  paths: {
    watched: ["resources"],
    public: "deploy"
  }
};
