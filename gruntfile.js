module.exports = function (grunt) {
  grunt.initConfig({
    dirs: {
      theme: './public/',
      css: './css/',
      js: './js/',
      assets: 'assets/'
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
        map: true, //inline sourcemaps
        processors: [
          require('autoprefixer')({ browsers: 'last 2 versions' }),
          require('cssnano')()
        ]
      },
      dist: {
        src: './public/css/main.css',
        dest: './assets/css/main.min.css'
      }
    },

    uglify: {
      js: {
        options: { report: 'gzip' },
        files: {
          '<%= dirs.assets %><%= dirs.js %>bundle.min.js': '<%= dirs.assets %><%= dirs.js %>bundle.js'
        }
      }
    },
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('build', ['uglify', 'sass', 'postcss']);
};
