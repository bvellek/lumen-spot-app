module.exports = function(grunt) {
  var webpackConfig = require('./webpack.config.js');

  grunt.initConfig({
    dirs: {
      theme: './public/',
      css: './css/',
      js: './js/'
    },
    webpack: {
      options: webpackConfig
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: false
        },
        files: {
          '<%= dirs.theme %><%= dirs.css %>main.css': '<%= dirs.theme %><%= dirs.css %>main.scss'
        }
      }
    },
    postcss: {

      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
        ]
      },
      dist: {
        src: './public/css/main.css',
        dest: './assets/css/main.min.css'
      }

    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('build', ['webpack', 'sass', 'postcss']);
}
