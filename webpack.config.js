var webpack = require('webpack')

module.exports = {
  // entry point - what wewbpack will load
  entry: {
    firstComp: './assets/firstComp/index.js'
  },

  output: { filename: '[name].js',
  path: path.resolver(__dirname)  },
  
  moodule: {
    
  }
}