module.exports = function(grunt) {

    grunt.initConfig({

        uglify: {
            build: {
                files: {
                    "app.js": ["one.js", "two.js"]
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
};