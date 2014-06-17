module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'app.js': ['one.js', 'two.js']
        }
      },
      reverse: {
        files: {
          'app.js': ['two.js', 'one.js']
        }
      }
    }
  });

};
