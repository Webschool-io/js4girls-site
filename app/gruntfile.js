  "use strict";

  module.exports = function( grunt ) {

    grunt.initConfig({
      
      uglify: {
        dist: {
          options: {
            compress: false,
            beautify: false,
            report: 'gzip'
          },
          files: {
              'assets/js/core.min.js': ['assets/js/*.js' , '!assets/js/core.min.js']
          }
        }
      },
      cssmin: {
          combine: {
              files: {
                  'assets/css/core.min.css': ['assets/css/typography.css', 'assets/css/*.css', '!assets/css/core.min.css']
              }
          }
      },
      watch: {
          js: {
              files: ['assets/js/*.js'],
              tasks: ['uglify'],
              options: {
                  livereload: true,
              }
          },
          css: {
              files: [ 'assets/css/*.css'],
              tasks: ['cssmin'],
              options: {
                  livereload: true,
              }
          }
      }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'cssmin']);

  };