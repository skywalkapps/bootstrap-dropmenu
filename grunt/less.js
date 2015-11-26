// 
// GRUNT TASK: Less
// Builds LESS styles into CSS
// -----------------


module.exports = {
  dev: {
    files: {
      'dist/stylesheets/<%= package.name %>.css': 'src/stylesheets/index.less',
      'docs/stylesheets/docs.css': 'src/stylesheets/docs.less'
    }
  },

  dist: {
    options: {
      cleancss: true,
      report: 'min'
    },
    files: {
      'dist/stylesheets/<%= package.name %>.min.css': 'dist/stylesheets/<%= package.name %>.css',
      'dist/stylesheets/docs.min.css': 'dist/stylesheets/docs.css'
    }
  }
};