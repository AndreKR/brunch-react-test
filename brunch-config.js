module.exports = {
  files: {
    javascripts: {
      entryPoints: {
        'resources/page1.js': 'page1.js',
        'resources/page2.js': 'page2.js'
      }
    }
  },
  paths:{
    watched: ["resources"],
    public: "deploy"
  },
  modules: {
	  wrapper: false
  }
};
